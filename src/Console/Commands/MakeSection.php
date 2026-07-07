<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\Section;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeSection extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-section
        {name* : The name(s) of the section(s)}
        {--title=* : Locale:value pair for the title, e.g. --title="en:Hero". Only allowed with a single name.}
        {--data-structure= : JSON for the data structure, inline or @path/to/file.json. Only allowed with a single name.}
        {--settings-structure= : JSON for the settings structure, inline or @path/to/file.json. Only allowed with a single name.}
        {--alias=creopse:add-section}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-section'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add one or more section vue components to resources/js/components/sections directory.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $names = $this->argument('name');

        if (! $this->guardSingleNameOptions($names)) {
            return self::FAILURE;
        }

        $frontendFramework = $this->detectFrontendFramework($this);

        foreach ($names as $name) {
            $this->processSection($name, $frontendFramework, count($names) === 1);
        }

        $this->info('Section creation process completed.');

        return self::SUCCESS;
    }

    /**
     * Refuse --title, --data-structure, and --settings-structure when
     * more than one section name is passed — they only make sense for one.
     */
    private function guardSingleNameOptions(array $names): bool
    {
        $usedSingleOptions = ! empty($this->option('title'))
            || $this->option('data-structure') !== null
            || $this->option('settings-structure') !== null;

        if (count($names) > 1 && $usedSingleOptions) {
            $this->error('--title, --data-structure, and --settings-structure can only be used with a single section name.');

            return false;
        }

        return true;
    }

    /**
     * Process a single section: create the component file and the database entry.
     */
    private function processSection(string $name, string $frontendFramework, bool $applyOptions): void
    {
        $argName = Functions::strToPascalCase($name);

        $this->createComponentFile($argName, $frontendFramework);
        $this->createDatabaseEntry($argName, $name, $applyOptions);
    }

    /**
     * Create the section component file from the appropriate stub.
     */
    private function createComponentFile(string $argName, string $frontendFramework): void
    {
        $fileName = $argName.($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/sections/'.$fileName);

        if (File::exists($filePath)) {
            $this->warn("[$argName] Component file '$fileName' already exists, skipping.");

            return;
        }

        $stubFile = $frontendFramework === 'react' ? 'section.react.stub' : 'section.vue.stub';
        $stubPath = app('creopse.base_path').'/stubs/'.$stubFile;

        if (! File::exists($stubPath)) {
            $this->error("[$argName] Stub file not found for {$frontendFramework}: {$stubPath}");

            return;
        }

        $stub = File::get($stubPath);
        $stub = str_replace('{{ name }}', $argName, $stub);
        $stub = str_replace('{{ id }}', Str::kebab($argName).'-section', $stub);
        $stub = str_replace('{{ settingsVar }}', Str::camel($argName).'Settings', $stub);
        $stub = str_replace('{{ dataVar }}', Str::camel($argName).'Data', $stub);
        $stub = str_replace('{{ dataId }}', strtolower(Str::camel($argName)), $stub);

        File::put($filePath, $stub);

        if (File::exists($filePath)) {
            $this->info("[$argName] Component file '$fileName' created successfully.");
        } else {
            $this->warn("[$argName] Component file '$fileName' could not be created.");
        }
    }

    /**
     * Create the section database entry if it does not already exist.
     */
    private function createDatabaseEntry(string $argName, string $originalName, bool $applyOptions): void
    {
        if (Section::where('name', $argName)->exists()) {
            $this->warn("[$argName] Section already exists in the database, skipping.");

            return;
        }

        $attributes = [
            'name' => $argName,
            'title' => $this->buildTitlePayload($originalName, $applyOptions),
        ];

        if ($applyOptions) {
            $dataStructure = $this->resolveJsonOption('data-structure');
            if ($dataStructure !== null) {
                $attributes['data_structure'] = $dataStructure;
            }

            $settingsStructure = $this->resolveJsonOption('settings-structure');
            if ($settingsStructure !== null) {
                $attributes['settings_structure'] = $settingsStructure;
            }
        }

        Section::create($attributes);

        $this->info("[$argName] Section added to the database successfully.");
    }

    /**
     * Build the title JSON. Falls back to the original name for en/fr
     * when --title isn't used, matching the previous default behavior.
     */
    private function buildTitlePayload(string $originalName, bool $applyOptions): string
    {
        $current = ['en' => $originalName, 'fr' => $originalName];

        if (! $applyOptions) {
            return json_encode($current, JSON_UNESCAPED_UNICODE);
        }

        return $this->mergeLocalizedOption($current) ?? json_encode($current, JSON_UNESCAPED_UNICODE);
    }
}
