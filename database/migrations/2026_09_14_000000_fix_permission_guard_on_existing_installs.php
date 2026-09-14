<?php

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\UserRole;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\PermissionRegistrar;

/**
 * Brings databases migrated before the guard unification in line with what
 * 2026_01_28_131508_create_permission_items now seeds on a fresh install.
 * That migration was corrected in place, which only helps new installs -
 * an already-run migration never runs again. Existing databases can still
 * hold:
 *
 * - the `user` role under the `web` guard, with no permissions, while every
 *   core permission lives under `admin`;
 * - a `web`-guard copy of every core permission, left by earlier runs of
 *   `permissions:sync` (which used the `web` guard).
 *
 * Only what the package itself created under the wrong guard is touched:
 * roles/permissions an admin created under another context from the Roles
 * screen are left as they are. Idempotent - a no-op on a fresh install.
 */
return new class extends Migration
{
    public function up(): void
    {
        $tables = config('permission.table_names');
        $columns = config('permission.column_names');
        $rolePivot = $columns['role_pivot_key'] ?? 'role_id';
        $permissionPivot = $columns['permission_pivot_key'] ?? 'permission_id';
        $modelKey = $columns['model_morph_key'] ?? 'model_id';

        $admin = AccessGuard::ADMIN->value;
        $web = AccessGuard::WEB->value;

        app(PermissionRegistrar::class)->forgetCachedPermissions();

        DB::transaction(function () use ($tables, $rolePivot, $permissionPivot, $modelKey, $admin, $web) {
            // 1. Fold web-guard duplicates of core permissions into their
            //    admin-guard twin, keeping any role/user grant they carried.
            $corePermissions = array_map(fn (PermissionList $permission) => $permission->value, PermissionList::cases());

            $webDuplicates = DB::table($tables['permissions'])
                ->where('guard_name', $web)
                ->whereIn('name', $corePermissions)
                ->get(['id', 'name']);

            foreach ($webDuplicates as $duplicate) {
                $twinId = DB::table($tables['permissions'])
                    ->where('guard_name', $admin)
                    ->where('name', $duplicate->name)
                    ->value('id');

                if (! $twinId) {
                    DB::table($tables['permissions'])->where('id', $duplicate->id)->update(['guard_name' => $admin]);

                    continue;
                }

                foreach (DB::table($tables['role_has_permissions'])->where($permissionPivot, $duplicate->id)->get() as $grant) {
                    DB::table($tables['role_has_permissions'])->insertOrIgnore([
                        $permissionPivot => $twinId,
                        $rolePivot => $grant->{$rolePivot},
                    ]);
                }

                foreach (DB::table($tables['model_has_permissions'])->where($permissionPivot, $duplicate->id)->get() as $grant) {
                    DB::table($tables['model_has_permissions'])->insertOrIgnore([
                        $permissionPivot => $twinId,
                        'model_type' => $grant->model_type,
                        $modelKey => $grant->{$modelKey},
                    ]);
                }

                DB::table($tables['role_has_permissions'])->where($permissionPivot, $duplicate->id)->delete();
                DB::table($tables['model_has_permissions'])->where($permissionPivot, $duplicate->id)->delete();
                DB::table($tables['permissions'])->where('id', $duplicate->id)->delete();
            }

            // 2. Move the `user` role onto the admin guard, keeping every
            //    user already assigned to it.
            $webUserRoleId = DB::table($tables['roles'])
                ->where('guard_name', $web)
                ->where('name', UserRole::USER->value)
                ->value('id');

            $adminUserRoleId = DB::table($tables['roles'])
                ->where('guard_name', $admin)
                ->where('name', UserRole::USER->value)
                ->value('id');

            if ($webUserRoleId && ! $adminUserRoleId) {
                DB::table($tables['roles'])->where('id', $webUserRoleId)->update(['guard_name' => $admin]);
                $adminUserRoleId = $webUserRoleId;
            } elseif ($webUserRoleId && $adminUserRoleId) {
                foreach (DB::table($tables['model_has_roles'])->where($rolePivot, $webUserRoleId)->get() as $assignment) {
                    DB::table($tables['model_has_roles'])->insertOrIgnore([
                        $rolePivot => $adminUserRoleId,
                        'model_type' => $assignment->model_type,
                        $modelKey => $assignment->{$modelKey},
                    ]);
                }

                DB::table($tables['model_has_roles'])->where($rolePivot, $webUserRoleId)->delete();
                DB::table($tables['role_has_permissions'])->where($rolePivot, $webUserRoleId)->delete();
                DB::table($tables['roles'])->where('id', $webUserRoleId)->delete();
            }

            // 3. Give the `user` role its baseline permissions. Additive only,
            //    so anything an admin already granted it is kept.
            if ($adminUserRoleId) {
                $permissionIds = DB::table($tables['permissions'])
                    ->where('guard_name', $admin)
                    ->whereIn('name', UserRole::USER->defaultPermissions())
                    ->pluck('id');

                foreach ($permissionIds as $permissionId) {
                    DB::table($tables['role_has_permissions'])->insertOrIgnore([
                        $permissionPivot => $permissionId,
                        $rolePivot => $adminUserRoleId,
                    ]);
                }
            }
        });

        app(PermissionRegistrar::class)->forgetCachedPermissions();
    }

    public function down(): void
    {
        // Data repair - putting the `user` role back under the wrong guard
        // and re-creating orphaned duplicates would only reintroduce the bug.
    }
};
