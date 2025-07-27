<?php

use Creopse\Creopse\Http\Controllers\TranslationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Lang Routes
|--------------------------------------------------------------------------
*/

Route::get('/translations/{locale}', [TranslationController::class, 'getTranslations']);
