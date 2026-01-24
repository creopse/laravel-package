<?php

namespace Creopse\Creopse\Traits;

use Illuminate\Http\Request;

trait DetectsMobileRequest
{
    protected function isMobileRequest(Request $request): bool
    {
        // Method 1: Header Authorization Bearer (mobile always uses tokens)
        if ($request->bearerToken()) {
            return true;
        }

        // Method 2: Custom header (if your mobile app sends it)
        if ($request->header('X-Client-Type') === 'mobile') {
            return true;
        }

        // Method 3: User-Agent contains mobile keywords
        $userAgent = $request->header('User-Agent', '');
        if (preg_match('/(MyApp|Android|iOS|Mobile)/i', $userAgent)) {
            return true;
        }

        // Method 4: Presence of the device_name or device_id field in the request
        if ($request->has('device_name') || $request->has('device_id')) {
            return true;
        }

        return false;
    }
}
