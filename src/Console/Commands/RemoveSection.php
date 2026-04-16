<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\Section;
use Illuminate\Support\Facades\File;

class RemoveSection extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:remove-section {name* : The name(s) of the section(s)} {--alias=creopse:delete-section}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:delete-section'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove one or more section components and their entries in the sections table.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $frontendFramework = $this->detectFrontendFramework($this);

        foreach ($this->argument('name') as $name) {
            $this->processSection($name, $frontendFramework);
        }

        $this->info('Section removal process completed.');
    }

    /**
     * Process a single section: delete the component file and the database entry.
     */
    private function processSection(string $name, string $frontendFramework): void
    {
        $argName = Functions::strToPascalCase($name);

        $this->deleteComponentFile($argName, $frontendFramework);
        $this->deleteDatabaseEntry($argName);
    }

    /**
     * Delete the section component file.
     */
    private function deleteComponentFile(string $argName, string $frontendFramework): void
    {
        $fileName = $argName . ($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/sections/' . $fileName);

        if (!File::exists($filePath)) {
            $this->warn("[$argName] Component file '$fileName' does not exist, skipping.");
            return;
        }

        File::delete($filePath);
        $this->info("[$argName] Component file '$fileName' deleted successfully.");
    }

    /**
     * Delete the section database entry.
     */
    private function deleteDatabaseEntry(string $argName): void
    {
        $section = Section::where('name', $argName)->first();

        if (!$section) {
            $this->warn("[$argName] Section does not exist in the database, skipping.");
            return;
        }

        $section->delete();
        $this->info("[$argName] Section removed from the database successfully.");
    }
}
