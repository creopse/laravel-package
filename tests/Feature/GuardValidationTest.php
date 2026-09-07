<?php

// SEC: LoginRequest/RegisterRequest accepted guard: in:api,web,admin,mobile,
// but config/auth.php only configures the "web" and "admin" guards - "api"
// and "mobile" are Spatie permission guard_name tags, not real Laravel auth
// guards. Sending guard=api or guard=mobile used to reach
// Auth::shouldUse()/Auth::guard() and error out; it's now rejected by
// validation instead.

use Creopse\Creopse\Models\User;

it('rejects an unconfigured guard on login instead of erroring', function (string $guard) {
    User::factory()->create(['email' => 'known@example.com']);

    $this->postJson('/api/auth/login', [
        'id' => 'known@example.com',
        'password' => 'admin',
        'guard' => $guard,
    ])->assertStatus(422);
})->with(['api', 'mobile']);

it('rejects an unconfigured guard on registration instead of erroring', function (string $guard) {
    $this->postJson('/api/auth/register', [
        'firstname' => 'New',
        'lastname' => 'User',
        'email' => 'guard-test@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
        'guard' => $guard,
    ])->assertStatus(422);
})->with(['api', 'mobile']);

it('still accepts the real configured admin guard on login', function () {
    // Only "admin" is exercised here, not "web" - that guard's provider is
    // the host application's own App\Models\User, which doesn't exist in
    // this package's isolated test environment (see LoginAccountEnumerationTest).
    User::factory()->create(['email' => 'known-2@example.com']);

    $this->postJson('/api/auth/login', [
        'id' => 'known-2@example.com',
        'password' => 'admin',
        'guard' => 'admin',
    ])->assertOk();
});
