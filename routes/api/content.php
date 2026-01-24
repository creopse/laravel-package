<?php

use Creopse\Creopse\Http\Controllers\Content\{
    PageController,
    SectionController,
    ContentModelController,
    ContentModelItemController,
    MenuController,
    MenuItemController,
    MenuItemGroupController,
    MenuLocationController,
    PermalinkController,
};
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Content Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('pages', PageController::class)->except(['index', 'show']);

    Route::apiResource('menus', MenuController::class)->except(['index', 'show']);

    Route::put('menu/items/position', [MenuItemController::class, 'updatePosition'])->name('menu.update.items.position');

    Route::apiResource('menu/items', MenuItemController::class)->except(['index', 'show'])->parameters(['items' => 'menuItem'])->names('menu.items');

    Route::apiResource('menu-locations', MenuLocationController::class)->except(['index', 'show']);

    Route::apiResource('menu-item-groups', MenuItemGroupController::class)->except(['index', 'show']);

    Route::apiResource('sections', SectionController::class)->except(['index', 'show']);

    Route::apiResource('permalinks', PermalinkController::class)->except(['index', 'show']);

    Route::apiResource('content-models', ContentModelController::class)->except(['index', 'show']);

    Route::apiResource('content-model/items', ContentModelItemController::class)->except(['index', 'show'])->parameters(['items' => 'contentModelItem'])->names('content-model.items');

    Route::post('content-model-items/list', [ContentModelItemController::class, 'showList'])->name('content-model.items.list');

    Route::get('content-model-items/search/{query?}/{contentModelId?}', [ContentModelItemController::class, 'searchItems'])->name('content-model.items.search');

    Route::put('content-model-items/related/{contentModelItem}', [ContentModelItemController::class, 'updateRelatedItems'])->name('content-model.items.related');

    Route::put('sections/{section}/data-source-page', [SectionController::class, 'updateDataSourcePage'])->name('sections.update.data-source-page');

    Route::put('sections/{section}/duplicate', [SectionController::class, 'duplicateSection'])->name('sections.update.duplicate');

    Route::put('sections/{section}/copy-data', [SectionController::class, 'copySectionData'])->name('sections.update.copy-data');

    Route::get('sections/{slug}/link/{linkId}/page/{pageId}', [SectionController::class, 'showLinkedSection'])->name('sections.show.linked');

    Route::put('permalinks', [PermalinkController::class, 'updateAll'])->name('permalinks.update.all');
});

Route::apiResource('pages', PageController::class)->only(['index', 'show']);

Route::apiResource('menus', MenuController::class)->only(['index', 'show']);

Route::apiResource('menu/items', MenuItemController::class)->only(['index', 'show'])->parameters(['items' => 'menuItem'])->names('menu.items');

Route::apiResource('menu-locations', MenuLocationController::class)->only(['index', 'show']);

Route::apiResource('menu-item-groups', MenuItemGroupController::class)->only(['index', 'show']);

Route::apiResource('sections', SectionController::class)->only(['index', 'show']);

Route::apiResource('permalinks', PermalinkController::class)->only(['index', 'show']);

Route::apiResource('content-models', ContentModelController::class)->only(['index', 'show']);

Route::apiResource('content-model/items', ContentModelItemController::class)->only(['index', 'show'])->parameters(['items' => 'contentModelItem'])->names('content-model.items');

Route::post('content-model/user-items', [ContentModelItemController::class, 'storeUserItem']);

Route::put('content-model/user-items/{contentModelItem}', [ContentModelItemController::class, 'updateUserItem']);

Route::delete('content-model/user-items/{contentModelItem}', [ContentModelItemController::class, 'destroyUserItem']);

Route::get('section-data/{sectionSlug}/source/{pageSlug}/link/{linkId}', [SectionController::class, 'getSectionData'])->name('section.data');
