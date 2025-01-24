<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Events\Auth\UserLoggedOutEvent;

class LogoutController extends Controller
{
    /**
     * Destroy an authenticated session.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        event(new UserLoggedOutEvent($request->user()->id));

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Logged out successfully'
        );
    }
}
