<?php

namespace Creopse\Creopse;

use Illuminate\Contracts\Foundation\Application;
use Creopse\Creopse\Contracts\PluginInterface;
use Creopse\Creopse\Exceptions\PluginException;

class PluginManager
{
    /** @var PluginInterface[] */
    protected array $plugins = [];

    protected \Composer\Autoload\ClassLoader $autoloader;

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

        if (!is_dir($basePath)) return;

        $activeState = $this->getActiveState($basePath);

        foreach (glob("$basePath/*/plugin.json") as $manifestPath) {
            $pluginPath = dirname($manifestPath);

            try {
                $manifest = $this->readManifest($pluginPath);

                if (empty($activeState[$manifest['id']])) continue;

                $this->loadFromPath($pluginPath);
            } catch (\Throwable $e) {
                report($e);
            }
        }
    }

    protected function getActiveState(string $basePath): array
    {
        $path = "$basePath/.active.json";
        if (!file_exists($path)) return [];
        return json_decode(file_get_contents($path), true) ?? [];
    }

    public function loadFromPath(string $pluginPath): void
    {
        $manifest = $this->readManifest($pluginPath);

        $this->registerAutoloader($pluginPath, $manifest);

        $pluginClass = $manifest['plugin'];

        if (!class_exists($pluginClass)) {
            throw new PluginException("Class [$pluginClass] not found in [$pluginPath].");
        }

        $plugin = new $pluginClass();

        if (!$plugin instanceof PluginInterface) {
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
            fn() => \Route::middleware('api')->prefix('api')->group($path)
        );
    }

    public function registerMigrations(string $path): void
    {
        $this->app->afterResolving(
            'migrator',
            fn($m) => $m->path($path)
        );
    }

    public function registerConfig(string $key, string $path): void
    {
        $this->app['config']->set($key, require $path);
    }

    public function addHook(string $event, callable $callback): void
    {
        \Event::listen($event, $callback);
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

    public function readManifest(string $pluginPath): array
    {
        $path = "$pluginPath/plugin.json";

        if (!file_exists($path)) {
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
            if (!$this->hasPlugin($dep)) {
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
