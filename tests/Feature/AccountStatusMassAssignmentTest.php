<?php

// SEC: account_status used to be read straight from client input on every
// registration path (email/password, Google, Apple, phone) - a
// self-registering caller could send account_status=1 (ENABLED) and skip
// the pending-approval workflow entirely (see AccountActivatedEvent). It is
// now always computed server-side (see ProvisionSocialUserAction) and never
// taken from the request.

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Models\User;

it('ignores a client-supplied account_status on registration once other users already exist', function () {
    User::factory()->create();

    $this->postJson('/api/auth/register', [
        'firstname' => 'New',
        'lastname' => 'User',
        'email' => 'new-user@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
        'account_status' => AccountStatus::ENABLED->value,
    ])->assertCreated();

    $created = User::where('email', 'new-user@example.com')->firstOrFail();
    expect($created->account_status)->toBe(AccountStatus::DISABLED->value);
});

it('ignores a client-supplied account_status on phone registration once other users already exist', function () {
    User::factory()->create();

    $this->postJson('/api/auth/phone', [
        'phone' => '+15005550001',
        'firstname' => 'Phone',
        'lastname' => 'User',
        'allow_registration' => true,
        'account_status' => AccountStatus::ENABLED->value,
    ]);

    $created = User::wherePhone('+15005550001')->first();
    expect($created)->not->toBeNull();
    expect($created->account_status)->toBe(AccountStatus::DISABLED->value);
});
