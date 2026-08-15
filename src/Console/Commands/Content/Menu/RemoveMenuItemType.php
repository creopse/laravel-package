<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Traits\HasRemoveNamedLookupCommand;

class RemoveMenuItemType extends CreopseCommand
{
    use HasRemoveNamedLookupCommand;

    protected $signature = 'creopse:remove-menu-item-type
        {name : The name of the menu item type to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-item-type}';

    protected $aliases = ['creopse:delete-menu-item-type'];

    protected $description = 'Delete a menu item type.';

    protected function namedLookupModelClass(): string
    {
        return MenuItemType::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu item type';
    }
}
