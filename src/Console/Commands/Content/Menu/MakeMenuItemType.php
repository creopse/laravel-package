<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemType;
use Creopse\Creopse\Traits\HasMakeNamedLookupCommand;

class MakeMenuItemType extends CreopseCommand
{
    use HasMakeNamedLookupCommand;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-menu-item-type
        {name : The unique name of the menu item type}
        {--description=* : Locale:value pair for the description, e.g. --description="en:Dropdown item". Repeatable.}
        {--alias=creopse:add-menu-item-type}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-menu-item-type'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a menu item type.';

    protected function namedLookupModelClass(): string
    {
        return MenuItemType::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu item type';
    }
}
