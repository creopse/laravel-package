<?php

use App\Http\Middleware\HandleInertiaRequests;
use Creopse\Creopse\Http\Middleware\LogSessionHistory;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Laravel\Sanctum\Http\Middleware\CheckAbilities;
use Laravel\Sanctum\Http\Middleware\CheckForAnyAbility;
use Spatie\Permission\Middleware\PermissionMiddleware;
use Spatie\Permission\Middleware\RoleMiddleware;
use Spatie\Permission\Middleware\RoleOrPermissionMiddleware;
use TomLerendu\LaravelConvertCaseMiddleware\ConvertRequestToSnakeCase;
use TomLerendu\LaravelConvertCaseMiddleware\ConvertResponseToCamelCase;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web/index.php',
        api: __DIR__.'/../routes/api/index.php',
        commands: __DIR__.'/../routes/console.php',
        apiPrefix: 'api',
        then: function () {
            RateLimiter::for('api', function (Request $request) {
                return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
            });
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        // TrustProxies, HandleCors, PreventRequestsDuringMaintenance,
        // ValidatePostSize, TrimStrings, ConvertEmptyStringsToNull
        // → already included by default in L11, nothing to declare

        // Injects EnsureFrontendRequestsAreStateful at the top of the api group
        $middleware->statefulApi();

        // web group
        // EncryptCookies, AddQueuedCookiesToResponse, StartSession,
        // ShareErrorsFromSession, VerifyCsrfToken, SubstituteBindings
        // → already included by default
        $middleware->web(append: [
            LogSessionHistory::class,
            HandleInertiaRequests::class,
        ]);

        // api group
        // ThrottleRequests:api, SubstituteBindings → already included by default
        $middleware->api(append: [
            ConvertRequestToSnakeCase::class,
            ConvertResponseToCamelCase::class,
            LogSessionHistory::class,
        ]);

        // Aliases
        // auth, auth.basic, auth.session, cache.headers, can, guest,
        // password.confirm, precognitive, signed, throttle, verified
        // → already registered by default in L11
        $middleware->alias([
            'abilities' => CheckAbilities::class,
            'ability' => CheckForAnyAbility::class,
            'permission' => PermissionMiddleware::class,
            'role' => RoleMiddleware::class,
            'role_or_permission' => RoleOrPermissionMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
