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
    protected $signature = 'creopse:remove-section {name : The name of the section} {--alias=creopse:delete-section}';

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
    protected $description = 'Remove an section vue component and entry in the sections table.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $argName = Functions::strToPascalCase($this->argument('name'));
        $frontendFramework = $this->detectFrontendFramework($this);
        $fileName = $argName . ($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/sections/' . $fileName);

        if (File::exists($filePath)) {
            File::delete($filePath);
            $this->info("Component file '$fileName' deleted successfully.");
        } else {
            $this->warn("Component file '$fileName' does not exist.");
        }

        $section = Section::where('name', $argName)->first();

        if ($section) {
            $section->delete();
            $this->info("Section '$argName' removed from the database successfully.");
        } else {
            $this->warn("Section '$argName' does not exist in the database.");
        }

        $this->info('Section removal process completed.');
    }
}
