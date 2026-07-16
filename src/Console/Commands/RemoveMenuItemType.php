<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuItemType;

class RemoveMenuItemType extends CreopseCommand
{
    protected $signature = 'creopse:remove-menu-item-type
        {name : The name of the menu item type to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-item-type}';

    protected $aliases = ['creopse:delete-menu-item-type'];

    protected $description = 'Delete a menu item type.';

    public function handle()
    {
        $name = $this->argument('name');

        $type = MenuItemType::where('name', $name)->first();

        if (! $type) {
            $this->error("Menu item type '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("menu item type '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $type->delete();

        $this->info("[{$name}] Menu item type deleted successfully.");

        return self::SUCCESS;
    }
}
