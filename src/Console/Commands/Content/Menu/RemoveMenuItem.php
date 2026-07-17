<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItem;

class RemoveMenuItem extends CreopseCommand
{
    protected $signature = 'creopse:remove-menu-item
        {id : The ID of the menu item to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-item}';

    protected $aliases = ['creopse:delete-menu-item'];

    protected $description = 'Delete a menu item and its direct children.';

    public function handle()
    {
        $id = $this->argument('id');

        $menuItem = MenuItem::find($id);

        if (! $menuItem) {
            $this->error("Menu item #{$id} not found.");

            return self::FAILURE;
        }

        $children = MenuItem::where('parent_id', $menuItem->id)->get();

        if (! $this->confirmDestruction("menu item #{$id}".($children->isNotEmpty() ? " and its {$children->count()} child item(s)" : ''))) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        foreach ($children as $child) {
            $child->delete();
        }

        $menuItem->delete();

        $this->info("[item #{$id}] Menu item deleted successfully.");

        return self::SUCCESS;
    }
}
