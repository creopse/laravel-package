<?php

namespace Creopse\Creopse\Contracts;

/**
 * An SMS provider phone sign-in can send verification codes through. The
 * provider generates, stores and expires the codes itself.
 */
interface PhoneVerifier
{
    /**
     * Whether the provider's credentials are configured.
     */
    public function isConfigured(): bool;

    /**
     * Send a new verification code to the phone number.
     */
    public function send(string $phone): void;

    /**
     * Whether the code is the valid, unexpired one sent to the phone number.
     */
    public function check(string $phone, string $code): bool;
}
