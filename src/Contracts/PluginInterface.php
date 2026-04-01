<?php

namespace Creopse\Creopse\Contracts;

interface PluginInterface
{
    // Unique identifier
    public function getId(): string;

    // Semver version of the plugin
    public function getVersion(): string;

    // Dependencies on other plugins
    public function getDependencies(): array;

    // Main entry point — called by the PluginManager
    public function boot(\Creopse\Creopse\PluginManager $manager): void;
}
