<?php

namespace Creopse\Creopse\Services\PhoneVerification;

use Creopse\Creopse\Contracts\PhoneVerifier;
use Twilio\Rest\Client as TwilioClient;
use Twilio\Rest\Verify\V2\ServiceContext;

/**
 * Phone verification through Twilio Verify, which generates the codes and
 * handles their expiry and its own attempt limit.
 */
class TwilioPhoneVerifier implements PhoneVerifier
{
    public function isConfigured(): bool
    {
        return filled(config('services.twilio.sid'))
            && filled(config('services.twilio.token'))
            && filled(config('services.twilio.service'));
    }

    public function send(string $phone): void
    {
        $this->service()->verifications->create($phone, 'sms');
    }

    public function check(string $phone, string $code): bool
    {
        $verificationCheck = $this->service()->verificationChecks->create([
            'to' => $phone,
            'code' => $code,
        ]);

        return $verificationCheck->status === 'approved';
    }

    private function service(): ServiceContext
    {
        $client = new TwilioClient(config('services.twilio.sid'), config('services.twilio.token'));

        return $client->verify->v2->services(config('services.twilio.service'));
    }
}
