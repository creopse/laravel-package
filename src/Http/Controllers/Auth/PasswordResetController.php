<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Inertia\Inertia;

class PasswordResetController extends Controller
{
    /**
     * Handle an incoming password reset link request.
     */
    public function send(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status != Password::RESET_LINK_SENT) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                __($status)
            );
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            __($status)
        );
    }

    /**
     * Handle an incoming new password request.
     */
    public function reset(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status != Password::PASSWORD_RESET) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                __($status)
            );
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            __($status)
        );
    }

    /**
     * Handle an incoming password edition request.
     */
    public function edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            // When the current password are incorrect
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'Wrong password',
                ResponseErrorCode::AUTH_WRONG_PASSWORD,
            );
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Password edited successfully'
        );
    }


    /**
     * Render the reset password form with the given request and token.
     *
     * @param Request $request The HTTP request object.
     * @param mixed $token The token for password reset. Defaults to null.
     * @return \Inertia\Response The rendered reset password form.
     */
    public function showResetForm(Request $request, $token = null): \Inertia\Response
    {
        $appNameItem = AppInformation::where('key', 'name')->first();
        $appName = $appNameItem ? $appNameItem->value : config('app.name');

        return Inertia::render('auth/AddNewPassword', [
            'token' => $token,
            'email' => $request->query('email'),
            'meta' => [
                'title' => Lang::get('Reset password') . ' - ' . $appName,
                'description' => Lang::get('Reset password'),
                'url' => $request->url(),
            ]
        ]);
    }

    /**
     * Handle an incoming password reset request submission.
     */
    public function submitResetForm(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('home.index')->with('status', __($status))
            : back()->withErrors(['email' => [__($status)]]);
    }
}
