<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Http\Controllers\PluginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Plugins Routes
|--------------------------------------------------------------------------
*/

// SEC-09: install() extracts an uploaded ZIP straight into storage/plugins
// (backend PHP) and public/creopse/plugins (frontend), then runs its
// migrations and loads it - any authenticated caller could get arbitrary
// code execution, and index/show were reachable with no auth at all. The
// admin frontend already gates the whole Plugins page behind manage-plugins
// (creopse.admin/src/router/store.ts) - a permission that, notably, isn't
// granted to the admin role by default, only super-admin. Match that here.
Route::middleware(['auth:sanctum', 'permission:'.PermissionList::MANAGE_PLUGINS->value])->group(function () {
    Route::get('plugins', [PluginController::class, 'index'])->name('plugins.index');
    Route::get('plugins/{id}', [PluginController::class, 'show'])->name('plugins.show');
    Route::post('plugins/install', [PluginController::class, 'install'])->name('plugins.install');
    Route::put('plugins/{id}/update', [PluginController::class, 'update'])->name('plugins.update');
    Route::put('plugins/{id}/enable', [PluginController::class, 'enable'])->name('plugins.enable');
    Route::put('plugins/{id}/disable', [PluginController::class, 'disable'])->name('plugins.disable');
    Route::delete('plugins/{id}/uninstall', [PluginController::class, 'uninstall'])->name('plugins.uninstall');
});
