<?php

use Creopse\Creopse\Http\Controllers\SmsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API SMS Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::name('sms.')->prefix('/sms')->group(function () {
        // Send sms
        Route::post('/', [SmsController::class, 'send'])->name('send');
    });
});
