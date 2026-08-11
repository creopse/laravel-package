<?php

namespace Creopse\Creopse\Http\Controllers\Settings;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AppSettingController extends Controller
{
    /**
     * Settings safe to expose without authentication - the login page and
     * other pre-auth screens need these to render branding. Deliberately
     * an allowlist, not a blocklist: `app_settings` also holds real
     * secrets (translation API keys), so any key not listed here stays
     * behind auth:sanctum by default, including new ones added later.
     */
    private const PUBLIC_KEYS = ['basePath', 'adminProfileTypeLabel', 'displayAdminProfileType', 'allowRegistration'];

    public function index()
    {
        return $this->sendResponse(AppSetting::all());
    }

    public function publicIndex()
    {
        $settings = AppSetting::where(function ($query) {
            $query->whereIn('key', self::PUBLIC_KEYS)
                ->orWhere('key', 'like', 'appearance.%');
        })->get();

        return $this->sendResponse($settings);
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
