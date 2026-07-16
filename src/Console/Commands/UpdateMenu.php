<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\MenuLocation;

class UpdateMenu extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-menu
        {name : The name of the menu to update}
        {--title=* : Locale:value pair for the title, e.g. --title="fr:Menu principal". Repeatable.}
        {--description=* : Locale:value pair for the description, inline or locale:@path/to/file. Repeatable.}
        {--data= : JSON for menu parameters, inline or @path/to/file.json}
        {--location= : Name of the menu location to assign (e.g. header, footer). Use "none" to unassign.}
        {--alias=creopse:edit-menu}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-menu'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a menu, optionally reassigning its menu location.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $menu = Menu::where('name', $name)->first();

        if (! $menu) {
            $this->error("Menu '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        $currentTitle = json_decode($menu->title ?? '{}', true) ?: [];
        $title = $this->mergeLocalizedOption($currentTitle, 'title');
        if ($title !== null) {
            $payload['title'] = $title;
        }

        $currentDescription = json_decode($menu->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        if ($this->option('data') !== null) {
            $data = $this->resolveJsonOption('data');
            if ($data === null) {
                return self::FAILURE;
            }
            $payload['data'] = $data;
        }

        if (empty($payload) && $this->option('location') === null) {
            $this->warn('No attribute provided.');

            return self::FAILURE;
        }

        if (! empty($payload)) {
            $menu->update($payload);

            foreach (array_keys($payload) as $attribute) {
                $this->info("[{$name}] '{$attribute}' updated successfully.");
            }
        }

        if ($this->option('location') !== null) {
            $this->handleLocationOption($menu);
        }

        return self::SUCCESS;
    }

    /**
     * Resolve --location, supporting "none" to unassign the current
     * location, and reassign the location if it belongs to another menu.
     */
    private function handleLocationOption(Menu $menu): void
    {
        $locationName = $this->option('location');

        if (strtolower($locationName) === 'none') {
            $menu->update(['menu_location_id' => null]);
            $this->info("[{$menu->name}] Menu location removed.");

            return;
        }

        $location = MenuLocation::where('name', $locationName)->first();

        if (! $location) {
            $this->error("Menu location '{$locationName}' not found.");

            return;
        }

        $existingMenu = Menu::where('menu_location_id', $location->id)->first();

        if ($existingMenu && $existingMenu->id !== $menu->id) {
            $existingMenu->update(['menu_location_id' => null]);
            $this->line("[{$existingMenu->name}] Lost its menu location (reassigned).");
        }

        $menu->update(['menu_location_id' => $location->id]);
        $this->info("[{$menu->name}] Menu location set to '{$locationName}'.");
    }
}
