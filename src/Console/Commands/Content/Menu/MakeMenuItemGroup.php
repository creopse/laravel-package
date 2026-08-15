<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemGroup;
use Creopse\Creopse\Traits\HasMakeNamedLookupCommand;

class MakeMenuItemGroup extends CreopseCommand
{
    use HasMakeNamedLookupCommand;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-menu-item-group
        {name : The unique name of the menu item group}
        {--description=* : Locale:value pair for the description, e.g. --description="en:Featured items". Repeatable.}
        {--alias=creopse:add-menu-item-group}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-menu-item-group'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a menu item group.';

    protected function namedLookupModelClass(): string
    {
        return MenuItemGroup::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu item group';
    }
}
