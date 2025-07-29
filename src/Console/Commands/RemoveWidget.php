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
    protected $signature = 'creopse:remove-widget {name : The name of the widget} {--alias=creopse:delete-widget}';

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
    protected $description = 'Remove an widget vue component.';

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
            File::delete($filePath);
            $this->info("Component file '$fileName' deleted successfully.");
        } else {
            $this->warn("Component file '$fileName' does not exist.");
        }

        $this->info('Widget removal process completed.');
    }
}
