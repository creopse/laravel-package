<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Events\Auth\EmailVerifiedEvent;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Lang;
use Illuminate\View\View;
use Inertia\Inertia;

class EmailVerificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function send(Request $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Email already verified',
                ResponseErrorCode::AUTH_EMAIL_ALREADY_VERIFIED
            );
        }

        $request->user()->sendEmailVerificationNotification();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Verification email sent successfully'
        );
    }

    /**
     * Mark the authenticated user's email address as verified.
     */
    public function verify(EmailVerificationRequest $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {

            return $this->sendResponse(
                null,
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Email already verified',
                ResponseErrorCode::AUTH_EMAIL_ALREADY_VERIFIED
            );
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new EmailVerifiedEvent($request->user()->id));
        }

        return $this->sendResponse(
            [
                'user' => new UserResource($request->user()->load(['profile', 'roles', 'permissions'])),
            ],
            ResponseStatusCode::OK,
            'Email verified successfully'
        );
    }

    /**
     * Verify the user's email manually by checking the provided ID and hash.
     *
     * @param Request $request The HTTP request object.
     * @param int $id The ID of the user to verify.
     * @param string $hash The hash to verify the email.
     * @return RedirectResponse|\Inertia\Response The response indicating the verification status.
     */
    public function verifyManually(Request $request, int $id, string $hash): RedirectResponse|\Inertia\Response
    {
        // If data not provided redirect to home
        if ($id > 0 && $hash) {

            $user = User::find($id);

            if ($user) {
                $appNameItem = AppInformation::where('key', 'name')->first();
                $appName = $appNameItem ? $appNameItem->value : config('app.name');

                if ($user->hasVerifiedEmail()) {
                    return Inertia::render('auth/VerifyEmail', [
                        'alreadyVerified' => true,
                        'meta' => [
                            'title' => Lang::get('Verify email') . ' - ' . $appName,
                            'description' => Lang::get('Your email address has already been verified. You can now access all features.'),
                            'url' => $request->url(),
                        ]
                    ]);
                }

                if (hash_equals(sha1($user->getEmailForVerification()), (string) $hash)) {

                    if ($user->markEmailAsVerified()) {

                        event(new EmailVerifiedEvent($user->id));

                        return Inertia::render('auth/VerifyEmail', [
                            'alreadyVerified' => false,
                            'meta' => [
                                'title' => Lang::get('Verify email') . ' - ' . $appName,
                                'description' => Lang::get('Your email address has been successfully verified. You can now access all the features.'),
                                'url' => $request->url(),
                            ]
                        ]);
                    }
                }
            }
        }

        return redirect()->intended();
    }
}
