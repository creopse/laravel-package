<?php

use Creopse\Creopse\Http\Controllers\Ads\AdController;
use Creopse\Creopse\Http\Controllers\Ads\AdIdentifierController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Ads Stuffs Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // Ads
    Route::apiResource('ads', AdController::class)->except(['index', 'show']);

    // Ad identifiers
    Route::apiResource('ad-identifiers', AdIdentifierController::class)->except(['index', 'show']);
});

Route::apiResource('ads', AdController::class)->only(['index', 'show']);
Route::apiResource('ad-identifiers', AdIdentifierController::class)->only(['index', 'show']);
