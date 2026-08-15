<?php

namespace Creopse\Creopse\Traits;

/**
 * Shared handle() for console commands that delete a simple, uniquely-named
 * lookup record — e.g. RemoveMenuItemGroup, RemoveMenuItemType,
 * RemoveMenuLocation, which used to hand-copy this exact logic. A
 * consuming command declares the two namedLookup*() config methods and
 * keeps its own $signature/$aliases/$description (Artisan needs those as
 * literal per-command strings).
 */
trait HasRemoveNamedLookupCommand
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

        $model = $modelClass::where('name', $name)->first();

        if (! $model) {
            $this->error(ucfirst($label)." '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("{$label} '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $model->delete();

        $this->info("[{$name}] ".ucfirst($label).' deleted successfully.');

        return self::SUCCESS;
    }
}
