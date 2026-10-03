<?php

namespace Creopse\Creopse\Services\PhoneVerification;

use Creopse\Creopse\Contracts\PhoneVerifier;

/**
 * Picks the provider phone sign-in uses: the one named by
 * creopse.phone_auth_provider (CREOPSE_PHONE_AUTH_PROVIDER), else the
 * first configured one. Adding a provider means implementing PhoneVerifier
 * and listing it here.
 */
class PhoneVerifierResolver
{
    /**
     * @var array<string, class-string<PhoneVerifier>>
     */
    public const PROVIDERS = [
        'twilio' => TwilioPhoneVerifier::class,
    ];

    /**
     * The provider to use, or null when none is configured - phone sign-in
     * is then disabled.
     */
    public function resolve(): ?PhoneVerifier
    {
        $preferred = config('creopse.phone_auth_provider');

        $names = filled($preferred) ? [$preferred] : array_keys(self::PROVIDERS);

        foreach ($names as $name) {
            $class = self::PROVIDERS[$name] ?? null;

            if ($class === null) {
                continue;
            }

            $verifier = app($class);

            if ($verifier->isConfigured()) {
                return $verifier;
            }
        }

        return null;
    }
}
