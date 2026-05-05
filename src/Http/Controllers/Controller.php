<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Traits\ApiResponse;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use ApiResponse, AuthorizesRequests, ValidatesRequests;
}
