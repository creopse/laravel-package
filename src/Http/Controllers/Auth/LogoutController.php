<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Events\Auth\UserLoggedOutEvent;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\TransientToken;

class LogoutController extends Controller
{
    use DetectsMobileRequest;

    /**
     * Destroy an authenticated session.
     */
    public function __invoke(Request $request, string $guard = 'web'): JsonResponse
    {
        $userId = $request->user()->id;

        if ($this->isMobileRequest($request)) {
            $token = $request->user()->currentAccessToken();

            if ($token && ! $token instanceof TransientToken) {
                $token->delete();
            }
        } else {
            Auth::guard($guard)->logout();
            if ($request->hasSession()) {
                $request->session()->invalidate();
                $request->session()->regenerateToken();
            }
        }

        event(new UserLoggedOutEvent($userId));

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Logged out successfully'
        );
    }
}
