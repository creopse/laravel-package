<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Http\Request;

class PluginsController extends Controller
{
    public function index(Request $request)
    {
        $pluginsPath = public_path('creopse/plugins');

        if (!file_exists($pluginsPath)) {
            mkdir($pluginsPath);
        }

        $plugins = array_diff(scandir($pluginsPath), ['..', '.']);

        $pluginsData = [];

        foreach ($plugins as $pluginFolder) {
            $pluginPath = $pluginsPath . DIRECTORY_SEPARATOR . $pluginFolder;
            $pluginJsonPath = $pluginPath . DIRECTORY_SEPARATOR . 'plugin.jsonc';

            if (is_dir($pluginPath) && file_exists($pluginJsonPath)) {
                $jsonContent = file_get_contents($pluginJsonPath);
                $pluginData = Functions::jsoncDecodeSafe($jsonContent, true);

                if (json_last_error() === JSON_ERROR_NONE) {
                    $pluginsData[] = $pluginData;
                }
            }
        }

        return $this->sendResponse($pluginsData);
    }
}
