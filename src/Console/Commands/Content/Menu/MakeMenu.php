<?php

namespace Creopse\Creopse\Console\Commands\Content\Menu;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Menu;
use Creopse\Creopse\Models\MenuLocation;

class MakeMenu extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-menu
        {name : The unique name of the menu}
        {--title=* : Locale:value pair for the title, e.g. --title="en:Main Menu". Repeatable.}
        {--description=* : Locale:value pair for the description, inline or locale:@path/to/file. Repeatable.}
        {--data= : JSON for menu parameters, inline or @path/to/file.json}
        {--location= : Name of the menu location to assign (e.g. header, footer)}
        {--alias=creopse:add-menu}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-menu'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a menu, optionally assigning it to a menu location.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        if (Menu::where('name', $name)->exists()) {
            $this->warn("[{$name}] A menu with this name already exists, skipping.");

            return self::FAILURE;
        }

        $menuLocationId = null;
        if ($this->option('location') !== null) {
            $location = MenuLocation::where('name', $this->option('location'))->first();

            if (! $location) {
                $this->error("Menu location '{$this->option('location')}' not found.");

                return self::FAILURE;
            }

            $menuLocationId = $location->id;
        }

        $data = null;
        if ($this->option('data') !== null) {
            $data = $this->resolveJsonOption('data');
            if ($data === null) {
                return self::FAILURE;
            }
        }

        $menu = Menu::create([
            'name' => $name,
            'title' => $this->mergeLocalizedOption(['en' => $name, 'fr' => $name], 'title'),
            'description' => $this->mergeLocalizedOption([], 'description'),
            'data' => $data,
        ]);

        if ($menuLocationId !== null) {
            $this->assignLocation($menu, $menuLocationId);
        }

        $this->info("[{$name}] Menu created successfully (id: {$menu->id}).");

        return self::SUCCESS;
    }

    /**
     * Assign a menu location to the menu, stripping it from whichever
     * other menu currently holds it (a location belongs to one menu only).
     */
    private function assignLocation(Menu $menu, int $menuLocationId): void
    {
        $existingMenu = Menu::where('menu_location_id', $menuLocationId)->first();

        if ($existingMenu && $existingMenu->id !== $menu->id) {
            $existingMenu->update(['menu_location_id' => null]);
            $this->line("[{$existingMenu->name}] Lost its menu location (reassigned).");
        }

        $menu->update(['menu_location_id' => $menuLocationId]);
    }
}
