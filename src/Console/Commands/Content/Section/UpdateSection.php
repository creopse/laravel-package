<?php

namespace Creopse\Creopse\Console\Commands\Content\Section;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Section;

class UpdateSection extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-section
        {name : The name of the section to update}
        {--title=* : Locale:value pair for the title, e.g. --title="en:Hero - Video". Repeatable for multiple locales.}
        {--data-structure= : JSON for the data structure, inline or @path/to/file.json}
        {--settings-structure= : JSON for the settings structure, inline or @path/to/file.json}
        {--alias=creopse:edit-section}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-section'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the title (per locale), data structure, and/or settings structure of an existing section.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $section = Section::where('name', $name)->first();

        if (! $section) {
            $this->error("Section '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        $title = $this->buildTitlePayload($section);
        if ($title !== null) {
            $payload['title'] = $title;
        }

        foreach (['data-structure' => 'data_structure', 'settings-structure' => 'settings_structure'] as $option => $column) {
            $json = $this->resolveJsonOption($option);
            if ($json !== null) {
                $payload[$column] = $json;
            }
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --title, --data-structure, and/or --settings-structure.');

            return self::FAILURE;
        }

        $section->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }

    /**
     * Build the merged title JSON by combining the section's existing
     * locale values with the locale:value pairs passed via --title.
     * Returns null if --title was not used at all.
     */
    private function buildTitlePayload(Section $section): ?string
    {
        $current = json_decode($section->title ?? '{}', true);

        if (! is_array($current)) {
            $current = [];
        }

        return $this->mergeLocalizedOption($current);
    }
}
