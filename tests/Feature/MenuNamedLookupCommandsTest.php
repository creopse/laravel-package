<?php

// MNT-09: MakeMenuItemGroup/RemoveMenuItemGroup/UpdateMenuItemGroup,
// MakeMenuItemType/RemoveMenuItemType/UpdateMenuItemType and
// MakeMenuLocation/RemoveMenuLocation/UpdateMenuLocation used to each
// hand-copy the exact same create/delete/rename logic (9 files). They now
// share it through Traits\Has{Make,Remove,Update}NamedLookupCommand. These
// tests exercise the shared behavior thoroughly through MenuItemGroup, and
// smoke-test MenuItemType/MenuLocation to confirm they're wired correctly
// to the same traits — there was no console command test coverage at all
// before this.

use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Models\MenuLocation;

it('creates a menu item group', function () {
    $this->artisan('creopse:make-menu-item-group', ['name' => 'Primary'])
        ->assertExitCode(0);

    expect(MenuItemGroup::where('name', 'Primary')->exists())->toBeTrue();
});

it('refuses to create a menu item group with a duplicate name', function () {
    MenuItemGroup::create(['name' => 'Primary']);

    $this->artisan('creopse:make-menu-item-group', ['name' => 'Primary'])
        ->assertExitCode(1);

    expect(MenuItemGroup::where('name', 'Primary')->count())->toBe(1);
});

it('updates a menu item group name', function () {
    MenuItemGroup::create(['name' => 'Primary']);

    $this->artisan('creopse:update-menu-item-group', ['name' => 'Primary', '--new-name' => 'Main'])
        ->assertExitCode(0);

    expect(MenuItemGroup::where('name', 'Main')->exists())->toBeTrue();
});

it('refuses to rename a menu item group to an already-taken name', function () {
    MenuItemGroup::create(['name' => 'Primary']);
    MenuItemGroup::create(['name' => 'Secondary']);

    $this->artisan('creopse:update-menu-item-group', ['name' => 'Primary', '--new-name' => 'Secondary'])
        ->assertExitCode(1);

    expect(MenuItemGroup::where('name', 'Primary')->exists())->toBeTrue();
});

it('removes a menu item group with --force', function () {
    MenuItemGroup::create(['name' => 'Primary']);

    $this->artisan('creopse:remove-menu-item-group', ['name' => 'Primary', '--force' => true])
        ->assertExitCode(0);

    expect(MenuItemGroup::where('name', 'Primary')->exists())->toBeFalse();
});

it('aborts removing a menu item group when the confirmation is declined', function () {
    MenuItemGroup::create(['name' => 'Primary']);

    $this->artisan('creopse:remove-menu-item-group', ['name' => 'Primary'])
        ->expectsConfirmation("Are you sure you want to delete menu item group 'Primary'? This cannot be undone.", 'no')
        ->assertExitCode(1);

    expect(MenuItemGroup::where('name', 'Primary')->exists())->toBeTrue();
});

// --- Smoke tests: same traits, different entity ---

it('creates, updates and removes a menu item type', function () {
    $this->artisan('creopse:make-menu-item-type', ['name' => 'Dropdown'])->assertExitCode(0);
    expect(MenuItemType::where('name', 'Dropdown')->exists())->toBeTrue();

    $this->artisan('creopse:update-menu-item-type', ['name' => 'Dropdown', '--new-name' => 'Flyout'])->assertExitCode(0);
    expect(MenuItemType::where('name', 'Flyout')->exists())->toBeTrue();

    $this->artisan('creopse:remove-menu-item-type', ['name' => 'Flyout', '--force' => true])->assertExitCode(0);
    expect(MenuItemType::where('name', 'Flyout')->exists())->toBeFalse();
});

it('creates, updates and removes a menu location', function () {
    $this->artisan('creopse:make-menu-location', ['name' => 'header'])->assertExitCode(0);
    expect(MenuLocation::where('name', 'header')->exists())->toBeTrue();

    $this->artisan('creopse:update-menu-location', ['name' => 'header', '--new-name' => 'top-header'])->assertExitCode(0);
    expect(MenuLocation::where('name', 'top-header')->exists())->toBeTrue();

    $this->artisan('creopse:remove-menu-location', ['name' => 'top-header', '--force' => true])->assertExitCode(0);
    expect(MenuLocation::where('name', 'top-header')->exists())->toBeFalse();
});
