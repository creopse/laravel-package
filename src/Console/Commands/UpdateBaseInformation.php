<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\AppInformation;
use Illuminate\Support\Str;

class UpdateBaseInformation extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-base-info
        {pairs* : One or more key=value pairs, e.g. name="My App" email=hello@app.com. Value can be @path/to/file for long text.}
        {--alias=creopse:update-app-info}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:update-app-info', 'creopse:edit-app-info', 'creopse:edit-base-info'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update one or more base information entries (site name, contact, branding, socials).';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $pairs = $this->argument('pairs');

        $updated = 0;

        foreach ($pairs as $pair) {
            if (! str_contains($pair, '=')) {
                $this->error("Invalid format '{$pair}', expected 'key=value'.");

                continue;
            }

            [$key, $value] = explode('=', $pair, 2);
            $key = Str::camel(trim($key));

            if ($key === '') {
                $this->error("Empty key in '{$pair}', skipped.");

                continue;
            }

            if (! in_array($key, AppInformation::VALID_KEYS, true)) {
                $this->error("[{$key}] is not a valid base information key, skipped.");

                continue;
            }

            $value = $this->resolveValue($key, trim($value));

            AppInformation::updateOrCreate(['key' => $key], ['value' => $value]);

            $this->info("[{$key}] updated successfully.");
            $updated++;
        }

        if ($updated === 0) {
            $this->warn('No valid key=value pair provided.');

            return self::FAILURE;
        }

        return self::SUCCESS;
    }

    /**
     * Resolve a value, supporting @path/to/file for long text fields
     * (e.g. description, additionalInfo) impractical to pass inline.
     */
    private function resolveValue(string $key, string $rawValue): string
    {
        return $this->resolveTextOption($key, $rawValue) ?? $rawValue;
    }
}
