<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeWidget extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-widget {name* : The name(s) of the widget(s)} {--alias=creopse:add-widget}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-widget'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add one or more widget components to resources/js/components/widgets directory.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $frontendFramework = $this->detectFrontendFramework($this);

        foreach ($this->argument('name') as $name) {
            $this->processWidget($name, $frontendFramework);
        }

        $this->info('Widget creation process completed.');
    }

    /**
     * Process a single widget: create the component file.
     */
    private function processWidget(string $name, string $frontendFramework): void
    {
        $argName = Functions::strToPascalCase($name);

        $fileName = $argName . ($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/widgets/' . $fileName);

        if (File::exists($filePath)) {
            $this->warn("[$argName] Widget component '$fileName' already exists, skipping.");
            return;
        }

        $stubFile = $frontendFramework === 'react' ? 'widget.react.stub' : 'widget.vue.stub';
        $stubPath = app('creopse.base_path') . '/stubs/' . $stubFile;

        if (!File::exists($stubPath)) {
            $this->error("[$argName] Stub file not found for {$frontendFramework}: {$stubPath}");
            return;
        }

        $stub = File::get($stubPath);
        $stub = str_replace('{{ name }}', $argName, $stub);
        $stub = str_replace('{{ id }}', Str::kebab($argName) . '-widget', $stub);

        File::put($filePath, $stub);

        if (File::exists($filePath)) {
            $this->info("[$argName] Widget component '$fileName' created successfully.");
        } else {
            $this->warn("[$argName] Widget component '$fileName' could not be created.");
        }
    }
}
