<?php

use Creopse\Creopse\Http\Controllers\ServerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Server Status Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [ServerController::class, 'check'])->name('root');

Route::name('server.')->prefix('/server')->group(function () {
    Route::post('/configure', [ServerController::class, 'configure'])->name('configure');
});
