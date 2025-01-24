<?php

use Creopse\Creopse\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Email Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::name('email.')->prefix('/email')->group(function () {
        // Send email
        Route::post('/', [EmailController::class, 'send'])->name('send');
    });
});
