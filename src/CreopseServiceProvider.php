<?php

namespace Creopse\Creopse;

use App\Http\Middleware\EncryptCookies;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\VerifyCsrfToken;
use Creopse\Creopse\Console\Commands\GenerateThumbnails;
use Creopse\Creopse\Console\Commands\Install;
use Creopse\Creopse\Console\Commands\MakeSection;
use Creopse\Creopse\Console\Commands\MakeWidget;
use Creopse\Creopse\Console\Commands\Migrations\MigrateSectionsData;
use Creopse\Creopse\Console\Commands\Migrations\MigrateSectionsDataIcon;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeController;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeEvent;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeJob;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeListener;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeMigration;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeModel;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeRequest;
use Creopse\Creopse\Console\Commands\Plugins\PluginMakeSeeder;
use Creopse\Creopse\Console\Commands\RemoveSection;
use Creopse\Creopse\Console\Commands\RemoveWidget;
use Creopse\Creopse\Console\Commands\ScheduledCommand;
use Creopse\Creopse\Database\Seeders\DatabaseSeeder;
use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Middleware\CaptureSessionMetadata;
use Creopse\Creopse\Http\Middleware\CompressResponse;
use Creopse\Creopse\Http\Middleware\EnsureEmailIsVerified;
use Creopse\Creopse\Http\Middleware\LogSessionHistory;
use Creopse\Creopse\Http\Resources\Ads\AdIdentifierResource;
use Creopse\Creopse\Http\Resources\Ads\AdResource;
use Creopse\Creopse\Http\Resources\Content\ContentModelResource;
use Creopse\Creopse\Http\Resources\Content\MenuItemGroupResource;
use Creopse\Creopse\Http\Resources\Content\MenuLocationResource;
use Creopse\Creopse\Http\Resources\Content\MenuResource;
use Creopse\Creopse\Http\Resources\UserResource;
use Creopse\Creopse\Models\Ad;
use Creopse\Creopse\Models\AdIdentifier;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Models\MenuLocation;
use Creopse\Creopse\Models\VideoSetting;
use Creopse\Creopse\Traits\DetectsLaravelVersion;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Database\Seeder;
use Illuminate\Foundation\Exceptions\Handler;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Routing\Router;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Inertia\Inertia;
use Laravel\Sanctum\Http\Middleware\CheckAbilities;
use Laravel\Sanctum\Http\Middleware\CheckForAnyAbility;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use TomLerendu\LaravelConvertCaseMiddleware\ConvertRequestToSnakeCase;
use TomLerendu\LaravelConvertCaseMiddleware\ConvertResponseToCamelCase;

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
        'permission',
        'thumbnail_sizes',
        'laravel-ffmpeg',
        'installer',
    ];

    public function boot(Router $router)
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

        // Hook into the application's exception handler
        /** @var Handler $exceptionHandler */
        $exceptionHandler = $this->app->make(ExceptionHandler::class);

        $exceptionHandler
            ->renderable(function (NotFoundHttpException $e, Request $request) {
                if (! Functions::isApiRequest($request)) {
                    $appInformation = AppInformation::all();

                    $nameItem = $appInformation->firstWhere('key', 'name');
                    $name = $nameItem ? $nameItem->value : config('app.name');

                    $iconItem = $appInformation->firstWhere('key', 'icon');
                    $icon = $iconItem && $iconItem->value ? (Str::isUrl($iconItem->value, ['http', 'https']) ? $iconItem->value : Storage::disk('public')->url($iconItem->value)) : asset('assets/images/creopse/icon.svg');

                    $channelIdItem = VideoSetting::where('key', 'youtubeChannelId')->first();

                    return Inertia::render('NotFound', [
                        'appLocale' => app()->getLocale(),
                        'appFallbackLocale' => app()->getFallbackLocale(),
                        'userData' => $request->user() ? new UserResource($request->user()->load(['profile', 'roles', 'permissions'])) : null,
                        'isUserLoggedIn' => $request->user() !== null,
                        'appInformation' => AppInformation::all(),
                        'url' => $request->url(),
                        'defaultMeta' => [
                            'title' => Lang::get('Error 404 - Page not found').' - '.$name,
                            'description' => Lang::get('Oops! The page you are looking for does not exist. It might have been moved or deleted.'),
                            'url' => $request->url(),
                            'image' => $icon,
                            'favicon' => $icon,
                        ],
                        'adIdentifiers' => AdIdentifierResource::collection(
                            AdIdentifier::all()
                        ),
                        'ads' => AdResource::collection(
                            Ad::all()
                        ),
                        'menus' => MenuResource::collection(
                            Menu::all()->load(['items'])
                                ->each(function ($menu) {
                                    $menu->items->transform(function ($item) {
                                        if ($item->content_type && $item->content_id) {
                                            try {
                                                $contentType = ContentType::from($item->content_type);
                                                $modelClass = $contentType->getModelClass();

                                                if (class_exists($modelClass)) {
                                                    $item->content = $modelClass::find($item->content_id);
                                                }
                                            } catch (\ValueError $e) {
                                                // Handle invalid content_type gracefully
                                                $item->content = null;
                                            }
                                        }

                                        return $item;
                                    });
                                })
                        ),
                        'menuLocations' => MenuLocationResource::collection(
                            MenuLocation::all()
                        ),
                        'menuItemGroups' => MenuItemGroupResource::collection(
                            MenuItemGroup::all()
                        ),
                        'contentModels' => ContentModelResource::collection(
                            ContentModel::all()
                        ),
                        'youtubeChannelId' => $channelIdItem ? $channelIdItem->value : null,
                    ])->toResponse($request)->setStatusCode(404);
                }
            });

        // Register middleware aliases
        $router->aliasMiddleware('verified', EnsureEmailIsVerified::class);
        $router->aliasMiddleware('abilities', CheckAbilities::class);
        $router->aliasMiddleware('ability', CheckForAnyAbility::class);

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
                EnsureFrontendRequestsAreStateful::class,
                'throttle:creopse-api',
                SubstituteBindings::class,
                ConvertRequestToSnakeCase::class,
                ConvertResponseToCamelCase::class,
                LogSessionHistory::class,
                CaptureSessionMetadata::class,
                CompressResponse::class,
            ],
        ], function () {
            $this->loadRoutesFrom(__DIR__.'/../routes/api/index.php');
            $this->app->make(PluginManager::class)->bootAll();
        });

        // Load web routes
        Route::group([
            'middleware' => [
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                LogSessionHistory::class,
                CaptureSessionMetadata::class,
                class_exists('App\Http\Middleware\HandleInertiaRequests') ? HandleInertiaRequests::class : Http\Middleware\HandleInertiaRequests::class,
                CompressResponse::class,
            ],
        ], function () {
            $this->loadRoutesFrom(__DIR__.'/../routes/web/index.php');
        });

        // Load views
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'creopse');

        // Load migrations
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        // Load translations
        $this->loadTranslationsFrom(__DIR__.'/../lang', 'creopse');
        $this->loadJsonTranslationsFrom(__DIR__.'/../lang');

        // Load commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                Install::class,
                MakeSection::class,
                MakeWidget::class,
                RemoveSection::class,
                RemoveWidget::class,
                ScheduledCommand::class,
                GenerateThumbnails::class,
                MigrateSectionsData::class,
                MigrateSectionsDataIcon::class,
                // Plugin commands
                PluginMakeModel::class,
                PluginMakeMigration::class,
                PluginMakeController::class,
                PluginMakeRequest::class,
                PluginMakeEvent::class,
                PluginMakeListener::class,
                PluginMakeJob::class,
                PluginMakeSeeder::class,
            ]);
        }

        // Register seeders
        if ($this->app->runningInConsole()) {
            $this->registerSeeders();
        }

        // Prepare config files for publishing
        $configFiles = [];
        foreach ($this->configFiles as $config) {
            $configFiles[__DIR__."/../config/{$config}.php"] = config_path("{$config}.php");
        }

        /**
         * FILES PUBLICATION
         */

        // Publish config files
        $this->publishes($configFiles, 'creopse-all-config');

        // Publish group configs by type
        $this->publishes([
            __DIR__.'/../publishables/config/auth.php' => config_path('auth.php'),
            __DIR__.'/../publishables/config/sanctum.php' => config_path('sanctum.php'),
        ], 'creopse-auth-config');

        $this->publishes([
            __DIR__.'/../publishables/config/permission.php' => config_path('permission.php'),
        ], 'creopse-permission-config');

        $this->publishes([
            __DIR__.'/../publishables/config/laravel-ffmpeg.php' => config_path('laravel-ffmpeg.php'),
        ], 'creopse-laravel-ffmpeg-config');

        $this->publishes([
            __DIR__.'/../publishables/config/cache.php' => config_path('cache.php'),
        ], 'creopse-cache-config');

        $this->publishes([
            __DIR__.'/../publishables/config/broadcasting.php' => config_path('broadcasting.php'),
        ], 'creopse-broadcasting-config');

        $this->publishes([
            __DIR__.'/../publishables/config/database.php' => config_path('database.php'),
        ], 'creopse-database-config');

        // Publish package config
        $this->publishes([
            __DIR__.'/../publishables/config/creopse.php' => config_path('creopse.php'),
        ], 'creopse-config');

        // Publish migrations
        $this->publishes([
            __DIR__.'/../database/migrations' => database_path('migrations'),
        ], 'creopse-migrations');

        // Publish seeders
        $this->publishes([
            __DIR__.'/../publishables/seeders' => database_path('seeders/vendor/creopse'),
        ], 'creopse-seeders');

        // Publish factories
        $this->publishes([
            __DIR__.'/../publishables/factories' => database_path('factories/vendor/creopse'),
        ], 'creopse-factories');

        // Publish subscriber profile factory
        $this->publishes([
            __DIR__.'/../publishables/factories/SubscriberProfileFactory.php' => database_path('factories/SubscriberProfileFactory.php'),
        ], 'creopse-subscriber-profile-factory');

        // Publish database seeder
        $this->publishes([
            __DIR__.'/../publishables/files/EmptyDatabaseSeeder.php' => database_path('seeders/DatabaseSeeder.php'),
        ], 'creopse-database-seeder');

        // Publish translations
        $this->publishes([
            __DIR__.'/../lang' => $this->app->langPath(),
        ], 'creopse-translations');

        // Publish middlewares
        $this->publishes([
            __DIR__.'/../publishables/middlewares/EncryptCookies.php' => app_path('Http/Middleware/EncryptCookies.php'),
            __DIR__.'/../publishables/middlewares/EnsureEmailIsVerified.php' => app_path('Http/Middleware/EnsureEmailIsVerified.php'),
            __DIR__.'/../publishables/middlewares/HandleInertiaRequests.php' => app_path('Http/Middleware/HandleInertiaRequests.php'),
            __DIR__.'/../publishables/middlewares/LogSessionHistory.php' => app_path('Http/Middleware/LogSessionHistory.php'),
            __DIR__.'/../publishables/middlewares/VerifyCsrfToken.php' => app_path('Http/Middleware/VerifyCsrfToken.php'),
            __DIR__.'/../publishables/middlewares/CaptureSessionMetadata.php' => app_path('Http/Middleware/CaptureSessionMetadata.php'),
        ], 'creopse-middlewares');

        // Publish v11 middlewares
        if ($this->isLaravelVersionOrAbove('11.0')) {
            $this->publishes([
                __DIR__.'/../publishables/middlewares/v11' => app_path('Http/Middleware'),
            ], 'creopse-v11-middlewares');
        }

        // Publish inertia middleware
        $this->publishes([
            __DIR__.'/../publishables/middlewares/HandleInertiaRequests.php' => app_path('Http/Middleware/HandleInertiaRequests.php'),
        ], 'creopse-inertia-middleware');

        // Publish resources
        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views'),
            __DIR__.'/../resources/css' => resource_path('css'),
            __DIR__.'/../resources/js' => resource_path('js'),
        ], 'creopse-resources');

        $this->publishes([
            __DIR__.'/../resources_react/views' => resource_path('views'),
            __DIR__.'/../resources_react/css' => resource_path('css'),
            __DIR__.'/../resources_react/js' => resource_path('js'),
        ], 'creopse-react-resources');

        // Publish views
        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/creopse'),
        ], 'creopse-views');

        $this->publishes([
            __DIR__.'/../resources_react/views' => resource_path('views/vendor/creopse'),
        ], 'creopse-react-views');

        // Publish css
        $this->publishes([
            __DIR__.'/../resources/css' => resource_path('css/vendor/creopse'),
        ], 'creopse-css');

        $this->publishes([
            __DIR__.'/../resources_react/css' => resource_path('css/vendor/creopse'),
        ], 'creopse-react-css');

        // Publish js
        $this->publishes([
            __DIR__.'/../resources/js' => resource_path('js/vendor/creopse'),
        ], 'creopse-js');

        $this->publishes([
            __DIR__.'/../resources_react/js' => resource_path('js/vendor/creopse'),
        ], 'creopse-react-js');

        // Publish public assets
        $this->publishes([
            __DIR__.'/../public' => public_path(),
        ], 'creopse-public');

        // Publish other files
        $composerFile = __DIR__.'/../publishables/files/composer.json';
        $composerContent = file_get_contents($composerFile);

        $editedComposerContent = json_decode($composerContent, true);
        $editedComposerContent['require']['laravel/framework'] = '^'.$this->getLaravelMajorVersion().'.0';

        $tempComposerFile = __DIR__.'/../publishables/files/composer.temp.json';
        file_put_contents($tempComposerFile, json_encode($editedComposerContent, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $this->publishes([
            $tempComposerFile => base_path('composer.json'),
            __DIR__.'/../publishables/files/env' => base_path('.env'),
            __DIR__.'/../publishables/files/.env.example' => base_path('.env.example'),
            __DIR__.'/../publishables/files/.env.production' => base_path('.env.production'),
            __DIR__.'/../publishables/files/.eslintignore' => base_path('.eslintignore'),
            __DIR__.'/../publishables/files/.eslintrc' => base_path('.eslintrc'),
            __DIR__.'/../publishables/files/.eslintrc-auto-import.json' => base_path('.eslintrc-auto-import.json'),
            __DIR__.'/../publishables/files/.gitattributes' => base_path('.gitattributes'),
            __DIR__.'/../publishables/files/.gitignore' => base_path('.gitignore'),
            __DIR__.'/../publishables/files/htaccess' => base_path('.htaccess'),
            __DIR__.'/../publishables/files/htaccess-https' => base_path('.htaccess-https'),
            __DIR__.'/../publishables/files/.npmrc' => base_path('.npmrc'),
            __DIR__.'/../publishables/files/.prettierignore' => base_path('.prettierignore'),
            __DIR__.'/../publishables/files/.prettierrc' => base_path('.prettierrc'),
            __DIR__.'/../publishables/files/package.json' => base_path('package.json'),
            __DIR__.'/../publishables/files/postcss.config.js' => base_path('postcss.config.js'),
            __DIR__.'/../publishables/files/tailwind.config.js' => base_path('tailwind.config.js'),
            __DIR__.'/../publishables/files/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__.'/../publishables/files/vite-env.d.ts' => base_path('vite-env.d.ts'),
            __DIR__.'/../publishables/files/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__.'/../publishables/files/vitest.config.ts' => base_path('vitest.config.ts'),
            __DIR__.'/../publishables/files/window.d.ts' => base_path('window.d.ts'),
            __DIR__.'/../publishables/files/pnpm-workspace.yaml' => base_path('pnpm-workspace.yaml'),
            __DIR__.'/../publishables/files/HttpKernel.php' => app_path('Http/Kernel.php'),
        ], 'creopse-other-files');

        $this->publishes([
            __DIR__.'/../publishables/files/react/.eslintrc' => base_path('.eslintrc'),
            __DIR__.'/../publishables/files/react/.prettierignore' => base_path('.prettierignore'),
            __DIR__.'/../publishables/files/react/.prettierrc' => base_path('.prettierrc'),
            __DIR__.'/../publishables/files/react/package.json' => base_path('package.json'),
            __DIR__.'/../publishables/files/react/postcss.config.js' => base_path('postcss.config.js'),
            __DIR__.'/../publishables/files/react/tailwind.config.js' => base_path('tailwind.config.js'),
            __DIR__.'/../publishables/files/react/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__.'/../publishables/files/react/vite-env.d.ts' => base_path('vite-env.d.ts'),
            __DIR__.'/../publishables/files/react/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__.'/../publishables/files/react/window.d.ts' => base_path('window.d.ts'),
            __DIR__.'/../publishables/files/react/pnpm-workspace.yaml' => base_path('pnpm-workspace.yaml'),
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
                __DIR__.'/../publishables/providers/v11/AppServiceProvider.php' => app_path('Providers/AppServiceProvider.php'),
                __DIR__.'/../publishables/providers/EventServiceProvider.php' => app_path('Providers/EventServiceProvider.php'),
            ], 'creopse-providers');
        } else {
            $this->publishes([
                __DIR__.'/../publishables/providers/RouteServiceProvider.php' => app_path('Providers/RouteServiceProvider.php'),
                __DIR__.'/../publishables/providers/EventServiceProvider.php' => app_path('Providers/EventServiceProvider.php'),
                __DIR__.'/../publishables/providers/AuthServiceProvider.php' => app_path('Providers/AuthServiceProvider.php'),
            ], 'creopse-providers');
        }

        // Publish bootstrap files
        if ($this->isLaravelVersionOrAbove('11.0')) {
            $this->publishes([
                __DIR__.'/../publishables/bootstrap/v11/app.php' => base_path('bootstrap/app.php'),
                __DIR__.'/../publishables/bootstrap/v11/providers.php' => base_path('bootstrap/providers.php'),
            ], 'creopse-bootstrap-files');
        }

        // Publish routes
        $this->publishes([
            __DIR__.'/../publishables/routes/api' => base_path('routes/api'),
            __DIR__.'/../publishables/routes/web' => base_path('routes/web'),
        ], 'creopse-routes');

        // Publish controllers
        $this->publishes([
            __DIR__.'/../publishables/controllers/UserProfileController.php' => app_path('Http/Controllers/UserProfileController.php'),
        ], 'creopse-controllers');

        // Publish models
        $this->publishes([
            __DIR__.'/../publishables/models' => base_path('app/Models'),
        ], 'creopse-models');

        // Publish enums
        $this->publishes([
            __DIR__.'/../publishables/enums' => base_path('app/Enums'),
        ], 'creopse-enums');

        // Publish creopse admin
        $this->publishes([
            __DIR__.'/../creopse' => public_path('creopse'),
        ], 'creopse-admin');
    }

    public function register()
    {
        // Register config files
        foreach ($this->configFiles as $config) {
            $this->mergeConfigFrom(
                __DIR__."/../config/{$config}.php",
                $config
            );
        }

        // Bind creopse base path
        $this->app->bind('creopse.base_path', function () {
            return __DIR__.'/..';
        });

        // Bind creopse storage path
        $this->app->bind('creopse.storage', function () {
            return __DIR__.'/../storage';
        });

        // Discover all plugins
        $this->app->singleton(PluginManager::class, fn ($app) => new PluginManager($app));

        $manager = $this->app->make(PluginManager::class);
        $manager->discoverAll();

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
     * @param  string  $seederClass
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
