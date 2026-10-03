<?php

// allowAdminRegistration was only enforced by the admin frontend hiding its
// sign-up form: the API created accounts for anyone, through /auth/register
// as well as Google, Apple and phone sign-up. Sign-up is now checked server
// side against two settings, both closed by default:
//
// - allowAdminRegistration for the admin panel (requests made with guard=admin);
// - allowSiteRegistration for sites built on a template and any other
//   client (every other request).
//
// The very first account can always be created: that's how the platform
// gets its super-admin.

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Models\AppSetting;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Tests\Support\FakePhoneVerifier;

function openRegistration(string $setting): void
{
    AppSetting::updateOrCreate(['key' => $setting], ['value' => '1']);
}

function registrationPayload(array $overrides = []): array
{
    return array_merge([
        'firstname' => 'New',
        'lastname' => 'Comer',
        'email' => 'newcomer@example.com',
        'password' => 'secret123',
        'password_confirmation' => 'secret123',
    ], $overrides);
}

it('always lets the very first account register', function () {
    $this->postJson('/api/auth/register', registrationPayload(['guard' => 'admin']))->assertCreated();
});

it('refuses sign-up from the admin panel unless allowAdminRegistration is on', function () {
    User::factory()->create();

    $this->postJson('/api/auth/register', registrationPayload(['guard' => 'admin']))
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_REGISTRATION_DISABLED->value]);

    openRegistration('allowAdminRegistration');

    $this->postJson('/api/auth/register', registrationPayload(['guard' => 'admin']))->assertCreated();
});

it('refuses sign-up from a site unless allowSiteRegistration is on', function () {
    User::factory()->create();

    $this->postJson('/api/auth/register', registrationPayload())
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_REGISTRATION_DISABLED->value]);

    openRegistration('allowSiteRegistration');

    $this->postJson('/api/auth/register', registrationPayload())->assertCreated();
});

it('keeps the admin and site settings independent', function () {
    User::factory()->create();

    openRegistration('allowAdminRegistration');
    $this->postJson('/api/auth/register', registrationPayload(['guard' => 'web']))->assertStatus(403);

    AppSetting::where('key', 'allowAdminRegistration')->update(['value' => '0']);
    openRegistration('allowSiteRegistration');
    $this->postJson('/api/auth/register', registrationPayload(['guard' => 'admin']))->assertStatus(403);
});

it('refuses phone sign-up unless allowSiteRegistration is on', function () {
    User::factory()->create();
    FakePhoneVerifier::install();

    $this->postJson('/api/auth/phone', [
        'phone' => '+22990000000',
        'firstname' => 'New',
        'lastname' => 'Comer',
        'allow_registration' => true,
    ])->assertStatus(403)->assertJson(['errorCode' => ResponseErrorCode::AUTH_REGISTRATION_DISABLED->value]);

    expect(User::where('phone', '+22990000000')->exists())->toBeFalse();
});

it('exposes both settings to pre-auth screens', function () {
    $keys = collect($this->getJson('/api/app-settings/public')->assertOk()->json('data'))->pluck('key');

    expect($keys)->toContain('allowSiteRegistration');
});

it('renames allowRegistration to allowAdminRegistration on existing installs, keeping its value', function () {
    AppSetting::where('key', 'allowAdminRegistration')->delete();
    AppSetting::create(['key' => 'allowRegistration', 'value' => '1']);

    $migration = require __DIR__.'/../../database/migrations/2026_10_03_000001_rename_allow_registration_setting.php';
    $migration->up();

    expect(AppSetting::where('key', 'allowRegistration')->exists())->toBeFalse()
        ->and(AppSetting::where('key', 'allowAdminRegistration')->value('value'))->toBe('1');
});
