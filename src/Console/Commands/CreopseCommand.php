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
            $this->error("[--{$option}] Invalid JSON: ".json_last_error_msg());

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
     * Resolve a boolean option from an explicit textual value
     * (true/false/1/0/yes/no/on/off). Returns null if the option was not
     * passed, or null with an error printed if the value is unrecognized —
     * callers must check $this->option($option) !== null to distinguish
     * "not provided" from "invalid".
     */
    protected function resolveBooleanOption(string $option): ?bool
    {
        $raw = $this->option($option);

        if ($raw === null) {
            return null;
        }

        $normalized = strtolower(trim($raw));

        if (in_array($normalized, ['1', 'true', 'yes', 'on'], true)) {
            return true;
        }

        if (in_array($normalized, ['0', 'false', 'no', 'off'], true)) {
            return false;
        }

        $this->error("[--{$option}] Invalid boolean value '{$raw}', expected true/false/1/0.");

        return null;
    }

    /**
     * Resolve a raw value against a backed enum's cases. Returns the
     * matching case, or null with an error printed if no case matches.
     *
     * @param  class-string<\BackedEnum>  $enumClass
     */
    protected function resolveEnum(string $raw, string $enumClass, string $label): ?\BackedEnum
    {
        $case = $enumClass::tryFrom($raw);

        if ($case === null) {
            $valid = implode(', ', array_column($enumClass::cases(), 'value'));
            $this->error("[{$label}] Invalid value '{$raw}', expected one of: {$valid}.");
        }

        return $case;
    }

    /**
     * Merge locale:value pairs from a repeatable option (e.g. --title,
     * --description) into an existing locale map. Each value supports
     *
     * @path/to/file for long text (e.g. "en:@description-en.txt").
     * Returns null if no pairs were passed, so the caller can distinguish
     * "not provided" from "provided but empty".
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

            [$locale, $rawValue] = explode(':', $pair, 2);
            $locale = trim($locale);
            $rawValue = trim($rawValue);

            if ($locale === '' || $rawValue === '') {
                $this->error("[--{$option}] Empty locale or value in '{$pair}', skipped.");

                continue;
            }

            $current[$locale] = $this->resolveTextOption($option, $rawValue) ?? $rawValue;
        }

        return json_encode($current, JSON_UNESCAPED_UNICODE);
    }

    /**
     * Confirm a destructive action unless --force was passed, or unless
     * running in a non-interactive context (CI, scripts, AI agents,
     * piped input) — where a blocking prompt would hang or misbehave.
     * In that case, refuse by default and require --force explicitly.
     */
    protected function confirmDestruction(string $label): bool
    {
        if ($this->option('force')) {
            return true;
        }

        if (! $this->input->isInteractive()) {
            $this->error("Refusing to delete {$label} without --force in a non-interactive context.");

            return false;
        }

        return $this->confirm("Are you sure you want to delete {$label}? This cannot be undone.");
    }
}
