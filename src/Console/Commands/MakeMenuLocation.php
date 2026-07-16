<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\MenuLocation;

class MakeMenuLocation extends CreopseCommand
{
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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        if (MenuLocation::where('name', $name)->exists()) {
            $this->warn("[{$name}] A menu location with this name already exists, skipping.");

            return self::FAILURE;
        }

        MenuLocation::create([
            'name' => $name,
            'description' => $this->mergeLocalizedOption([], 'description'),
        ]);

        $this->info("[{$name}] Menu location created successfully.");

        return self::SUCCESS;
    }
}
