<?php

// SEC-07: UserSessionController/UserDeviceController/UserPlaceController's
// index() dumped every user's sessions/devices/places (IP, precise
// geolocation, device fingerprint...) to any authenticated caller, and
// show/update/destroy let anyone view or delete any other user's record by
// guessing its id. AuthorizesOwnUserData::rejectUnlessOwnedOrPermitted() now
// always allows a caller to manage their own record; anyone else's requires
// the view-users permission.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Models\UserDevice;
use Creopse\Creopse\Models\UserPlace;
use Creopse\Creopse\Models\UserSession;
use Laravel\Sanctum\Sanctum;

it('refuses to list all sessions, devices or places without view-users', function (string $url) {
    Sanctum::actingAs(User::factory()->create(), ['*']);

    $this->getJson($url)->assertStatus(403);
})->with(['/api/user-sessions', '/api/user-devices', '/api/user-place']);

it('lets a viewer with view-users list all sessions, devices and places', function (string $url) {
    $viewer = User::factory()->create();
    $viewer->givePermissionTo(PermissionList::VIEW_USERS->value);
    Sanctum::actingAs($viewer, ['*']);

    $this->getJson($url)->assertOk();
})->with(['/api/user-sessions', '/api/user-devices', '/api/user-place']);

it('lets a user view, but not view another user\'s, session', function () {
    $user = User::factory()->create();
    $session = UserSession::create(['user_id' => $user->id, 'ip_address' => '127.0.0.1']);
    $otherSession = UserSession::create(['user_id' => User::factory()->create()->id, 'ip_address' => '10.0.0.1']);

    Sanctum::actingAs($user, ['*']);

    $this->getJson("/api/user-sessions/{$session->id}")->assertOk();
    $this->getJson("/api/user-sessions/{$otherSession->id}")->assertStatus(403);
});

it('lets a user delete their own session but not another user\'s', function () {
    $user = User::factory()->create();
    $session = UserSession::create(['user_id' => $user->id, 'ip_address' => '127.0.0.1']);
    $otherSession = UserSession::create(['user_id' => User::factory()->create()->id, 'ip_address' => '10.0.0.1']);

    Sanctum::actingAs($user, ['*']);

    $this->deleteJson("/api/user-sessions/{$otherSession->id}")->assertStatus(403);
    expect(UserSession::find($otherSession->id))->not->toBeNull();

    $this->deleteJson("/api/user-sessions/{$session->id}")->assertOk();
    expect(UserSession::find($session->id))->toBeNull();
});

it('lets a user view/update/delete their own device but not another user\'s', function () {
    $user = User::factory()->create();
    $device = UserDevice::create(['user_id' => $user->id, 'device_id' => 'device-a']);
    $otherDevice = UserDevice::create(['user_id' => User::factory()->create()->id, 'device_id' => 'device-b']);

    Sanctum::actingAs($user, ['*']);

    $this->getJson("/api/user-devices/{$device->id}")->assertOk();
    $this->getJson("/api/user-devices/{$otherDevice->id}")->assertStatus(403);

    $this->putJson("/api/user-devices/{$otherDevice->id}", ['is_active' => true])->assertStatus(403);
    $this->deleteJson("/api/user-devices/{$otherDevice->id}")->assertStatus(403);

    $this->deleteJson("/api/user-devices/{$device->id}")->assertOk();
    expect(UserDevice::find($device->id))->toBeNull();
});

it('lets a user view/update/delete their own place but not another user\'s', function () {
    $user = User::factory()->create();
    $place = UserPlace::create(['user_id' => $user->id, 'country' => 'FR']);
    $otherPlace = UserPlace::create(['user_id' => User::factory()->create()->id, 'country' => 'US']);

    Sanctum::actingAs($user, ['*']);

    $this->getJson("/api/user-place/{$place->id}")->assertOk();
    $this->getJson("/api/user-place/{$otherPlace->id}")->assertStatus(403);

    $this->putJson("/api/user-place/{$otherPlace->id}", ['country' => 'DE'])->assertStatus(403);
    $this->deleteJson("/api/user-place/{$otherPlace->id}")->assertStatus(403);

    $this->deleteJson("/api/user-place/{$place->id}")->assertOk();
    expect(UserPlace::find($place->id))->toBeNull();
});

it('lets a viewer with view-users manage another user\'s session, device and place', function () {
    $viewer = User::factory()->create();
    $viewer->givePermissionTo(PermissionList::VIEW_USERS->value);
    $other = User::factory()->create();
    $session = UserSession::create(['user_id' => $other->id, 'ip_address' => '127.0.0.1']);

    Sanctum::actingAs($viewer, ['*']);

    $this->getJson("/api/user-sessions/{$session->id}")->assertOk();
    $this->deleteJson("/api/user-sessions/{$session->id}")->assertOk();
});
