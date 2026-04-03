<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

use Symfony\Component\Console\Input\InputOption;

class PluginMakeJob extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-job';
    protected $description = 'Create a new queued job inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'src/Jobs';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Jobs';
    }

    protected function getStubFilename(): string
    {
        return $this->option('sync') ? 'job.stub' : 'job.queued.stub';
    }

    protected function getOptions(): array
    {
        return array_merge(parent::getOptions(), [
            ['sync', null, InputOption::VALUE_NONE, 'Generate a synchronous (non-queued) job'],
        ]);
    }
}
