<?php

// SEC: POST /auth/profile and PUT /auth/profile/{id} only required
// auth:sanctum, with no check that the target id belonged to the caller -
// any authenticated user (even a freshly self-registered one) could attach
// or edit an AdminProfile for an arbitrary user id. Now mirrors the
// owner-or-permission pattern used elsewhere (AuthorizesOwnUserData): a
// caller can always provision/edit their own profile; doing it for someone
// else requires create-user/edit-user, matching what creopse.admin's user
// management screen actually needs.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\ProfileType;
use Creopse\Creopse\Models\AdminProfile;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

it('lets a caller provision their own admin profile', function () {
    $user = User::factory()->create();
    Sanctum::actingAs($user, ['*']);

    $this->postJson('/api/auth/profile', [
        'id' => $user->id,
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertOk();

    expect($user->refresh()->has_admin_profile)->toBeTrue();
});

it('refuses to provision an admin profile for another user without create-user', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    Sanctum::actingAs($caller, ['*']);

    $this->postJson('/api/auth/profile', [
        'id' => $victim->id,
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertStatus(403);

    expect($victim->refresh()->has_admin_profile)->toBeFalse();
});

it('lets a caller with create-user provision an admin profile for another user', function () {
    $caller = User::factory()->create();
    $caller->givePermissionTo(PermissionList::CREATE_USER->value);
    $victim = User::factory()->create();
    Sanctum::actingAs($caller, ['*']);

    $this->postJson('/api/auth/profile', [
        'id' => $victim->id,
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertOk();

    expect($victim->refresh()->has_admin_profile)->toBeTrue();
});

it('lets a caller update their own admin profile', function () {
    $user = User::factory()->create();
    $profile = AdminProfile::create([]);
    $user->profile_id = $profile->id;
    $user->profile_type = ProfileType::ADMIN->value;
    $user->save();
    Sanctum::actingAs($user, ['*']);

    $this->putJson("/api/auth/profile/{$profile->id}", [
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertOk();
});

it('refuses to update another user\'s admin profile without edit-user', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    $profile = AdminProfile::create([]);
    $victim->profile_id = $profile->id;
    $victim->profile_type = ProfileType::ADMIN->value;
    $victim->save();
    Sanctum::actingAs($caller, ['*']);

    $this->putJson("/api/auth/profile/{$profile->id}", [
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertStatus(403);
});

it('lets a caller with edit-user update another user\'s admin profile', function () {
    $caller = User::factory()->create();
    $caller->givePermissionTo(PermissionList::EDIT_USER->value);
    $victim = User::factory()->create();
    $profile = AdminProfile::create([]);
    $victim->profile_id = $profile->id;
    $victim->profile_type = ProfileType::ADMIN->value;
    $victim->save();
    Sanctum::actingAs($caller, ['*']);

    $this->putJson("/api/auth/profile/{$profile->id}", [
        'type' => ProfileType::ADMIN->value,
        'profile_data' => [],
    ])->assertOk();
});
