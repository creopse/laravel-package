<?php

namespace Creopse\Creopse\Http\Middleware;

use Closure;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CaptureSessionMetadata
{
    use DetectsMobileRequest;

    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($this->isMobileRequest($request)) {
            return $response;
        }

        // Capture only for requests authenticated with an active session
        if (
            $request->user() &&
            $request->session()->getId() &&
            $request->session()->has('_token')
        ) {  // Verify that it is a genuine session

            $sessionId = $request->session()->getId();
            $deviceName = $this->getDeviceNameFromUserAgent($request->userAgent());

            try {
                DB::table('sessions')
                    ->where('id', $sessionId)
                    ->update([
                        'device_name' => $deviceName,
                        'last_activity' => now()->timestamp,
                    ]);
            } catch (\Exception $e) {
                // Silently ignore errors (session may not exist in DB)
                \Log::debug('Failed to update session metadata', [
                    'session_id' => $sessionId,
                    'error' => $e->getMessage()
                ]);
            }
        }

        return $response;
    }

    private function getDeviceNameFromUserAgent(?string $userAgent): string
    {
        if (!$userAgent) {
            return 'Unknown Device';
        }

        // Windows
        if (preg_match('/Windows NT/i', $userAgent)) {
            if (preg_match('/Edg\//i', $userAgent)) return 'Windows (Edge)';
            if (preg_match('/Chrome/i', $userAgent)) return 'Windows (Chrome)';
            if (preg_match('/Firefox/i', $userAgent)) return 'Windows (Firefox)';
            return 'Windows';
        }

        // macOS
        if (preg_match('/Macintosh/i', $userAgent)) {
            if (preg_match('/Safari/i', $userAgent) && !preg_match('/Chrome/i', $userAgent)) {
                return 'macOS (Safari)';
            }
            if (preg_match('/Chrome/i', $userAgent)) return 'macOS (Chrome)';
            if (preg_match('/Firefox/i', $userAgent)) return 'macOS (Firefox)';
            return 'macOS';
        }

        // Mobile
        if (preg_match('/iPhone/i', $userAgent)) return 'iPhone';
        if (preg_match('/iPad/i', $userAgent)) return 'iPad';
        if (preg_match('/Android/i', $userAgent)) {
            if (preg_match('/Chrome/i', $userAgent)) return 'Android (Chrome)';
            return 'Android';
        }

        // Linux
        if (preg_match('/Linux/i', $userAgent)) {
            if (preg_match('/Chrome/i', $userAgent)) return 'Linux (Chrome)';
            if (preg_match('/Firefox/i', $userAgent)) return 'Linux (Firefox)';
            return 'Linux';
        }

        return 'Unknown Device';
    }
}
