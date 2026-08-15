<?php

namespace Creopse\Creopse\Helpers\IpLocation;

use Creopse\Creopse\Helpers\IpLocation\Core\HasHttpFetch;

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
    use HasHttpFetch;

    // HTTPS endpoint — {IP} is replaced at runtime
    public $host = 'https://ipapi.co/{IP}/json/';

    public $ip = null;

    public $version = null;

    public $city = null;

    public $region = null;

    public $region_code = null;

    public $country_code = null;

    public $country_code_iso3 = null;

    public $country_name = null;

    public $country_capital = null;

    public $country_tld = null;

    public $continent_code = null;

    public $in_eu = null;

    public $postal = null;

    public $latitude = null;

    public $longitude = null;

    public $timezone = null;

    public $currency = null;

    public $currency_name = null;

    public $asn = null;

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

        // ipapi.co returns JSON — never PHP-serialized data
        $data = json_decode($response, true);

        if (json_last_error() !== JSON_ERROR_NONE || empty($data)) {
            return;
        }

        // The API signals rate-limit / errors via an "error" boolean field
        if (! empty($data['error'])) {
            return;
        }

        $this->ip = $ip;
        $this->version = $data['version'] ?? null;
        $this->city = $data['city'] ?? null;
        $this->region = $data['region'] ?? null;
        $this->region_code = $data['region_code'] ?? null;
        $this->country_code = $data['country_code'] ?? null;
        $this->country_code_iso3 = $data['country_code_iso3'] ?? null;
        $this->country_name = $data['country_name'] ?? null;
        $this->country_capital = $data['country_capital'] ?? null;
        $this->country_tld = $data['country_tld'] ?? null;
        $this->continent_code = $data['continent_code'] ?? null;
        $this->in_eu = $data['in_eu'] ?? null;
        $this->postal = $data['postal'] ?? null;
        $this->latitude = $data['latitude'] ?? null;
        $this->longitude = $data['longitude'] ?? null;
        $this->timezone = $data['timezone'] ?? null;
        $this->currency = $data['currency'] ?? null;
        $this->currency_name = $data['currency_name'] ?? null;
        $this->asn = $data['asn'] ?? null;
        $this->org = $data['org'] ?? null;
    }

    protected function driverUserAgent(): string
    {
        return 'Espoerc/IpApi-Driver';
    }
}
