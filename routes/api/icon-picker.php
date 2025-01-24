<?php

use Creopse\Creopse\Http\Controllers\IconPickerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Icon Picker Routes
|--------------------------------------------------------------------------
*/

Route::post('/search-icons', [IconPickerController::class, 'searchIcons']);
