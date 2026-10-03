<?php

// SEC: verifyPhoneAuth used to check
// `account_status != DISABLED || profile === null`, so a DISABLED account
// with no profile yet (the normal state right after phone registration,
// since a profile is only attached via a separate /auth/profile call)
// still logged in - the disabled-account gate was bypassable for the whole
// phone provider. Codes themselves are generated, expired and checked by
// the provider (FakePhoneVerifier stands in for Twilio Verify here).

use Creopse\Creopse\Models\User;
use Creopse\Creopse\Tests\Support\FakePhoneVerifier;

beforeEach(function () {
    $this->phoneVerifier = FakePhoneVerifier::install();
});

it('refuses to log in a disabled account with no profile via phone verification', function () {
    $user = User::factory()->disabled()->create(['phone' => '+15005550002']);
    expect($user->profile)->toBeNull();

    $this->phoneVerifier->send('+15005550002');

    $this->postJson('/api/auth/phone/verify', [
        'phone' => '+15005550002',
        'code' => '123456',
    ])->assertStatus(403);
});

it('logs in an enabled account via phone verification with the correct code', function () {
    User::factory()->create(['phone' => '+15005550003']);

    $this->phoneVerifier->send('+15005550003');

    $this->postJson('/api/auth/phone/verify', [
        'phone' => '+15005550003',
        'code' => '123456',
    ])->assertOk();
});

it('refuses a code the provider rejects', function () {
    User::factory()->create(['phone' => '+15005550004']);

    $this->phoneVerifier->send('+15005550004');

    $this->postJson('/api/auth/phone/verify', [
        'phone' => '+15005550004',
        'code' => '000000',
    ])->assertStatus(422);
});
