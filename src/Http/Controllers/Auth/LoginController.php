<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\{AccountStatus, ResponseErrorCode, ResponseStatusCode, TokenAbility};
use Creopse\Creopse\Events\Auth\UserLoggedInEvent;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Auth\LoginRequest;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $credentials = $request->validated();

        if (User::where('email', $credentials['email'])->doesntExist()) {

            // When the user is not found
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'User not found',
                ResponseErrorCode::AUTH_USER_NOT_FOUND,
            );
        }

        if (Auth::attempt([
            'email' => $credentials['email'],
            'password' => $credentials['password']
        ], $credentials['remember'] ?? false)) {
            // When the user is authenticated
            $user = Auth::user();

            if ($user->account_status == AccountStatus::DISABLED->value) {
                // When the user is disabled, log them out and return an error
                Auth::logout();

                return $this->sendResponse(
                    null,
                    ResponseStatusCode::FORBIDDEN,
                    'User disabled',
                    ResponseErrorCode::AUTH_USER_DISABLED,
                );
            }

            event(new UserLoggedInEvent($user->id));

            return $this->sendResponse(
                [
                    'access_token' => Functions::generateAccessToken($user, $request->header('X-API-KEY') === env('APP_X_API_KEY') ? now()->addMonths(18) : null)->plainTextToken,
                    'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
                ],
                ResponseStatusCode::OK,
                'Logged in successfully'
            );
        }

        // When the password are incorrect
        return $this->sendResponse(
            null,
            ResponseStatusCode::FORBIDDEN,
            'Wrong password',
            ResponseErrorCode::AUTH_WRONG_PASSWORD,
        );
    }
}
