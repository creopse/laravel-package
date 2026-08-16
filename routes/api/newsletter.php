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
// list/read/write campaigns and the subscriber list. Newsletter lives on
// the admin's Content Management page, so it's gated by manage-content
// here, same as the rest of that page - not manage-news.
Route::middleware(['auth:sanctum', 'permission:'.PermissionList::MANAGE_CONTENT->value])->group(function () {
    Route::apiResource('newsletter/campaigns', CampaignController::class);

    Route::apiResource('newsletter/emails', EmailController::class)->except(['store']);

    Route::apiResource('newsletter/phones', PhoneController::class)->except(['store']);
});

Route::apiResource('newsletter/emails', EmailController::class)->only(['store']);

Route::apiResource('newsletter/phones', PhoneController::class)->only(['store']);
