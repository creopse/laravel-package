<?php

namespace Creopse\Creopse\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

abstract class CreopseCommand extends Command
{
    /**
     * Detects the frontend framework by checking for the presence of certain files.
     * If react files are found, it will return 'react', otherwise it will return 'vue'.
     * If no files are found, it will default to 'vue' and warn the user.
     *
     * @return string
     */
    static function detectFrontendFramework(self $command)
    {
        $packageJsonPath = base_path('package.json');

        if (!File::exists($packageJsonPath)) {
            $command->warn('package.json not found, defaulting to Vue');
            return 'vue';
        }

        try {
            $packageJson = json_decode(File::get($packageJsonPath), true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                $command->warn('Failed to parse package.json, defaulting to Vue');
                return 'vue';
            }

            $dependencies = array_merge(
                $packageJson['dependencies'] ?? [],
                $packageJson['devDependencies'] ?? []
            );

            // React detection
            if (isset($dependencies['react']) || isset($dependencies['react-dom'])) {
                return 'react';
            }

            // Vue detection
            if (isset($dependencies['vue'])) {
                return 'vue';
            }
        } catch (Exception $e) {
            $command->warn("Error reading package.json: {$e->getMessage()}, defaulting to Vue");
        }

        $command->warn('Could not detect frontend framework from package.json, defaulting to Vue');
        return 'vue';
    }
}
