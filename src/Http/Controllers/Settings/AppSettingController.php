<?php

namespace Creopse\Creopse\Http\Controllers\Settings;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AppSettingController extends Controller
{
    public function index()
    {
        return $this->sendResponse(AppSetting::all());
    }

    public function update(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            AppSetting::updateOrCreate(['key' => Str::camel($key)], ['value' => $value]);
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'App settings updated successfully'
        );
    }
}
