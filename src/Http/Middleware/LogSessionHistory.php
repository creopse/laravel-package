<?php

namespace Creopse\Creopse\Http\Middleware;

use Creopse\Creopse\Helpers\Constants;
use Creopse\Creopse\Helpers\IpLocation\Core\Aggregator;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Creopse\Creopse\Models\UserSession;

class LogSessionHistory
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = null;
        $session = null;

        if (Auth::check()) {
            $user = Auth::user();
            $session = UserSession::where('user_id', $user->id)
                ->orderBy('id', 'desc')
                ->first();
        } else {
            $session = UserSession::where('ip_address', $request->ip())
                ->orderBy('id', 'desc')
                ->first();
        }

        if (is_null($session) || $session->last_activity < now()->subMinutes(Constants::USER_SESSION_DURATION)) {
            try {
                $aggregator = new Aggregator($request->ip());

                $locationData = $aggregator->fetchIpLocation();

                // Create a new session record
                UserSession::create([
                    'user_id' => is_null($user) ? null : $user->id,
                    'ip_address' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'location_data' => is_array($locationData) ? $locationData : null,
                    'last_activity' => now(),
                ]);
            } catch (\Exception $e) {
                // Do nothing
            }
        }

        return $next($request);
    }
}
