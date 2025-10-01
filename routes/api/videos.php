<?php

use Creopse\Creopse\Http\Controllers\Content\VideoCategoryController;
use Creopse\Creopse\Http\Controllers\Settings\VideoSettingController;
use Creopse\Creopse\Http\Controllers\Content\VideoItemController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Videos Stuffs Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // Video items
    Route::apiResource('video-items', VideoItemController::class)->except(['index', 'show']);

    Route::prefix('/video-items')->group(function () {
        // Destroy video item
        Route::delete('/force/{videoItem}', [VideoItemController::class, 'forceDestroy'])->name('force.destroy')->withTrashed();

        // Restore video item
        Route::put('/restore/{videoItem}', [VideoItemController::class, 'restore'])->name('restore')->withTrashed();

        // Update youtube channel videos
        Route::put('/youtube/channel-videos', [VideoItemController::class, 'updateYoutubeChannelVideos'])->name('youtube-channel-videos.update');
    });

    Route::prefix('/video-settings')->group(function () {
        // Video Settings
        Route::get('/', [VideoSettingController::class, 'index'])->name('video-settings.index');

        Route::put('/', [VideoSettingController::class, 'update'])->name('video-settings.update');
    });

    // Video Categories
    Route::put('video-categories/position', [VideoCategoryController::class, 'updatePosition'])->name('video-categories.update.position');
    Route::apiResource('video-categories', VideoCategoryController::class)->except(['index', 'show']);
    Route::delete('video-categories/force/{videoCategory}', [VideoCategoryController::class, 'forceDestroy'])->name('video-categories.force.destroy')->withTrashed();
    Route::put('video-categories/restore/{videoCategory}', [VideoCategoryController::class, 'restore'])->name('video-categories.restore')->withTrashed();
});

// Items
Route::apiResource('video-items', VideoItemController::class)->only(['index', 'show']);

// Categories
Route::apiResource('video-categories', VideoCategoryController::class)->only(['index', 'show']);
Route::get('video-categories/items', [VideoCategoryController::class, 'indexWithItems'])->name('video-categories.items.index');
Route::get('video-categories/items/{videoCategory?}', [VideoCategoryController::class, 'showWithItems'])->name('video-category.items.index');
