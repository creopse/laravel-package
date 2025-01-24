<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\AppInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AppInformationController extends Controller
{
    public function index()
    {
        return $this->sendResponse(AppInformation::all());
    }

    public function update(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            AppInformation::updateOrCreate(['key' => Str::camel($key)], ['value' => $value]);
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'App information updated successfully'
        );
    }
}
