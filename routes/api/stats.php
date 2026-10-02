<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\StatsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Stats Routes
|--------------------------------------------------------------------------
*/

// Dashboard figures. The news and media counts are also shown on the news
// and media library screens, so their editors can read them too.
$viewNewsStats = 'permission:'.implode('|', [
    PermissionList::VIEW_DASHBOARD->value,
    PermissionList::MANAGE_NEWS->value,
    PermissionList::CREATE_ARTICLE->value,
    PermissionList::EDIT_ARTICLE->value,
]);
$viewMediaStats = 'permission:'.implode('|', [
    PermissionList::VIEW_DASHBOARD->value,
    PermissionList::VIEW_MEDIA->value,
    PermissionList::UPLOAD_MEDIA->value,
    PermissionList::DELETE_MEDIA->value,
]);

$viewDashboard = 'permission:'.PermissionList::VIEW_DASHBOARD->value;

Route::middleware('auth:sanctum')->group(function () use ($viewDashboard, $viewNewsStats, $viewMediaStats) {

    Route::get('/visits', [StatsController::class, 'getVisits'])->middleware($viewDashboard)->name('visits');

    Route::get('/visitors', [StatsController::class, 'getVisitors'])->middleware($viewDashboard)->name('visitors');

    Route::name('count.')->prefix('/count')->group(function () use ($viewDashboard, $viewNewsStats, $viewMediaStats) {
        Route::get('/users', [StatsController::class, 'countUsers'])->middleware($viewDashboard)->name('users');

        Route::get('/administrators', [StatsController::class, 'countAdministrators'])->middleware($viewDashboard)
            ->name('administrators');

        Route::get('/others', [StatsController::class, 'countOthers'])->middleware($viewDashboard)
            ->name('others');

        Route::get('/news-articles', [StatsController::class, 'countNewsArticles'])->middleware($viewNewsStats)
            ->name('news-articles');

        Route::get('/news-articles/status/{status}', [StatsController::class, 'countNewsArticlesByStatus'])->middleware($viewNewsStats)
            ->name('news-articles.status');

        Route::get('/news-articles/author/{id}', [StatsController::class, 'countNewsArticlesByAuthor'])->middleware($viewNewsStats)
            ->name('news-articles.author');

        Route::get('/news-categories', [StatsController::class, 'countNewsCategories'])->middleware($viewNewsStats)
            ->name('news-categories');

        Route::get('/news-comments', [StatsController::class, 'countNewsComments'])->middleware($viewNewsStats)
            ->name('news-comments');

        Route::get('/news-tags', [StatsController::class, 'countNewsTags'])->middleware($viewNewsStats)
            ->name('news-tags');

        Route::get('/media-files', [StatsController::class, 'countMediaFiles'])->middleware($viewMediaStats)
            ->name('media-files');

        Route::get('/media-files/type/{type}', [StatsController::class, 'countMediaFilesByType'])->middleware($viewMediaStats)
            ->name('media-files.type');

        Route::get('/media-files/trashed', [StatsController::class, 'countTrashedMediaFiles'])->middleware($viewMediaStats)
            ->name('media-files.trashed');
    });
});
