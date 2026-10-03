<?php

namespace Creopse\Creopse\Tests\Support;

use Creopse\Creopse\Contracts\PhoneVerifier;
use Creopse\Creopse\Services\PhoneVerification\TwilioPhoneVerifier;
use RuntimeException;

/**
 * Stands in for Twilio Verify in tests: codes are kept in memory and
 * single-use, like the real provider's.
 */
class FakePhoneVerifier implements PhoneVerifier
{
    /**
     * @var array<string, string>
     */
    public array $codes = [];

    public function __construct(public bool $failsToSend = false) {}

    public function isConfigured(): bool
    {
        return true;
    }

    public function send(string $phone): void
    {
        if ($this->failsToSend) {
            throw new RuntimeException('Provider error with secret-provider-token');
        }

        $this->codes[$phone] = '123456';
    }

    public function check(string $phone, string $code): bool
    {
        if (($this->codes[$phone] ?? null) !== $code) {
            return false;
        }

        unset($this->codes[$phone]);

        return true;
    }

    /**
     * Use this fake as the Twilio provider for the rest of the test.
     */
    public static function install(bool $failsToSend = false): self
    {
        $fake = new self($failsToSend);

        app()->instance(TwilioPhoneVerifier::class, $fake);

        return $fake;
    }
}
