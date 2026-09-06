<?php

// SEC: verifyPhoneAuth used to check
// `account_status != DISABLED || profile === null`, so a DISABLED account
// with no profile yet (the normal state right after phone registration,
// since a profile is only attached via a separate /auth/profile call)
// still logged in - the disabled-account gate was bypassable for the whole
// phone provider. Also hardens the OTP itself: it now expires
// (verification_code_expires_at) instead of remaining valid indefinitely.

use Creopse\Creopse\Models\User;

it('refuses to log in a disabled account with no profile via phone verification', function () {
    $user = User::factory()->disabled()->create([
        'phone' => '+15005550002',
        'verification_code' => '123456',
        'verification_code_expires_at' => now()->addMinutes(10),
    ]);
    expect($user->profile)->toBeNull();

    $this->postJson('/api/auth/phone/verify', [
        'phone' => '+15005550002',
        'code' => '123456',
        'provider' => 'wassa_sms',
    ])->assertStatus(403);
});

it('logs in an enabled account via phone verification with the correct, unexpired code', function () {
    $user = User::factory()->create([
        'phone' => '+15005550003',
        'verification_code' => '123456',
        'verification_code_expires_at' => now()->addMinutes(10),
    ]);

    $this->postJson('/api/auth/phone/verify', [
        'phone' => '+15005550003',
        'code' => '123456',
        'provider' => 'wassa_sms',
    ])->assertOk();
});

it('refuses an expired verification code', function () {
    $user = User::factory()->create([
        'phone' => '+15005550004',
        'verification_code' => '123456',
        'verification_code_expires_at' => now()->subMinute(),
    ]);

    $this->postJson('/api/auth/phone/verify', [
        'phone' => '+15005550004',
        'code' => '123456',
        'provider' => 'wassa_sms',
    ])->assertStatus(500);
});
