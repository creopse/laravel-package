<?php

use Creopse\Creopse\Http\Controllers\PluginsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Plugins Routes
|--------------------------------------------------------------------------
*/

Route::get('plugins', [PluginsController::class, 'index'])->name('plugins.index');
