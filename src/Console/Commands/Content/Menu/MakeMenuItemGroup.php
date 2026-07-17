<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuItemGroup;

class MakeMenuItemGroup extends CreopseCommand
{
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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        if (MenuItemGroup::where('name', $name)->exists()) {
            $this->warn("[{$name}] A menu item group with this name already exists, skipping.");

            return self::FAILURE;
        }

        MenuItemGroup::create([
            'name' => $name,
            'description' => $this->mergeLocalizedOption([], 'description'),
        ]);

        $this->info("[{$name}] Menu item group created successfully.");

        return self::SUCCESS;
    }
}
