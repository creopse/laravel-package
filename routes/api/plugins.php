<?php

use Creopse\Creopse\Http\Controllers\PluginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Plugins Routes
|--------------------------------------------------------------------------
*/

Route::get('plugins', [PluginController::class, 'index'])->name('plugins.index');
Route::get('plugins/{id}', [PluginController::class, 'show'])->name('plugins.show');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('plugins/install', [PluginController::class, 'install'])->name('plugins.install');
    Route::put('plugins/{id}/update', [PluginController::class, 'update'])->name('plugins.update');
    Route::put('plugins/{id}/enable', [PluginController::class, 'enable'])->name('plugins.enable');
    Route::put('plugins/{id}/disable', [PluginController::class, 'disable'])->name('plugins.disable');
    Route::delete('plugins/{id}/uninstall', [PluginController::class, 'uninstall'])->name('plugins.uninstall');
});
