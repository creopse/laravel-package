<?php

namespace Creopse\Creopse\Helpers\IpLocation;

use ipinfo\ipinfo\IPinfo;
use ipinfo\ipinfo\IPinfoException;

use Creopse\Creopse\Helpers\Constants;

/**
 * IpInfoApi
 *
 * Driver for ipinfo.io using the official PHP SDK (ipinfo/ipinfo).
 *
 * IPinfo::getDetails() returns a Details object — NOT an array.
 * Properties are accessed directly: $details->city, $details->loc, etc.
 * The full data array is available via $details->all.
 *
 * The "loc" field contains "latitude,longitude" as a single string and
 * must be split before use.
 *
 * Free plan: 50 000 requests/month.
 * Reference: https://github.com/ipinfo/php
 */
class IpInfoApi
{
    var $ipinfo;

    var $ip       = null;
    var $hostname = null;
    var $city     = null;
    var $region   = null;
    var $country  = null;
    var $loc      = null;
    var $org      = null;
    var $postal   = null;
    var $timezone = null;

    function __construct()
    {
        $this->ipinfo = new IPinfo(
            Constants::IP_INFO_API_KEYS[Constants::getIpInfoApiKeysIndex()]
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
            // getDetails() returns a Details object, not an array
            $details = $this->ipinfo->getDetails($ip);
        } catch (IPinfoException $e) {
            return;
        }

        if (empty($details)) {
            return;
        }

        $this->ip       = $ip;
        $this->hostname = $details->hostname ?? null;
        $this->city     = $details->city     ?? null;
        $this->region   = $details->region   ?? null;
        $this->country  = $details->country  ?? null;
        $this->loc      = $details->loc      ?? null;
        $this->org      = $details->org      ?? null;
        $this->postal   = $details->postal   ?? null;
        $this->timezone = $details->timezone ?? null;
    }
}
