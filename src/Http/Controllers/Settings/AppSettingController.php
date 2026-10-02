<?php

namespace Creopse\Creopse\Http\Controllers\Settings;

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Models\AppSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    private const PUBLIC_KEYS = ['basePath', 'adminProfileTypeLabel', 'displayAdminProfileType', 'allowRegistration', 'allowSiteRegistration'];

    /**
     * Permissions whose screens use the translation API keys.
     */
    private const TRANSLATION_KEY_PERMISSIONS = [
        PermissionList::MANAGE_APP_SETTINGS->value,
        PermissionList::MANAGE_CONTENT->value,
        PermissionList::MANAGE_NEWS->value,
        PermissionList::CREATE_ARTICLE->value,
        PermissionList::EDIT_ARTICLE->value,
    ];

    public function index()
    {
        // The translation API keys are used client-side by the admin's
        // multilingual inputs, which only content, news and settings
        // editors see. Any other account - including one self-registered
        // from a public template - used to get them too.
        if (Auth::user()->canAny(self::TRANSLATION_KEY_PERMISSIONS)) {
            return $this->sendResponse(AppSetting::all());
        }

        return $this->sendResponse(AppSetting::where('key', 'not like', 'translation.%')->get());
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
