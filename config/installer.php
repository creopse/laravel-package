<?php

return [
    /**
     * Installation lock file path
     *
     * This file indicates that installation is required.
     * Located in public directory to be accessible by frontend.
     * When deleted, the application considers installation complete.
     */
    'lock_file_path' => 'creopse/install.lock',

    /**
     * Middleware to exclude from installation routes
     *
     * These middleware are removed from install/* routes to prevent:
     * - Session errors when database/tables don't exist yet
     * - CSRF token validation before installation
     * - Authentication checks during setup process
     */
    'excluded_middleware' => [
        \Illuminate\Session\Middleware\StartSession::class,
        \Creopse\Creopse\Http\Middleware\LogSessionHistory::class,
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    ],
];
