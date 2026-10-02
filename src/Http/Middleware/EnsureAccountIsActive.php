<?php

namespace Creopse\Creopse\Http\Middleware;

use Closure;
use Creopse\Creopse\Enums\AccountStatus;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureAccountIsActive
{
    use ApiResponse;

    /**
     * Routes a disabled account can still reach: the onboarding steps a
     * freshly registered (pending approval) account goes through before an
     * administrator activates it, and signing out.
     */
    private const ALLOWED_ROUTES = [
        'profile.register',
        'verification.send.email',
        'verification.verify.email',
        'logout',
    ];

    /**
     * Handle an incoming request.
     *
     * Nothing used to check account_status after login: a pending account
     * kept the session it got at registration, and disabling an account
     * left its existing sessions and tokens working. Every route behind an
     * auth middleware (core and plugins alike) now refuses a disabled
     * account, except the few listed above.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $route = $request->route();

        if (! $route instanceof Route || in_array($route->getName(), self::ALLOWED_ROUTES, true)) {
            return $next($request);
        }

        $guards = $this->authGuards($route);

        if ($guards === null) {
            return $next($request);
        }

        foreach ($guards as $guard) {
            $user = Auth::guard($guard)->user();

            if ($user) {
                if ($user->account_status == AccountStatus::DISABLED->value) {
                    return $this->sendResponse(
                        null,
                        ResponseStatusCode::FORBIDDEN,
                        'User disabled',
                        ResponseErrorCode::AUTH_USER_DISABLED,
                    );
                }

                break;
            }
        }

        return $next($request);
    }

    /**
     * The guards the route's auth middleware authenticates against, or null
     * when the route doesn't require authentication.
     *
     * @return array<int, string|null>|null
     */
    private function authGuards(Route $route): ?array
    {
        foreach ($route->gatherMiddleware() as $middleware) {
            if ($middleware === 'auth') {
                return [null];
            }

            if (is_string($middleware) && str_starts_with($middleware, 'auth:')) {
                return explode(',', substr($middleware, 5));
            }
        }

        return null;
    }
}
