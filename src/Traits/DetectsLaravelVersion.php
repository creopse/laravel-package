<?php

namespace Creopse\Creopse\Traits;

trait DetectsLaravelVersion
{
    protected function getLaravelMajorVersion(): int
    {
        return (int) explode('.', $this->app->version())[0];
    }

    protected function getLaravelMinorVersion(): int
    {
        $parts = explode('.', $this->app->version());
        return isset($parts[1]) ? (int) $parts[1] : 0;
    }

    protected function isLaravelVersion(string $version): bool
    {
        return version_compare($this->app->version(), $version, '=');
    }

    protected function isLaravelVersionOrAbove(string $version): bool
    {
        return version_compare($this->app->version(), $version, '>=');
    }

    protected function isLaravelVersionBelow(string $version): bool
    {
        return version_compare($this->app->version(), $version, '<');
    }

    protected function isLaravelVersionBetween(string $min, string $max): bool
    {
        return $this->isLaravelVersionOrAbove($min) && $this->isLaravelVersionBelow($max);
    }
}
