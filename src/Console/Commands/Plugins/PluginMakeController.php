<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

use Symfony\Component\Console\Input\InputOption;

class PluginMakeController extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-controller';
    protected $description = 'Create a new controller inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'src/Http/Controllers';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Http\\Controllers';
    }

    protected function getStubFilename(): string
    {
        return $this->option('resource') ? 'controller.model.api.stub' : 'controller.plain.stub';
    }

    protected function getOptions(): array
    {
        return array_merge(parent::getOptions(), [
            ['resource', 'r', InputOption::VALUE_NONE, 'Generate a resource controller'],
        ]);
    }
}
