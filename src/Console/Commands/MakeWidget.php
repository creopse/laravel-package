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
    protected $signature = 'creopse:make-widget {name : The name of the widget} {--alias=creopse:add-widget}';

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
    protected $description = 'Add a new widget vue component to resources/js/components/widgets directory.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $argName = Functions::strToPascalCase($this->argument('name'));
        $frontendFramework = $this->detectFrontendFramework($this);
        $fileName = $argName . ($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/widgets/' . $fileName);

        if (File::exists($filePath)) {
            $this->error('Widget component already exists!');
            return;
        }

        $stubFile = $frontendFramework === 'react' ? 'widget.react.stub' : 'widget.vue.stub';
        $stubPath = app('creopse.base_path') . '/stubs/' . $stubFile;

        if (!File::exists($stubPath)) {
            $this->error("Stub file not found for {$frontendFramework}: {$stubPath}");
            return;
        }

        $stub = File::get($stubPath);
        $stub = str_replace('{{ name }}', $argName, $stub);
        $stub = str_replace('{{ id }}', Str::kebab($argName) . '-widget', $stub);

        File::put($filePath, $stub);

        if (File::exists($filePath)) {
            $this->info("Widget component file '$fileName' created successfully.");
        } else {
            $this->warn("Widget component file '$fileName' could not be created.");
        }
    }
}
