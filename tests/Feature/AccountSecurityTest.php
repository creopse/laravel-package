<?php

// Account-level gaps closed together:
//
// - email verification ignored the signed link: sha1() of an address was
//   enough to verify it, without owning it;
// - changing the email (which also sends a reset link to the new address)
//   didn't require the current password, nor tell the previous address;
// - changing or resetting the password left every other session and token
//   working;
// - the reset-link endpoint told whether an address has an account;
// - account creation by an administrator or the installer only required 8
//   characters, not the password policy used everywhere else.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Mail\CommonMail;
use Creopse\Creopse\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\URL;
use Laravel\Sanctum\Sanctum;

it('refuses an email verification without a valid signature', function () {
    $user = User::factory()->unverified()->create();
    Sanctum::actingAs($user, ['*']);

    $hash = sha1($user->email);

    $this->getJson("/api/auth/verify-email/{$user->id}/{$hash}")
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_INVALID_TOKEN->value]);

    expect($user->fresh()->hasVerifiedEmail())->toBeFalse();
});

it('verifies an email with the signed link the user received', function () {
    $user = User::factory()->unverified()->create();
    Sanctum::actingAs($user, ['*']);

    $link = URL::temporarySignedRoute('verification.verify', now()->addMinutes(60), [
        'id' => $user->id,
        'hash' => sha1($user->email),
    ]);
    parse_str((string) parse_url($link, PHP_URL_QUERY), $query);

    $this->getJson("/api/auth/verify-email/{$user->id}/".sha1($user->email).'?'.http_build_query($query))
        ->assertOk();

    expect($user->fresh()->hasVerifiedEmail())->toBeTrue();
});

it('requires a signed link on the web verification route', function () {
    expect(app('router')->getRoutes()->getByName('verification.verify')->gatherMiddleware())
        ->toContain('signed');
});

it('requires the current password to change the email', function () {
    // The reset link sent to the new address goes through the password
    // broker, whose model is the host app's in a real install.
    config(['auth.providers.users.model' => User::class]);
    Mail::fake();
    $user = User::factory()->withEmail('before@example.com')->create();
    Sanctum::actingAs($user, ['*']);

    $this->postJson('/api/auth/edit-email', ['email' => 'after@example.com'])->assertStatus(422);

    $this->postJson('/api/auth/edit-email', ['email' => 'after@example.com', 'current_password' => 'wrong'])
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_WRONG_PASSWORD->value]);

    expect($user->fresh()->email)->toBe('before@example.com');

    // The factory's password is "admin".
    $this->postJson('/api/auth/edit-email', ['email' => 'after@example.com', 'current_password' => 'admin'])
        ->assertOk();

    expect($user->fresh()->email)->toBe('after@example.com');
    Mail::assertQueued(CommonMail::class, fn (CommonMail $mail) => $mail->hasTo('before@example.com'));
});

it('signs out other sessions when the password changes, keeping the current one', function () {
    $user = User::factory()->create();
    $current = $user->createToken('current')->plainTextToken;
    $user->createToken('other');

    $this->withToken($current)->postJson('/api/auth/edit-password', [
        'current_password' => 'admin',
        'new_password' => 'newpassword1',
        'new_password_confirmation' => 'newpassword1',
    ])->assertOk();

    expect($user->tokens()->pluck('name')->all())->toBe(['current']);
});

it('signs out everywhere when the password is reset', function () {
    config(['auth.providers.users.model' => User::class]);
    $user = User::factory()->create();
    $user->createToken('phone');
    $token = Password::createToken($user);

    $this->postJson('/api/auth/reset-password', [
        'token' => $token,
        'email' => $user->email,
        'password' => 'newpassword1',
        'password_confirmation' => 'newpassword1',
    ])->assertOk();

    expect($user->tokens()->count())->toBe(0);
});

it('answers the same whether or not the email has an account', function () {
    config(['auth.providers.users.model' => User::class]);
    Mail::fake();
    User::factory()->withEmail('known@example.com')->create();

    $known = $this->postJson('/api/auth/send-password-link', ['email' => 'known@example.com']);
    $unknown = $this->postJson('/api/auth/send-password-link', ['email' => 'unknown@example.com']);

    $known->assertOk();
    $unknown->assertOk();
    expect($unknown->json())->toBe($known->json());
});

it('applies the password policy when creating accounts', function (string $uri) {
    $manager = User::factory()->create();
    $manager->givePermissionTo(PermissionList::CREATE_USER->value);
    Sanctum::actingAs($manager, ['*']);

    $this->postJson($uri, [
        'firstname' => 'New',
        'lastname' => 'Comer',
        'email' => 'newcomer@example.com',
        'password' => 'onlyletters',
    ])->assertStatus(422);
})->with(['/api/users']);

it('only accepts known guards on logout', function () {
    Sanctum::actingAs(User::factory()->create(), ['*']);

    $this->getJson('/api/auth/logout/unknown', ['X-Client-Type' => 'mobile'])->assertNotFound();
});
