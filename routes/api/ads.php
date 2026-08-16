<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\Ads\AdController;
use Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Ads Stuffs Routes
|--------------------------------------------------------------------------
*/

// SEC: these writes used to only require auth:sanctum - any authenticated
// account, including a self-registered one with zero permissions, could
// reach them.
Route::middleware(['auth:sanctum', 'permission:'.PermissionList::MANAGE_CONTENT->value])->group(function () {
    // Ads
    Route::apiResource('ads', AdController::class)->except(['index', 'show']);

    // Ad identifiers
    Route::apiResource('ad-identifiers', AdIdentifierController::class)->except(['index', 'show']);
});

Route::apiResource('ads', AdController::class)->only(['index', 'show']);
Route::apiResource('ad-identifiers', AdIdentifierController::class)->only(['index', 'show']);
