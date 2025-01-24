<?php

use Creopse\Creopse\Http\Controllers\News\CategoryController;
use Creopse\Creopse\Http\Controllers\News\ArticleController;
use Creopse\Creopse\Http\Controllers\News\CommentController;
use Creopse\Creopse\Http\Controllers\News\TagController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API News Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    // Articles
    Route::apiResource('news-articles', ArticleController::class)->except(['index', 'show']);
    Route::delete('news-articles/force/{newsArticle}', [ArticleController::class, 'forceDestroy'])->name('articles.force.destroy')->withTrashed();
    Route::put('news-articles/restore/{newsArticle}', [ArticleController::class, 'restore'])->name('articles.restore')->withTrashed();

    // Categories
    Route::put('news-categories/position', [CategoryController::class, 'updatePosition'])->name('categories.update.position');
    Route::apiResource('news-categories', CategoryController::class)->except(['index', 'show']);
    Route::delete('news-categories/force/{newsCategory}', [CategoryController::class, 'forceDestroy'])->name('categories.force.destroy')->withTrashed();
    Route::put('news-categories/restore/{newsCategory}', [CategoryController::class, 'restore'])->name('categories.restore')->withTrashed();

    // Comments
    Route::apiResource('news-comments', CommentController::class)->except(['index', 'show', 'store']);
    Route::delete('news-comments/force/{newsComment}', [CommentController::class, 'forceDestroy'])->name('comments.force.destroy')->withTrashed();
    Route::put('news-comments/restore/{newsComment}', [CommentController::class, 'restore'])->name('comments.restore')->withTrashed();

    // Tags
    Route::apiResource('news-tags', TagController::class)->except(['index', 'show']);
    Route::delete('news-tags/force/{newsTag}', [TagController::class, 'forceDestroy'])->name('tags.force.destroy')->withTrashed();
    Route::put('news-tags/restore/{newsTag}', [TagController::class, 'restore'])->name('tags.restore')->withTrashed();
});

// Articles
Route::get('news-articles/headlines/{limit?}', [ArticleController::class, 'indexHeadlines'])->name('articles.headlines');
Route::get('news-articles/random/{limit?}', [ArticleController::class, 'indexRandomList'])->name('articles.random');
Route::apiResource('news-articles', ArticleController::class)->only(['index', 'show']);
Route::get('news-articles/categories', [ArticleController::class, 'indexWithCategories'])->name('articles.categories.index');
Route::post('news-articles/list', [ArticleController::class, 'showList'])->name('articles.list');
Route::get('news-articles/search/{query?}', [ArticleController::class, 'searchArticles'])->name('articles.search');
Route::get('news-articles/list/months', [ArticleController::class, 'showMonthsList'])->name('articles.list.months');

// Categories
Route::apiResource('news-categories', CategoryController::class)->only(['index', 'show']);
Route::get('news-categories/articles', [CategoryController::class, 'indexWithArticles'])->name('categories.articles.index');
Route::get('news-categories/articles/{newsCategory?}', [CategoryController::class, 'showWithArticles'])->name('category.articles.index');

// Comments
Route::apiResource('news-comments', CommentController::class)->only(['index', 'show', 'store']);

// Tags
Route::apiResource('news-tags', TagController::class)->only(['index', 'show']);
Route::get('news-tags/articles', [TagController::class, 'indexWithArticles'])->name('tags.articles.index');
Route::get('news-tags/articles/{newsTag?}', [TagController::class, 'showWithArticles'])->name('tag.articles.index');
