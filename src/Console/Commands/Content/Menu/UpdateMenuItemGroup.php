<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Traits\HasUpdateNamedLookupCommand;

class UpdateMenuItemGroup extends CreopseCommand
{
    use HasUpdateNamedLookupCommand;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-menu-item-group
        {name : The current name of the menu item group}
        {--new-name= : Rename the menu item group}
        {--description=* : Locale:value pair for the description. Repeatable.}
        {--alias=creopse:edit-menu-item-group}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-menu-item-group'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a menu item group\'s name and/or description.';

    protected function namedLookupModelClass(): string
    {
        return MenuItemGroup::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu item group';
    }
}
