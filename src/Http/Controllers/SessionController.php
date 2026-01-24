<?php

namespace Creopse\Creopse\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\SessionType;

class SessionController extends Controller
{
    /**
     * List all active sessions (web + mobile)
     */
    public function index(Request $request)
    {
        $user = $request->user();
        $currentSessionId = $request->session()->getId();

        // Web sessions (cookies)
        $webSessions = DB::table('sessions')
            ->where('user_id', $user->id)
            ->get()
            ->map(function ($session) use ($currentSessionId) {
                return [
                    'id' => $session->id,
                    'type' => SessionType::WEB->value,
                    'device_name' => $session->device_name ?? $this->parseUserAgent($session->user_agent),
                    'ip_address' => $session->ip_address,
                    'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
                    'last_activity' => $session->last_activity,
                    'is_current' => $session->id === $currentSessionId,
                ];
            });

        // Mobile sessions (tokens)
        $mobileSessions = $user->tokens->map(function ($token) {
            return [
                'id' => $token->id,
                'type' => SessionType::MOBILE->value,
                'device_name' => $token->name,
                'ip_address' => null, // Tokens do not store the default IP address.
                'last_active' => $token->last_used_at?->diffForHumans() ?? 'Never',
                'last_activity' => $token->last_used_at?->timestamp,
                'is_current' => false,
            ];
        });

        // Merge and sort by latest activity
        $allSessions = $webSessions->concat($mobileSessions)
            ->sortByDesc('last_activity')
            ->values();

        return $this->sendResponse($allSessions);
    }

    /**
     * Revokes a session (web or mobile)
     */
    public function revoke(Request $request, string $type, string $id)
    {
        $user = $request->user();

        if ($type === SessionType::WEB->value) {
            // Verify that it is not the current session
            if ($id === $request->session()->getId()) {
                return $this->sendResponse(
                    null,
                    ResponseStatusCode::BAD_REQUEST,
                    'Cannot revoke current session'
                );
            }

            DB::table('sessions')
                ->where('id', $id)
                ->where('user_id', $user->id)
                ->delete();
        } elseif ($type === SessionType::MOBILE->value) {
            $user->tokens()->where('id', $id)->delete();
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::BAD_REQUEST,
                'Invalid session type'
            );
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Session revoked'
        );
    }

    /**
     * Revokes all other sessions
     */
    public function revokeAll(Request $request)
    {
        $user = $request->user();
        $currentSessionId = $request->session()->getId();

        // Revokes all web sessions except the current one
        DB::table('sessions')
            ->where('user_id', $user->id)
            ->where('id', '!=', $currentSessionId)
            ->delete();

        // Revoke all mobile tokens
        $user->tokens()->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'All other sessions revoked'
        );
    }

    private function parseUserAgent(?string $userAgent): string
    {
        // Same logic as in middleware
        if (!$userAgent) return 'Unknown Device';

        if (str_contains($userAgent, 'Windows')) return 'Windows';
        if (str_contains($userAgent, 'Macintosh')) return 'macOS';
        if (str_contains($userAgent, 'iPhone')) return 'iPhone';
        if (str_contains($userAgent, 'Android')) return 'Android';

        return 'Unknown Device';
    }
}
