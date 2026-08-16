<?php

// MNT-04: MenuController, MenuItemController, MenuLocationController,
// MenuItemGroupController, MenuItemTypeController and MenuSettingController
// used to be six near-identical, hand-copied CRUD controllers. They now
// share their index/store/update/destroy/forceDestroy/restore response
// building through Traits\HasResourceCrud. These tests pin down the
// observable behavior (search, pagination envelope, response messages,
// auth gating) so the refactor can't silently drift, and cover the
// controller-specific logic that stayed out of the shared trait: Menu's
// single-holder menu_location_id constraint, and MenuItem's content
// resolution, position ordering, and cascading delete to its children.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\MenuItem;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Models\MenuLocation;
use Creopse\Creopse\Models\MenuSetting;
use Creopse\Creopse\Models\NewsTag;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

function actingAsContentManager(): User
{
    $user = User::factory()->create();
    $user->givePermissionTo(PermissionList::MANAGE_CONTENT->value);
    Sanctum::actingAs($user, ['*']);

    return $user;
}

// --- Shared CRUD behavior, exercised through MenuLocation (representative
// of MenuLocation/MenuItemGroup/MenuItemType/MenuSetting, which are all
// wired identically through the trait) ---

it('lists menu locations, with search and pagination', function () {
    MenuLocation::create(['name' => 'Header', 'description' => 'Top of the site']);
    MenuLocation::create(['name' => 'Footer', 'description' => 'Bottom of the site']);

    $response = $this->getJson('/api/menu-locations');
    $response->assertOk();
    expect($response->json('data'))->toHaveCount(2);

    $paginated = $this->getJson('/api/menu-locations?pageSize=1');
    $paginated->assertOk();
    expect($paginated->json('data.items'))->toHaveCount(1);
    expect($paginated->json('data.meta.total'))->toBe(2);

    // `query` is only honored alongside `pageSize` (pre-existing behavior,
    // unrelated to this refactor — the plain, unpaginated branch below
    // returns everything regardless of `query`).
    $searched = $this->getJson('/api/menu-locations?pageSize=10&query=Header');
    $searched->assertOk();
    expect($searched->json('data.items'))->toHaveCount(1);
    expect($searched->json('data.items.0.name'))->toBe('Header');
});

it('creates, updates and deletes a menu location when authenticated', function () {
    actingAsContentManager();

    $created = $this->postJson('/api/menu-locations', ['name' => 'Header']);
    $created->assertCreated();
    expect($created->json('message'))->toBe('MenuLocation created successfully');

    $id = $created->json('data.id');

    $updated = $this->putJson("/api/menu-locations/{$id}", ['name' => 'Main Header']);
    $updated->assertOk();
    expect($updated->json('data.name'))->toBe('Main Header');
    expect($updated->json('message'))->toBe('MenuLocation updated successfully');

    $deleted = $this->deleteJson("/api/menu-locations/{$id}");
    $deleted->assertOk();
    expect($deleted->json('message'))->toBe('MenuLocation deleted successfully');
    expect(MenuLocation::find($id))->toBeNull();
});

it('rejects menu location writes for a guest', function () {
    $this->postJson('/api/menu-locations', ['name' => 'Header'])->assertStatus(401);
});

it('creates and deletes a menu item group when authenticated', function () {
    actingAsContentManager();

    $created = $this->postJson('/api/menu-item-groups', ['name' => 'Primary']);
    $created->assertCreated();
    expect($created->json('message'))->toBe('MenuItemGroup created successfully');

    $this->deleteJson('/api/menu-item-groups/'.$created->json('data.id'))->assertOk();
    expect(MenuItemGroup::count())->toBe(0);
});

it('creates and deletes a menu item type when authenticated', function () {
    actingAsContentManager();

    $created = $this->postJson('/api/menu-item-types', ['name' => 'Dropdown']);
    $created->assertCreated();
    expect($created->json('message'))->toBe('MenuItemType created successfully');

    $this->deleteJson('/api/menu-item-types/'.$created->json('data.id'))->assertOk();
    expect(MenuItemType::count())->toBe(0);
});

it('creates and deletes a menu setting when authenticated', function () {
    actingAsContentManager();

    $created = $this->postJson('/api/menu-settings', ['key' => 'maxDepth', 'default_value' => '2']);
    $created->assertCreated();
    expect($created->json('message'))->toBe('MenuSetting created successfully');

    $this->deleteJson('/api/menu-settings/'.$created->json('data.id'))->assertOk();
    expect(MenuSetting::count())->toBe(0);
});

it('searches menu settings on key and description', function () {
    MenuSetting::create(['key' => 'maxDepth', 'description' => 'Max nesting depth']);
    MenuSetting::create(['key' => 'showIcons', 'description' => 'Display icons']);

    $response = $this->getJson('/api/menu-settings?pageSize=10&query=maxDepth');
    $response->assertOk();
    expect($response->json('data.items'))->toHaveCount(1);
    expect($response->json('data.items.0.key'))->toBe('maxDepth');
});

