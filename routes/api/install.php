<?php

use Creopse\Creopse\Http\Controllers\InstallController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Install Routes
|--------------------------------------------------------------------------
*/

Route::name('install.')->prefix('/install')->group(function () {
    Route::post('/finalize', [InstallController::class, 'finalize'])->name('finalize');
});
