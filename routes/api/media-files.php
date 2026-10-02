<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\MediaFileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Media File Routes
|--------------------------------------------------------------------------
*/

// These only required auth:sanctum: any account, including one
// self-registered from a public template, could browse, upload to and wipe
// the media library. Reading is also open to content and news editors,
// whose editors embed a media picker.
$readMedia = 'permission:'.implode('|', [
    PermissionList::VIEW_MEDIA->value,
    PermissionList::UPLOAD_MEDIA->value,
    PermissionList::DELETE_MEDIA->value,
    PermissionList::MANAGE_CONTENT->value,
    PermissionList::MANAGE_NEWS->value,
    PermissionList::CREATE_ARTICLE->value,
    PermissionList::EDIT_ARTICLE->value,
]);
$uploadMedia = 'permission:'.PermissionList::UPLOAD_MEDIA->value;
$deleteMedia = 'permission:'.PermissionList::DELETE_MEDIA->value;

Route::middleware('auth:sanctum')->group(function () use ($readMedia, $uploadMedia, $deleteMedia) {
    Route::name('media-files.')->prefix('/media-files')->group(function () use ($readMedia, $uploadMedia, $deleteMedia) {
        // Get media files
        Route::get('/', [MediaFileController::class, 'index'])->middleware($readMedia)->name('index');

        // Show media file
        Route::get('/{mediaFile}', [MediaFileController::class, 'show'])->middleware($readMedia)->name('show');

        // Show list of media files
        Route::post('/list', [MediaFileController::class, 'showList'])->middleware($readMedia)->name('list');
        Route::post('/paths/list', [MediaFileController::class, 'showListByPaths'])->middleware($readMedia)->name('paths.list');

        // Show list of months
        Route::get('/list/months', [MediaFileController::class, 'showMonthsList'])->middleware($readMedia)->name('list.months');

        // Search media files
        Route::get('/search/{query?}', [MediaFileController::class, 'searchMediaFiles'])->middleware($readMedia)->name('search');

        // Upload media file
        Route::post('/upload', [MediaFileController::class, 'upload'])->middleware($uploadMedia)->name('upload');

        // Replace media file
        Route::post('/replace/{mediaFile}', [MediaFileController::class, 'replace'])->middleware($uploadMedia)->name('replace');

        // Delete media file
        Route::post('/delete', [MediaFileController::class, 'delete'])->middleware($deleteMedia)->name('delete');

        // Destroy media file
        Route::delete('/{mediaFile}', [MediaFileController::class, 'destroy'])->middleware($deleteMedia)->name('destroy');
        Route::delete('/force/all', [MediaFileController::class, 'forceDestroyAll'])->middleware($deleteMedia)->name('force.destroy.all')->withTrashed();
        Route::delete('/force/{mediaFile}', [MediaFileController::class, 'forceDestroy'])->middleware($deleteMedia)->name('force.destroy')->withTrashed();

        // Restore media file
        Route::put('/restore/{mediaFile}', [MediaFileController::class, 'restore'])->middleware($deleteMedia)->name('restore')->withTrashed();
    });
});
