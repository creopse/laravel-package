<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API File Routes
|--------------------------------------------------------------------------
*/

// Writes used to require nothing beyond being logged in - see
// media-files.php. download/check only read files that are already public.
Route::middleware('auth:sanctum')->group(function () {
    Route::name('file.')->prefix('/file')->group(function () {
        // Upload file
        Route::post('/upload', [FileController::class, 'upload'])
            ->middleware('permission:'.PermissionList::UPLOAD_MEDIA->value)
            ->name('upload');

        // Replace file
        Route::post('/replace', [FileController::class, 'replace'])
            ->middleware('permission:'.PermissionList::UPLOAD_MEDIA->value)
            ->name('replace');

        // Delete file
        Route::post('/delete', [FileController::class, 'delete'])
            ->middleware('permission:'.PermissionList::DELETE_MEDIA->value)
            ->name('delete');

        // Download file
        Route::post('/download', [FileController::class, 'download'])->name('download');

        // Check if file exists
        Route::post('/check', [FileController::class, 'check'])->name('check');
    });
});
