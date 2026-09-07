<?php

namespace Creopse\Creopse\Traits;

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

trait AuthorizesOwnUserData
{
    /**
     * SEC-07: UserSession/UserDevice/UserPlace records used to be readable
     * and deletable by any authenticated caller regardless of who they
     * belong to. A caller can always access their own record; accessing
     * someone else's requires the given permission (view-users by default).
     */
    private function rejectUnlessOwnedOrPermitted(?int $ownerId, PermissionList $permission = PermissionList::VIEW_USERS): ?JsonResponse
    {
        if ($ownerId === Auth::id() || Auth::user()->can($permission->value)) {
            return null;
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::FORBIDDEN,
            'You are not allowed to access this resource',
        );
    }
}
