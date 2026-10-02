<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\SmsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API SMS Routes
|--------------------------------------------------------------------------
*/

// Sends to any recipient from the site's own sender - used by the admin's
// newsletter campaigns and document sharing, both content-management tasks.
// Any account, including one self-registered from a public template, used
// to be able to send through it.
Route::middleware(['auth:sanctum', 'permission:'.PermissionList::MANAGE_CONTENT->value])->group(function () {
    Route::name('sms.')->prefix('/sms')->group(function () {
        // Send sms
        Route::post('/', [SmsController::class, 'send'])->name('send');
    });
});
