<?php

namespace Creopse\Creopse\Http\Controllers\Settings;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\VideoSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VideoSettingController extends Controller
{
    public function index()
    {
        return $this->sendResponse(VideoSetting::all());
    }

    public function update(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            VideoSetting::updateOrCreate(['key' => Str::camel($key)], ['value' => $value]);
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Video settings updated successfully'
        );
    }
}
