<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\Menu;

class RemoveMenu extends CreopseCommand
{
    protected $signature = 'creopse:remove-menu
        {name : The name of the menu to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu}';

    protected $aliases = ['creopse:delete-menu'];

    protected $description = 'Delete a menu.';

    public function handle()
    {
        $name = $this->argument('name');

        $menu = Menu::where('name', $name)->first();

        if (! $menu) {
            $this->error("Menu '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("menu '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $menu->delete();

        $this->info("[{$name}] Menu deleted successfully.");

        return self::SUCCESS;
    }
}
