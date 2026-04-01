<?php

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Models\Permission;
use Creopse\Creopse\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Reset permission cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permission = Permission::firstOrCreate([
            'name'         => PermissionList::MANAGE_PLUGINS->value,
            'guard_name'   => AccessGuard::ADMIN->value,
        ], [
            'display_name' => PermissionList::MANAGE_PLUGINS->label(),
            'description'  => PermissionList::MANAGE_PLUGINS->description(),
        ]);

        Role::findByName(UserRole::ADMIN->value, AccessGuard::ADMIN->value)
            ->givePermissionTo($permission);

        Role::findByName(UserRole::SUPER_ADMIN->value, AccessGuard::ADMIN->value)
            ->givePermissionTo($permission);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Permission::where('name', PermissionList::MANAGE_PLUGINS->value)->delete();

        // Reset cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
    }
};
