<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Models\UserSession;

class UserSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(UserSession::with(User::class)->get());
    }

    /**
     * Display the specified resource.
     */
    public function show(UserSession $userSession)
    {
        return $this->sendResponse($userSession::with(User::class)->get());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserSession $userSession)
    {
        $userSession->delete();
        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User session deleted successfully'
        );
    }
}
