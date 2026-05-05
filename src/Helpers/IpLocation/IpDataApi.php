<?php

namespace Creopse\Creopse\Helpers\IpLocation;

use Creopse\Creopse\Helpers\Constants;
use Ipdata\ApiClient\Ipdata;
use Nyholm\Psr7\Factory\Psr17Factory;
use Symfony\Component\HttpClient\Psr18Client;

/**
 * IpDataApi
 *
 * Driver for ipdata.co using the official PHP SDK (ipdata/ipdata).
 *
 * The SDK's lookup() method returns an associative array on success.
 * Access is done via array notation: $data['city'], $data['country_code'], etc.
 *
 * The currency and timezone data are nested:
 *   $data['currency']['name']
 *   $data['time_zone']['name']
 *
 * Reference: https://docs.ipdata.co
 * Paid plans required for production use (free tier: 1 500 requests/day).
 */
class IpDataApi
{
    public $ipdata;

    public $httpClient;

    public $psr17Factory;

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

    public $asn = null;

    public $calling_code = null;

    public $flag = null;

    public $languages = null;

    public $currency = null;

    public $timezone = null;

    public function __construct()
    {
        $this->httpClient = new Psr18Client;
        $this->psr17Factory = new Psr17Factory;

        $this->ipdata = new Ipdata(
            Constants::IP_DATA_API_KEYS[Constants::getIpDataApiKeysIndex()],
            $this->httpClient,
            $this->psr17Factory
        );
    }

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

        try {
            $data = $this->ipdata->lookup($ip);
        } catch (\Exception $e) {
            return;
        }

        if (empty($data) || empty($data['country_code'])) {
            return;
        }

        $this->ip = $ip;
        $this->city = $data['city'] ?? null;
        $this->region = $data['region'] ?? null;
        $this->region_code = $data['region_code'] ?? null;
        $this->country_name = $data['country_name'] ?? null;
        $this->country_code = $data['country_code'] ?? null;
        $this->continent_name = $data['continent_name'] ?? null;
        $this->continent_code = $data['continent_code'] ?? null;
        $this->latitude = $data['latitude'] ?? null;
        $this->longitude = $data['longitude'] ?? null;
        $this->asn = $data['asn'] ?? null;
        $this->calling_code = $data['calling_code'] ?? null;
        $this->flag = $data['flag'] ?? null;
        $this->languages = $data['languages'] ?? null;
        // Nested objects
        $this->currency = $data['currency']['name'] ?? null;
        $this->timezone = $data['time_zone']['name'] ?? null;
    }
}
