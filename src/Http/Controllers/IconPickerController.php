<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class IconPickerController extends Controller
{
    public function searchIcons(Request $request)
    {
        $query = $request->input('query');

        if ($query) {
            $iconsPath = app('creopse.storage') . '/app/data/icons.json';
            if (file_exists($iconsPath)) {
                $icons = file_get_contents($iconsPath);

                $icons = json_decode($icons, true);

                $icons = array_filter($icons, function ($icon, $key) use ($query) {
                    return stripos($key, $query) !== false;
                }, ARRAY_FILTER_USE_BOTH);
            } else {
                $icons = [];
            }
        } else {
            $icons = [];
        }

        return $this->sendResponse(
            $request->input('decode', true) ? $icons : json_encode($icons),
            ResponseStatusCode::OK,
            'Searched icons retrieved successfully',
        );
    }
}
