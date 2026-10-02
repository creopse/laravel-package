<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    /**
     * Disable account and Destroy an authenticated session.
     */
    public function disableAccount(Request $request): JsonResponse
    {
        $user = User::findOrFail($request->user()->id);

        $user->update([
            'account_status' => AccountStatus::DISABLED->value,
        ]);

        $user->revokeAllSessions();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Account disabled successfully'
        );
    }
}
