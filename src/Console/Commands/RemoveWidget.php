<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class RemoveWidget extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:remove-widget {name : The name of the widget}';

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
        $fileName = $argName . '.vue';
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
