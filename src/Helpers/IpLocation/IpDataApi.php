<?php

namespace Creopse\Creopse\Helpers\IpLocation;

use Creopse\Creopse\Helpers\Constants;

use Ipdata\ApiClient\Ipdata;
use Symfony\Component\HttpClient\Psr18Client;
use Nyholm\Psr7\Factory\Psr17Factory;

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
    var $ipdata;
    var $httpClient;
    var $psr17Factory;

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
    var $asn            = null;
    var $calling_code   = null;
    var $flag           = null;
    var $languages      = null;
    var $currency       = null;
    var $timezone       = null;

    function __construct()
    {
        $this->httpClient   = new Psr18Client();
        $this->psr17Factory = new Psr17Factory();

        $this->ipdata = new Ipdata(
            Constants::IP_DATA_API_KEYS[Constants::getIpDataApiKeysIndex()],
            $this->httpClient,
            $this->psr17Factory
        );
    }

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

        try {
            $data = $this->ipdata->lookup($ip);
        } catch (\Exception $e) {
            return;
        }

        if (empty($data) || empty($data['country_code'])) {
            return;
        }

        $this->ip             = $ip;
        $this->city           = $data['city']           ?? null;
        $this->region         = $data['region']         ?? null;
        $this->region_code    = $data['region_code']    ?? null;
        $this->country_name   = $data['country_name']   ?? null;
        $this->country_code   = $data['country_code']   ?? null;
        $this->continent_name = $data['continent_name'] ?? null;
        $this->continent_code = $data['continent_code'] ?? null;
        $this->latitude       = $data['latitude']       ?? null;
        $this->longitude      = $data['longitude']      ?? null;
        $this->asn            = $data['asn']             ?? null;
        $this->calling_code   = $data['calling_code']   ?? null;
        $this->flag           = $data['flag']            ?? null;
        $this->languages      = $data['languages']      ?? null;
        // Nested objects
        $this->currency       = $data['currency']['name']   ?? null;
        $this->timezone       = $data['time_zone']['name']  ?? null;
    }
}
