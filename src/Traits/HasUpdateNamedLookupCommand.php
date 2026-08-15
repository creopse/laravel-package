<?php

namespace Creopse\Creopse\Traits;

/**
 * Shared handle() for console commands that rename and/or redescribe a
 * simple, uniquely-named lookup record — e.g. UpdateMenuItemGroup,
 * UpdateMenuItemType, UpdateMenuLocation, which used to hand-copy this
 * exact logic. A consuming command declares the two namedLookup*() config
 * methods and keeps its own $signature/$aliases/$description (Artisan
 * needs those as literal per-command strings).
 */
trait HasUpdateNamedLookupCommand
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

        $payload = [];

        if ($this->option('new-name') !== null) {
            $newName = $this->option('new-name');

            if ($modelClass::where('name', $newName)->where('id', '!=', $model->id)->exists()) {
                $this->error("A {$label} named '{$newName}' already exists.");

                return self::FAILURE;
            }

            $payload['name'] = $newName;
        }

        $currentDescription = json_decode($model->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --new-name and/or --description.');

            return self::FAILURE;
        }

        $model->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }
}
