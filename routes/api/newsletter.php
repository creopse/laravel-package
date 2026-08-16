<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\Newsletter\CampaignController;
use Creopse\Creopse\Http\Controllers\Newsletter\EmailController;
use Creopse\Creopse\Http\Controllers\Newsletter\PhoneController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Newsletter Routes
|--------------------------------------------------------------------------
*/

// SEC: these used to only require auth:sanctum - any authenticated
// account, including a self-registered one with zero permissions, could
// list/read/write subscriber emails and phone numbers, not just campaigns.
Route::middleware(['auth:sanctum', 'permission:'.PermissionList::MANAGE_NEWS->value])->group(function () {
    Route::apiResource('newsletter/campaigns', CampaignController::class);

    Route::apiResource('newsletter/emails', EmailController::class)->except(['store']);

    Route::apiResource('newsletter/phones', PhoneController::class)->except(['store']);
});

Route::apiResource('newsletter/emails', EmailController::class)->only(['store']);

Route::apiResource('newsletter/phones', PhoneController::class)->only(['store']);
