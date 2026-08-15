<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuLocation;
use Creopse\Creopse\Traits\HasRemoveNamedLookupCommand;

class RemoveMenuLocation extends CreopseCommand
{
    use HasRemoveNamedLookupCommand;

    protected $signature = 'creopse:remove-menu-location
        {name : The name of the menu location to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-menu-location}';

    protected $aliases = ['creopse:delete-menu-location'];

    protected $description = 'Delete a menu location.';

    protected function namedLookupModelClass(): string
    {
        return MenuLocation::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu location';
    }
}
