<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\UserController;
use Creopse\Creopse\Http\Controllers\UserDeviceController;
use Creopse\Creopse\Http\Controllers\UserPlaceController;
use Creopse\Creopse\Http\Controllers\UserSessionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Users Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::name('user.')->prefix('/user')->group(function () {
        Route::get('/permissions/{user?}', [UserController::class, 'userPermissions'])->name('permissions');

        Route::get('/sessions/{user?}', [UserController::class, 'userSessions'])->name('sessions');

        Route::get('/devices/{user?}', [UserController::class, 'userDevices'])->name('devices');

        Route::get('/place/{user?}', [UserController::class, 'userPlace'])->name('place');

        Route::get('/roles/{user?}', [UserController::class, 'userRoles'])->name('roles');

        Route::get('/email/{email}', [UserController::class, 'userByEmail'])->name('by-email');

        Route::get('/phone/{phone}', [UserController::class, 'userByPhone'])->name('by-phone');

        Route::get('/username/{username}', [UserController::class, 'userByUsername'])->name('by-username');
    });

    Route::name('users.')->prefix('/users')->group(function () {
        Route::put('/self/{user}', [UserController::class, 'updateSelf'])->name('update.self');

        // SEC-07: these previously checked 'action-add-user'/'action-edit-user'/
        // 'action-delete-user', permission names that don't exist anywhere in
        // PermissionList - a leftover from a naming convention dropped in an
        // earlier framework version. No role could ever satisfy them, so user
        // creation/edit/delete were unreachable for everyone, including
        // super-admin. Now aligned with PermissionList (and the admin frontend's
        // matching creopse.admin/src/enums/permission.ts), which is what's
        // actually seeded and assignable via the Roles UI.
        Route::middleware(['permission:'.PermissionList::CREATE_USER->value])->post('/', [UserController::class, 'store'])->name('store');

        Route::middleware(['permission:'.PermissionList::CREATE_USER->value])->post('/import', [UserController::class, 'import'])->name('import');

        Route::middleware(['permission:'.PermissionList::EDIT_USER->value])->put('/{user}', [UserController::class, 'update'])->name('update');

        Route::middleware(['permission:'.PermissionList::DELETE_USER->value])->delete('/{user}', [UserController::class, 'destroy'])->name('destroy');
    });

    // SEC-07: index/list/search/administrators return other users' full PII
    // (email, phone, address, location...) with no scoping beyond being
    // logged in - any self-registered account could enumerate/dump the
    // entire users table. Gated behind the existing, already-seeded
    // view-users permission. `show` and the /user/* lookups keep no route
    // middleware here because they allow unrestricted self-access - see
    // UserController::authorizeViewingUser().
    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->post('users/list', [UserController::class, 'showList'])->name('users.list');
    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->get('users/search/{query?}', [UserController::class, 'searchUsers'])->name('users.search');
    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->get('users/type/administrators', [UserController::class, 'showAdministrators'])->name('users.administrators');

    // SEC-07: index on these three dumps every user's sessions/devices/place
    // (IP, precise geolocation, device fingerprint...) with no scoping.
    // show/update/destroy allow unrestricted self-access instead - see
    // AuthorizesOwnUserData::rejectUnlessOwnedOrPermitted().
    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->get('/user-sessions', [UserSessionController::class, 'index'])->name('user-sessions.index');
    Route::apiResource('user-sessions', UserSessionController::class)->except(['index', 'store', 'update']);

    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->get('/user-devices', [UserDeviceController::class, 'index'])->name('user-devices.index');
    Route::apiResource('user-devices', UserDeviceController::class)->except(['index']);

    Route::middleware(['permission:'.PermissionList::VIEW_USERS->value])->get('/user-place', [UserPlaceController::class, 'index'])->name('user-place.index');
    Route::apiResource('user-place', UserPlaceController::class)->except(['index']);
});
