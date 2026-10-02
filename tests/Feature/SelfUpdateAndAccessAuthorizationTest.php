<?php

// Two privilege escalations reachable by any authenticated account -
// including one self-registered from a public template:
//
// - PUT /users/self/{id} delegated to the admin-only update(), which also
//   applies roles/account_status/password: a caller could send
//   roles=[super-admin] and account_status=1 for themselves.
// - /roles and /permissions only required auth:sanctum: a caller could add
//   any permission to their own role.
//
// updateSelf() now only applies plain profile fields, and the access
// resources require the same view/manage permissions the admin frontend
// already gates its Roles/Permissions screens with.

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Models\Permission;
use Creopse\Creopse\Models\Role;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

function actingAsRegisteredUser(): User
{
    // The first account ever created becomes super-admin, so make sure the
    // caller isn't it.
    User::factory()->create();

    $user = User::factory()->create(['account_status' => AccountStatus::DISABLED->value]);
    $user->assignRole(UserRole::USER->value);
    Sanctum::actingAs($user, ['*']);

    return $user;
}

it('ignores roles, account status and password on a self update', function () {
    $user = actingAsRegisteredUser();
    $passwordHash = $user->password;

    $this->putJson("/api/users/self/{$user->id}", [
        'firstname' => 'Updated',
        'preferences' => ['locale' => 'fr'],
        'roles' => [UserRole::SUPER_ADMIN->value],
        'account_status' => AccountStatus::ENABLED->value,
        'password' => 'newpassword1',
        'send_credentials_email' => true,
    ])->assertOk();

    $user->refresh();

    expect($user->firstname)->toBe('Updated')
        ->and($user->preferences['locale'] ?? null)->toBe('fr')
        ->and($user->getRoleNames()->all())->toBe([UserRole::USER->value])
        ->and($user->account_status)->toBe(AccountStatus::DISABLED->value)
        ->and($user->password)->toBe($passwordHash);
});

it('ignores email and username on a self update', function () {
    $user = actingAsRegisteredUser();

    $this->putJson("/api/users/self/{$user->id}", [
        'email' => 'taken-over@example.com',
        'username' => 'renamed',
    ])->assertOk();

    $user->refresh();

    expect($user->email)->not->toBe('taken-over@example.com')
        ->and($user->username)->not->toBe('renamed');
});

it('still refuses a self update on another user', function () {
    actingAsRegisteredUser();
    $other = User::factory()->create();

    $this->putJson("/api/users/self/{$other->id}", ['firstname' => 'X'])->assertStatus(403);
});

it('refuses role and permission management without the matching permissions', function () {
    $user = actingAsRegisteredUser();
    $role = Role::where('name', UserRole::USER->value)->first();
    $permission = Permission::first();

    $this->getJson('/api/roles')->assertStatus(403);
    $this->getJson("/api/roles/{$role->id}")->assertStatus(403);
    $this->postJson('/api/roles', ['name' => 'x', 'display_name' => 'x', 'description' => 'x'])->assertStatus(403);
    $this->putJson("/api/roles/{$role->id}", [
        'name' => $role->name,
        'display_name' => 'x',
        'description' => 'x',
        'guard_name' => $role->guard_name,
        'permissions' => [['name' => PermissionList::EDIT_USER->value]],
    ])->assertStatus(403);
    $this->deleteJson("/api/roles/{$role->id}")->assertStatus(403);

    $this->getJson('/api/permissions')->assertStatus(403);
    $this->getJson("/api/permissions/{$permission->id}")->assertStatus(403);
    $this->postJson('/api/permissions', ['name' => 'x', 'display_name' => 'x', 'description' => 'x'])->assertStatus(403);
    $this->putJson("/api/permissions/{$permission->id}", ['name' => 'x'])->assertStatus(403);
    $this->deleteJson("/api/permissions/{$permission->id}")->assertStatus(403);

    expect($user->fresh()->can(PermissionList::EDIT_USER->value))->toBeFalse()
        ->and(Role::where('name', UserRole::USER->value)->exists())->toBeTrue();
});

it('lets a viewer read roles and permissions but not change them', function () {
    $user = actingAsRegisteredUser();
    $user->givePermissionTo(PermissionList::VIEW_ROLES->value, PermissionList::VIEW_PERMISSIONS->value);
    $role = Role::where('name', UserRole::USER->value)->first();

    $this->getJson('/api/roles')->assertOk();
    $this->getJson("/api/roles/{$role->id}")->assertOk();
    $this->getJson('/api/permissions')->assertOk();
    $this->deleteJson("/api/roles/{$role->id}")->assertStatus(403);
});

it('lets a role manager edit a role', function () {
    $user = actingAsRegisteredUser();
    $user->givePermissionTo(PermissionList::MANAGE_ROLES->value);
    $role = Role::where('name', UserRole::USER->value)->first();

    $this->getJson('/api/roles')->assertOk();
    $this->putJson("/api/roles/{$role->id}", [
        'name' => $role->name,
        'display_name' => 'Users',
        'description' => 'Standard users',
        'guard_name' => $role->guard_name,
    ])->assertOk();
});

it('scopes the per-user role and permission listings', function () {
    $user = actingAsRegisteredUser();
    $other = User::factory()->create();

    $this->getJson('/api/roles/user')->assertOk();
    $this->getJson("/api/roles/user/{$user->id}")->assertOk();
    $this->getJson('/api/permissions/user')->assertOk();
    $this->getJson("/api/roles/user/{$other->id}")->assertStatus(403);
    $this->getJson("/api/permissions/user/{$other->id}")->assertStatus(403);

    $user->givePermissionTo(PermissionList::VIEW_USERS->value);

    $this->getJson("/api/roles/user/{$other->id}")->assertOk();
});
