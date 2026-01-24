<?php

use Creopse\Creopse\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Sessions Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/sessions', [SessionController::class, 'index']);

    Route::delete('/sessions/{type}/{id}', [SessionController::class, 'revoke']);

    Route::delete('/sessions/revoke-all', [SessionController::class, 'revokeAll']);
});
