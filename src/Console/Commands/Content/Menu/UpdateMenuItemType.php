<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Traits\HasUpdateNamedLookupCommand;

class UpdateMenuItemType extends CreopseCommand
{
    use HasUpdateNamedLookupCommand;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-menu-item-type
        {name : The current name of the menu item type}
        {--new-name= : Rename the menu item type}
        {--description=* : Locale:value pair for the description. Repeatable.}
        {--alias=creopse:edit-menu-item-type}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-menu-item-type'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a menu item type\'s name and/or description.';

    protected function namedLookupModelClass(): string
    {
        return MenuItemType::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu item type';
    }
}
