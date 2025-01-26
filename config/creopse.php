<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Creopse
    |--------------------------------------------------------------------------
    |
    | Creopse config
    |
    */

    'user_model' => \Creopse\Creopse\Models\User::class,

    'rate_limit' => env('CREOPSE_RATE_LIMIT', 600),
    'rate_limit_by' => 'ip', // or 'user'
];
