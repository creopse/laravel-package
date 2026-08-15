<?php

use Creopse\Creopse\Http\Controllers\Auth\AccountController;
use Creopse\Creopse\Http\Controllers\Auth\EmailChangeController;
use Creopse\Creopse\Http\Controllers\Auth\EmailVerificationController;
use Creopse\Creopse\Http\Controllers\Auth\LoginController;
use Creopse\Creopse\Http\Controllers\Auth\LogoutController;
use Creopse\Creopse\Http\Controllers\Auth\PasswordResetController;
use Creopse\Creopse\Http\Controllers\Auth\ProviderController;
use Creopse\Creopse\Http\Controllers\Auth\RegistrationController;
use Creopse\Creopse\Http\Controllers\Auth\TokenController;
use Creopse\Creopse\Http\Controllers\Auth\UsernameChangeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Auth Routes
|--------------------------------------------------------------------------
*/

Route::prefix('/auth')->group(function () {
    // SEC-12: these unauthenticated, credential/identity-sensitive endpoints
    // used to rely solely on the app-wide API rate limit (60-600 req/min per
    // IP, shared with all other traffic), which is far too loose to slow
    // down brute-force/credential-stuffing or registration/reset-email spam.
    Route::post('/login', LoginController::class)
        ->middleware('throttle:5,1')
        ->name('login');

    Route::post('/register', [RegistrationController::class, 'registerUser'])
        ->middleware('throttle:5,1')
        ->name('register');

    Route::post('/google', [ProviderController::class, 'authWithGoogle'])
        ->middleware('throttle:5,1')
        ->name('provider.google');

    Route::post('/apple', [ProviderController::class, 'authWithApple'])
        ->middleware('throttle:5,1')
        ->name('provider.apple');

    Route::post('/phone', [ProviderController::class, 'authWithPhone'])
        ->middleware('throttle:5,1')
        ->name('provider.phone');

    Route::post('/phone/verify', [ProviderController::class, 'verifyPhoneAuth'])
        ->middleware('throttle:5,1')
        ->name('provider.phone.verify');

    Route::post('/profile', [RegistrationController::class, 'registerProfile'])
        ->middleware('auth:sanctum')
        ->name('profile.register');

    Route::put('/profile/{id}', [RegistrationController::class, 'updateProfile'])
        ->middleware('auth:sanctum')
        ->name('profile.update');

    Route::post('/send-password-link', [PasswordResetController::class, 'send'])
        ->middleware('throttle:5,1')
        ->name('password.send.link');

    Route::post('/reset-password', [PasswordResetController::class, 'reset'])
        ->middleware('throttle:5,1')
        ->name('password.reset.link');

    Route::post('/edit-password', [PasswordResetController::class, 'edit'])
        ->middleware('auth:sanctum')
        ->name('password.edit');

    Route::post('/edit-email', EmailChangeController::class)
        ->middleware('auth:sanctum')
        ->name('email.edit');

    Route::post('/edit-username', UsernameChangeController::class)
        ->middleware('auth:sanctum')
        ->name('username.edit');

    Route::get('/verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])
        ->middleware(['auth:sanctum', 'throttle:6,1'])
        ->name('verification.verify.email');

    Route::get('/send-verification-email', [EmailVerificationController::class, 'send'])
        ->middleware(['auth:sanctum', 'throttle:6,1'])
        ->name('verification.send.email');

    Route::get('/logout/{guard?}', LogoutController::class)
        ->middleware('auth:sanctum')
        ->name('logout');

    Route::get('/disable-account', [AccountController::class, 'disableAccount'])
        ->middleware('auth:sanctum')
        ->name('disable-account');

    Route::name('tokens.')->prefix('/tokens')->group(function () {
        Route::get('/{name}', [TokenController::class, 'index'])
            ->middleware('auth:sanctum')
            ->name('index');

        Route::get('/create/{name}', [TokenController::class, 'create'])
            ->middleware('auth:sanctum')
            ->name('create');

        Route::post('/revoke/{id}', [TokenController::class, 'revoke'])
            ->middleware('auth:sanctum')
            ->name('revoke');
    });
});
