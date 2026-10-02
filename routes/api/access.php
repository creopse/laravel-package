<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\Access\PermissionController;
use Creopse\Creopse\Http\Controllers\Access\RoleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Access Stuffs Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // Registered before the resources so "user" isn't captured as a
    // {role}/{permission} id by their show routes. Self-access is always
    // allowed, someone else's requires view-users - see indexUser().
    Route::get('roles/user/{user?}', [RoleController::class, 'indexUser'])->name('roles.user.index');
    Route::get('permissions/user/{user?}', [PermissionController::class, 'indexUser'])->name('permissions.user.index');

    // These used to require nothing beyond being logged in: any account -
    // including one self-registered from a public template - could edit
    // its own role's permissions and grant itself full access. Gated the
    // same way the admin frontend gates its Roles/Permissions screens
    // (creopse.admin/src/router/store.ts).
    Route::middleware(['permission:'.PermissionList::VIEW_ROLES->value.'|'.PermissionList::MANAGE_ROLES->value])
        ->apiResource('roles', RoleController::class)->only(['index', 'show']);
    Route::middleware(['permission:'.PermissionList::MANAGE_ROLES->value])
        ->apiResource('roles', RoleController::class)->only(['store', 'update', 'destroy']);

    Route::middleware(['permission:'.PermissionList::VIEW_PERMISSIONS->value.'|'.PermissionList::MANAGE_PERMISSIONS->value])
        ->apiResource('permissions', PermissionController::class)->only(['index', 'show']);
    Route::middleware(['permission:'.PermissionList::MANAGE_PERMISSIONS->value])
        ->apiResource('permissions', PermissionController::class)->only(['store', 'update', 'destroy']);
});
