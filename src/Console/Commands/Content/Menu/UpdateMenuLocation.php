<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MenuLocation;

class UpdateMenuLocation extends CreopseCommand
{
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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $menuLocation = MenuLocation::where('name', $name)->first();

        if (! $menuLocation) {
            $this->error("Menu location '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        if ($this->option('new-name') !== null) {
            $newName = $this->option('new-name');

            if (MenuLocation::where('name', $newName)->where('id', '!=', $menuLocation->id)->exists()) {
                $this->error("A menu location named '{$newName}' already exists.");

                return self::FAILURE;
            }

            $payload['name'] = $newName;
        }

        $currentDescription = json_decode($menuLocation->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --new-name and/or --description.');

            return self::FAILURE;
        }

        $menuLocation->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }
}
