<?php

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\UserRole;
use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

return new class extends Migration
{
    /**
     * Run the migrations
     */
    public function up(): void
    {
        // Reset permission cache
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create all permissions from Enum
        foreach (PermissionList::cases() as $permission) {
            Permission::firstOrCreate(
                [
                    'name' => $permission->value,
                    'guard_name' => AccessGuard::ADMIN->value,
                ],
                [
                    'display_name' => $permission->label(),
                    'description' => $permission->description(),
                ]
            );
        }

        // Create base roles (permissions will be assigned dynamically later)
        $superAdminRole = Role::firstOrCreate([
            'name' => UserRole::SUPER_ADMIN->value,
            'display_name' => '{"fr": "Super Administrateur", "en": "Super Administrator"}',
            'description' => '{
                "fr": "Accès total au système, incluant la gestion des administrateurs, des paramètres globaux et des données critiques.",
                "en": "Full system access including administrators management, global settings, and critical data."
            }',
            'guard_name' => AccessGuard::ADMIN->value,
        ]);

        $adminRole = Role::firstOrCreate([
            'name' => UserRole::ADMIN->value,
            'display_name' => '{"fr": "Administrateur", "en": "Administrator"}',
            'description' => '{
                "fr": "Gestion opérationnelle du système sans accès aux paramètres critiques ni aux super-administrateurs.",
                "en": "Operational system management without access to critical settings or super administrators."
            }',
            'guard_name' => AccessGuard::ADMIN->value,
        ]);

        // Same guard as the other two roles and as every seeded permission -
        // a role and the permissions synced onto it must share a guard_name,
        // so this used to make syncPermissions() below throw GuardDoesNotMatch
        // the moment USER was given any real permission.
        $userRole = Role::firstOrCreate([
            'name' => UserRole::USER->value,
            'display_name' => '{"fr": "Utilisateur", "en": "User"}',
            'description' => '{
                "fr": "Accès standard aux fonctionnalités publiques et personnelles du système.",
                "en": "Standard access to public and personal features of the system."
            }',
            'guard_name' => AccessGuard::ADMIN->value,
        ]);

        // Assign permissions to base roles - UserRole::defaultPermissions() is
        // the single source of truth for this mapping (also read by the
        // permissions:sync command), so the three roles can no longer drift
        // out of sync with each other or with what that command re-applies.
        $superAdminRole->syncPermissions(UserRole::SUPER_ADMIN->defaultPermissions());
        $adminRole->syncPermissions(UserRole::ADMIN->defaultPermissions());
        $userRole->syncPermissions(UserRole::USER->defaultPermissions());
    }

    /**
     * Reverse the migrations
     */
    public function down(): void
    {
        // Delete all created roles
        $roles = [
            UserRole::SUPER_ADMIN->value,
            UserRole::ADMIN->value,
            UserRole::USER->value,
        ];

        foreach ($roles as $roleName) {
            $adminRole = Role::findByName($roleName, AccessGuard::ADMIN->value);
            if ($adminRole) {
                $adminRole->delete();
            }

            $webRole = Role::findByName($roleName, AccessGuard::WEB->value);
            if ($webRole) {
                $webRole->delete();
            }
        }

        // Delete all permissions
        foreach (PermissionList::cases() as $permission) {
            Permission::where('name', $permission->value)->delete();
        }

        // Reset cache
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
    }
};
