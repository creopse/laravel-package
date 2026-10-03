<?php

// Phone sign-up used to create the account as soon as a code was requested,
// before the number was proven: anyone could take someone else's number,
// with the name of their choice. Both phone endpoints also answered 404 for
// a number with no account, telling which numbers were registered.
//
// The account is now created once the code is checked, with the sign-up
// data kept until then, and a known or unknown number gets the same answer.

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Models\AppSetting;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Tests\Support\FakePhoneVerifier;

beforeEach(function () {
    $this->phoneVerifier = FakePhoneVerifier::install();
    User::factory()->create(['phone' => '+15005550020']);
});

function phoneSignUp(array $overrides = []): array
{
    return array_merge([
        'phone' => '+15005550021',
        'firstname' => 'New',
        'lastname' => 'Comer',
        'allow_registration' => true,
    ], $overrides);
}

it('answers the same whether or not the number has an account', function () {
    $known = $this->postJson('/api/auth/phone', ['phone' => '+15005550020'])->assertOk();
    $unknown = $this->postJson('/api/auth/phone', ['phone' => '+15005550021'])->assertOk();

    expect($unknown->json())->toBe($known->json())
        ->and($this->phoneVerifier->codes)->toHaveKey('+15005550020')
        ->and($this->phoneVerifier->codes)->not->toHaveKey('+15005550021');
});

it('fails the same way for an unknown number as for a wrong code', function () {
    $this->phoneVerifier->send('+15005550020');

    $wrongCode = $this->postJson('/api/auth/phone/verify', ['phone' => '+15005550020', 'code' => '000000'])
        ->assertStatus(422);
    $unknown = $this->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '123456'])
        ->assertStatus(422);

    expect($unknown->json())->toBe($wrongCode->json())
        ->and($unknown->json('errorCode'))->toBe(ResponseErrorCode::AUTH_CODE_VERIFICATION_FAILED->value);
});

it('only creates the account once the code is checked', function () {
    AppSetting::updateOrCreate(['key' => 'allowSiteRegistration'], ['value' => '1']);

    $this->postJson('/api/auth/phone', phoneSignUp(['preferences' => ['lang' => 'fr']]))->assertOk();

    expect(User::wherePhone('+15005550021')->exists())->toBeFalse();

    $this->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '000000'])->assertStatus(422);

    expect(User::wherePhone('+15005550021')->exists())->toBeFalse();

    // New accounts wait for an administrator's approval.
    $this->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '123456'])
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_USER_DISABLED->value]);

    $user = User::wherePhone('+15005550021')->first();

    expect($user)->not->toBeNull()
        ->and($user->firstname)->toBe('New')
        ->and($user->lastname)->toBe('Comer')
        ->and($user->preferences)->toBe(['lang' => 'fr'])
        ->and($user->account_status)->toBe(AccountStatus::DISABLED->value)
        ->and($user->hasRole('user'))->toBeTrue();
});

it('logs in the very first account right after its code is checked', function () {
    User::query()->delete();

    $this->postJson('/api/auth/phone', phoneSignUp())->assertOk();

    $this->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '123456'])
        ->assertCreated();

    expect(User::wherePhone('+15005550021')->first()->hasRole('super-admin'))->toBeTrue();
});

it('refuses the sign-up if registration closed after the code was sent', function () {
    AppSetting::updateOrCreate(['key' => 'allowSiteRegistration'], ['value' => '1']);

    $this->postJson('/api/auth/phone', phoneSignUp())->assertOk();

    AppSetting::where('key', 'allowSiteRegistration')->update(['value' => '0']);

    $this->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '123456'])
        ->assertStatus(403)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_REGISTRATION_DISABLED->value]);

    expect(User::wherePhone('+15005550021')->exists())->toBeFalse();
});

it('limits code guesses for a number with no account', function () {
    AppSetting::updateOrCreate(['key' => 'allowSiteRegistration'], ['value' => '1']);

    $this->postJson('/api/auth/phone', phoneSignUp())->assertOk();

    foreach (range(1, 5) as $attempt) {
        $this->withServerVariables(['REMOTE_ADDR' => "10.0.2.{$attempt}"])
            ->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '000000'])
            ->assertStatus(422);
    }

    $this->withServerVariables(['REMOTE_ADDR' => '10.0.2.99'])
        ->postJson('/api/auth/phone/verify', ['phone' => '+15005550021', 'code' => '123456'])
        ->assertStatus(422)
        ->assertJson(['errorCode' => ResponseErrorCode::AUTH_CODE_EXPIRED->value]);

    expect(User::wherePhone('+15005550021')->exists())->toBeFalse();
});
