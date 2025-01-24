<?php

use Creopse\Creopse\Http\Controllers\ServerStatusController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Server Status Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [ServerStatusController::class, 'check'])->name('root');
