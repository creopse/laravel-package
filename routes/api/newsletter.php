<?php

use Creopse\Creopse\Http\Controllers\Newsletter\CampaignController;
use Creopse\Creopse\Http\Controllers\Newsletter\EmailController;
use Creopse\Creopse\Http\Controllers\Newsletter\PhoneController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Newsletter Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('newsletter/campaigns', CampaignController::class);

    Route::apiResource('newsletter/emails', EmailController::class)->except(['store']);

    Route::apiResource('newsletter/phones', PhoneController::class)->except(['store']);
});

Route::apiResource('newsletter/emails', EmailController::class)->only(['store']);

Route::apiResource('newsletter/phones', PhoneController::class)->only(['store']);
