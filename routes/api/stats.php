<?php

use Creopse\Creopse\Http\Controllers\StatsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Stats Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/visits', [StatsController::class, 'getVisits'])->name('visits');

    Route::get('/visitors', [StatsController::class, 'getVisitors'])->name('visitors');

    Route::name('count.')->prefix('/count')->group(function () {
        Route::get('/users', [StatsController::class, 'countUsers'])->name('users');

        Route::get('/administrators', [StatsController::class, 'countAdministrators'])
            ->name('administrators');

        Route::get('/others', [StatsController::class, 'countOthers'])
            ->name('others');

        Route::get('/news-articles', [StatsController::class, 'countNewsArticles'])
            ->name('news-articles');

        Route::get('/news-articles/status/{status}', [StatsController::class, 'countNewsArticlesByStatus'])
            ->name('news-articles.status');

        Route::get('/news-articles/author/{id}', [StatsController::class, 'countNewsArticlesByAuthor'])
            ->name('news-articles.author');

        Route::get('/news-categories', [StatsController::class, 'countNewsCategories'])
            ->name('news-categories');

        Route::get('/news-comments', [StatsController::class, 'countNewsComments'])
            ->name('news-comments');

        Route::get('/news-tags', [StatsController::class, 'countNewsTags'])
            ->name('news-tags');

        Route::get('/media-files', [StatsController::class, 'countMediaFiles'])
            ->name('media-files');

        Route::get('/media-files/type/{type}', [StatsController::class, 'countMediaFilesByType'])
            ->name('media-files.type');

        Route::get('/media-files/trashed', [StatsController::class, 'countTrashedMediaFiles'])
            ->name('media-files.trashed');
    });
});
