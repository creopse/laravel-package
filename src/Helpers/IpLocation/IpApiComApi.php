<?php

namespace Creopse\Creopse\Helpers\IpLocation;

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
    var $host = 'http://ip-api.com/json/{IP}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,lat,lon,timezone,currency,isp,org,query';

    var $ip             = null;
    var $city           = null;
    var $region         = null;
    var $region_code    = null;
    var $country_name   = null;
    var $country_code   = null;
    var $continent_name = null;
    var $continent_code = null;
    var $latitude       = null;
    var $longitude      = null;
    var $timezone       = null;
    var $currency       = null;
    var $isp            = null;
    var $org            = null;

    function __construct() {}

    /**
     * Locate a given IP address.
     *
     * @param  string|null $ip
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

        $this->ip             = $ip;
        $this->city           = $data['city']          ?? null;
        $this->region         = $data['region']        ?? null;
        $this->region_code    = $data['region']        ?? null; // ip-api.com uses region code in the "region" field
        $this->country_name   = $data['country']       ?? null;
        $this->country_code   = $data['countryCode']   ?? null;
        $this->continent_name = $data['continent']     ?? null;
        $this->continent_code = $data['continentCode'] ?? null;
        $this->latitude       = $data['lat']           ?? null;
        $this->longitude      = $data['lon']           ?? null;
        $this->timezone       = $data['timezone']      ?? null;
        $this->currency       = $data['currency']      ?? null;
        $this->isp            = $data['isp']           ?? null;
        $this->org            = $data['org']           ?? null;
    }

    /**
     * Perform an HTTP GET request.
     *
     * @param  string $url
     * @return string|null
     */
    private function fetch($url)
    {
        if (function_exists('curl_init')) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 5);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Espoerc/IpApiCom-Driver');
            $response = curl_exec($ch);
            $error    = curl_errno($ch);
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
            'IpApiComApi: cannot fetch data. Compile PHP with cURL or enable allow_url_fopen.',
            E_USER_WARNING
        );

        return null;
    }
}
