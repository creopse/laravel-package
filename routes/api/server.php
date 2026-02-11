<?php

use Creopse\Creopse\Http\Controllers\ServerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Server Status Routes
|--------------------------------------------------------------------------
*/

$excludedMiddleware = config('installer.excluded_middleware');

Route::get('/', [ServerController::class, 'check'])->withoutMiddleware($excludedMiddleware)->name('root');

Route::name('server.')
    ->prefix('/server')
    ->withoutMiddleware($excludedMiddleware)
    ->group(function () {
        Route::post('/configure', [ServerController::class, 'configure'])->name('configure');
    });
