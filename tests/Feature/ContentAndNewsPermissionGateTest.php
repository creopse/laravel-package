<?php

// SEC: writes on the ads, content (menus/permalinks/content-models/video
// settings/video categories), and news/newsletter modules used to only
// require auth:sanctum - any authenticated account, including a
// self-registered one with zero permissions (see RegistrationController -
// a fresh registration issues a working Sanctum token regardless of
// account_status or assigned role), could reach them. They now require
// manage-content or manage-news, matching what the admin frontend already
// gates the corresponding pages behind.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

it('refuses these writes to a guest', function (string $method, string $url) {
    $this->json($method, $url)->assertStatus(401);
})->with([
    'ads store' => ['POST', '/api/ads'],
    'ad-identifiers store' => ['POST', '/api/ad-identifiers'],
    'menu-locations store' => ['POST', '/api/menu-locations'],
    'video-settings update' => ['PUT', '/api/video-settings'],
    'video-categories store' => ['POST', '/api/video-categories'],
    'news-tags store' => ['POST', '/api/news-tags'],
    'news-articles store' => ['POST', '/api/news-articles'],
    'newsletter-campaigns index' => ['GET', '/api/newsletter/campaigns'],
]);

it('refuses these writes to an authenticated caller without the matching permission', function (string $method, string $url) {
    Sanctum::actingAs(User::factory()->create(), ['*']);

    $this->json($method, $url)->assertStatus(403);
})->with([
    'ads store' => ['POST', '/api/ads'],
    'ad-identifiers store' => ['POST', '/api/ad-identifiers'],
    'menu-locations store' => ['POST', '/api/menu-locations'],
    'video-settings update' => ['PUT', '/api/video-settings'],
    'video-categories store' => ['POST', '/api/video-categories'],
    'news-tags store' => ['POST', '/api/news-tags'],
    'news-articles store' => ['POST', '/api/news-articles'],
    'newsletter-campaigns index' => ['GET', '/api/newsletter/campaigns'],
]);

it('lets a caller with manage-content through the ads and video-settings gates', function () {
    $manager = User::factory()->create();
    $manager->givePermissionTo(PermissionList::MANAGE_CONTENT->value);
    Sanctum::actingAs($manager, ['*']);

    // No ad_identifiers row to satisfy AdRequest's `exists:ad_identifiers,id`
    // - validation runs (past the permission gate) and fails.
    $this->postJson('/api/ads', [])->assertStatus(422);
    $this->putJson('/api/video-settings', ['theme' => 'dark'])->assertOk();
});

it('lets a caller with manage-news through the news and newsletter gates', function () {
    $manager = User::factory()->create();
    $manager->givePermissionTo(PermissionList::MANAGE_NEWS->value);
    Sanctum::actingAs($manager, ['*']);

    $this->postJson('/api/news-tags', ['name' => 'Tech', 'is_active' => true])->assertCreated();
    $this->getJson('/api/newsletter/campaigns')->assertOk();
});
