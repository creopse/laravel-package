<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

class PluginMakeRequest extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-request';
    protected $description = 'Create a new form request inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'src/Http/Requests';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Http\\Requests';
    }

    protected function getStubFilename(): string
    {
        return 'request.stub';
    }
}
