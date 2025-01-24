<?php

namespace Creopse\Creopse\Helpers\IpLocation;

/**
 * GeoPluginApi
 */
class GeoPluginApi
{
    //the geoPlugin server
    var $host = 'http://www.geoplugin.net/php.gp?ip={IP}&base_currency={CURRENCY}&lang={LANG}';

    //the default base currency
    var $currency = 'USD';

    //the default language
    var $lang = 'en';
    /*
	supported languages:
	de
	en
	es
	fr
	ja
	pt-BR
	ru
	zh-CN
	*/

    //initiate the geoPlugin vars
    var $ip = null;
    var $city = null;
    var $region = null;
    var $regionCode = null;
    var $regionName = null;
    var $dmaCode = null;
    var $countryCode = null;
    var $countryName = null;
    var $inEU = null;
    var $continentCode = null;
    var $continentName = null;
    var $latitude = null;
    var $longitude = null;
    var $locationAccuracyRadius = null;
    var $timezone = null;
    var $currencyCode = null;
    var $currencySymbol = null;
    var $currencyConverter = null;

    function __construct() {}

    /**
     * locate
     *
     * @param  mixed $ip
     * @return void
     */
    function locate($ip = null)
    {
        global $_SERVER;

        if (is_null($ip)) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        $host = str_replace('{IP}', $ip, $this->host);
        $host = str_replace('{CURRENCY}', $this->currency, $host);
        $host = str_replace('{LANG}', $this->lang, $host);

        $data = array();

        $response = $this->fetch($host);

        if (isset($response)) {

            $data = unserialize($response);

            //set the geoPlugin vars
            $this->ip = $ip;
            $this->city = $data ? $data['geoplugin_city'] : '';
            $this->region = $data ? $data['geoplugin_region'] : '';
            $this->regionCode = $data ? $data['geoplugin_regionCode'] : '';
            $this->regionName = $data ? $data['geoplugin_regionName'] : '';
            $this->dmaCode = $data ? $data['geoplugin_dmaCode'] : '';
            $this->countryCode = $data ? $data['geoplugin_countryCode'] : '';
            $this->countryName = $data ? $data['geoplugin_countryName'] : '';
            $this->inEU = $data ? $data['geoplugin_inEU'] : '';
            $this->continentCode = $data ? $data['geoplugin_continentCode'] : '';
            $this->continentName = $data ? $data['geoplugin_continentName'] : '';
            $this->latitude = $data ? $data['geoplugin_latitude'] : '';
            $this->longitude = $data ? $data['geoplugin_longitude'] : '';
            $this->locationAccuracyRadius = $data ? $data['geoplugin_locationAccuracyRadius'] : '';
            $this->timezone = $data ? $data['geoplugin_timezone'] : '';
            $this->currencyCode = $data ? $data['geoplugin_currencyCode'] : '';
            $this->currencySymbol = $data ? $data['geoplugin_currencySymbol'] : '';
            $this->currencyConverter = $data ? $data['geoplugin_currencyConverter'] : '';
        }
    }

    /**
     * fetch
     *
     * @param  mixed $host
     * @return string|bool
     */
    function fetch($host)
    {
        if (function_exists('curl_init')) {

            //use cURL to fetch data
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $host);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_USERAGENT, 'geoPlugin PHP Class v1.1');
            $response = curl_exec($ch);
            curl_close($ch);
        } else if (ini_get('allow_url_fopen')) {

            //fall back to fopen()
            $response = file_get_contents($host, 'r');
        } else {

            trigger_error('geoPlugin class Error: Cannot retrieve data. Either compile PHP with cURL support or enable allow_url_fopen in php.ini ', E_USER_ERROR);
            return;
        }

        return $response;
    }

    /**
     * convert
     *
     * @param  mixed $amount
     * @param  mixed $float
     * @param  mixed $symbol
     * @return float
     */
    function convert($amount, $float = 2, $symbol = true)
    {
        //easily convert amounts to geolocated currency.
        if (!is_numeric($this->currencyConverter) || $this->currencyConverter == 0) {
            trigger_error('geoPlugin class Notice: currencyConverter has no value.', E_USER_NOTICE);
            return $amount;
        }
        if (!is_numeric($amount)) {
            trigger_error('geoPlugin class Warning: The amount passed to geoPlugin::convert is not numeric.', E_USER_WARNING);
            return $amount;
        }
        if ($symbol === true) {
            return $this->currencySymbol . round(($amount * $this->currencyConverter), $float);
        } else {
            return round(($amount * $this->currencyConverter), $float);
        }
    }

    /**
     * nearby
     *
     * @param  mixed $radius
     * @param  mixed $limit
     * @return mixed
     */
    function nearby($radius = 10, $limit = null)
    {
        if (!is_numeric($this->latitude) || !is_numeric($this->longitude)) {
            trigger_error('geoPlugin class Warning: Incorrect latitude or longitude values.', E_USER_NOTICE);
            return array(array());
        }

        $host = "http://www.geoplugin.net/extras/nearby.gp?lat=" . $this->latitude . "&long=" . $this->longitude . "&radius={$radius}";

        if (is_numeric($limit))
            $host .= "&limit={$limit}";

        return unserialize($this->fetch($host));
    }
}
