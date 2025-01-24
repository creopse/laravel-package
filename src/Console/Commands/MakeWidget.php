<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MakeWidget extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-widget {name : The name of the widget}';

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
        $fileName = $argName . '.vue';
        $filePath = base_path('resources/js/components/widgets/' . $fileName);

        if (File::exists($filePath)) {
            $this->error('Widget component already exists!');
            return;
        }

        $stub = File::get(app('creopse.base_path') . '/stubs/widget.stub');
        $stub = str_replace('{{ name }}', $argName, $stub);
        $stub = str_replace('{{ id }}', Str::kebab($argName) . '-widget', $stub);

        File::put($filePath, $stub);

        $this->info('Widget component created successfully.');
    }
}
