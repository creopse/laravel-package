<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Events\Auth\UserLoggedOutEvent;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    use DetectsMobileRequest;

    /**
     * Destroy an authenticated session.
     */
    public function __invoke(Request $request): JsonResponse
    {
        if ($this->isMobileRequest($request)) {
            $request->user()->currentAccessToken()->delete();
        } else {
            Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }

        event(new UserLoggedOutEvent($request->user()->id));

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Logged out successfully'
        );
    }
}
