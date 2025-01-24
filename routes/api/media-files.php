<?php

use Creopse\Creopse\Http\Controllers\MediaFileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Media File Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::name('media-files.')->prefix('/media-files')->group(function () {
        // Get media files
        Route::get('/', [MediaFileController::class, 'index'])->name('index');

        // Show media file
        Route::get('/{mediaFile}', [MediaFileController::class, 'show'])->name('show');

        // Show list of media files
        Route::post('/list', [MediaFileController::class, 'showList'])->name('list');
        Route::post('/paths/list', [MediaFileController::class, 'showListByPaths'])->name('paths.list');

        // Show list of months
        Route::get('/list/months', [MediaFileController::class, 'showMonthsList'])->name('list.months');

        // Search media files
        Route::get('/search/{query?}', [MediaFileController::class, 'searchMediaFiles'])->name('search');

        // Upload media file
        Route::post('/upload', [MediaFileController::class, 'upload'])->name('upload');

        // Replace media file
        Route::post('/replace/{mediaFile}', [MediaFileController::class, 'replace'])->name('replace');

        // Delete media file
        Route::post('/delete', [MediaFileController::class, 'delete'])->name('delete');

        // Destroy media file
        Route::delete('/{mediaFile}', [MediaFileController::class, 'destroy'])->name('destroy');
        Route::delete('/force/all', [MediaFileController::class, 'forceDestroyAll'])->name('force.destroy.all')->withTrashed();
        Route::delete('/force/{mediaFile}', [MediaFileController::class, 'forceDestroy'])->name('force.destroy')->withTrashed();

        // Restore media file
        Route::put('/restore/{mediaFile}', [MediaFileController::class, 'restore'])->name('restore')->withTrashed();
    });
});
