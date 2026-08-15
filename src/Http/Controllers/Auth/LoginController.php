<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\TokenAbility;
use Creopse\Creopse\Events\Auth\UserLoggedInEvent;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Auth\LoginRequest;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Traits\DetectsMobileRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    use DetectsMobileRequest;

    /**
     * A precomputed bcrypt hash with no known matching password, used to keep
     * the failure path for an unknown identifier as slow as a real password
     * check (see SEC-11 below).
     */
    private const DUMMY_PASSWORD_HASH = '$2y$10$AkgWUHWghFnZ1EwWIqfhQ.ueFcvVCvDn5n8t5i49wDdZ5AeZQ2tqa';

    /**
     * Handle an incoming authentication request.
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $credentials = $request->validated();

        if ($request->has('guard')) {
            Auth::shouldUse($request->input('guard'));
        }

        $userFound = User::where('email', $credentials['id'])->orWhere('username', $credentials['id'])->first();

        // SEC-11: credentials are verified before anything about the
        // account (existence or disabled status) is revealed. Returning a
        // distinct "user not found" / "wrong password" / "user disabled"
        // response ahead of the password check let an attacker enumerate
        // valid and disabled accounts without ever knowing a password. A
        // dummy hash check keeps the "unknown identifier" path taking as
        // long as a real one, closing the timing side-channel too.
        if ($userFound) {
            $credentialsValid = Auth::attempt([
                'email' => $userFound->email,
                'password' => $credentials['password'],
            ], $credentials['remember'] ?? false);
        } else {
            Hash::check($credentials['password'], self::DUMMY_PASSWORD_HASH);
            $credentialsValid = false;
        }

        if (! $credentialsValid) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'Invalid credentials',
                ResponseErrorCode::AUTH_INVALID_CREDENTIALS,
            );
        }

        if ($userFound->account_status == AccountStatus::DISABLED->value) {

            // When the user is disabled
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'User disabled',
                ResponseErrorCode::AUTH_USER_DISABLED,
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
