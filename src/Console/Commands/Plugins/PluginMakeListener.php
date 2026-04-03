<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

use Symfony\Component\Console\Input\InputOption;

class PluginMakeListener extends PluginGeneratorCommand
{
    protected $name        = 'plugin:make-listener';
    protected $description = 'Create a new listener inside a plugin';

    protected function getPluginSubDirectory(): string
    {
        return 'src/Listeners';
    }

    protected function getPluginNamespaceSegment(): string
    {
        return 'Listeners';
    }

    protected function getStubFilename(): string
    {
        // Use typed+queued variant when both flags are set, typed when event is specified, etc.
        if ($this->option('queued') && $this->option('event')) {
            return 'listener.typed.queued.stub';
        }

        if ($this->option('event')) {
            return 'listener.typed.stub';
        }

        if ($this->option('queued')) {
            return 'listener.queued.stub';
        }

        return 'listener.stub';
    }

    protected function buildClass($name): string
    {
        $stub = parent::buildClass($name);

        // Inject the event FQCN if --event option is provided
        if ($event = $this->option('event')) {
            $stub = str_replace(
                ['{{ event }}', '{{event}}', 'DummyEvent'],
                class_basename($event),
                $stub
            );
            $stub = str_replace(
                ['{{ eventNamespace }}', '{{eventNamespace}}'],
                $event,
                $stub
            );
        }

        return $stub;
    }

    protected function getOptions(): array
    {
        return array_merge(parent::getOptions(), [
            ['event',  'e', InputOption::VALUE_OPTIONAL, 'The event class the listener handles (FQCN)'],
            ['queued', null, InputOption::VALUE_NONE,    'Generate a queued listener'],
        ]);
    }
}
