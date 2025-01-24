<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\Section;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeSection extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-section {name : The name of the section}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add a new section vue component to resources/js/components/sections directory.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $argName = Functions::strToPascalCase($this->argument('name'));
        $fileName = $argName . '.vue';
        $filePath = base_path('resources/js/components/sections/' . $fileName);

        if (File::exists($filePath)) {
            $this->warn('Section component already exists!');
        } else {
            $stub = File::get(app('creopse.base_path') . '/stubs/section.stub');
            $stub = str_replace('{{ name }}', $argName, $stub);
            $stub = str_replace('{{ id }}', Str::kebab($argName) . '-section', $stub);
            $stub = str_replace('{{ dataVar }}', Str::camel($argName) . 'Data', $stub);
            $stub = str_replace('{{ dataId }}', strtolower(Str::camel($argName)), $stub);

            File::put($filePath, $stub);

            if (File::exists($filePath)) {
                $this->info("Component file '$fileName' created successfully.");
            } else {
                $this->warn("Component file '$fileName' could not be created.");
            }
        }

        $section = Section::where('name', $argName)->first();

        if ($section) {
            $this->warn("Section '$argName' already exists in the database.");
        } else {
            Section::create([
                'name' => $argName,
                'title' => '{ "en": "' . $this->argument('name') . '", "fr": "' . $this->argument('name') . '" }',
            ]);

            $this->info("Section '$argName' added to the database successfully.");
        }

        $this->info('Section creation process completed.');
    }
}
