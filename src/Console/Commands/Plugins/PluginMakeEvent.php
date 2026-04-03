<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

class PluginMakeEvent extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-event';
    protected $description = 'Create a new event inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'src/Events';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Events';
    }

    protected function getStubFilename(): string
    {
        return 'event.stub';
    }
}
