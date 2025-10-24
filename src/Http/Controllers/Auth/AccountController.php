<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;

class AccountController extends Controller
{
    /**
     * Disable account and Destroy an authenticated session.
     */
    public function disableAccount(Request $request): JsonResponse
    {
        $user = $request->user();

        DB::transaction(function () use ($user) {

            User::where('id', $user->id)->update([
                'account_status' => 0
            ]);

            $user->currentAccessToken()->delete();
        });

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Account disabled successfully'
        );
    }
}
