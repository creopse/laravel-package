<?php

namespace Creopse\Creopse\Helpers\IpLocation\Core;

use Creopse\Creopse\Helpers\IpLocation\GeoPluginApi;
use Creopse\Creopse\Helpers\IpLocation\IpApiComApi;
use Creopse\Creopse\Helpers\IpLocation\IpDataApi;
use Creopse\Creopse\Helpers\IpLocation\IpInfoApi;
use Creopse\Creopse\Helpers\IpLocation\IpApi;

/**
 * Aggregator
 *
 * Resolves IP geolocation by delegating to one or more provider drivers.
 *
 * Available sources:
 *   - 'geoplugin'  — geoplugin.net    (free, no key)
 *   - 'ipapicom'   — ip-api.com       (free, no key, non-commercial only)
 *   - 'ipapicoapi' — ipapi.co         (free tier: ~1 000 req/day, no key)
 *   - 'ipinfo'     — ipinfo.io        (requires API key via Constants)
 *   - 'ipdata'     — ipdata.co        (requires API key via Constants)
 *
 * In 'auto' mode the drivers are tried in order of priority until one
 * returns a valid result:
 *   GeoPlugin → ip-api.com → ipapi.co → IpInfo → IpData
 *
 * All drivers return the same normalised array:
 *   ip, latitude, longitude, continent, country, region, city,
 *   iso, timezone, currency, source
 */
class Aggregator
{
    const GEO_PLUGIN_SRC  = 'geoplugin';
    const IP_API_COM_SRC  = 'ipapicom';
    const IP_API_CO_SRC   = 'ipapicoapi';
    const IP_INFO_SRC     = 'ipinfo';
    const IP_DATA_SRC     = 'ipdata';

    private $source;
    private $ipAddress;

    public function __construct($ipAddress, $source = 'auto')
    {
        $this->ipAddress = $ipAddress;
        $this->source    = strtolower($source);
    }

    /**
     * Fetch the geolocation for the configured IP address.
     *
     * @return array|string Normalised location array, or an error message string.
     */
    public function fetchIpLocation()
    {
        $result = match ($this->source) {
            self::GEO_PLUGIN_SRC  => $this->fetchFromGeoPlugin(),
            self::IP_API_COM_SRC  => $this->fetchFromIpApiCom(),
            self::IP_API_CO_SRC   => $this->fetchFromIpApiCo(),
            self::IP_INFO_SRC     => $this->fetchFromIpInfo(),
            self::IP_DATA_SRC     => $this->fetchFromIpData(),
            default               => $this->fetchAuto(),
        };

        return empty($result) ? 'Unable to find IP Geolocation' : $result;
    }

    // -------------------------------------------------------------------------
    // Auto fallback chain
    // -------------------------------------------------------------------------

    /**
     * Try each driver in priority order, return the first valid result.
     *
     * @return array
     */
    private function fetchAuto()
    {
        $drivers = [
            fn() => $this->fetchFromGeoPlugin(),
            fn() => $this->fetchFromIpApiCom(),
            fn() => $this->fetchFromIpApiCo(),
            fn() => $this->fetchFromIpInfo(),
            fn() => $this->fetchFromIpData(),
        ];

        foreach ($drivers as $driver) {
            $result = $driver();
            if (!empty($result)) {
                return $result;
            }
        }

        return [];
    }

    // -------------------------------------------------------------------------
    // Individual driver fetch methods
    // -------------------------------------------------------------------------

    /**
     * Fetch from geoplugin.net.
     *
     * @return array
     */
    private function fetchFromGeoPlugin()
    {
        $geoplugin = new GeoPluginApi();
        $geoplugin->locate($this->ipAddress);

        if (empty($geoplugin->countryCode)) {
            return [];
        }

        return [
            'ip'        => $geoplugin->ip,
            'latitude'  => $geoplugin->latitude,
            'longitude' => $geoplugin->longitude,
            'continent' => $geoplugin->continentName,
            'country'   => $geoplugin->countryName,
            'region'    => $geoplugin->regionName,
            'city'      => $geoplugin->city,
            'iso'       => $geoplugin->countryCode,
            'timezone'  => $geoplugin->timezone,
            'currency'  => $geoplugin->currencyCode,
            'source'    => self::GEO_PLUGIN_SRC,
        ];
    }

