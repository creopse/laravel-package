<?php

use Illuminate\Support\Facades\File;

function installLockPath(): string
{
    return public_path(config('installer.lock_file_path'));
}

beforeEach(function () {
    File::ensureDirectoryExists(dirname(installLockPath()));
});

afterEach(function () {
    if (File::exists(installLockPath())) {
        File::delete(installLockPath());
    }
});

it('blocks the database creation endpoint once installation is complete', function () {
    // Lock file absent = installation already finalized.
    if (File::exists(installLockPath())) {
        File::delete(installLockPath());
    }

    $response = $this->postJson('/api/database/create', [
        'host' => '127.0.0.1',
        'port' => 3306,
        'username' => 'root',
        'dbname' => 'creopse_test',
    ]);

    $response->assertStatus(403);
    expect($response->json('errorCode'))->toBe('installation/already_completed');
});

it('blocks admin creation once installation is complete', function () {
    File::delete(installLockPath());

    $response = $this->postJson('/api/install/create-admin', [
        'firstname' => 'Attacker',
        'lastname' => 'Test',
        'email' => 'attacker@example.com',
        'password' => 'password123',
    ]);

    $response->assertStatus(403);
    expect($response->json('errorCode'))->toBe('installation/already_completed');
});

it('lets the install/database endpoints through while installation is still pending', function () {
    File::put(installLockPath(), '');

    $response = $this->postJson('/api/install/create-admin', [
        // Deliberately invalid payload - we only care that the request got
        // *past* the installation.pending middleware (a 422 from the
        // FormRequest, not a 403 from the middleware).
    ]);

    $response->assertStatus(422);
});
