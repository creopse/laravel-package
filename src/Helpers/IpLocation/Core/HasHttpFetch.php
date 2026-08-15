<?php

namespace Creopse\Creopse\Helpers\IpLocation\Core;

/**
 * Shared low-level HTTP GET used by the raw-HTTP geolocation drivers
 * (GeoPluginApi, IpApi, IpApiComApi). The SDK-backed drivers (IpDataApi,
 * IpInfoApi) don't need this — they go through their own client.
 */
trait HasHttpFetch
{
    /**
     * User-Agent identifying this driver in the outgoing request.
     */
    abstract protected function driverUserAgent(): string;

    /**
     * Perform an HTTP GET request.
     *
     * @param  string  $url
     * @return string|null
     */
    private function fetch($url)
    {
        if (function_exists('curl_init')) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 5);
            curl_setopt($ch, CURLOPT_USERAGENT, $this->driverUserAgent());
            $response = curl_exec($ch);
            $error = curl_errno($ch);
            curl_close($ch);

            if ($error || $response === false) {
                return null;
            }

            return $response;
        }

        if (ini_get('allow_url_fopen')) {
            $response = @file_get_contents($url);

            return $response !== false ? $response : null;
        }

        trigger_error(
            class_basename(static::class).': cannot fetch data. Compile PHP with cURL or enable allow_url_fopen.',
            E_USER_WARNING
        );

        return null;
    }
}
