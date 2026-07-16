<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuItemType;

class MakeMenuItemType extends CreopseCommand
{
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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        if (MenuItemType::where('name', $name)->exists()) {
            $this->warn("[{$name}] A menu item type with this name already exists, skipping.");

            return self::FAILURE;
        }

        MenuItemType::create([
            'name' => $name,
            'description' => $this->mergeLocalizedOption([], 'description'),
        ]);

        $this->info("[{$name}] Menu item type created successfully.");

        return self::SUCCESS;
    }
}
