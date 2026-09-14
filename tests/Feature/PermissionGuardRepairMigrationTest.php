<?php

// 2026_01_28_131508_create_permission_items was corrected in place to seed
// the `user` role under the `admin` guard with its baseline permissions -
// but an already-run migration never runs again, so existing installs kept
// the old state. 2026_09_14_000000_fix_permission_guard_on_existing_installs
// repairs it. These tests rebuild that legacy state on top of a fresh
// install, then run the repair.

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Models\User;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\PermissionRegistrar;

function runPermissionGuardRepair(): void
{
    $migration = require __DIR__.'/../../database/migrations/2026_09_14_000000_fix_permission_guard_on_existing_installs.php';
    $migration->up();
}

function userRoleId(string $guard): ?int
{
    return DB::table('roles')->where('name', UserRole::USER->value)->where('guard_name', $guard)->value('id');
}

/**
 * The state an install migrated before the guard unification is left in:
 * `user` role under `web` with no permissions, plus the web-guard copies of
 * core permissions an earlier `permissions:sync` run created.
 */
function rebuildLegacyPermissionState(): array
{
    $roleId = userRoleId(AccessGuard::ADMIN->value);
    DB::table('roles')->where('id', $roleId)->update(['guard_name' => AccessGuard::WEB->value]);
    DB::table('role_has_permissions')->where('role_id', $roleId)->delete();

    $member = User::factory()->create();
    DB::table('model_has_roles')->insert([
        'role_id' => $roleId,
        'model_type' => $member->getMorphClass(),
        'model_id' => $member->id,
    ]);

    $webDuplicateId = DB::table('permissions')->insertGetId([
        'name' => PermissionList::VIEW_USERS->value,
        'guard_name' => AccessGuard::WEB->value,
    ]);
    DB::table('model_has_permissions')->insert([
        'permission_id' => $webDuplicateId,
        'model_type' => $member->getMorphClass(),
        'model_id' => $member->id,
    ]);

    DB::table('permissions')->insert([
        'name' => 'acme.custom-web-context',
        'guard_name' => AccessGuard::WEB->value,
    ]);

    app(PermissionRegistrar::class)->forgetCachedPermissions();

    return [$roleId, $member];
}

it('moves the user role onto the admin guard without losing its members', function () {
    [$roleId, $member] = rebuildLegacyPermissionState();

    runPermissionGuardRepair();

    expect(userRoleId(AccessGuard::WEB->value))->toBeNull();
    expect(userRoleId(AccessGuard::ADMIN->value))->toBe($roleId);
    expect($member->fresh()->hasRole(UserRole::USER->value))->toBeTrue();
});

it('gives the user role its baseline permissions', function () {
    [, $member] = rebuildLegacyPermissionState();

    runPermissionGuardRepair();

    $member = $member->fresh();
    foreach (UserRole::USER->defaultPermissions() as $permission) {
        expect($member->can($permission))->toBeTrue();
    }
});

it('folds web-guard duplicates of core permissions into their admin twin, keeping direct grants', function () {
    [, $member] = rebuildLegacyPermissionState();

    runPermissionGuardRepair();

    expect(DB::table('permissions')
        ->where('guard_name', AccessGuard::WEB->value)
        ->where('name', PermissionList::VIEW_USERS->value)
        ->exists())->toBeFalse();

    $adminTwinId = DB::table('permissions')
        ->where('guard_name', AccessGuard::ADMIN->value)
        ->where('name', PermissionList::VIEW_USERS->value)
        ->value('id');

    expect(DB::table('model_has_permissions')
        ->where('permission_id', $adminTwinId)
        ->where('model_id', $member->id)
        ->exists())->toBeTrue();
});

it('leaves permissions an admin created under another context untouched', function () {
    rebuildLegacyPermissionState();

    runPermissionGuardRepair();

    expect(DB::table('permissions')
        ->where('name', 'acme.custom-web-context')
        ->value('guard_name'))->toBe(AccessGuard::WEB->value);
});

it('is a no-op on a fresh install, and when run twice', function () {
    $snapshot = fn () => [
        DB::table('roles')->orderBy('id')->get(['id', 'name', 'guard_name'])->toArray(),
        DB::table('permissions')->orderBy('id')->get(['id', 'name', 'guard_name'])->toArray(),
        DB::table('role_has_permissions')->count(),
    ];

    $before = $snapshot();

    runPermissionGuardRepair();
    runPermissionGuardRepair();

    expect($snapshot())->toEqual($before);
});