    /**
     * Fetch from ip-api.com (free, no key required).
     *
     * @return array
     */
    private function fetchFromIpApiCom()
    {
        $ipApiCom = new IpApiComApi();
        $ipApiCom->locate($this->ipAddress);

        if (empty($ipApiCom->country_code)) {
            return [];
        }

        return [
            'ip'        => $ipApiCom->ip,
            'latitude'  => $ipApiCom->latitude,
            'longitude' => $ipApiCom->longitude,
            'continent' => $ipApiCom->continent_name,
            'country'   => $ipApiCom->country_name,
            'region'    => $ipApiCom->region,
            'city'      => $ipApiCom->city,
            'iso'       => $ipApiCom->country_code,
            'timezone'  => $ipApiCom->timezone,
            'currency'  => $ipApiCom->currency,
            'source'    => self::IP_API_COM_SRC,
        ];
    }

    /**
     * Fetch from ipapi.co.
     *
     * @return array
     */
    private function fetchFromIpApiCo()
    {
        $ipApi = new IpApi();
        $ipApi->locate($this->ipAddress);

        if (empty($ipApi->country_code)) {
            return [];
        }

        return [
            'ip'        => $ipApi->ip,
            'latitude'  => $ipApi->latitude,
            'longitude' => $ipApi->longitude,
            'continent' => $ipApi->continent_code, // ipapi.co only provides continent code, not name
            'country'   => $ipApi->country_name,
            'region'    => $ipApi->region,
            'city'      => $ipApi->city,
            'iso'       => $ipApi->country_code,
            'timezone'  => $ipApi->timezone,
            'currency'  => $ipApi->currency,
            'source'    => self::IP_API_CO_SRC,
        ];
    }

    /**
     * Fetch from ipinfo.io.
     *
     * @return array
     */
    private function fetchFromIpInfo()
    {
        $ipInfo = new IpInfoApi();
        $ipInfo->locate($this->ipAddress);

        if (empty($ipInfo->country)) {
            return [];
        }

        // "loc" is a "lat,lon" string — split it safely
        $coordinates = explode(',', $ipInfo->loc ?? ',');

        return [
            'ip'        => $ipInfo->ip,
            'latitude'  => $coordinates[0] ?? null,
            'longitude' => $coordinates[1] ?? null,
            'continent' => '',         // ipinfo.io does not provide continent data on the free plan
            'country'   => $ipInfo->country,
            'region'    => $ipInfo->region,
            'city'      => $ipInfo->city,
            'iso'       => $ipInfo->country,
            'timezone'  => $ipInfo->timezone,
            'currency'  => '',         // ipinfo.io does not provide currency data on the free plan
            'source'    => self::IP_INFO_SRC,
        ];
    }

    /**
     * Fetch from ipdata.co.
     *
     * @return array
     */
    private function fetchFromIpData()
    {
        $ipData = new IpDataApi();
        $ipData->locate($this->ipAddress);

        if (empty($ipData->country_code)) {
            return [];
        }

        return [
            'ip'        => $ipData->ip,
            'latitude'  => $ipData->latitude,
            'longitude' => $ipData->longitude,
            'continent' => $ipData->continent_name,
            'country'   => $ipData->country_name,
            'region'    => $ipData->region,
            'city'      => $ipData->city,
            'iso'       => $ipData->country_code,
            'timezone'  => $ipData->timezone,
            'currency'  => $ipData->currency,
            'source'    => self::IP_DATA_SRC,
        ];
    }
}
