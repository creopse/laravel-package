<?php

// Compensating control for CVE-2026-48019 (CRLF injection via the `email`
// validation rule, unpatched on the Laravel 11.x line this package still
// supports) - see RegisterRequest.

it('accepts a normal email on registration', function () {
    $response = $this->postJson('/api/auth/register', [
        'firstname' => 'Jane',
        'lastname' => 'Doe',
        'email' => 'jane.doe@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    $response->assertStatus(201);
});

it('rejects an email containing a CRLF sequence', function () {
    $response = $this->postJson('/api/auth/register', [
        'firstname' => 'Jane',
        'lastname' => 'Doe',
        'email' => "jane.doe@example.com\r\nBcc: victim@evil.com",
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    $response->assertStatus(422);
    expect($response->json('data.email'))->not->toBeNull();
});
