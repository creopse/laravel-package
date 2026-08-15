<?php

namespace Creopse\Creopse\Helpers\IpLocation;

use Creopse\Creopse\Helpers\IpLocation\Core\HasHttpFetch;

/**
 * IpApiComApi
 *
 * Driver for ip-api.com — a free, keyless IP geolocation API.
 *
 * No API key or registration required for non-commercial use.
 * Rate limit: 45 requests/minute per IP address.
 *
 * IMPORTANT: The free endpoint does NOT support HTTPS. For HTTPS (SSL),
 * a Pro subscription at https://pro.ip-api.com is required.
 *
 * We request specific fields to minimise bandwidth. The "fields" bitmask
 * 61439 covers: status, message, continent, continentCode, country,
 * countryCode, region, regionName, city, lat, lon, timezone, currency,
 * isp, org, query.
 *
 * Reference: https://ip-api.com/docs/api:json
 */
class IpApiComApi
{
    use HasHttpFetch;

    public $host = 'http://ip-api.com/json/{IP}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,lat,lon,timezone,currency,isp,org,query';

    public $ip = null;

    public $city = null;

    public $region = null;

    public $region_code = null;

    public $country_name = null;

    public $country_code = null;

    public $continent_name = null;

    public $continent_code = null;

    public $latitude = null;

    public $longitude = null;

    public $timezone = null;

    public $currency = null;

    public $isp = null;

    public $org = null;

    public function __construct() {}

    /**
     * Locate a given IP address.
     *
     * @param  string|null  $ip
     * @return void
     */
    public function locate($ip = null)
    {
        global $_SERVER;

        if (is_null($ip)) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        $url = str_replace('{IP}', urlencode($ip), $this->host);

        $response = $this->fetch($url);

        if (empty($response)) {
            return;
        }

        $data = json_decode($response, true);

        if (json_last_error() !== JSON_ERROR_NONE || empty($data)) {
            return;
        }

        // The API returns status "fail" with a "message" on error
        if (($data['status'] ?? '') !== 'success') {
            return;
        }

        $this->ip = $ip;
        $this->city = $data['city'] ?? null;
        $this->region = $data['region'] ?? null;
        $this->region_code = $data['region'] ?? null; // ip-api.com uses region code in the "region" field
        $this->country_name = $data['country'] ?? null;
        $this->country_code = $data['countryCode'] ?? null;
        $this->continent_name = $data['continent'] ?? null;
        $this->continent_code = $data['continentCode'] ?? null;
        $this->latitude = $data['lat'] ?? null;
        $this->longitude = $data['lon'] ?? null;
        $this->timezone = $data['timezone'] ?? null;
        $this->currency = $data['currency'] ?? null;
        $this->isp = $data['isp'] ?? null;
        $this->org = $data['org'] ?? null;
    }

    protected function driverUserAgent(): string
    {
        return 'Espoerc/IpApiCom-Driver';
    }
}
