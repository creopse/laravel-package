<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Email Routes
|--------------------------------------------------------------------------
*/

// Sends to any recipient from the site's own sender - used by the admin's
// newsletter campaigns and document sharing, both content-management tasks.
// Any account, including one self-registered from a public template, used
// to be able to send through it.
Route::middleware(['auth:sanctum', 'permission:'.PermissionList::MANAGE_CONTENT->value])->group(function () {
    Route::name('email.')->prefix('/email')->group(function () {
        // Send email
        Route::post('/', [EmailController::class, 'send'])->name('send');
    });
});
