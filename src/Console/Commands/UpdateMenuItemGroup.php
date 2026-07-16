<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuItemGroup;

class UpdateMenuItemGroup extends CreopseCommand
{
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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $group = MenuItemGroup::where('name', $name)->first();

        if (! $group) {
            $this->error("Menu item group '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        if ($this->option('new-name') !== null) {
            $newName = $this->option('new-name');

            if (MenuItemGroup::where('name', $newName)->where('id', '!=', $group->id)->exists()) {
                $this->error("A menu item group named '{$newName}' already exists.");

                return self::FAILURE;
            }

            $payload['name'] = $newName;
        }

        $currentDescription = json_decode($group->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --new-name and/or --description.');

            return self::FAILURE;
        }

        $group->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }
}
