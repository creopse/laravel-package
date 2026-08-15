<?php

// SEC-10: UserDevice/UserPlace store() took user_id straight from client
// input with no check, and update() mass-assigned via $request->all() -
// either let an authenticated caller register or reassign a device/place
// under any other user's account, bypassing the SEC-07 ownership check via
// the payload itself.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Models\UserDevice;
use Creopse\Creopse\Models\UserPlace;
use Laravel\Sanctum\Sanctum;

it('refuses to create a device under another user\'s account', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    Sanctum::actingAs($caller, ['*']);

    $this->postJson('/api/user-devices', [
        'user_id' => $victim->id,
        'device_id' => 'some-device',
        'is_active' => true,
    ])->assertStatus(403);

    expect(UserDevice::where('user_id', $victim->id)->exists())->toBeFalse();
});

it('lets a caller create their own device', function () {
    $caller = User::factory()->create();
    Sanctum::actingAs($caller, ['*']);

    $this->postJson('/api/user-devices', [
        'user_id' => $caller->id,
        'device_id' => 'some-device',
        'is_active' => true,
    ])->assertCreated();

    expect(UserDevice::where('user_id', $caller->id)->exists())->toBeTrue();
});

it('refuses to let a device update reassign its user_id', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    $device = UserDevice::create(['user_id' => $caller->id, 'device_id' => 'device-a']);
    Sanctum::actingAs($caller, ['*']);

    $this->putJson("/api/user-devices/{$device->id}", [
        'user_id' => $victim->id,
        'is_active' => true,
    ])->assertOk();

    $device->refresh();
    expect($device->user_id)->toBe($caller->id);
    expect($device->is_active)->toBeTrue();
});

it('refuses to create a place under another user\'s account', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    Sanctum::actingAs($caller, ['*']);

    $this->postJson('/api/user-place', ['user_id' => $victim->id, 'country' => 'FR'])
        ->assertStatus(403);

    expect(UserPlace::where('user_id', $victim->id)->exists())->toBeFalse();
});

it('refuses to let a place update reassign its user_id', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    $place = UserPlace::create(['user_id' => $caller->id, 'country' => 'FR']);
    Sanctum::actingAs($caller, ['*']);

    $this->putJson("/api/user-place/{$place->id}", [
        'user_id' => $victim->id,
        'country' => 'DE',
    ])->assertOk();

    $place->refresh();
    expect($place->user_id)->toBe($caller->id);
    expect($place->country)->toBe('DE');
});

it('lets a viewer with view-users create a device/place for another user', function () {
    $viewer = User::factory()->create();
    $viewer->givePermissionTo(PermissionList::VIEW_USERS->value);
    $other = User::factory()->create();
    Sanctum::actingAs($viewer, ['*']);

    $this->postJson('/api/user-devices', [
        'user_id' => $other->id,
        'device_id' => 'device-a',
        'is_active' => true,
    ])->assertCreated();
});
