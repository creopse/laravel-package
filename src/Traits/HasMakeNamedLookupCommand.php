<?php

namespace Creopse\Creopse\Traits;

/**
 * Shared handle() for console commands that create a simple, uniquely-named
 * lookup record (name + localized description) — e.g. MakeMenuItemGroup,
 * MakeMenuItemType, MakeMenuLocation, which used to hand-copy this exact
 * logic. A consuming command declares the two namedLookup*() config
 * methods and keeps its own $signature/$aliases/$description (Artisan
 * needs those as literal per-command strings).
 */
trait HasMakeNamedLookupCommand
{
    /**
     * Fully-qualified Eloquent model class managed by the command.
     */
    abstract protected function namedLookupModelClass(): string;

    /**
     * Lowercase, singular label used in messages, e.g. "menu item group".
     */
    abstract protected function namedLookupLabel(): string;

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');
        $modelClass = $this->namedLookupModelClass();
        $label = $this->namedLookupLabel();

        if ($modelClass::where('name', $name)->exists()) {
            $this->warn("[{$name}] A {$label} with this name already exists, skipping.");

            return self::FAILURE;
        }

        $modelClass::create([
            'name' => $name,
            'description' => $this->mergeLocalizedOption([], 'description'),
        ]);

        $this->info("[{$name}] ".ucfirst($label).' created successfully.');

        return self::SUCCESS;
    }
}
