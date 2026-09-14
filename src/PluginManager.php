<?php

namespace Creopse\Creopse;

use Composer\Autoload\ClassLoader;
use Creopse\Creopse\Contracts\PluginInterface;
use Creopse\Creopse\Enums\AccessGuard;
use Creopse\Creopse\Exceptions\PluginException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PluginManager
{
    /** @var PluginInterface[] */
    protected array $plugins = [];

    /** @var string[] names declared through registerPermissions() */
    protected array $registeredPermissions = [];

    protected ClassLoader $autoloader;

    public function __construct(protected Application $app)
    {
        $this->autoloader = require base_path('vendor/autoload.php');
    }

    // -------------------------------------------------------------------------
    // Discovery & Loading
    // -------------------------------------------------------------------------

    /**
     * Scan storage/plugins/ and load every installed and active plugin.
     */
    public function discoverAll(): void
    {
        $basePath = storage_path('plugins');

        if (! is_dir($basePath)) {
            return;
        }

        $activeState = $this->getActiveState($basePath);

        foreach (glob("$basePath/*/plugin.json") as $manifestPath) {
            $pluginPath = dirname($manifestPath);

            try {
                $manifest = $this->readManifest($pluginPath);

                if (empty($activeState[$manifest['id']])) {
                    continue;
                }

                $this->loadFromPath($pluginPath);
            } catch (\Throwable $e) {
                report($e);
            }
        }
    }

    protected function getActiveState(string $basePath): array
    {
        $path = "$basePath/.active.json";
        if (! file_exists($path)) {
            return [];
        }

        return json_decode(file_get_contents($path), true) ?? [];
    }

    public function loadFromPath(string $pluginPath): void
    {
        $manifest = $this->readManifest($pluginPath);

        $this->registerAutoloader($pluginPath, $manifest);

        $pluginClass = $manifest['plugin'];

        if (! class_exists($pluginClass)) {
            throw new PluginException("Class [$pluginClass] not found in [$pluginPath].");
        }

        $plugin = new $pluginClass;

        if (! $plugin instanceof PluginInterface) {
            throw new PluginException("[$pluginClass] must implement PluginInterface.");
        }

        $this->register($plugin);
    }

    // -------------------------------------------------------------------------
    // Register & Boot
    // -------------------------------------------------------------------------

    public function register(PluginInterface $plugin): void
    {
        $this->resolveDependencies($plugin);
        $this->plugins[$plugin->getId()] = $plugin;
    }

    public function bootAll(): void
    {
        foreach ($this->plugins as $plugin) {
            $plugin->boot($this);
        }
    }

    // -------------------------------------------------------------------------
    // API exposed to plugins
    // -------------------------------------------------------------------------

    public function registerRoutes(string $path): void
    {
        $this->app->booted(
            fn () => \Route::middleware('api')->prefix('api')->group($path)
        );
    }

    public function registerMigrations(string $path): void
    {
        $this->app->afterResolving(
            'migrator',
            fn ($m) => $m->path($path)
        );
    }

    public function registerConfig(string $key, string $path): void
    {
        $this->app->make('config')->set($key, require $path);
    }

    public function addHook(string $event, callable $callback): void
    {
        \Event::listen($event, $callback);
    }

    /**
     * Let a plugin declare its own named permissions, synced into the same
     * spatie/laravel-permission table as the core's (same `admin` guard as
     * PermissionList - see UserRole::defaultPermissions()), so a plugin route
     * can be protected with the standard `permission:vendor.some-permission`
     * middleware and the permission shows up in GET /permissions and the
     * Roles screen exactly like a core one.
     *
     * Each entry: ['name' => 'vendor.some-permission', 'display_name' => ..., 'description' => ...].
     * Deferred to `booted()` since it needs the database, which isn't
     * guaranteed to be migrated yet while plugins are being registered.
     *
     * @param  array<int, array{name: string, display_name?: string, description?: string}>  $permissions
     */
    public function registerPermissions(array $permissions): void
    {
        foreach ($permissions as $permission) {
            $this->registeredPermissions[] = $permission['name'];
        }

        $this->app->booted(function () use ($permissions) {
            if (! Schema::hasTable('permissions')) {
                return;
            }

            foreach ($permissions as $permission) {
                Permission::firstOrCreate(
                    [
                        'name' => $permission['name'],
                        'guard_name' => AccessGuard::ADMIN->value,
                    ],
                    [
                        'display_name' => $permission['display_name'] ?? $permission['name'],
                        'description' => $permission['description'] ?? null,
                    ]
                );
            }

            $this->app[PermissionRegistrar::class]->forgetCachedPermissions();
        });
    }

    // -------------------------------------------------------------------------
    // Autoloading
    // -------------------------------------------------------------------------

    protected function registerAutoloader(string $pluginPath, array $manifest): void
    {
        // Plugin PSR-4
        foreach ($manifest['autoload']['psr-4'] ?? [] as $namespace => $path) {
            $this->autoloader->addPsr4($namespace, "$pluginPath/$path");
        }

        // Bundled vendor (scoped with PHP-Scoper)
        $vendorAutoload = "$pluginPath/vendor/autoload.php";
        if (file_exists($vendorAutoload)) {
            require_once $vendorAutoload;
        }
    }

    // -------------------------------------------------------------------------
    // Helpers
    // -------------------------------------------------------------------------

    public function hasPlugin(string $id): bool
    {
        return isset($this->plugins[$id]);
    }

    public function getAll(): array
    {
        return $this->plugins;
    }

    /**
     * Permission names declared by the plugins booted in this process.
     * Disabled plugins never boot, so this is not the full list of plugin
     * permissions stored in the database.
     *
     * @return string[]
     */
    public function getRegisteredPermissions(): array
    {
        return array_values(array_unique($this->registeredPermissions));
    }

    public function readManifest(string $pluginPath): array
    {
        $path = "$pluginPath/plugin.json";

        if (! file_exists($path)) {
            throw new PluginException("No plugin.json found in [$pluginPath].");
        }

        $manifest = json_decode(file_get_contents($path), true);

        foreach (['id', 'version', 'plugin'] as $required) {
            if (empty($manifest[$required])) {
                throw new PluginException("Missing [$required] in plugin.json.");
            }
        }

        return $manifest;
    }

    protected function resolveDependencies(PluginInterface $plugin): void
    {
        foreach ($plugin->getDependencies() as $dep => $constraint) {
            if (! $this->hasPlugin($dep)) {
                throw new PluginException(
                    "Plugin [{$plugin->getId()}] requires [$dep] which is not loaded."
                );
            }
        }
    }

    protected function sanitizeId(string $id): string
    {
        return str_replace('/', '-', preg_replace('/[^a-z0-9\/\-]/', '', $id));
    }
}
