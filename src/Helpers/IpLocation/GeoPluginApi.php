<?php

namespace Creopse\Creopse\Helpers\IpLocation;

use Creopse\Creopse\Helpers\IpLocation\Core\HasHttpFetch;

/**
 * GeoPluginApi
 *
 * Driver for geoplugin.net.
 *
 * We intentionally use the JSON endpoint (json.gp) instead of the PHP
 * serialized endpoint (php.gp). Both return identical data, but the JSON
 * variant lets us use json_decode() and avoids the security risks of
 * deserializing untrusted PHP data from an external HTTP source.
 *
 * Reference: https://www.geoplugin.com/webservices/json
 *
 * Free to use — attribution required (Creative Commons BY-SA 3.0).
 * No API key needed.
 */
class GeoPluginApi
{
    use HasHttpFetch;

    // JSON endpoint — safer than the PHP-serialized php.gp endpoint
    public $host = 'http://www.geoplugin.net/json.gp?ip={IP}&base_currency={CURRENCY}&lang={LANG}';

    // Default base currency
    public $currency = 'USD';

    // Default response language
    // Supported: de, en, es, fr, ja, pt-BR, ru, zh-CN
    public $lang = 'en';

    public $ip = null;

    public $city = null;

    public $region = null;

    public $regionCode = null;

    public $regionName = null;

    public $dmaCode = null;

    public $countryCode = null;

    public $countryName = null;

    public $inEU = null;

    public $continentCode = null;

    public $continentName = null;

    public $latitude = null;

    public $longitude = null;

    public $locationAccuracyRadius = null;

    public $timezone = null;

    public $currencyCode = null;

    public $currencySymbol = null;

    public $currencyConverter = null;

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
        $url = str_replace('{CURRENCY}', urlencode($this->currency), $url);
        $url = str_replace('{LANG}', urlencode($this->lang), $url);

        $response = $this->fetch($url);

        if (empty($response)) {
            return;
        }

        $data = json_decode($response, true);

        if (json_last_error() !== JSON_ERROR_NONE || empty($data)) {
            return;
        }

        $this->ip = $ip;
        $this->city = $data['geoplugin_city'] ?? '';
        $this->region = $data['geoplugin_region'] ?? '';
        $this->regionCode = $data['geoplugin_regionCode'] ?? '';
        $this->regionName = $data['geoplugin_regionName'] ?? '';
        $this->dmaCode = $data['geoplugin_dmaCode'] ?? '';
        $this->countryCode = $data['geoplugin_countryCode'] ?? '';
        $this->countryName = $data['geoplugin_countryName'] ?? '';
        $this->inEU = $data['geoplugin_inEU'] ?? '';
        $this->continentCode = $data['geoplugin_continentCode'] ?? '';
        $this->continentName = $data['geoplugin_continentName'] ?? '';
        $this->latitude = $data['geoplugin_latitude'] ?? '';
        $this->longitude = $data['geoplugin_longitude'] ?? '';
        $this->locationAccuracyRadius = $data['geoplugin_locationAccuracyRadius'] ?? '';
        $this->timezone = $data['geoplugin_timezone'] ?? '';
        $this->currencyCode = $data['geoplugin_currencyCode'] ?? '';
        $this->currencySymbol = $data['geoplugin_currencySymbol'] ?? '';
        $this->currencyConverter = $data['geoplugin_currencyConverter'] ?? '';
    }

    protected function driverUserAgent(): string
    {
        return 'Espoerc/GeoPlugin-Driver';
    }

    /**
     * Convert an amount to the visitor's local currency.
     *
     * @param  float  $amount
     * @param  int  $decimals
     * @param  bool  $symbol  Prepend the currency symbol
     * @return float|string
     */
    public function convert($amount, $decimals = 2, $symbol = true)
    {
        if (! is_numeric($this->currencyConverter) || $this->currencyConverter == 0) {
            trigger_error(
                'GeoPluginApi::convert — currencyConverter has no value.',
                E_USER_NOTICE
            );

            return $amount;
        }

        if (! is_numeric($amount)) {
            trigger_error(
                'GeoPluginApi::convert — amount is not numeric.',
                E_USER_WARNING
            );

            return $amount;
        }

        $converted = round($amount * $this->currencyConverter, $decimals);

        return $symbol ? $this->currencySymbol.$converted : $converted;
    }

    /**
     * Return nearby populated places.
     *
     * @param  int  $radius  Search radius in km
     * @param  int|null  $limit
     * @return array
     */
    public function nearby($radius = 10, $limit = null)
    {
        if (! is_numeric($this->latitude) || ! is_numeric($this->longitude)) {
            trigger_error(
                'GeoPluginApi::nearby — invalid latitude or longitude.',
                E_USER_NOTICE
            );

            return [];
        }

        $url = 'http://www.geoplugin.net/extras/nearby.gp'
            .'?lat='.urlencode($this->latitude)
            .'&long='.urlencode($this->longitude)
            .'&radius='.urlencode($radius)
            .'&format=json';

        if (is_numeric($limit)) {
            $url .= '&limit='.(int) $limit;
        }

        $response = $this->fetch($url);

        if (empty($response)) {
            return [];
        }

        $data = json_decode($response, true);

        return (json_last_error() === JSON_ERROR_NONE && is_array($data)) ? $data : [];
    }
}
