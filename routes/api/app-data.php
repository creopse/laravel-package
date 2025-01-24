<?php

use Creopse\Creopse\Http\Controllers\AppInformationController;
use Creopse\Creopse\Http\Controllers\Settings\AppSettingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Data Routes
|--------------------------------------------------------------------------
*/

Route::prefix('/app-settings')->group(function () {
    // App Settings
    Route::get('/', [AppSettingController::class, 'index'])->name('app-settings.index');

    Route::put('/', [AppSettingController::class, 'update'])->name('app-settings.update');
});

Route::prefix('/app-information')->group(function () {
    // App Information
    Route::get('/', [AppInformationController::class, 'index'])->name('app-information.index');

    Route::put('/', [AppInformationController::class, 'update'])->name('app-information.update');
});
