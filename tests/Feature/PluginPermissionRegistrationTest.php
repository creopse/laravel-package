<?php

// PluginManager previously had no way for a plugin to declare its own named
// permissions, even though the whole authorization model is built around
// named permissions (permission:xxx middleware, GET /permissions, the Roles
// screen). registerPermissions() closes that gap: a plugin permission is
// synced into the same table, under the same guard, as core permissions.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\PluginManager;
use Laravel\Sanctum\Sanctum;
use Spatie\Permission\Models\Permission;

it('syncs a plugin-declared permission into the shared permissions table', function () {
    app(PluginManager::class)->registerPermissions([
        [
            'name' => 'acme.manage-widgets',
            'display_name' => 'Manage widgets',
            'description' => 'Manage Acme widgets',
        ],
    ]);

    expect(Permission::where('name', 'acme.manage-widgets')->exists())->toBeTrue();
});

it('exposes a plugin permission through GET /permissions next to core ones', function () {
    app(PluginManager::class)->registerPermissions([
        ['name' => 'acme.manage-widgets'],
    ]);

    $viewer = User::factory()->create();
    $viewer->givePermissionTo(PermissionList::VIEW_PERMISSIONS->value);
    Sanctum::actingAs($viewer, ['*']);

    $names = collect($this->getJson('/api/permissions')->json('data'))->pluck('name');

    expect($names)->toContain('acme.manage-widgets');
    expect($names)->toContain(PermissionList::VIEW_PERMISSIONS->value);
});

it('lets a plugin permission gate a role exactly like a core one', function () {
    app(PluginManager::class)->registerPermissions([
        ['name' => 'acme.manage-widgets'],
    ]);

    $user = User::factory()->create();
    Sanctum::actingAs($user, ['*']);

    expect($user->can('acme.manage-widgets'))->toBeFalse();

    $user->givePermissionTo('acme.manage-widgets');

    expect($user->can('acme.manage-widgets'))->toBeTrue();
});
