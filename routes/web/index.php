<?php

use Creopse\Creopse\Enums\MenuItemTargetType;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController;
use Creopse\Creopse\Http\Controllers\Auth\PasswordResetController;
use Creopse\Creopse\Http\Controllers\DynamicPageController;
use Creopse\Creopse\Models\AppSetting;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\Permalink;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

try {
    DB::connection()->getPdo();
    if (Schema::hasTable('menus')) {
        $menus = Menu::all()->load(['items']);

        foreach ($menus as $menu) {
            foreach ($menu->items as $menuItem) {
                if (
                    $menuItem->target_type === MenuItemTargetType::PAGE_LINK->value &&
                    $menuItem->path && !Route::has(Functions::generateRouteNameFromPath($menuItem->path)) && $menuItem->is_active
                ) {
                    Route::get($menuItem->path, [DynamicPageController::class, 'getPage'])->name(Functions::generateRouteNameFromPath($menuItem->path));
                }
            }
        }
    }
    if (Schema::hasTable('permalinks')) {
        $permalinks = Permalink::all();

        foreach ($permalinks as $permalink) {
            if ($permalink->path_prefix && !Route::has(Functions::generateRouteNameFromPath($permalink->path_prefix))) {
                Route::get(rtrim($permalink->path_prefix, '/') . '/{id}', [DynamicPageController::class, 'getContentPage'])
                    ->name(Functions::generateRouteNameFromPath($permalink->path_prefix));
            }
        }
    }
    if (Schema::hasTable('app_settings')) {
        $basePathItem = AppSetting::where('key', 'basePath')->first();
        $basePath = $basePathItem && !empty($basePathItem->value) ? $basePathItem->value : 'creopse';

        Route::get('/' . $basePath . '/{any?}', function () {
            return file_get_contents(public_path('creopse/index.html'));
        })->where('any', '.*');
    }
} catch (Exception $e) {
    //
}

Route::get('/verify-email/{id}/{hash}', [EmailVerificationController::class, 'verifyManually'])
    ->middleware('guest')->name('verification.verify');

Route::get('/reset-password/{token}', [PasswordResetController::class, 'showResetForm'])
    ->middleware('guest')->name('password.reset');

Route::post('/reset-password', [PasswordResetController::class, 'submitResetForm'])
    ->middleware('guest')->name('password.update');

Route::feeds();
