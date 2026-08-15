<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuLocation;
use Creopse\Creopse\Traits\HasUpdateNamedLookupCommand;

class UpdateMenuLocation extends CreopseCommand
{
    use HasUpdateNamedLookupCommand;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-menu-location
        {name : The current name of the menu location}
        {--new-name= : Rename the menu location}
        {--description=* : Locale:value pair for the description, e.g. --description="fr:En-tête du site". Repeatable.}
        {--alias=creopse:edit-menu-location}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-menu-location'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a menu location\'s name and/or description.';

    protected function namedLookupModelClass(): string
    {
        return MenuLocation::class;
    }

    protected function namedLookupLabel(): string
    {
        return 'menu location';
    }
}
