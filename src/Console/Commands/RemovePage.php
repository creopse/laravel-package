<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\Page;

class RemovePage extends CreopseCommand
{
    protected $signature = 'creopse:remove-page
        {name : The name of the page to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-page}';

    protected $aliases = ['creopse:delete-page'];

    protected $description = 'Delete a page.';

    public function handle()
    {
        $name = $this->argument('name');

        $page = Page::where('name', $name)->first();

        if (! $page) {
            $this->error("Page '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("page '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $page->delete();

        $this->info("[{$name}] Page deleted successfully.");

        return self::SUCCESS;
    }
}
