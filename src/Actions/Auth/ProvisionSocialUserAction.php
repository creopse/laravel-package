<?php

namespace Creopse\Creopse\Actions\Auth;

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\UserRole;
use Creopse\Creopse\Models\User;

/**
 * The two account-provisioning decisions shared by every registration path
 * (email/password, Google, Apple, phone) - kept in one place after the
 * account_status mass-assignment fix, so the next change to either only
 * needs to happen once instead of being repeated across every controller.
 */
class ProvisionSocialUserAction
{
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
