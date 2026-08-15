<?php

// MNT-03: GeoPluginApi, IpApi and IpApiComApi used to each hand-copy the
// exact same curl/file_get_contents fetch() method, differing only by the
// User-Agent string sent and by the class name in the "cannot fetch data"
// warning. Both now come from Traits\HasHttpFetch (fetch() itself + the
// class-name-derived warning) with a single per-class driverUserAgent().
// This pins down that each driver still reports its original, distinct
// User-Agent — the one thing that stayed hand-declared per class after the
// extraction, and so the one thing a copy-paste slip could get wrong.

use Creopse\Creopse\Helpers\IpLocation\Core\HasHttpFetch;
use Creopse\Creopse\Helpers\IpLocation\GeoPluginApi;
use Creopse\Creopse\Helpers\IpLocation\IpApi;
use Creopse\Creopse\Helpers\IpLocation\IpApiComApi;

dataset('driversAndUserAgents', [
    'GeoPluginApi' => [GeoPluginApi::class, 'Espoerc/GeoPlugin-Driver'],
    'IpApi' => [IpApi::class, 'Espoerc/IpApi-Driver'],
    'IpApiComApi' => [IpApiComApi::class, 'Espoerc/IpApiCom-Driver'],
]);

it('reports its original per-driver User-Agent', function (string $class, string $expected) {
    $driver = new $class;

    $method = new ReflectionMethod($driver, 'driverUserAgent');

    expect($method->invoke($driver))->toBe($expected);
})->with('driversAndUserAgents');

it('shares the same fetch() implementation across drivers', function (string $class) {
    $driver = new $class;

    $method = new ReflectionMethod($driver, 'fetch');
    $traitFile = (new ReflectionClass(HasHttpFetch::class))->getFileName();

    // A trait method's declaring class (per Reflection) is the consuming
    // class, not the trait — compare the source file instead to prove
    // fetch() actually comes from HasHttpFetch and wasn't redeclared here.
    expect($method->getFileName())->toBe($traitFile);
})->with([
    'GeoPluginApi' => [GeoPluginApi::class],
    'IpApi' => [IpApi::class],
    'IpApiComApi' => [IpApiComApi::class],
]);
