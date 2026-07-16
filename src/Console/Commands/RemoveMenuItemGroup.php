<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuItemGroup;

class RemoveMenuItemGroup extends CreopseCommand
{
    protected $signature = 'creopse:remove-menu-item-group
        {name : The name of the menu item group to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-item-group}';

    protected $aliases = ['creopse:delete-menu-item-group'];

    protected $description = 'Delete a menu item group.';

    public function handle()
    {
        $name = $this->argument('name');

        $group = MenuItemGroup::where('name', $name)->first();

        if (! $group) {
            $this->error("Menu item group '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("menu item group '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $group->delete();

        $this->info("[{$name}] Menu item group deleted successfully.");

        return self::SUCCESS;
    }
}
