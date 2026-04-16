<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Support\Facades\File;

class RemoveWidget extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:remove-widget {name* : The name(s) of the widget(s)} {--alias=creopse:delete-widget}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:delete-widget'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove one or more widget components.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $frontendFramework = $this->detectFrontendFramework($this);

        foreach ($this->argument('name') as $name) {
            $this->processWidget($name, $frontendFramework);
        }

        $this->info('Widget removal process completed.');
    }

    /**
     * Process a single widget: delete the component file.
     */
    private function processWidget(string $name, string $frontendFramework): void
    {
        $argName = Functions::strToPascalCase($name);

        $fileName = $argName . ($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/widgets/' . $fileName);

        if (File::exists($filePath)) {
            File::delete($filePath);
            $this->info("Component file '$fileName' deleted successfully.");
        } else {
            $this->warn("Component file '$fileName' does not exist.");
        }
    }
}
