<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\{AccountStatus, ResponseErrorCode, ResponseStatusCode, TokenAbility};
use Creopse\Creopse\Events\Auth\UserLoggedInEvent;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Auth\LoginRequest;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use DetectsMobileRequest;

    /**
     * Handle an incoming authentication request.
     */
    public function __invoke(LoginRequest $request): JsonResponse
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

        if (User::where('email', $credentials['email'])->first()->account_status == AccountStatus::DISABLED->value) {

            // When the user is disabled
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'User disabled',
                ResponseErrorCode::AUTH_USER_DISABLED,
            );
        }

        if (!Auth::attempt([
            'email' => $credentials['email'],
            'password' => $credentials['password']
        ], $credentials['remember'] ?? false)) {

            // When the password is wrong
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'Wrong password',
                ResponseErrorCode::AUTH_WRONG_PASSWORD,
            );
        }

        // When the user is authenticated
        $user = Auth::user();

        event(new UserLoggedInEvent($user->id));

        if ($this->isMobileRequest($request)) {
            $deviceName = $request->input('device_name', 'mobile-device');
            $deviceId = $request->input('device_id');

            $tokenName = $deviceId
                ? "{$deviceName} ({$deviceId})"
                : $deviceName;

            if ($deviceId) {
                $user->tokens()
                    ->where('name', 'LIKE', "%({$deviceId})%")
                    ->delete();
            }

            $token = $user->createToken($tokenName, [TokenAbility::MOBILE])->plainTextToken;

            return $this->sendResponse(
                [
                    'token' => $token,
                    'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
                ],
                ResponseStatusCode::OK,
                'Logged in successfully'
            );
        }

        $request->session()->regenerate();

        return $this->sendResponse(
            [
                'user' => new UserResource($user->load(['profile', 'roles', 'permissions'])),
            ],
            ResponseStatusCode::OK,
            'Logged in successfully'
        );
    }
}
