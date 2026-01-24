<?php

namespace Creopse\Creopse;

use Creopse\Creopse\Console\Commands\{Install, MakeSection, MakeWidget, RemoveSection, RemoveWidget, ScheduledCommand, GenerateThumbnails};
use Creopse\Creopse\Console\Commands\Migrations\MigrateSectionsData;
use Creopse\Creopse\Database\Seeders\DatabaseSeeder;
use Creopse\Creopse\Traits\DetectsLaravelVersion;
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
    use DetectsLaravelVersion;

    protected $configFiles = [
        'creopse',
        'auth',
        'cors',
        'feed',
        'mail',
        'image',
        'session',
        'sanctum',
        'logging',
        'services',
        'database',
        'laratrust',
        'laratrust_seeder',
        'thumbnail_sizes',
        'laravel-ffmpeg',
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
                \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
                'throttle:creopse-api',
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
                \TomLerendu\LaravelConvertCaseMiddleware\ConvertRequestToSnakeCase::class,
                \TomLerendu\LaravelConvertCaseMiddleware\ConvertResponseToCamelCase::class,
                \Creopse\Creopse\Http\Middleware\LogSessionHistory::class,
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
                class_exists('App\Http\Middleware\HandleInertiaRequests') ? \App\Http\Middleware\HandleInertiaRequests::class : \Creopse\Creopse\Http\Middleware\HandleInertiaRequests::class
            ],
        ], function () {
            $this->loadRoutesFrom(__DIR__ . '/../routes/web/index.php');
        });

        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'creopse');

        // Load migrations
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        // Load translations
        $this->loadTranslationsFrom(__DIR__ . '/../lang', 'creopse');
        $this->loadJsonTranslationsFrom(__DIR__ . '/../lang', 'creopse');

        // Load commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                Install::class,
                MakeSection::class,
                MakeWidget::class,
                RemoveSection::class,
                RemoveWidget::class,
                ScheduledCommand::class,
                MigrateSectionsData::class,
                GenerateThumbnails::class,
            ]);
        }

        // Register seeders
        if ($this->app->runningInConsole()) {
            $this->registerSeeders();
        }

        // Prepare config files for publishing
        $configFiles = [];
        foreach ($this->configFiles as $config) {
            $configFiles[__DIR__ . "/../config/{$config}.php"] = config_path("{$config}.php");
        }

        /**
         * FILES PUBLICATION
         */

        // Publish config files
        $this->publishes($configFiles, 'creopse-all-config');

        // Publish group configs by type
        $this->publishes([
            __DIR__ . '/../publishables/config/auth.php' => config_path('auth.php'),
            __DIR__ . '/../publishables/config/sanctum.php' => config_path('sanctum.php'),
        ], 'creopse-auth-config');

        $this->publishes([
            __DIR__ . '/../publishables/config/laratrust.php' => config_path('laratrust.php'),
            __DIR__ . '/../publishables/config/laratrust_seeder.php' => config_path('laratrust_seeder.php'),
        ], 'creopse-laratrust-config');

        $this->publishes([
            __DIR__ . '/../publishables/config/laravel-ffmpeg.php' => config_path('laravel-ffmpeg.php'),
        ], 'creopse-laravel-ffmpeg-config');

        $this->publishes([
            __DIR__ . '/../publishables/config/cache.php' => config_path('cache.php'),
        ], 'creopse-cache-config');

        $this->publishes([
            __DIR__ . '/../publishables/config/broadcasting.php' => config_path('broadcasting.php'),
        ], 'creopse-broadcasting-config');

        $this->publishes([
            __DIR__ . '/../publishables/config/database.php' => config_path('database.php'),
        ], 'creopse-database-config');

        // Publish package config
        $this->publishes([
            __DIR__ . '/../publishables/config/creopse.php' => config_path('creopse.php'),
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

        // Publish subscriber profile factory
        $this->publishes([
            __DIR__ . '/../publishables/factories/SubscriberProfileFactory.php' => database_path('factories/SubscriberProfileFactory.php'),
        ], 'creopse-subscriber-profile-factory');

        // Publish database seeder
        $this->publishes([
            __DIR__ . '/../publishables/files/EmptyDatabaseSeeder.php' => database_path('seeders/DatabaseSeeder.php'),
        ], 'creopse-database-seeder');

        // Publish translations
        $this->publishes([
            __DIR__ . '/../lang' => $this->app->langPath(),
        ], 'creopse-translations');

        // Publish middlewares
        $this->publishes([
            __DIR__ . '/../publishables/middlewares/EncryptCookies.php' => app_path('Http/Middleware/EncryptCookies.php'),
            __DIR__ . '/../publishables/middlewares/EnsureEmailIsVerified.php' => app_path('Http/Middleware/EnsureEmailIsVerified.php'),
            __DIR__ . '/../publishables/middlewares/HandleInertiaRequests.php' => app_path('Http/Middleware/HandleInertiaRequests.php'),
            __DIR__ . '/../publishables/middlewares/LogSessionHistory.php' => app_path('Http/Middleware/LogSessionHistory.php'),
            __DIR__ . '/../publishables/middlewares/VerifyCsrfToken.php' => app_path('Http/Middleware/VerifyCsrfToken.php'),
        ], 'creopse-middlewares');

        // Publish v11 middlewares
        if ($this->isLaravelVersionOrAbove('11.0')) {
            $this->publishes([
                __DIR__ . '/../publishables/middlewares/v11' => app_path('Http/Middleware'),
            ], 'creopse-v11-middlewares');
        }

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

        $this->publishes([
            __DIR__ . '/../resources_react/views' => resource_path('views'),
            __DIR__ . '/../resources_react/css' => resource_path('css'),
            __DIR__ . '/../resources_react/js' => resource_path('js'),
        ], 'creopse-react-resources');

        // Publish views
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/creopse'),
        ], 'creopse-views');

        $this->publishes([
            __DIR__ . '/../resources_react/views' => resource_path('views/vendor/creopse'),
        ], 'creopse-react-views');

        // Publish css
        $this->publishes([
            __DIR__ . '/../resources/css' => resource_path('css/vendor/creopse'),
        ], 'creopse-css');

        $this->publishes([
            __DIR__ . '/../resources_react/css' => resource_path('css/vendor/creopse'),
        ], 'creopse-react-css');

        // Publish js
        $this->publishes([
            __DIR__ . '/../resources/js' => resource_path('js/vendor/creopse'),
        ], 'creopse-js');

        $this->publishes([
            __DIR__ . '/../resources_react/js' => resource_path('js/vendor/creopse'),
        ], 'creopse-react-js');

        // Publish public assets
        $this->publishes([
            __DIR__ . '/../public' => public_path(),
        ], 'creopse-public');

        // Publish other files
        $composerFile = __DIR__ . '/../publishables/files/composer.json';
        $composerContent = file_get_contents($composerFile);

        $editedComposerContent = json_decode($composerContent, true);
        $editedComposerContent['require']['laravel/framework'] = '^' . $this->getLaravelMajorVersion() . '.0';

        $tempComposerFile = __DIR__ . '/../publishables/files/composer.temp.json';
        file_put_contents($tempComposerFile, json_encode($editedComposerContent, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $this->publishes([
            $tempComposerFile => base_path('composer.json'),
            __DIR__ . '/../publishables/files/env' => base_path('.env'),
            __DIR__ . '/../publishables/files/.env.example' => base_path('.env.example'),
            __DIR__ . '/../publishables/files/.env.production' => base_path('.env.production'),
            __DIR__ . '/../publishables/files/.eslintignore' => base_path('.eslintignore'),
            __DIR__ . '/../publishables/files/.eslintrc' => base_path('.eslintrc'),
            __DIR__ . '/../publishables/files/.eslintrc-auto-import.json' => base_path('.eslintrc-auto-import.json'),
            __DIR__ . '/../publishables/files/.gitattributes' => base_path('.gitattributes'),
            __DIR__ . '/../publishables/files/.gitignore' => base_path('.gitignore'),
            __DIR__ . '/../publishables/files/htaccess' => base_path('.htaccess'),
            __DIR__ . '/../publishables/files/htaccess-https' => base_path('.htaccess-https'),
            __DIR__ . '/../publishables/files/.npmrc' => base_path('.npmrc'),
            __DIR__ . '/../publishables/files/.prettierignore' => base_path('.prettierignore'),
            __DIR__ . '/../publishables/files/.prettierrc' => base_path('.prettierrc'),
            __DIR__ . '/../publishables/files/package.json' => base_path('package.json'),
            __DIR__ . '/../publishables/files/postcss.config.js' => base_path('postcss.config.js'),
            __DIR__ . '/../publishables/files/tailwind.config.js' => base_path('tailwind.config.js'),
            __DIR__ . '/../publishables/files/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__ . '/../publishables/files/vite-env.d.ts' => base_path('vite-env.d.ts'),
            __DIR__ . '/../publishables/files/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__ . '/../publishables/files/vitest.config.ts' => base_path('vitest.config.ts'),
            __DIR__ . '/../publishables/files/window.d.ts' => base_path('window.d.ts'),
            __DIR__ . '/../publishables/files/pnpm-workspace.yaml' => base_path('pnpm-workspace.yaml'),
            __DIR__ . '/../publishables/files/HttpKernel.php' => app_path('Http/Kernel.php'),
        ], 'creopse-other-files');

        $this->publishes([
            __DIR__ . '/../publishables/files/react/.eslintrc' => base_path('.eslintrc'),
            __DIR__ . '/../publishables/files/react/.prettierignore' => base_path('.prettierignore'),
            __DIR__ . '/../publishables/files/react/.prettierrc' => base_path('.prettierrc'),
            __DIR__ . '/../publishables/files/react/package.json' => base_path('package.json'),
            __DIR__ . '/../publishables/files/react/postcss.config.js' => base_path('postcss.config.js'),
            __DIR__ . '/../publishables/files/react/tailwind.config.js' => base_path('tailwind.config.js'),
            __DIR__ . '/../publishables/files/react/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__ . '/../publishables/files/react/vite-env.d.ts' => base_path('vite-env.d.ts'),
            __DIR__ . '/../publishables/files/react/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__ . '/../publishables/files/react/window.d.ts' => base_path('window.d.ts'),
            __DIR__ . '/../publishables/files/react/pnpm-workspace.yaml' => base_path('pnpm-workspace.yaml'),
        ], 'creopse-react-files');

        // Clean up composer temp file after publishing
        register_shutdown_function(function () use ($tempComposerFile) {
            if (file_exists($tempComposerFile)) {
                unlink($tempComposerFile);
            }
        });

        // Publish providers
        if ($this->isLaravelVersionOrAbove('11.0')) {
            $this->publishes([
                __DIR__ . '/../publishables/providers/v11/AppServiceProvider.php' => app_path('Providers/AppServiceProvider.php'),
                __DIR__ . '/../publishables/providers/EventServiceProvider.php' => app_path('Providers/EventServiceProvider.php'),
            ], 'creopse-providers');
        } else {
            $this->publishes([
                __DIR__ . '/../publishables/providers/RouteServiceProvider.php' => app_path('Providers/RouteServiceProvider.php'),
                __DIR__ . '/../publishables/providers/EventServiceProvider.php' => app_path('Providers/EventServiceProvider.php'),
            ], 'creopse-providers');
        }

        // Publish bootstrap files
        if ($this->isLaravelVersionOrAbove('11.0')) {
            $this->publishes([
                __DIR__ . '/../publishables/bootstrap/v11/app.php' => base_path('bootstrap/app.php'),
                __DIR__ . '/../publishables/bootstrap/v11/providers.php' => base_path('bootstrap/providers.php'),
            ], 'creopse-bootstrap-files');
        }

        // Publish routes
        $this->publishes([
            __DIR__ . '/../publishables/routes/api' => base_path('routes/api'),
            __DIR__ . '/../publishables/routes/web' => base_path('routes/web'),
        ], 'creopse-routes');

        // Publish controllers
        $this->publishes([
            __DIR__ . '/../publishables/controllers/UserProfileController.php' => app_path('Http/Controllers/UserProfileController.php'),
        ], 'creopse-controllers');

        // Publish models
        $this->publishes([
            __DIR__ . '/../publishables/models' => base_path('app/Models'),
        ], 'creopse-models');

        // Publish enums
        $this->publishes([
            __DIR__ . '/../publishables/enums' => base_path('app/Enums'),
        ], 'creopse-enums');

        // Publish creopse admin
        $this->publishes([
            __DIR__ . '/../creopse' => public_path('creopse'),
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
        if (config('creopse.seed_default_data')) {
            $this->app->afterResolving(Seeder::class, function ($seeder) {
                // Get the class name of the resolved seeder
                $seederClass = get_class($seeder);

                // Check if the resolved seeder is the DatabaseSeeder itself
                if ($seederClass === DatabaseSeeder::class) {
                    return;
                }

                // Check if the resolved seeder is being run explicitly (not as part of DatabaseSeeder)
                if ($this->isSeederRunExplicitly($seederClass)) {
                    return;
                }

                // Call DatabaseSeeder only if the resolved seeder is not being run explicitly
                $seeder->call([
                    DatabaseSeeder::class,
                ]);
            });
        }
    }

    /**
     * Check if the seeder is being run explicitly (not as part of DatabaseSeeder).
     *
     * @param string $seederClass
     * @return bool
     */
    protected function isSeederRunExplicitly($seederClass)
    {
        // Get the command-line arguments passed to the Artisan command
        $commandArgs = $_SERVER['argv'] ?? [];

        // Extract the seeder class name from the fully qualified class name
        $seederClassName = class_basename($seederClass);

        // Check if the command is running a specific seeder
        foreach ($commandArgs as $arg) {
            // Normalize the argument to match the seeder class name
            if (str_contains($arg, $seederClassName)) {
                return true;
            }
        }

        return false;
    }
}
