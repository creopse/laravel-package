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
    protected $signature = 'creopse:make-section {name* : The name(s) of the section(s)} {--alias=creopse:add-section}';

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
        $frontendFramework = $this->detectFrontendFramework($this);

        foreach ($this->argument('name') as $name) {
            $this->processSection($name, $frontendFramework);
        }

        $this->info('Section creation process completed.');
    }

    /**
     * Process a single section: create the component file and the database entry.
     */
    private function processSection(string $name, string $frontendFramework): void
    {
        $argName = Functions::strToPascalCase($name);

        $this->createComponentFile($argName, $frontendFramework);
        $this->createDatabaseEntry($argName, $name);
    }

    /**
     * Create the section component file from the appropriate stub.
     */
    private function createComponentFile(string $argName, string $frontendFramework): void
    {
        $fileName = $argName . ($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/sections/' . $fileName);

        if (File::exists($filePath)) {
            $this->warn("[$argName] Component file '$fileName' already exists, skipping.");
            return;
        }

        $stubFile = $frontendFramework === 'react' ? 'section.react.stub' : 'section.vue.stub';
        $stubPath = app('creopse.base_path') . '/stubs/' . $stubFile;

        if (!File::exists($stubPath)) {
            $this->error("[$argName] Stub file not found for {$frontendFramework}: {$stubPath}");
            return;
        }

        $stub = File::get($stubPath);
        $stub = str_replace('{{ name }}', $argName, $stub);
        $stub = str_replace('{{ id }}', Str::kebab($argName) . '-section', $stub);
        $stub = str_replace('{{ settingsVar }}', Str::camel($argName) . 'Settings', $stub);
        $stub = str_replace('{{ dataVar }}', Str::camel($argName) . 'Data', $stub);
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
    private function createDatabaseEntry(string $argName, string $originalName): void
    {
        if (Section::where('name', $argName)->exists()) {
            $this->warn("[$argName] Section already exists in the database, skipping.");
            return;
        }

        Section::create([
            'name'  => $argName,
            'title' => '{ "en": "' . $originalName . '", "fr": "' . $originalName . '" }',
        ]);

        $this->info("[$argName] Section added to the database successfully.");
    }
}
