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
    protected $signature = 'creopse:remove-widget
        {name* : The name(s) of the widget(s)}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-widget}';

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
        $names = $this->argument('name');

        $label = count($names) === 1
            ? "widget '{$names[0]}'"
            : count($names).' widgets ('.implode(', ', $names).')';

        if (! $this->confirmDestruction($label)) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $frontendFramework = $this->detectFrontendFramework($this);

        foreach ($names as $name) {
            $this->processWidget($name, $frontendFramework);
        }

        $this->info('Widget removal process completed.');

        return self::SUCCESS;
    }

    /**
     * Process a single widget: delete the component file.
     */
    private function processWidget(string $name, string $frontendFramework): void
    {
        $argName = Functions::strToPascalCase($name);

        $fileName = $argName.($frontendFramework === 'react' ? '.tsx' : '.vue');
        $filePath = base_path('resources/js/components/widgets/'.$fileName);

        if (File::exists($filePath)) {
            File::delete($filePath);
            $this->info("Component file '$fileName' deleted successfully.");
        } else {
            $this->warn("Component file '$fileName' does not exist.");
        }
    }
}
