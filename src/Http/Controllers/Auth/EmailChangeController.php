<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Mail\CommonMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class EmailChangeController extends Controller
{
    /**
     * Change email.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            // See RegisterRequest for why the regex is here (CVE-2026-48019).
            'email' => ['required', 'email', 'regex:/^[^\r\n]*$/', 'unique:users'],
            'current_password' => ['required', 'string'],
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

        // Changing the email address also sends a password reset link to the
        // new one, so a stolen session alone used to be enough to take the
        // account over. The current password is now required, like for a
        // password change.
        if (! Hash::check($request->current_password, $user->password)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'Wrong password',
                ResponseErrorCode::AUTH_WRONG_PASSWORD,
            );
        }

        $previousEmail = $user->email;

        $user->email = $request->email;
        $user->email_verified_at = null;
        $user->save();

        Mail::to($user)->queue(new CommonMail(
            [
                'title' => __('creopse::auth.email_change'),
                'message' => __('creopse::auth.email_changed_successfully'),
            ],
        ));

        // The previous address is told too, so an unexpected change doesn't
        // go unnoticed.
        if ($previousEmail) {
            Mail::to($previousEmail)->queue(new CommonMail(
                [
                    'title' => __('creopse::auth.email_change'),
                    'message' => __('creopse::auth.email_changed_notice', ['email' => $request->email]),
                ],
            ));
        }

        Password::sendResetLink(
            $request->only('email')
        );

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Email changed successfully',
        );
    }
}
