<?php

use Creopse\Creopse\Http\Controllers\Access\PermissionController;
use Creopse\Creopse\Http\Controllers\Access\RoleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Access Stuffs Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // Roles
    Route::apiResource('roles', RoleController::class);
    Route::get('roles/user/{user?}', [RoleController::class, 'userIndex'])->name('roles.user.index');

    // Permissions
    Route::apiResource('permissions', PermissionController::class);
    Route::get('permissions/user/{user?}', [PermissionController::class, 'userIndex'])->name('permissions.user.index');
});
