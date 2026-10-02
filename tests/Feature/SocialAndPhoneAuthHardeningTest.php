<?php

// Google, Apple and phone sign-in are only used by sites built on a
// template. They used to stay reachable without their credentials (Google
// then skipped the token audience check), the client picked the SMS
// provider, a phone code stayed valid until it expired, nothing limited
// the number of guesses per phone number, and failures returned the raw
// exception - for Wassa SMS, its URL with the access token in it.
//
// Each method now answers only once configured, the server picks the SMS
// provider, a code works once and is discarded after 5 wrong guesses, and
// failures return a generic message.

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Models\User;

function configureWassaSms(string $token = 'test-token'): void
{
    // Unreachable on purpose: sending fails without leaving the machine.
    config(['services.wassa_sms.token' => $token, 'services.wassa_sms.endpoint' => 'http://127.0.0.1:1']);
}

function phoneUserWithCode(string $phone, string $code = '123456'): User
{
    return User::factory()->create([
        'phone' => $phone,
        'verification_code' => $code,
        'verification_code_expires_at' => now()->addMinutes(10),
    ]);
}

it('disables a sign-in method that is not configured', function (string $uri, array $payload) {
    config([
        'services.google.client_id' => null,
        'services.apple.client_id' => null,
        'services.twilio.sid' => null,
        'services.wassa_sms.token' => null,
    ]);

    $this->postJson($uri, $payload)
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_METHOD_DISABLED->value]);
})->with([
    'google' => ['/api/auth/google', ['credential' => 'token']],
    'apple' => ['/api/auth/apple', ['identity_token' => 'token']],
    'phone' => ['/api/auth/phone', ['phone' => '+15005550010']],
    'phone verification' => ['/api/auth/phone/verify', ['phone' => '+15005550010', 'code' => '123456']],
]);

it('disables phone sign-in when the chosen provider is not configured', function () {
    configureWassaSms();
    config(['creopse.phone_auth_provider' => 'twilio', 'services.twilio.sid' => null]);

    $this->postJson('/api/auth/phone', ['phone' => '+15005550011'])
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_METHOD_DISABLED->value]);
});

it('accepts a phone code only once', function () {
    configureWassaSms();
    $user = phoneUserWithCode('+15005550012');

    $payload = ['phone' => '+15005550012', 'code' => '123456', 'guard' => 'admin'];

    $this->postJson('/api/auth/phone/verify', $payload)->assertOk();

    expect($user->fresh()->verification_code)->toBeNull();

    $this->app['auth']->forgetGuards();

    $this->postJson('/api/auth/phone/verify', $payload)
        ->assertStatus(422)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_CODE_VERIFICATION_FAILED->value]);
});

it('discards the phone code after 5 wrong guesses', function () {
    configureWassaSms();
    $user = phoneUserWithCode('+15005550013');

    foreach (range(1, 5) as $attempt) {
        $this->withServerVariables(['REMOTE_ADDR' => "10.0.0.{$attempt}"])
            ->postJson('/api/auth/phone/verify', ['phone' => '+15005550013', 'code' => '000000'])
            ->assertStatus(422);
    }

    $this->withServerVariables(['REMOTE_ADDR' => '10.0.0.99'])
        ->postJson('/api/auth/phone/verify', ['phone' => '+15005550013', 'code' => '123456'])
        ->assertStatus(422)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_CODE_EXPIRED->value]);

    expect($user->fresh()->verification_code)->toBeNull();
});

it('does not return the provider error to the client', function () {
    configureWassaSms('secret-wassa-token');
    User::factory()->create(['phone' => '+15005550014']);

    $response = $this->postJson('/api/auth/phone', ['phone' => '+15005550014'])
        ->assertStatus(500)
        ->assertJsonMissingPath('data')
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_CODE_SENDING_FAILED->value]);

    expect($response->getContent())->not->toContain('secret-wassa-token');
});
