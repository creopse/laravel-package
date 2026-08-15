<?php

// SEC-07: reading another user's PII (index/show/search/list/administrators,
// the /user/email|phone|username lookups, and /user/sessions|devices|place|
// roles|permissions) required nothing beyond auth:sanctum - any
// self-registered account could enumerate and dump every other user's data.
// UserController::authorizeViewingUser() now requires the view-users
// permission to see anyone but yourself, which every caller can always see.
//
// Along the way: store/import/update/destroy were gated behind
// 'action-add-user'/'action-edit-user'/'action-delete-user', permission names
// that don't exist anywhere in PermissionList - a leftover naming convention
// dropped in an earlier framework version. No role could ever satisfy them,
// so those 4 endpoints were unreachable for everyone, including super-admin.
// Now aligned with PermissionList::CREATE_USER/EDIT_USER/DELETE_USER.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

function actingAsViewer(): User
{
    $viewer = User::factory()->create();
    $viewer->givePermissionTo(PermissionList::VIEW_USERS->value);
    Sanctum::actingAs($viewer, ['*']);

    return $viewer;
}

function actingAsPlainUser(): User
{
    $user = User::factory()->create();
    Sanctum::actingAs($user, ['*']);

    return $user;
}

it('always lets a user view their own record and related data', function () {
    $user = actingAsPlainUser();

    $this->getJson("/api/users/{$user->id}")->assertOk();
    $this->getJson('/api/user/sessions')->assertOk();
    $this->getJson('/api/user/devices')->assertOk();
    $this->getJson('/api/user/place')->assertOk();
    $this->getJson('/api/user/roles')->assertOk();
    $this->getJson('/api/user/permissions')->assertOk();
    $this->getJson("/api/user/sessions/{$user->id}")->assertOk();
    $this->getJson("/api/user/email/{$user->email}")->assertOk();
});

it('refuses to show another user without the view-users permission', function () {
    $user = actingAsPlainUser();
    $other = User::factory()->create();

    $this->getJson("/api/users/{$other->id}")->assertStatus(403);
});

it('lets a viewer with the view-users permission see another user', function () {
    actingAsViewer();
    $other = User::factory()->create();

    $this->getJson("/api/users/{$other->id}")->assertOk();
});

it('refuses to expose another user\'s sessions, devices, place, roles or permissions without view-users', function (string $segment) {
    $user = actingAsPlainUser();
    $other = User::factory()->create();

    $this->getJson("/api/user/{$segment}/{$other->id}")->assertStatus(403);
})->with(['sessions', 'devices', 'place', 'roles', 'permissions']);

it('refuses email/phone/username lookups of another user without view-users', function () {
    actingAsPlainUser();
    $other = User::factory()->create();

    $this->getJson("/api/user/email/{$other->email}")->assertStatus(403);
    $this->getJson("/api/user/phone/{$other->phone}")->assertStatus(403);
    $this->getJson("/api/user/username/{$other->username}")->assertStatus(403);
});

it('lets a viewer with view-users use the email/phone/username lookups', function () {
    actingAsViewer();
    $other = User::factory()->create();

    $this->getJson("/api/user/email/{$other->email}")->assertOk();
});

it('returns a clean 404 instead of crashing on an unknown email/phone/username', function () {
    actingAsViewer();

    $this->getJson('/api/user/email/nobody@example.com')->assertStatus(404);
    $this->getJson('/api/user/phone/000-000-0000')->assertStatus(404);
    $this->getJson('/api/user/username/no-such-user')->assertStatus(404);
});

it('refuses to list, search or dump all users without view-users', function (string $url) {
    actingAsPlainUser();

    $this->getJson($url)->assertStatus(403);
})->with([
    '/api/users',
    '/api/users/search/a',
    '/api/users/type/administrators',
]);

it('lets a viewer with view-users list, search and dump all users', function () {
    actingAsViewer();
    User::factory()->count(2)->create();

    $this->getJson('/api/users')->assertOk();
    $this->getJson('/api/users/search/a')->assertOk();
    $this->postJson('/api/users/list', ['ids' => [1]])->assertOk();
});

it('now actually enforces create/edit/delete-user - previously unreachable for everyone', function () {
    $user = actingAsPlainUser();

    $this->postJson('/api/users', [
        'lastname' => 'Doe', 'firstname' => 'John', 'email' => 'john@example.com', 'password' => 'password123',
    ])->assertStatus(403);

    $this->putJson("/api/users/{$user->id}", ['firstname' => 'Jane'])->assertStatus(403);
    $this->deleteJson("/api/users/{$user->id}")->assertStatus(403);
});

it('lets a user with create-user actually create a user', function () {
    $creator = User::factory()->create();
    $creator->givePermissionTo(PermissionList::CREATE_USER->value);
    Sanctum::actingAs($creator, ['*']);

    $this->postJson('/api/users', [
        'lastname' => 'Doe', 'firstname' => 'John', 'email' => 'john@example.com', 'password' => 'password123',
    ])->assertCreated();

    expect(User::where('email', 'john@example.com')->exists())->toBeTrue();
});
