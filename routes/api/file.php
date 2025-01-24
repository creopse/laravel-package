<?php

use Creopse\Creopse\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API File Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::name('file.')->prefix('/file')->group(function () {
        // Upload file
        Route::post('/upload', [FileController::class, 'upload'])->name('upload');

        // Replace file
        Route::post('/replace', [FileController::class, 'replace'])->name('replace');

        // Delete file
        Route::post('/delete', [FileController::class, 'delete'])->name('delete');

        // Download file
        Route::post('/download', [FileController::class, 'download'])->name('download');
    });
});
