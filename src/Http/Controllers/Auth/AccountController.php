<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

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
        User::where('id', $request->user()->id)->update([
            'account_status' => 0,
        ]);

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Account disabled successfully'
        );
    }
}
