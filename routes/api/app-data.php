<?php

use Creopse\Creopse\Http\Controllers\AppInformationController;
use Creopse\Creopse\Http\Controllers\Settings\AppSettingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Data Routes
|--------------------------------------------------------------------------
*/

// Public reads: needed to render branding (logo, colors, auth page
// background) before a session can exist - the login page itself depends
// on them. app-information has nothing sensitive in it at all, so its
// whole index is public; app-settings also holds real secrets (translation
// API keys), so only an explicit, hand-picked allowlist of keys is exposed
// here - see AppSettingController::publicIndex(). Everything else in both
// resources, including writes, stays behind auth:sanctum below.
Route::prefix('/app-settings')->group(function () {
    Route::get('/public', [AppSettingController::class, 'publicIndex'])->name('app-settings.public');
});

Route::prefix('/app-information')->group(function () {
    Route::get('/', [AppInformationController::class, 'index'])->name('app-information.index');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('/app-settings')->group(function () {
        // App Settings
        Route::get('/', [AppSettingController::class, 'index'])->name('app-settings.index');

        Route::put('/', [AppSettingController::class, 'update'])->name('app-settings.update');
    });

    Route::prefix('/app-information')->group(function () {
        // App Information
        Route::put('/', [AppInformationController::class, 'update'])->name('app-information.update');
    });
});
