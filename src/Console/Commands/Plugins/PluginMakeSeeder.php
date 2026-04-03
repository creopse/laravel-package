<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

class PluginMakeSeeder extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-seeder';
    protected $description = 'Create a new seeder inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'database/seeders';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Database\\Seeders';
    }

    protected function getStubFilename(): string
    {
        return 'seeder.stub';
    }

    /**
     * Seeder stubs live in a different path than the other Console stubs.
     * Override resolveStubPath to also check the Database package stubs.
     */
    protected function resolveStubPath(string $filename): string
    {
        // Priority 1: host project published stubs
        $hostStub = $this->laravel->basePath("stubs/{$filename}");
        if (file_exists($hostStub)) {
            return $hostStub;
        }

        // Priority 2a: Laravel framework — Database package stubs (seeder lives here)
        $dbStub = base_path("vendor/laravel/framework/src/Illuminate/Database/Console/Seeds/stubs/{$filename}");
        if (file_exists($dbStub)) {
            return $dbStub;
        }

        // Priority 2b: Laravel framework — Console stubs (fallback)
        $consoleStub = base_path("vendor/laravel/framework/src/Illuminate/Foundation/Console/stubs/{$filename}");
        if (file_exists($consoleStub)) {
            return $consoleStub;
        }

        throw new \RuntimeException(
            "Stub [{$filename}] not found. Run [php artisan stub:publish] or check your Laravel installation."
        );
    }
}
