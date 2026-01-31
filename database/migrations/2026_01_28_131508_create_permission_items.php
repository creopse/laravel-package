<?php

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\UserRole;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    /**
     * Run the migrations
     */
    public function up(): void
    {
        // Reset permission cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

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

        $userRole = Role::firstOrCreate([
            'name' => UserRole::USER->value,
            'display_name' => '{"fr": "Utilisateur", "en": "User"}',
            'description' => '{
                "fr": "Accès standard aux fonctionnalités publiques et personnelles du système.",
                "en": "Standard access to public and personal features of the system."
            }',
            'guard_name' => AccessGuard::WEB->value,
        ]);

        // Assign permissions to base roles
        // Super Admin: all permissions
        $superAdminRole->syncPermissions(Permission::all()->pluck('name')->toArray());

        // Admin: limited permissions (based on old config)
        $adminRole->syncPermissions([
            PermissionList::VIEW_DASHBOARD->value,
            PermissionList::VIEW_ACCOUNT->value,
            PermissionList::EDIT_ACCOUNT->value,
            PermissionList::VIEW_NOTIFICATIONS->value,
            PermissionList::MANAGE_NOTIFICATIONS->value,
            PermissionList::VIEW_ABOUT->value,
            PermissionList::MANAGE_APP_SETTINGS->value,
            PermissionList::VIEW_USERS->value,
            PermissionList::CREATE_USER->value,
            PermissionList::EDIT_USER->value,
            PermissionList::DELETE_USER->value,
            PermissionList::CREATE_ARTICLE->value,
            PermissionList::EDIT_ARTICLE->value,
            PermissionList::DELETE_ARTICLE->value,
            PermissionList::MANAGE_NEWS->value,
            PermissionList::VIEW_MEDIA->value,
            PermissionList::UPLOAD_MEDIA->value,
            PermissionList::DELETE_MEDIA->value,
            PermissionList::VIEW_CONTENT->value,
            PermissionList::MANAGE_CONTENT->value,
            PermissionList::USE_VISUAL_EDITOR->value,
        ]);

        // User: minimal access
        $userRole->syncPermissions([]);
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
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
    }
};
