<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Traits\HasRemoveNamedLookupCommand;

class RemoveMenuItemGroup extends CreopseCommand
{
    use HasRemoveNamedLookupCommand;

    protected $signature = 'creopse:remove-menu-item-group
        {name : The name of the menu item group to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-item-group}';

    protected $aliases = ['creopse:delete-menu-item-group'];

    protected $description = 'Delete a menu item group.';

    protected function namedLookupModelClass(): string
    {
        return MenuItemGroup::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu item group';
    }
}
