<?php

namespace Creopse\Creopse\Http\Controllers\Auth;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TokenController extends Controller
{
    public function index(Request $request, string $name): JsonResponse
    {
        $tokens = $request->user()->tokens()->where('name', $name)->get();

        return $this->sendResponse($tokens);
    }

    public function create(Request $request, string $name): JsonResponse
    {
        $token = $request->user()->createToken($name);

        return $this->sendResponse(['token' => $token->plainTextToken]);
    }

    public function revoke(Request $request, int $id): JsonResponse
    {
        $token = $request->user()->tokens()->find($id);

        if ($token) {
            // Revoke the token
            $token->delete();

            return $this->sendResponse(
                null,
                ResponseStatusCode::OK,
                'Token revoked successfully'
            );
        } else {
            // Token not found
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'Token not found'
            );
        }
    }
}
