<?php

namespace Creopse\Creopse;

use App\Http\Middleware\EncryptCookies;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\VerifyCsrfToken;
use Creopse\Creopse\Console\Commands\Content\ContentModel\MakeContentModel;
use Creopse\Creopse\Console\Commands\Content\ContentModel\MakeContentModelItem;
use Creopse\Creopse\Console\Commands\Content\ContentModel\RemoveContentModel;
use Creopse\Creopse\Console\Commands\Content\ContentModel\RemoveContentModelItem;
use Creopse\Creopse\Console\Commands\Content\ContentModel\UpdateContentModel;
use Creopse\Creopse\Console\Commands\Content\ContentModel\UpdateContentModelItem;
use Creopse\Creopse\Console\Commands\Content\Menu\MakeMenu;
use Creopse\Creopse\Console\Commands\Content\Menu\MakeMenuItem;
use Creopse\Creopse\Console\Commands\Content\Menu\MakeMenuItemGroup;
use Creopse\Creopse\Console\Commands\Content\Menu\MakeMenuItemType;
use Creopse\Creopse\Console\Commands\Content\Menu\MakeMenuLocation;
use Creopse\Creopse\Console\Commands\Content\Menu\RemoveMenu;
use Creopse\Creopse\Console\Commands\Content\Menu\RemoveMenuItem;
use Creopse\Creopse\Console\Commands\Content\Menu\RemoveMenuItemGroup;
use Creopse\Creopse\Console\Commands\Content\Menu\RemoveMenuItemType;
use Creopse\Creopse\Console\Commands\Content\Menu\RemoveMenuLocation;
use Creopse\Creopse\Console\Commands\Content\Menu\UpdateMenu;
use Creopse\Creopse\Console\Commands\Content\Menu\UpdateMenuItem;
use Creopse\Creopse\Console\Commands\Content\Menu\UpdateMenuItemGroup;
use Creopse\Creopse\Console\Commands\Content\Menu\UpdateMenuItemType;
use Creopse\Creopse\Console\Commands\Content\Menu\UpdateMenuLocation;
use Creopse\Creopse\Console\Commands\Content\Page\AttachPageSection;
use Creopse\Creopse\Console\Commands\Content\Page\DetachPageSection;
use Creopse\Creopse\Console\Commands\Content\Page\MakePage;
use Creopse\Creopse\Console\Commands\Content\Page\OrderPageSections;
use Creopse\Creopse\Console\Commands\Content\Page\RemovePage;
use Creopse\Creopse\Console\Commands\Content\Page\SetPageSectionSource;
use Creopse\Creopse\Console\Commands\Content\Page\TogglePageSectionStatus;
use Creopse\Creopse\Console\Commands\Content\Page\UpdatePage;
use Creopse\Creopse\Console\Commands\Content\Page\UpdatePageSectionContent;
use Creopse\Creopse\Console\Commands\Content\Section\MakeSection;
use Creopse\Creopse\Console\Commands\Content\Section\RemoveSection;
use Creopse\Creopse\Console\Commands\Content\Section\UpdateSection;
use Creopse\Creopse\Console\Commands\Content\UpdateBaseInformation;
use Creopse\Creopse\Console\Commands\Content\Widget\MakeWidget;
use Creopse\Creopse\Console\Commands\Content\Widget\RemoveWidget;
use Creopse\Creopse\Console\Commands\GenerateThumbnails;
use Creopse\Creopse\Console\Commands\Install;
use Creopse\Creopse\Console\Commands\Media\MakeMediaFile;
use Creopse\Creopse\Console\Commands\Media\PurgeTrashedMedia;
use Creopse\Creopse\Console\Commands\Media\RemoveMediaFile;
use Creopse\Creopse\Console\Commands\Media\RemoveMediaRecord;
use Creopse\Creopse\Console\Commands\Media\ReplaceMediaFile;
use Creopse\Creopse\Console\Commands\Media\RestoreMediaRecord;
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
use Illuminate\Config\Repository;
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
        'frontend',
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
        // Override framework-owned configs that were pre-loaded before register()
        foreach ($this->configFiles as $config) {
            $configPath = __DIR__."/../config/{$config}.php";
            $userHasPublished = file_exists(config_path("{$config}.php"));

            if (! $userHasPublished) {
                // Framework defaults win over mergeConfigFrom → force package values in boot()
                /** @var Repository $configRepository */
                $configRepository = $this->app->make('config');

                $configRepository->set(
                    $config,
                    array_merge(
                        $configRepository->get($config, []),
                        require $configPath
                    )
                );
            }
        }

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
                ScheduledCommand::class,
                GenerateThumbnails::class,
                // Content Model commands
                UpdateBaseInformation::class,
                // Content Content Model commands
                MakeContentModel::class,
                MakeContentModelItem::class,
                RemoveContentModel::class,
                RemoveContentModelItem::class,
                UpdateContentModel::class,
                UpdateContentModelItem::class,
                // Content Menu commands
                MakeMenu::class,
                MakeMenuItem::class,
                MakeMenuItemGroup::class,
                MakeMenuItemType::class,
                MakeMenuLocation::class,
                RemoveMenu::class,
                RemoveMenuItem::class,
                RemoveMenuItemGroup::class,
                RemoveMenuItemType::class,
                RemoveMenuLocation::class,
                UpdateMenu::class,
                UpdateMenuItem::class,
                UpdateMenuItemGroup::class,
                UpdateMenuItemType::class,
                UpdateMenuLocation::class,
                // Content Page commands
                MakePage::class,
                UpdatePage::class,
                RemovePage::class,
                AttachPageSection::class,
                DetachPageSection::class,
                OrderPageSections::class,
                SetPageSectionSource::class,
                TogglePageSectionStatus::class,
                UpdatePageSectionContent::class,
                // Content Section commands
                MakeSection::class,
                UpdateSection::class,
                RemoveSection::class,
                // Content Widget commands
                MakeWidget::class,
                RemoveWidget::class,
                // Media commands
                MakeMediaFile::class,
                PurgeTrashedMedia::class,
                RemoveMediaFile::class,
                RemoveMediaRecord::class,
                ReplaceMediaFile::class,
                RestoreMediaRecord::class,
                // Migration commands
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
            __DIR__.'/../publishables/config/feed.php' => config_path('feed.php'),
        ], 'creopse-laravel-feed-config');

        $this->publishes([
            __DIR__.'/../publishables/config/cache.php' => config_path('cache.php'),
        ], 'creopse-cache-config');

        $this->publishes([
            __DIR__.'/../publishables/config/broadcasting.php' => config_path('broadcasting.php'),
        ], 'creopse-broadcasting-config');

        $this->publishes([
            __DIR__.'/../publishables/config/database.php' => config_path('database.php'),
        ], 'creopse-database-config');

        $this->publishes([
            __DIR__.'/../publishables/config/inertia.php' => config_path('inertia.php'),
        ], 'creopse-inertia-config');

        $this->publishes([
            __DIR__.'/../publishables/config/cors.php' => config_path('cors.php'),
        ], 'creopse-cors-config');

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
            __DIR__.'/../publishables/middlewares/Authenticate.php' => app_path('Http/Middleware/Authenticate.php'),
            __DIR__.'/../publishables/middlewares/EncryptCookies.php' => app_path('Http/Middleware/EncryptCookies.php'),
            __DIR__.'/../publishables/middlewares/HandleInertiaRequests.php' => app_path('Http/Middleware/HandleInertiaRequests.php'),
            __DIR__.'/../publishables/middlewares/PreventRequestsDuringMaintenance.php' => app_path('Http/Middleware/PreventRequestsDuringMaintenance.php'),
            __DIR__.'/../publishables/middlewares/RedirectIfAuthenticated.php' => app_path('Http/Middleware/RedirectIfAuthenticated.php'),
            __DIR__.'/../publishables/middlewares/TrimStrings.php' => app_path('Http/Middleware/TrimStrings.php'),
            __DIR__.'/../publishables/middlewares/TrustHosts.php' => app_path('Http/Middleware/TrustHosts.php'),
            __DIR__.'/../publishables/middlewares/TrustProxies.php' => app_path('Http/Middleware/TrustProxies.php'),
            __DIR__.'/../publishables/middlewares/ValidateSignature.php' => app_path('Http/Middleware/ValidateSignature.php'),
            __DIR__.'/../publishables/middlewares/VerifyCsrfToken.php' => app_path('Http/Middleware/VerifyCsrfToken.php'),
            __DIR__.'/../publishables/middlewares/custom' => app_path('Http/Middleware'),
        ], 'creopse-middlewares');

        // Publish installation middlewares
        $this->publishes([
            __DIR__.'/../publishables/middlewares/Authenticate.php' => app_path('Http/Middleware/Authenticate.php'),
            __DIR__.'/../publishables/middlewares/EncryptCookies.php' => app_path('Http/Middleware/EncryptCookies.php'),
            __DIR__.'/../publishables/middlewares/PreventRequestsDuringMaintenance.php' => app_path('Http/Middleware/PreventRequestsDuringMaintenance.php'),
            __DIR__.'/../publishables/middlewares/RedirectIfAuthenticated.php' => app_path('Http/Middleware/RedirectIfAuthenticated.php'),
            __DIR__.'/../publishables/middlewares/TrimStrings.php' => app_path('Http/Middleware/TrimStrings.php'),
            __DIR__.'/../publishables/middlewares/TrustHosts.php' => app_path('Http/Middleware/TrustHosts.php'),
            __DIR__.'/../publishables/middlewares/TrustProxies.php' => app_path('Http/Middleware/TrustProxies.php'),
            __DIR__.'/../publishables/middlewares/ValidateSignature.php' => app_path('Http/Middleware/ValidateSignature.php'),
            __DIR__.'/../publishables/middlewares/VerifyCsrfToken.php' => app_path('Http/Middleware/VerifyCsrfToken.php'),
        ], 'creopse-installation-middlewares');

        // Publish custom middlewares
        $this->publishes([
            __DIR__.'/../publishables/middlewares/custom' => app_path('Http/Middleware'),
        ], 'creopse-custom-middlewares');

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

        // Publish agents skills
        $this->publishes([
            __DIR__.'/../publishables/agents/skills' => base_path('.agents/skills'),
        ], 'creopse-vue-agents-skills');

        $this->publishes([
            __DIR__.'/../publishables/agents/skills_react' => base_path('.agents/skills'),
        ], 'creopse-react-agents-skills');

        // Publish other files
        $composerFile = __DIR__.'/../publishables/files/composer.json';
        $composerContent = file_get_contents($composerFile);

        $editedComposerContent = json_decode($composerContent, true);
        $editedComposerContent['require']['laravel/framework'] = '^'.$this->getLaravelMajorVersion().'.0';

        if ($this->isLaravelVersionBelow('12.0')) {
            unset($editedComposerContent['require-dev']['laravel/pao']);
        }

        $tempComposerFile = __DIR__.'/../publishables/files/composer.temp.json';
        file_put_contents($tempComposerFile, json_encode($editedComposerContent, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $this->publishes([
            $tempComposerFile => base_path('composer.json'),
            __DIR__.'/../publishables/files/env' => base_path('.env'),
            __DIR__.'/../publishables/files/env.example' => base_path('.env.example'),
            __DIR__.'/../publishables/files/env.production' => base_path('.env.production'),
            __DIR__.'/../publishables/files/eslintrc-auto-import.json' => base_path('.eslintrc-auto-import.json'),
            __DIR__.'/../publishables/files/gitattributes' => base_path('.gitattributes'),
            __DIR__.'/../publishables/files/gitignore' => base_path('.gitignore'),
            __DIR__.'/../publishables/files/markdownlint.jsonc' => base_path('.markdownlint.jsonc'),
            __DIR__.'/../publishables/files/htaccess' => base_path('.htaccess'),
            __DIR__.'/../publishables/files/htaccess-https' => base_path('.htaccess-https'),
            __DIR__.'/../publishables/files/npmrc' => base_path('.npmrc'),
            __DIR__.'/../publishables/files/prettierignore' => base_path('.prettierignore'),
            __DIR__.'/../publishables/files/prettierrc' => base_path('.prettierrc'),
            __DIR__.'/../publishables/files/eslint.config.js' => base_path('eslint.config.js'),
            __DIR__.'/../publishables/files/AGENTS.md' => base_path('AGENTS.md'),
            __DIR__.'/../publishables/files/boost.json' => base_path('boost.json'),
            __DIR__.'/../publishables/files/opencode.json' => base_path('opencode.json'),
            __DIR__.'/../publishables/files/package.json' => base_path('package.json'),
            __DIR__.'/../publishables/files/phpstan.neon' => base_path('phpstan.neon'),
            __DIR__.'/../publishables/files/phpunit.xml' => base_path('phpunit.xml'),
            __DIR__.'/../publishables/files/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__.'/../publishables/files/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__.'/../publishables/files/vitest.config.ts' => base_path('vitest.config.ts'),
            __DIR__.'/../publishables/files/pnpm-workspace.yaml' => base_path('pnpm-workspace.yaml'),
            __DIR__.'/../publishables/files/README.md' => base_path('README.md'),
        ], 'creopse-other-files');

        $this->publishes([
            __DIR__.'/../publishables/files/react/eslintrc-auto-import.json' => base_path('.eslintrc-auto-import.json'),
            __DIR__.'/../publishables/files/react/prettierignore' => base_path('.prettierignore'),
            __DIR__.'/../publishables/files/react/prettierrc' => base_path('.prettierrc'),
            __DIR__.'/../publishables/files/react/eslint.config.js' => base_path('eslint.config.js'),
            __DIR__.'/../publishables/files/react/package.json' => base_path('package.json'),
            __DIR__.'/../publishables/files/react/tsconfig.json' => base_path('tsconfig.json'),
            __DIR__.'/../publishables/files/react/vite-env.d.ts' => base_path('vite-env.d.ts'),
            __DIR__.'/../publishables/files/react/vite.config.ts' => base_path('vite.config.ts'),
            __DIR__.'/../publishables/files/react/pnpm-workspace.yaml' => base_path('pnpm-workspace.yaml'),
            __DIR__.'/../publishables/files/react/AGENTS.md' => base_path('AGENTS.md'),
            __DIR__.'/../publishables/files/react/boost.json' => base_path('boost.json'),
            __DIR__.'/../publishables/files/react/opencode.json' => base_path('opencode.json'),
        ], 'creopse-react-files');

        // Clean up composer temp file after publishing
        register_shutdown_function(function () use ($tempComposerFile) {
            if (file_exists($tempComposerFile)) {
                unlink($tempComposerFile);
            }
        });

        // Publish providers
        $this->publishes([
            __DIR__.'/../publishables/providers/AppServiceProvider.php' => app_path('Providers/AppServiceProvider.php'),
            __DIR__.'/../publishables/providers/EventServiceProvider.php' => app_path('Providers/EventServiceProvider.php'),
        ], 'creopse-providers');

        // Publish bootstrap files
        $this->publishes([
            __DIR__.'/../publishables/bootstrap/app.php' => base_path('bootstrap/app.php'),
            __DIR__.'/../publishables/bootstrap/providers.php' => base_path('bootstrap/providers.php'),
        ], 'creopse-bootstrap-files');

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
