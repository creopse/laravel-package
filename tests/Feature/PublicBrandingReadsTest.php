<?php

// Follow-up to SEC-03: the login page and other pre-auth screens render
// branding (logo, colors, site name) before any session exists, so a
// narrow, explicit slice of app-settings/app-information has to stay
// readable without auth:sanctum. Everything else - including all writes -
// stays gated.

use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\AppSetting;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

it('exposes app information reads without authentication', function () {
    AppInformation::create(['key' => 'name', 'value' => 'creopse.com']);

    $response = $this->getJson('/api/app-information');

    $response->assertOk();
    expect($response->json('data.0.key'))->toBe('name');
});

it('still requires authentication to update app information', function () {
    $response = $this->putJson('/api/app-information', ['name' => 'evil.com']);

    $response->assertStatus(401);
});

it('exposes only the allowlisted app settings without authentication', function () {
    AppSetting::create(['key' => 'appearance.colors.primary', 'value' => '#000000']);
    AppSetting::create(['key' => 'basePath', 'value' => 'creopse']);
    AppSetting::create(['key' => 'allowRegistration', 'value' => '1']);
    AppSetting::create(['key' => 'translation.googleTranslate.apiKey', 'value' => 'super-secret']);

    $response = $this->getJson('/api/app-settings/public');

    $response->assertOk();
    $keys = collect($response->json('data'))->pluck('key');

    expect($keys)->toContain('appearance.colors.primary', 'basePath', 'allowRegistration')
        ->and($keys)->not->toContain('translation.googleTranslate.apiKey');
});

it('still requires authentication for the full app settings index', function () {
    $response = $this->getJson('/api/app-settings');

    $response->assertStatus(401);
});

it('still requires authentication to update app settings', function () {
    $response = $this->putJson('/api/app-settings', ['basePath' => 'evil']);

    $response->assertStatus(401);
});

it('lets an authenticated user read the full app settings index, secrets included', function () {
    Sanctum::actingAs(User::factory()->create(), ['*']);

    AppSetting::create(['key' => 'translation.googleTranslate.apiKey', 'value' => 'super-secret']);

    $response = $this->getJson('/api/app-settings');

    $response->assertOk();
    expect(collect($response->json('data'))->pluck('key'))
        ->toContain('translation.googleTranslate.apiKey');
});
