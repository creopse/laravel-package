<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuItemType;

class UpdateMenuItemType extends CreopseCommand
{
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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $type = MenuItemType::where('name', $name)->first();

        if (! $type) {
            $this->error("Menu item type '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        if ($this->option('new-name') !== null) {
            $newName = $this->option('new-name');

            if (MenuItemType::where('name', $newName)->where('id', '!=', $type->id)->exists()) {
                $this->error("A menu item type named '{$newName}' already exists.");

                return self::FAILURE;
            }

            $payload['name'] = $newName;
        }

        $currentDescription = json_decode($type->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --new-name and/or --description.');

            return self::FAILURE;
        }

        $type->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }
}
