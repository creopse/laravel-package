<?php

use Creopse\Creopse\Http\Controllers\DatabaseController;
use Creopse\Creopse\Http\Controllers\DataChangeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Database Routes
|--------------------------------------------------------------------------
*/

// Connectivity check only - read-only, no user-supplied credentials, and
// polled from the login/auth pages themselves (before a session can exist)
// to surface DB outages before an auth attempt is even made. Must stay
// reachable regardless of installation lock state or auth.
Route::withoutMiddleware(config('installer.excluded_middleware'))
    ->get('/database', [DatabaseController::class, 'check'])
    ->name('database.check');

Route::name('database.')
    ->prefix('/database')
    ->withoutMiddleware(config('installer.excluded_middleware'))
    ->middleware('installation.pending')
    ->group(function () {
        Route::post('/test', [DatabaseController::class, 'test'])->name('test');
        Route::post('/create', [DatabaseController::class, 'create'])->name('create');
        Route::get('/migrate', [DatabaseController::class, 'migrate'])->name('migrate');
        Route::get('/seed', [DatabaseController::class, 'seed'])->name('seed');
    });

// SEC: reads stay public - clients poll change_id to know when to
// invalidate their local cache, before a session necessarily exists.
// Writes used to have no auth at all, letting anyone tamper with the
// ledger those reads rely on.
Route::apiResource('data-changes', DataChangeController::class)->only(['index', 'show']);
Route::get('data-changes/table/{tableName}', [DataChangeController::class, 'showByTableName'])->name('data-changes.show.by-table-name');

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('data-changes', DataChangeController::class)->except(['index', 'show']);
});
