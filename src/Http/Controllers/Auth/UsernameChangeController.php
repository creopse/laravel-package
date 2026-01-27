<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UsernameChangeController extends Controller
{
    /**
     * Change username.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'unique:users'],
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
        $user->username = $request->username;
        $user->save();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Username changed successfully',
        );
    }
}
