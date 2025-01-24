<?php

use Creopse\Creopse\Http\Controllers\DatabaseController;
use Creopse\Creopse\Http\Controllers\DataChangeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Database Routes
|--------------------------------------------------------------------------
*/

Route::name('database.')->prefix('/database')->group(function () {
    Route::get('/', [DatabaseController::class, 'check'])->name('check');
    Route::get('/create', [DatabaseController::class, 'create'])->name('create');
    Route::post('/create', [DatabaseController::class, 'create'])->name('create.post');
    Route::get('/migrate', [DatabaseController::class, 'migrate'])->name('migrate');
    Route::get('/seed', [DatabaseController::class, 'seed'])->name('seed');
});

Route::apiResource('data-changes', DataChangeController::class);
Route::get('data-changes/table/{tableName}', [DataChangeController::class, 'showByTableName'])->name('data-changes.show.by-table-name');
