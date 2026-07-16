<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuLocation;

class RemoveMenuLocation extends CreopseCommand
{
    protected $signature = 'creopse:remove-menu-location
        {name : The name of the menu location to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-location}';

    protected $aliases = ['creopse:delete-menu-location'];

    protected $description = 'Delete a menu location.';

    public function handle()
    {
        $name = $this->argument('name');

        $menuLocation = MenuLocation::where('name', $name)->first();

        if (! $menuLocation) {
            $this->error("Menu location '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("menu location '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $menuLocation->delete();

        $this->info("[{$name}] Menu location deleted successfully.");

        return self::SUCCESS;
    }
}
