<?php

// `permissions:sync --clean` treated every admin-guard permission missing
// from PermissionList as orphaned and deleted it after a confirmation. That
// included permissions declared by plugins through registerPermissions() and
// permissions created from the admin panel - and deleting a permission
// cascades through the pivot tables, silently stripping it from every role
// and user. Plugin permissions are no longer orphans, and --clean only
// deletes orphans nobody holds.

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\PluginManager;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

function orphanPermission(string $name, string $guard = 'admin'): Permission
{
    return Permission::create(['name' => $name, 'guard_name' => $guard]);
}

it('never treats a loaded plugin permission as orphaned', function () {
    app(PluginManager::class)->registerPermissions([['name' => 'acme.manage-widgets']]);

    $this->artisan('permissions:sync', ['--clean' => true])
        ->doesntExpectOutputToContain('acme.manage-widgets')
        ->assertSuccessful();

    expect(Permission::where('name', 'acme.manage-widgets')->exists())->toBeTrue();
});

it('deletes an unassigned orphan once confirmed, on the admin guard only', function () {
    orphanPermission('retired-permission');
    orphanPermission('retired-permission', AccessGuard::WEB->value);

    $this->artisan('permissions:sync', ['--clean' => true])
        ->expectsConfirmation('Do you want to delete the 1 unassigned orphaned permission(s)?', 'yes')
        ->assertSuccessful();

    expect(Permission::where('name', 'retired-permission')->pluck('guard_name')->all())
        ->toBe([AccessGuard::WEB->value]);
});

it('keeps an unassigned orphan when the confirmation is declined', function () {
    orphanPermission('retired-permission');

    $this->artisan('permissions:sync', ['--clean' => true])
        ->expectsConfirmation('Do you want to delete the 1 unassigned orphaned permission(s)?', 'no')
        ->assertSuccessful();

    expect(Permission::where('name', 'retired-permission')->exists())->toBeTrue();
});

it('keeps an orphan still granted to a role, such as one from a disabled plugin', function () {
    $permission = orphanPermission('disabled-plugin.permission');
    $role = Role::create(['name' => 'editor', 'guard_name' => AccessGuard::ADMIN->value]);
    $role->givePermissionTo($permission);

    $this->artisan('permissions:sync', ['--clean' => true])
        ->expectsOutputToContain('Kept because still granted to a role or user')
        ->assertSuccessful();

    expect($role->fresh()->hasPermissionTo('disabled-plugin.permission'))->toBeTrue();
});

it('keeps an orphan granted directly to a user, such as one created from the admin panel', function () {
    orphanPermission('custom-permission');
    $user = User::factory()->create();
    $user->givePermissionTo('custom-permission');

    $this->artisan('permissions:sync', ['--clean' => true])
        ->expectsOutputToContain('Kept because still granted to a role or user')
        ->assertSuccessful();

    expect($user->fresh()->hasPermissionTo('custom-permission'))->toBeTrue();
});
