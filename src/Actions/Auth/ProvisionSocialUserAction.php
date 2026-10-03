<?php

namespace Creopse\Creopse\Actions\Auth;

use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Models\AppSetting;
use Creopse\Creopse\Models\User;
use Illuminate\Http\Request;

/**
 * The two account-provisioning decisions shared by every registration path
 * (email/password, Google, Apple, phone) - kept in one place after the
 * account_status mass-assignment fix, so the next change to either only
 * needs to happen once instead of being repeated across every controller.
 */
class ProvisionSocialUserAction
{
    /**
     * Setting that opens sign-up from the admin panel (requests made with
     * the admin guard).
     */
    public const ADMIN_REGISTRATION_SETTING = 'allowAdminRegistration';

    /**
     * Setting that opens sign-up from a site built on a template, or any
     * other client: every request not made with the admin guard, including
     * Google, Apple and phone sign-up.
     */
    public const SITE_REGISTRATION_SETTING = 'allowSiteRegistration';

    /**
     * Whether this request may create a new account. Both settings are
     * closed by default, and used to be enforced only by the admin
     * frontend hiding its sign-up form - the API accepted any registration.
     * The very first account can always be created, since that is how the
     * platform gets its super-admin. Call this BEFORE creating the user.
     */
    public static function registrationIsOpen(Request $request): bool
    {
        if (! User::query()->exists()) {
            return true;
        }

        $setting = $request->input('guard') === AccessGuard::ADMIN->value
            ? self::ADMIN_REGISTRATION_SETTING
            : self::SITE_REGISTRATION_SETTING;

        return in_array(AppSetting::where('key', $setting)->value('value'), ['1', 'true'], true);
    }

    /**
     * account_status is always computed server-side, never taken from
     * client input: disabled by default once at least one account already
     * exists (pending admin approval), enabled for the very first account
     * on the platform. Call this BEFORE creating the user.
     */
    public static function defaultAccountStatus(): int
    {
        return User::count() > 0 ? AccountStatus::DISABLED->value : AccountStatus::ENABLED->value;
    }

    /**
     * The very first account created on the platform becomes super-admin;
     * every subsequent one gets the standard `user` role. Call this AFTER
     * creating the user, so User::count() includes it.
     */
    public static function assignInitialRole(User $user): void
    {
        $user->assignRole(User::count() === 1 ? UserRole::SUPER_ADMIN->value : UserRole::USER->value);
    }
}
