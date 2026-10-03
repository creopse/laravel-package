<?php

// Google, Apple and phone sign-in are only used by sites built on a
// template. They used to stay reachable without their credentials (Google
// then skipped the token audience check), the client picked the SMS
// provider, nothing limited the number of guesses per phone number, and
// failures returned the raw exception, provider details included.
//
// Each method now answers only once configured, the server picks the SMS
// provider, a new code is required after 5 wrong guesses, and failures return
// a generic message. FakePhoneVerifier stands in for Twilio Verify.

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Tests\Support\FakePhoneVerifier;

it('disables a sign-in method that is not configured', function (string $uri, array $payload) {
    config([
        'services.google.client_id' => null,
        'services.apple.client_id' => null,
        'services.twilio.sid' => null,
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

it('disables phone sign-in when the chosen provider is unknown', function () {
    FakePhoneVerifier::install();
    config(['creopse.phone_auth_provider' => 'unknown']);

    $this->postJson('/api/auth/phone', ['phone' => '+15005550011'])
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_METHOD_DISABLED->value]);
});

it('ignores a provider chosen by the client', function () {
    $verifier = FakePhoneVerifier::install();
    User::factory()->create(['phone' => '+15005550015']);

    $this->postJson('/api/auth/phone', ['phone' => '+15005550015', 'provider' => 'wassa_sms'])->assertOk();

    expect($verifier->codes)->toHaveKey('+15005550015');
});

it('requires a new code after 5 wrong guesses', function () {
    $verifier = FakePhoneVerifier::install();
    User::factory()->create(['phone' => '+15005550013']);
    $verifier->send('+15005550013');

    foreach (range(1, 5) as $attempt) {
        $this->withServerVariables(['REMOTE_ADDR' => "10.0.0.{$attempt}"])
            ->postJson('/api/auth/phone/verify', ['phone' => '+15005550013', 'code' => '000000'])
            ->assertStatus(422);
    }

    $this->withServerVariables(['REMOTE_ADDR' => '10.0.0.99'])
        ->postJson('/api/auth/phone/verify', ['phone' => '+15005550013', 'code' => '123456'])
        ->assertStatus(422)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_CODE_EXPIRED->value]);
});

it('gives a new code a fresh set of attempts', function () {
    $verifier = FakePhoneVerifier::install();
    User::factory()->create(['phone' => '+15005550016']);

    // Distinct IPs so only the per-number limit applies, not the route's
    // per-IP throttle.
    foreach (range(1, 5) as $attempt) {
        $this->withServerVariables(['REMOTE_ADDR' => "10.0.1.{$attempt}"])
            ->postJson('/api/auth/phone/verify', ['phone' => '+15005550016', 'code' => '000000']);
    }

    $this->withServerVariables(['REMOTE_ADDR' => '10.0.1.98'])
        ->postJson('/api/auth/phone', ['phone' => '+15005550016'])->assertOk();

    $this->withServerVariables(['REMOTE_ADDR' => '10.0.1.99'])
        ->postJson('/api/auth/phone/verify', ['phone' => '+15005550016', 'code' => '123456', 'guard' => 'admin'])
        ->assertOk();
});

it('does not return the provider error to the client', function () {
    FakePhoneVerifier::install(failsToSend: true);
    User::factory()->create(['phone' => '+15005550014']);

    $response = $this->postJson('/api/auth/phone', ['phone' => '+15005550014'])
        ->assertStatus(500)
        ->assertJsonMissingPath('data')
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_CODE_SENDING_FAILED->value]);

    expect($response->getContent())->not->toContain('secret-provider-token');
});