// --- Menu: single-holder menu_location_id constraint (controller-specific
// logic kept out of the shared trait) ---

it('creates a menu, with menu location, and deletes it', function () {
    actingAsContentManager();

    $created = $this->postJson('/api/menus', ['name' => 'main', 'title' => 'Main Menu']);
    $created->assertCreated();
    expect($created->json('message'))->toBe('Menu created successfully');

    $this->deleteJson('/api/menus/'.$created->json('data.id'))->assertOk();
    expect(Menu::count())->toBe(0);
});

it('reassigns a menu location to only one menu at a time', function () {
    actingAsContentManager();

    $location = MenuLocation::create(['name' => 'Header']);

    $menuA = Menu::create(['name' => 'menu-a', 'title' => 'Menu A']);
    $menuB = Menu::create(['name' => 'menu-b', 'title' => 'Menu B']);

    $this->putJson("/api/menus/{$menuA->id}", [
        'name' => 'menu-a',
        'title' => 'Menu A',
        'menu_location_id' => $location->id,
    ])->assertOk();

    expect($menuA->fresh()->menu_location_id)->toBe($location->id);

    $this->putJson("/api/menus/{$menuB->id}", [
        'name' => 'menu-b',
        'title' => 'Menu B',
        'menu_location_id' => $location->id,
    ])->assertOk();

    expect($menuB->fresh()->menu_location_id)->toBe($location->id);
    expect($menuA->fresh()->menu_location_id)->toBeNull();
});

// --- MenuItem: kept mostly custom (position ordering, content resolution,
// cascading delete) ---

it('lists menu items ordered by position and resolves their content relation', function () {
    $menu = Menu::create(['name' => 'main', 'title' => 'Main Menu']);
    $tag = NewsTag::create(['name' => 'Tech', 'slug' => 'tech']);

    MenuItem::create(['menu_id' => $menu->id, 'title' => 'Second', 'position' => 1]);
    MenuItem::create([
        'menu_id' => $menu->id,
        'title' => 'First',
        'position' => 0,
        'content_type' => 'news-tag',
        'content_id' => $tag->id,
    ]);

    $response = $this->getJson('/api/menu/items?menuId='.$menu->id);
    $response->assertOk();

    $titles = collect($response->json('data'))->pluck('title')->all();
    expect($titles)->toBe(['First', 'Second']);
    expect($response->json('data.0.content.id'))->toBe($tag->id);
});

it('creates a menu item and updates it', function () {
    actingAsContentManager();

    $menu = Menu::create(['name' => 'main', 'title' => 'Main Menu']);

    // Several columns (position, is_active, is_visible...) have a DB-level
    // default but no server-side fallback when the key is omitted from the
    // payload (pre-existing behavior, unrelated to this refactor) — the
    // explicit `null` from $request->input() overrides the DB default and
    // trips the NOT NULL constraint, so pass them explicitly here.
    $created = $this->postJson('/api/menu/items', [
        'menu_id' => $menu->id,
        'title' => 'Home',
        'position' => 0,
        'is_active' => true,
        'is_visible' => true,
        'target_type' => 'page-link',
    ]);
    $created->assertCreated();
    expect($created->json('message'))->toBe('MenuItem created successfully');

    $id = $created->json('data.id');

    $updated = $this->putJson("/api/menu/items/{$id}", ['title' => 'Homepage']);
    $updated->assertOk();
    expect($updated->json('data.title'))->toBe('Homepage');
    expect($updated->json('message'))->toBe('MenuItem updated successfully');
});

it('reorders menu items via the position endpoint', function () {
    actingAsContentManager();

    $menu = Menu::create(['name' => 'main', 'title' => 'Main Menu']);
    $itemA = MenuItem::create(['menu_id' => $menu->id, 'title' => 'A', 'position' => 0]);
    $itemB = MenuItem::create(['menu_id' => $menu->id, 'title' => 'B', 'position' => 1]);

    $response = $this->putJson('/api/menu/items/position', [
        'items' => [
            ['id' => $itemB->id],
            ['id' => $itemA->id],
        ],
    ]);

    $response->assertOk();
    expect($itemB->fresh()->position)->toBe(0);
    expect($itemA->fresh()->position)->toBe(1);
});

it('deletes a menu item and cascades to its children', function () {
    actingAsContentManager();

    $menu = Menu::create(['name' => 'main', 'title' => 'Main Menu']);
    $parent = MenuItem::create(['menu_id' => $menu->id, 'title' => 'Parent']);
    $child = MenuItem::create(['menu_id' => $menu->id, 'title' => 'Child', 'parent_id' => $parent->id]);

    $response = $this->deleteJson("/api/menu/items/{$parent->id}");

    $response->assertOk();
    expect(MenuItem::find($parent->id))->toBeNull();
    expect(MenuItem::find($child->id))->toBeNull();
});
