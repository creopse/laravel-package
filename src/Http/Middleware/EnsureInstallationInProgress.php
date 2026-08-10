<?php

namespace Creopse\Creopse\Http\Middleware;

use Closure;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\Response;

class EnsureInstallationInProgress
{
    use ApiResponse;

    /**
     * Handle an incoming request.
     *
     * Blocks routes meant only for the installation wizard (database setup,
     * server configuration, admin creation) once the install lock file has
     * been removed by InstallController::finalize().
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! File::exists(public_path(config('installer.lock_file_path')))) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::FORBIDDEN,
                'Installation already completed.',
                ResponseErrorCode::INSTALLATION_ALREADY_COMPLETED
            );
        }

        return $next($request);
    }
}
