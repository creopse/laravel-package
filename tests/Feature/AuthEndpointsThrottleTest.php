<?php

// SEC-12: /auth/login, /auth/register, /auth/send-password-link and
// /auth/reset-password (plus the OAuth/phone provider endpoints) used to
// rely solely on the app-wide API rate limit, far too loose to slow down
// brute-force/credential-stuffing or registration/reset-email spam. Each
// now carries its own dedicated throttle:5,1.

it('throttles repeated login attempts', function () {
    for ($i = 0; $i < 5; $i++) {
        $this->postJson('/api/auth/login', [
            'id' => 'nobody@example.com',
            'password' => 'wrong',
        ])->assertStatus(403);
    }

    $this->postJson('/api/auth/login', [
        'id' => 'nobody@example.com',
        'password' => 'wrong',
    ])->assertStatus(429);
});

it('throttles repeated registration attempts', function () {
    for ($i = 0; $i < 5; $i++) {
        $this->postJson('/api/auth/register', [
            'email' => "user{$i}@example.com",
        ]);
    }

    $this->postJson('/api/auth/register', [
        'email' => 'user-over-limit@example.com',
    ])->assertStatus(429);
});

it('throttles repeated password reset link requests', function () {
    for ($i = 0; $i < 5; $i++) {
        $this->postJson('/api/auth/send-password-link', [
            'email' => 'nobody@example.com',
        ]);
    }

    $this->postJson('/api/auth/send-password-link', [
        'email' => 'nobody@example.com',
    ])->assertStatus(429);
});
