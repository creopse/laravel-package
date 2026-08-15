<?php

// SEC-09: install() extracts an uploaded ZIP straight into storage/plugins
// (backend PHP) and public/creopse/plugins (frontend), then runs its
// migrations and loads it - any authenticated caller could get arbitrary
// code execution, and index/show were reachable with no auth at all. All 7
// routes now require the manage-plugins permission, matching what the admin
// frontend already gates the whole Plugins page behind.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Illuminate\Http\UploadedFile;
use Laravel\Sanctum\Sanctum;

it('refuses every plugin route to a guest', function (string $method, string $url) {
    $this->json($method, $url)->assertStatus(401);
})->with([
    'index' => ['GET', '/api/plugins'],
    'show' => ['GET', '/api/plugins/some-plugin'],
    'install' => ['POST', '/api/plugins/install'],
    'update' => ['PUT', '/api/plugins/some-plugin/update'],
    'enable' => ['PUT', '/api/plugins/some-plugin/enable'],
    'disable' => ['PUT', '/api/plugins/some-plugin/disable'],
    'uninstall' => ['DELETE', '/api/plugins/some-plugin/uninstall'],
]);

it('refuses every plugin route to an authenticated caller without manage-plugins', function (string $method, string $url) {
    Sanctum::actingAs(User::factory()->create(), ['*']);

    $this->json($method, $url)->assertStatus(403);
})->with([
    'index' => ['GET', '/api/plugins'],
    'show' => ['GET', '/api/plugins/some-plugin'],
    'install' => ['POST', '/api/plugins/install'],
    'update' => ['PUT', '/api/plugins/some-plugin/update'],
    'enable' => ['PUT', '/api/plugins/some-plugin/enable'],
    'disable' => ['PUT', '/api/plugins/some-plugin/disable'],
    'uninstall' => ['DELETE', '/api/plugins/some-plugin/uninstall'],
]);

it('lets a caller with manage-plugins through the permission gate', function () {
    $manager = User::factory()->create();
    $manager->givePermissionTo(PermissionList::MANAGE_PLUGINS->value);
    Sanctum::actingAs($manager, ['*']);

    $this->getJson('/api/plugins')->assertOk();
    $this->getJson('/api/plugins/does-not-exist')->assertStatus(404);
    $this->putJson('/api/plugins/does-not-exist/enable')->assertStatus(404);
    $this->putJson('/api/plugins/does-not-exist/disable')->assertStatus(409);
    $this->deleteJson('/api/plugins/does-not-exist/uninstall')->assertStatus(404);
    // No file attached: validation runs (past the permission gate) and fails.
    $this->postJson('/api/plugins/install')->assertStatus(422);
    $this->putJson('/api/plugins/does-not-exist/update')->assertStatus(422);
});
