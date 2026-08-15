<?php

// SEC-11: /api/auth/login used to return a distinct response - different
// status/message/error code - for "user not found" vs "wrong password" vs
// "user disabled", letting an attacker enumerate valid (and disabled)
// accounts without ever knowing a password. All credential failures now
// collapse into one generic "Invalid credentials" response, and the
// disabled-account check only fires once the password has actually been
// verified.
//
// All requests below target the "admin" guard explicitly, exactly like the
// real admin frontend does - the default "web" guard's provider is the host
// application's own App\Models\User, which doesn't exist in this package's
// test environment.

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Models\User;

it('returns the same generic error for an unknown identifier as for a wrong password', function () {
    $user = User::factory()->create(['email' => 'known@example.com']);

    $unknown = $this->postJson('/api/auth/login', [
        'id' => 'nobody@example.com',
        'password' => 'whatever',
        'guard' => 'admin',
    ]);

    $wrongPassword = $this->postJson('/api/auth/login', [
        'id' => $user->email,
        'password' => 'not-the-password',
        'guard' => 'admin',
    ]);

    $unknown->assertStatus(403)->assertJson([
        'message' => 'Invalid credentials',
        'errorCode' => ResponseErrorCode::AUTH_INVALID_CREDENTIALS->value,
    ]);

    $wrongPassword->assertStatus(403)->assertJson([
        'message' => 'Invalid credentials',
        'errorCode' => ResponseErrorCode::AUTH_INVALID_CREDENTIALS->value,
    ]);
});

it('does not reveal that a disabled account exists to a caller without the right password', function () {
    User::factory()->disabled()->create(['email' => 'disabled@example.com']);

    $this->postJson('/api/auth/login', [
        'id' => 'disabled@example.com',
        'password' => 'wrong-password',
        'guard' => 'admin',
    ])->assertStatus(403)->assertJson([
        'message' => 'Invalid credentials',
        'errorCode' => ResponseErrorCode::AUTH_INVALID_CREDENTIALS->value,
    ]);
});

it('rejects a disabled account only once the correct password has been supplied', function () {
    User::factory()->disabled()->create(['email' => 'disabled@example.com']);

    $this->postJson('/api/auth/login', [
        'id' => 'disabled@example.com',
        'password' => 'admin',
        'guard' => 'admin',
    ])->assertStatus(403)->assertJson([
        'message' => 'User disabled',
        'errorCode' => ResponseErrorCode::AUTH_USER_DISABLED->value,
    ]);
});

it('logs an enabled user in with the correct password', function () {
    $user = User::factory()->create(['email' => 'valid@example.com']);

    $this->postJson('/api/auth/login', [
        'id' => $user->email,
        'password' => 'admin',
        'guard' => 'admin',
    ])->assertOk();
});
