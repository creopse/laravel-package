<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

/**
 * Base class for all plugin:make-* commands.
 *
 * Resolves plugin root, namespace, and target paths from plugin.json,
 * then delegates file generation to Laravel's GeneratorCommand machinery.
 *
 * Stub resolution priority (Option A):
 *   1. Host project published stubs  (base_path('stubs/xxx.stub'))
 *   2. Laravel framework native stubs (vendor/laravel/framework/...)
 *
 * Usage:
 *   php artisan plugin:make-model vendor/plugin-name Post --migration
 *   php artisan plugin:make-migration vendor/plugin-name create_posts_table --create=posts
 *   php artisan plugin:make-controller vendor/plugin-name PostController --resource
 *   php artisan plugin:make-event vendor/plugin-name PostPublished
 *   php artisan plugin:make-listener vendor/plugin-name SendPostNotification
 *
 * # Override namespace
 *   php artisan plugin:make-model vendor/plugin-name Post --namespace="Vendor\\PluginName\\Domain\\Blog"
 */
abstract class PluginGeneratorCommand extends GeneratorCommand
{
    /**
     * Relative path inside the plugin root where the class will be generated.
     * e.g. 'src/Models', 'src/Http/Controllers'
     */
    abstract protected function getPluginSubDirectory(): string;

    /**
     * Namespace segment appended to the plugin root namespace.
     * e.g. 'Models', 'Http\\Controllers'
     * Return empty string for classes at the root namespace.
     */
    abstract protected function getPluginNamespaceSegment(): string;

    /**
     * Stub filename as found in Laravel's native stubs directory.
     * e.g. 'model.stub', 'controller.plain.stub'
     */
    abstract protected function getStubFilename(): string;

    // -------------------------------------------------------------------------
    // Stub resolution — Option A (host project → Laravel framework)
    // -------------------------------------------------------------------------

    protected function getStub(): string
    {
        return $this->resolveStubPath($this->getStubFilename());
    }

    /**
     * Resolve stub path with two-level fallback:
     *   1. Host project stubs/ directory (published via php artisan stub:publish)
     *   2. Laravel framework native stubs (Foundation/Console/stubs)
     */
    protected function resolveStubPath(string $filename): string
    {
        // Priority 1: host project published stubs
        $hostStub = $this->laravel->basePath("stubs/{$filename}");
        if (file_exists($hostStub)) {
            return $hostStub;
        }

        // Priority 2: Laravel framework native stubs
        // Stubs live in Foundation/Console/stubs since Laravel 8+
        $frameworkStub = base_path("vendor/laravel/framework/src/Illuminate/Foundation/Console/stubs/{$filename}");
        if (file_exists($frameworkStub)) {
            return $frameworkStub;
        }

        throw new \RuntimeException(
            "Stub [{$filename}] not found. Run [php artisan stub:publish] or check your Laravel installation."
        );
    }

    // -------------------------------------------------------------------------
    // Path & namespace resolution
    // -------------------------------------------------------------------------

    /**
     * Resolve the absolute path to the plugin root directory.
     */
    protected function sanitizePluginId(string $id): string
    {
        return str_replace('/', '-', preg_replace('/[^a-z0-9\/\-]/', '', $id));
    }

    protected function getPluginRoot(): string
    {
        $pluginId = $this->sanitizePluginId($this->argument('plugin'));
        $path     = storage_path("plugins/{$pluginId}");

        if (! is_dir($path)) {
            throw new \RuntimeException("Plugin directory not found: {$path}");
        }

        return $path;
    }

    /**
     * Parse and return plugin.json as an array.
     */
    protected function getPluginManifest(): array
    {
        $manifestPath = $this->getPluginRoot() . '/plugin.json';

        if (! file_exists($manifestPath)) {
            throw new \RuntimeException("plugin.json not found in: {$this->getPluginRoot()}");
        }

        return json_decode(file_get_contents($manifestPath), true);
    }

    /**
     * Resolve the root PSR-4 namespace declared in plugin.json.
     * "Vendor\\PluginName\\" → "Vendor\\PluginName"
     */
    protected function getPluginRootNamespace(): string
    {
        $manifest = $this->getPluginManifest();
        $psr4     = $manifest['autoload']['psr-4'] ?? [];

        if (empty($psr4)) {
            throw new \RuntimeException('No PSR-4 autoload entry found in plugin.json');
        }

        return rtrim(array_key_first($psr4), '\\');
    }

    /**
     * Build the fully-qualified target namespace for the generated class.
     * Respects --namespace override if provided.
     */
    protected function resolveTargetNamespace(): string
    {
        if ($this->option('namespace')) {
            return rtrim($this->option('namespace'), '\\');
        }

        $root    = $this->getPluginRootNamespace();
        $segment = $this->getPluginNamespaceSegment();

        return $segment ? "{$root}\\{$segment}" : $root;
    }

    // -------------------------------------------------------------------------
    // GeneratorCommand overrides
    // -------------------------------------------------------------------------

    /**
     * Redirect generated file into the plugin folder instead of app/.
     */
    protected function getPath($name): string
    {
        $rootNamespace = $this->getPluginRootNamespace();
        $relative      = Str::replaceFirst($rootNamespace . '\\', '', $name);
        $filename      = basename(str_replace('\\', '/', $relative)) . '.php';

        return $this->getPluginRoot() . '/' . $this->getPluginSubDirectory() . '/' . $filename;
    }

    /**
     * Override root namespace so GeneratorCommand builds FQCNs correctly.
     */
    protected function rootNamespace(): string
    {
        return $this->resolveTargetNamespace() . '\\';
    }

    /**
     * Qualify the class name against the plugin namespace.
     */
    protected function qualifyClass($name): string
    {
        $name      = ltrim($name, '\\/');
        $namespace = $this->resolveTargetNamespace();

        if (Str::startsWith($name, $namespace)) {
            return $name;
        }

        return $namespace . '\\' . str_replace('/', '\\', $name);
    }

    /**
     * Ensure the target directory exists before writing the file.
     */
    protected function makeDirectory($path): string
    {
        if (! is_dir(dirname($path))) {
            mkdir(dirname($path), 0755, true);
        }

        return $path;
    }

    // -------------------------------------------------------------------------
    // Arguments & options
    // -------------------------------------------------------------------------

    protected function getArguments(): array
    {
        return [
            ['plugin', InputArgument::REQUIRED, 'The plugin id (e.g. vendor/plugin-name)'],
            ['name',   InputArgument::REQUIRED, 'The name of the class to generate'],
        ];
    }

    protected function getOptions(): array
    {
        return array_merge(parent::getOptions(), [
            ['namespace', null, InputOption::VALUE_OPTIONAL, 'Override the target namespace'],
        ]);
    }
}
