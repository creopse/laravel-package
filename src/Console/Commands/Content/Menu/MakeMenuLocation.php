<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuLocation;
use Creopse\Creopse\Traits\HasMakeNamedLookupCommand;

class MakeMenuLocation extends CreopseCommand
{
    use HasMakeNamedLookupCommand;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-menu-location
        {name : The unique name of the menu location, e.g. header, footer}
        {--description=* : Locale:value pair for the description, e.g. --description="en:Site header". Repeatable.}
        {--alias=creopse:add-menu-location}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-menu-location'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a menu location (e.g. header, footer) that a menu can be assigned to.';

    protected function namedLookupModelClass(): string
    {
        return MenuLocation::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu location';
    }
}
