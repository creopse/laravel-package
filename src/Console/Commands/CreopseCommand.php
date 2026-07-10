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
    public static function detectFrontendFramework(self $command)
    {
        $packageJsonPath = base_path('package.json');

        if (! File::exists($packageJsonPath)) {
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

    /**
     * Resolve a JSON option (inline or @path/to/file.json) into a decoded
     * array. Returns null if the option was not passed, and null with an
     * error message printed if the resolved content fails JSON validation.
     *
     * Returns a decoded array (not a JSON string) so it can be assigned
     * directly to Eloquent attributes cast as 'array'/'json' — assigning a
     * raw JSON string to a casted attribute causes double-encoding.
     */
    protected function resolveJsonOption(string $option): ?array
    {
        $raw = $this->option($option);

        if ($raw === null) {
            return null;
        }

        $content = $raw;

        if (str_starts_with($raw, '@')) {
            $path = substr($raw, 1);

            if (! File::exists($path)) {
                $this->error("[--{$option}] File not found: {$path}");

                return null;
            }

            $content = File::get($path);
        }

        $decoded = json_decode($content, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            $this->error("[--{$option}] Invalid JSON: " . json_last_error_msg());

            return null;
        }

        return $decoded;
    }

    /**
     * Resolve a plain-text value, supporting @path/to/file. No JSON
     * validation — used for free-form text fields.
     *
     * If $rawValue is null, the value is read from --$option (existing
     * behavior). If $rawValue is provided, it's resolved directly — used
     * when the raw value comes from a positional argument instead of an
     * option (e.g. parsed key=value pairs).
     */
    protected function resolveTextOption(string $option, ?string $rawValue = null): ?string
    {
        $raw = $rawValue ?? $this->option($option);

        if ($raw === null) {
            return null;
        }

        if (str_starts_with($raw, '@')) {
            $path = substr($raw, 1);

            if (! File::exists($path)) {
                $this->error("[--{$option}] File not found: {$path}");

                return null;
            }

            return File::get($path);
        }

        return $raw;
    }

    /**
     * Merge locale:value pairs from a repeatable option (e.g. --title)
     * into an existing locale map. Returns null if no pairs were passed,
     * so the caller can distinguish "not provided" from "provided but empty".
     *
     * @param  array<string, string>  $current  Existing locale => value map to merge into.
     */
    protected function mergeLocalizedOption(array $current, string $option = 'title'): ?string
    {
        $pairs = $this->option($option);

        if (empty($pairs)) {
            return null;
        }

        foreach ($pairs as $pair) {
            if (! str_contains($pair, ':')) {
                $this->error("[--{$option}] Invalid format '{$pair}', expected 'locale:value'.");

                continue;
            }

            [$locale, $value] = explode(':', $pair, 2);
            $locale = trim($locale);
            $value = trim($value);

            if ($locale === '' || $value === '') {
                $this->error("[--{$option}] Empty locale or value in '{$pair}', skipped.");

                continue;
            }

            $current[$locale] = $value;
        }

        return json_encode($current, JSON_UNESCAPED_UNICODE);
    }
}
