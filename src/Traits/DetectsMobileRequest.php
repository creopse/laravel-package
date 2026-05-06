<?php

namespace Creopse\Creopse\Traits;

use Illuminate\Http\Request;

trait DetectsMobileRequest
{
    protected function isMobileRequest(Request $request): bool
    {
        return $request->header('X-Client-Type') === 'mobile'
            || $request->has('device_name')
            || $request->has('device_id');
    }
}
