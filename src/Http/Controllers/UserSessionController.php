<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\UserSession;
use Creopse\Creopse\Traits\AuthorizesOwnUserData;

class UserSessionController extends Controller
{
    use AuthorizesOwnUserData;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(UserSession::with('user')->get());
    }

    /**
     * Display the specified resource.
     */
    public function show(UserSession $userSession)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userSession->user_id)) {
            return $unauthorized;
        }

        return $this->sendResponse($userSession->load('user'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserSession $userSession)
    {
        if ($unauthorized = $this->rejectUnlessOwnedOrPermitted($userSession->user_id)) {
            return $unauthorized;
        }

        $userSession->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'User session deleted successfully'
        );
    }
}
