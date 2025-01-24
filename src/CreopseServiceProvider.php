<?php

namespace Creopse\Creopse;

use Creopse\Creopse\Console\Commands\{Install, MakeSection, MakeWidget, RemoveSection, RemoveWidget, ScheduledCommand};
use Creopse\Creopse\Database\Seeders\DatabaseSeeder;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Database\Seeder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class CreopseServiceProvider extends ServiceProvider
{
    protected $configFiles = [
        'creopse',
        'auth',
        'cors',
        'feed',
        'mail',
        'image',
        'sanctum',
        'logging',
        'services',
        'database',
        'laratrust',
        'laratrust_seeder',
        'thumbnail_sizes',
    ];

    public function boot()
    {
        // Hook into the application's scheduler
        $this->app->booted(function () {
            $schedule = $this->app->make(Schedule::class);

            $schedule->command('queue:work --stop-when-empty')
                ->everyMinute()
                ->withoutOverlapping();

            // Delete password reset tokens that have expired every 15 minutes
            $schedule->command('auth:clear-resets')->everyFifteenMinutes();
        });

        // Register middleware aliases
        $this->app['router']->aliasMiddleware('verified', \Creopse\Creopse\Http\Middleware\EnsureEmailIsVerified::class);
        $this->app['router']->aliasMiddleware('abilities', \Laravel\Sanctum\Http\Middleware\CheckAbilities::class);
        $this->app['router']->aliasMiddleware('ability', \Laravel\Sanctum\Http\Middleware\CheckForAnyAbility::class);

        // Configure Rate Limiting
        RateLimiter::for('creopse-api', function (Request $request) {
            $limit = config('creopse.rate_limit', 600);
            $by = config('creopse.rate_limit_by') === 'user'
                ? $request->user()?->id
                : $request->ip();

            return Limit::perMinute($limit)->by($by);
        });

        // Load api routes
        Route::group([
            'prefix' => 'api',
            'middleware' => [
                'throttle:creopse-api',
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
                \TomLerendu\LaravelConvertCaseMiddleware\ConvertRequestToSnakeCase::class,
                \TomLerendu\LaravelConvertCaseMiddleware\ConvertResponseToCamelCase::class,
                \Creopse\Creopse\Http\Middleware\LogSessionHistory::class,
                \Creopse\Creopse\Http\Middleware\CheckApiKey::class,
            ],
        ], function () {
            $this->loadRoutesFrom(__DIR__ . '/../routes/api/index.php');
        });

        // Load web routes
        Route::group([
            'middleware' => [
                \App\Http\Middleware\EncryptCookies::class,
                \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
                \Illuminate\Session\Middleware\StartSession::class,
                \Illuminate\View\Middleware\ShareErrorsFromSession::class,
                \App\Http\Middleware\VerifyCsrfToken::class,
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
                \Creopse\Creopse\Http\Middleware\LogSessionHistory::class,
                \Creopse\Creopse\Http\Middleware\HandleInertiaRequests::class
            ],
        ], function () {
            $this->loadRoutesFrom(__DIR__ . '/../routes/web/index.php');
        });

        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'creopse');

        // Load migrations
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        // Load translations
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'creopse');
        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang', 'creopse');

        // Load commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                Install::class,
                MakeSection::class,
                MakeWidget::class,
                RemoveSection::class,
                RemoveWidget::class,
                ScheduledCommand::class,
            ]);
        }

        // Register seeders
        $this->registerSeeders();

        // Prepare config files for publishing
        $configFiles = [];
        foreach ($this->configFiles as $config) {
            $configFiles[__DIR__ . "/../config/{$config}.php"] = config_path("{$config}.php");
        }

        // Publish config files
        $this->publishes($configFiles, 'creopse-all-config');

        // Publish group configs by type
        $this->publishes([
            __DIR__ . '/../config/auth.php' => config_path('auth.php'),
            __DIR__ . '/../config/sanctum.php' => config_path('sanctum.php'),
        ], 'creopse-auth-config');

        $this->publishes([
            __DIR__ . '/../config/laratrust.php' => config_path('laratrust.php'),
            __DIR__ . '/../config/laratrust_seeder.php' => config_path('laratrust_seeder.php'),
        ], 'creopse-laratrust-config');

        // Publish package config
        $this->publishes([
            __DIR__ . '/../config/creopse.php' => config_path('creopse.php'),
        ], 'creopse-config');

        // Publish migrations
        $this->publishes([
            __DIR__ . '/../database/migrations' => database_path('migrations'),
        ], 'creopse-migrations');

        // Publish seeders
        $this->publishes([
            __DIR__ . '/../publishables/seeders' => database_path('seeders/vendor/creopse'),
        ], 'creopse-seeders');

        // Publish factories
        $this->publishes([
            __DIR__ . '/../publishables/factories' => database_path('factories/vendor/creopse'),
        ], 'creopse-factories');

        // Publish translations
        $this->publishes([
            __DIR__ . '/../lang' => $this->app->langPath(),
        ], 'creopse-translations');

        // Publish middlewares
        $this->publishes([
            __DIR__ . '/../publishables/middlewares' => app_path('Http/Middleware'),
        ], 'creopse-middlewares');

        // Publish inertia middleware
        $this->publishes([
            __DIR__ . '/../publishables/middlewares/HandleInertiaRequests.php' => app_path('Http/Middleware/HandleInertiaRequests.php'),
        ], 'creopse-inertia-middleware');

        // Publish resources
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views'),
            __DIR__ . '/../resources/css' => resource_path('css'),
            __DIR__ . '/../resources/js' => resource_path('js'),
        ], 'creopse-resources');

        // Publish views
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/creopse'),
        ], 'creopse-views');

        // Publish css
        $this->publishes([
            __DIR__ . '/../resources/css' => resource_path('css/vendor/creopse'),
        ], 'creopse-css');

        // Publish js
        $this->publishes([
            __DIR__ . '/../resources/js' => resource_path('js/vendor/creopse'),
        ], 'creopse-js');

        // Publish public assets
        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/creopse'),
        ], 'creopse-public');

        // Publish other files
        $this->publishes([
            __DIR__ . '/../files/env' => base_path('.env'),
            __DIR__ . '/../files/.env.example' => base_path('.env.example'),
            __DIR__ . '/../files/.env.production' => base_path('.env.production'),
            __DIR__ . '/../files/.eslintignore' => base_path('.eslintignore'),
            __DIR__ . '/../files/.eslintrc' => base_path('.eslintrc'),
            __DIR__ . '/../files/.eslintrc-auto-import.json' => base_path('.eslintrc-auto-import.json'),
            __DIR__ . '/../files/.gitattributes' => base_path('.gitattributes'),
            __DIR__ . '/../files/.gitignore' => base_path('.gitignore'),
            __DIR__ . '/../files/htaccess' => base_path('.htaccess'),
            __DIR__ . '/../files/htaccess-https' => base_path('.htaccess-https'),
            __DIR__ . '/../files/.npmrc' => base_path('.npmrc'),
            __DIR__ . '/../files/.prettierignore' => base_path('.prettierignore'),
            __DIR__ . '/../files/.prettierrc' => base_path('.prettierrc'),
            __DIR__ . '/../files/composer.json' => base_path('composer.json'),
            __DIR__ . '/../files/package.json' => base_path('package.json'),
            __DIR__ . '/../files/postcss.config.js' => base_path('postcss.config.js'),
            __DIR__ . '/../files/tailwind.config.js' => base_path('tailwind.config.js'),
            __DIR__ . '/../files/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__ . '/../files/types.d.ts' => base_path('types.d.ts'),
            __DIR__ . '/../files/vite-env.d.ts' => base_path('vite-env.d.ts'),
            __DIR__ . '/../files/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__ . '/../files/vitest.config.ts' => base_path('vitest.config.ts'),
            __DIR__ . '/../files/window.d.ts' => base_path('window.d.ts'),
        ], 'creopse-other-files');

        // Publish creopse admin
        $this->publishes([
            __DIR__ . '/../creopse' => public_path(),
        ], 'creopse-admin');
    }

    public function register()
    {
        // Register config files
        foreach ($this->configFiles as $config) {
            $this->mergeConfigFrom(
                __DIR__ . "/../config/{$config}.php",
                $config
            );
        }

        // Bind creopse base path
        $this->app->bind('creopse.base_path', function () {
            return __DIR__ . '/..';
        });

        // Bind creopse storage path
        $this->app->bind('creopse.storage', function () {
            return __DIR__ . '/../storage';
        });

        // Disable JSON Resource wrapping
        JsonResource::withoutWrapping();
    }

    protected function registerSeeders()
    {
        $this->app->afterResolving(Seeder::class, function ($seeder) {
            $seeder->call([
                DatabaseSeeder::class,
            ]);
        });
    }
}
