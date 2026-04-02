<?php

namespace Creopse\Creopse\Helpers\IpLocation;

/**
 * IpApi
 *
 * Driver for ipapi.co — returns JSON, no API key required for the free tier.
 * Full response: https://ipapi.co/api/#complete-location
 *
 * Free plan: ~1 000 requests/day. Paid plans available for higher volume.
 */
class IpApi
{
    // HTTPS endpoint — {IP} is replaced at runtime
    var $host = 'https://ipapi.co/{IP}/json/';

    var $ip              = null;
    var $version         = null;
    var $city            = null;
    var $region          = null;
    var $region_code     = null;
    var $country_code    = null;
    var $country_code_iso3 = null;
    var $country_name    = null;
    var $country_capital = null;
    var $country_tld     = null;
    var $continent_code  = null;
    var $in_eu           = null;
    var $postal          = null;
    var $latitude        = null;
    var $longitude       = null;
    var $timezone        = null;
    var $currency        = null;
    var $currency_name   = null;
    var $asn             = null;
    var $org             = null;

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

        // ipapi.co returns JSON — never PHP-serialized data
        $data = json_decode($response, true);

        if (json_last_error() !== JSON_ERROR_NONE || empty($data)) {
            return;
        }

        // The API signals rate-limit / errors via an "error" boolean field
        if (!empty($data['error'])) {
            return;
        }

        $this->ip                = $ip;
        $this->version           = $data['version']           ?? null;
        $this->city              = $data['city']              ?? null;
        $this->region            = $data['region']            ?? null;
        $this->region_code       = $data['region_code']       ?? null;
        $this->country_code      = $data['country_code']      ?? null;
        $this->country_code_iso3 = $data['country_code_iso3'] ?? null;
        $this->country_name      = $data['country_name']      ?? null;
        $this->country_capital   = $data['country_capital']   ?? null;
        $this->country_tld       = $data['country_tld']       ?? null;
        $this->continent_code    = $data['continent_code']    ?? null;
        $this->in_eu             = $data['in_eu']             ?? null;
        $this->postal            = $data['postal']            ?? null;
        $this->latitude          = $data['latitude']          ?? null;
        $this->longitude         = $data['longitude']         ?? null;
        $this->timezone          = $data['timezone']          ?? null;
        $this->currency          = $data['currency']          ?? null;
        $this->currency_name     = $data['currency_name']     ?? null;
        $this->asn               = $data['asn']               ?? null;
        $this->org               = $data['org']               ?? null;
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
            curl_setopt($ch, CURLOPT_USERAGENT, 'Espoerc/IpApi-Driver');
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
            'IpApi: cannot fetch data. Compile PHP with cURL or enable allow_url_fopen.',
            E_USER_WARNING
        );

        return null;
    }
}
