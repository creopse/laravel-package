<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

use Illuminate\Support\Str;
use Symfony\Component\Console\Input\InputOption;

class PluginMakeModel extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-model';
    protected $description = 'Create a new Eloquent model inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'src/Models';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Models';
    }

    protected function getStubFilename(): string
    {
        return 'model.stub';
    }

    public function handle(): ?bool
    {
        $result = parent::handle();

        // Chain plugin:make-migration when --migration flag is passed
        if ($this->option('migration')) {
            $table = Str::snake(Str::pluralStudly($this->argument('name')));

            $this->call('plugin:make-migration', [
                'plugin'   => $this->argument('plugin'),
                'name'     => "create_{$table}_table",
                '--create' => $table,
            ]);
        }

        return $result;
    }

    protected function getOptions(): array
    {
        return array_merge(parent::getOptions(), [
            ['migration', 'm', InputOption::VALUE_NONE, 'Also create a migration for this model'],
        ]);
    }
}
