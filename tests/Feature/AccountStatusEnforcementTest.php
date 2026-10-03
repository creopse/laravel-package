<?php

// Nothing used to check account_status once a session or token existed:
//
// - a refused login (disabled account) had already been signed in by
//   Auth::attempt(), so the session stayed authenticated;
// - a freshly registered, pending-approval account got a session/token
//   that worked on the whole API;
// - disabling an account left its sessions and tokens working.
//
// EnsureAccountIsActive now refuses a disabled account on every route
// behind an auth middleware, except the onboarding steps a pending account
// goes through (profile creation, email verification) and signing out.
// Login checks the status before opening the session, and disabling an
// account revokes its tokens.
//
// Login requests target the "admin" guard - see LoginAccountEnumerationTest
// for why.

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\ProfileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Models\AppSetting;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

it('refuses a disabled account on authenticated routes', function () {
    $user = User::factory()->disabled()->create();
    Sanctum::actingAs($user, ['*']);

    $this->getJson('/api/user/roles')
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_USER_DISABLED->value]);
    $this->putJson("/api/users/self/{$user->id}", ['firstname' => 'X'])->assertStatus(403);
    $this->getJson('/api/notifications')->assertStatus(403);
});

it('lets a disabled account finish onboarding and sign out', function () {
    $user = User::factory()->disabled()->create();
    Sanctum::actingAs($user, ['*']);

    $this->postJson('/api/auth/profile', [
        'id' => $user->id,
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertOk();

    $this->getJson('/api/auth/logout/admin', ['X-Client-Type' => 'mobile'])->assertOk();
});

it('leaves public routes and active accounts alone', function () {
    $disabled = User::factory()->disabled()->create();
    Sanctum::actingAs($disabled, ['*']);

    $this->getJson('/api/pages')->assertOk();

    Sanctum::actingAs(User::factory()->create(), ['*']);

    $this->getJson('/api/user/roles')->assertOk();
});

it('does not leave a session behind when a disabled account is refused', function () {
    User::factory()->create();
    User::factory()->disabled()->withEmail('disabled@example.com')->create();

    $this->postJson('/api/auth/login', [
        'id' => 'disabled@example.com',
        'password' => 'admin',
        'guard' => 'admin',
    ])->assertStatus(403)->assertJson(['errorCode' => ResponseErrorCode::AUTH_USER_DISABLED->value]);

    expect(auth('admin')->check())->toBeFalse();
});

it('signs in the account matching the username when it has no email', function () {
    User::factory()->authWithPhone()->withUsername('first')->create(['password' => bcrypt('first-pass1')]);
    $second = User::factory()->authWithPhone()->withUsername('second')->create(['password' => bcrypt('second-pass1')]);

    $this->postJson('/api/auth/login', [
        'id' => 'second',
        'password' => 'first-pass1',
        'guard' => 'admin',
    ])->assertStatus(403);

    expect(auth('admin')->check())->toBeFalse();

    $this->postJson('/api/auth/login', [
        'id' => 'second',
        'password' => 'second-pass1',
        'guard' => 'admin',
    ])->assertOk();

    expect(auth('admin')->id())->toBe($second->id);
});

it('gives a pending registration a token limited to onboarding', function () {
    User::factory()->create();
    AppSetting::updateOrCreate(['key' => 'allowAdminRegistration'], ['value' => '1']);

    $response = $this->postJson('/api/auth/register', [
        'firstname' => 'New',
        'lastname' => 'Comer',
        'email' => 'newcomer@example.com',
        'password' => 'secret123',
        'password_confirmation' => 'secret123',
        'device_name' => 'phone',
        'guard' => 'admin',
    ])->assertOk();

    $token = $response->json('data.token');
    $userId = $response->json('data.user.id');

    expect($response->json('data.user.accountStatus'))->toBe(AccountStatus::DISABLED->value);

    $this->app['auth']->forgetGuards();

    $this->withToken($token)->getJson('/api/user/roles')->assertStatus(403);
    $this->withToken($token)->postJson('/api/auth/profile', [
        'id' => $userId,
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertOk();
});

it('revokes the tokens of an account an administrator disables', function () {
    $manager = User::factory()->create();
    $manager->givePermissionTo(PermissionList::EDIT_USER->value);
    $target = User::factory()->create();
    $target->createToken('phone');

    Sanctum::actingAs($manager, ['*']);

    $this->putJson("/api/users/{$target->id}", [
        'account_status' => AccountStatus::DISABLED->value,
    ])->assertOk();

    expect($target->tokens()->count())->toBe(0);
});

it('revokes the tokens of an account its owner disables', function () {
    $user = User::factory()->create();
    $user->createToken('phone');
    Sanctum::actingAs($user, ['*']);

    $this->getJson('/api/auth/disable-account')->assertOk();

    expect($user->fresh()->account_status)->toBe(AccountStatus::DISABLED->value)
        ->and($user->tokens()->count())->toBe(0);
});
