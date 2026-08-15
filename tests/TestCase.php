<?php

namespace Creopse\Creopse\Tests;

use Creopse\Creopse\CreopseServiceProvider;
use Creopse\Creopse\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Orchestra\Testbench\TestCase as Orchestra;
use Spatie\Permission\Middleware\PermissionMiddleware;
use Spatie\Permission\Middleware\RoleMiddleware;
use Spatie\Permission\Middleware\RoleOrPermissionMiddleware;

use function Orchestra\Testbench\default_skeleton_path;
use function Orchestra\Testbench\package_path;

abstract class TestCase extends Orchestra
{
    use RefreshDatabase;

    protected function getPackageProviders($app)
    {
        return [
            CreopseServiceProvider::class,
        ];
    }

    // CreopseServiceProvider relies on several other packages' own service
    // providers (Sanctum, Permission, Inertia, Feed, ...) being registered.
    // Testbench ignores all package discovery by default; let it discover
    // normally instead of hand-maintaining that provider list here.
    public function ignorePackageDiscoveriesFrom()
    {
        return [];
    }

    protected function defineEnvironment($app): void
    {
        $app['config']->set('database.default', 'testing');
        $app['config']->set('database.connections.testing', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
        ]);

        // CreopseServiceProvider only force-overrides "framework-owned"
        // configs (like auth.php) when the host app hasn't published its
        // own copy - the testbench skeleton ships a stock config/auth.php,
        // which looks exactly like a published one from that check's point
        // of view. In a real install, `creopse:install` publishes Creopse's
        // own config/auth.php (with the `admin` guard Sanctum resolves
        // against) over the skeleton's; replicate that here.
        $app['config']->set('auth.guards.admin', [
            'driver' => 'session',
            'provider' => 'admin_users',
        ]);
        $app['config']->set('auth.providers.admin_users', [
            'driver' => 'eloquent',
            'model' => User::class,
        ]);

        // The API middleware group (CaptureSessionMetadata, LogSessionHistory)
        // always touches $request->session(). Sanctum's
        // EnsureFrontendRequestsAreStateful only actually starts a session
        // for requests it considers "stateful" (Origin/Referer matching
        // sanctum.stateful) - exactly like a real browser request from the
        // admin panel would. Match that here instead of faking it.
        $app['config']->set('sanctum.stateful', ['*']);

        // Unlike CreopseServiceProvider's own aliases (verified, abilities,
        // ability...), the permission/role aliases are left to the host
        // app to register - creopse:install publishes them via
        // publishables/bootstrap/app.php. Replicate that here so routes
        // using 'permission:'/'role:' middleware are testable at all.
        $app['router']->aliasMiddleware('permission', PermissionMiddleware::class);
        $app['router']->aliasMiddleware('role', RoleMiddleware::class);
        $app['router']->aliasMiddleware('role_or_permission', RoleOrPermissionMiddleware::class);
    }

    // No defineDatabaseMigrations() override needed - CreopseServiceProvider
    // already calls loadMigrationsFrom() itself in boot().

    protected function setUp(): void
    {
        // PluginManager (booted unconditionally by CreopseServiceProvider's
        // register()) does `require base_path('vendor/autoload.php')`. The
        // testbench skeleton has no vendor/ of its own, so this needs to
        // exist *before* parent::setUp() boots the application - Testbench's
        // own #[UsesVendor] attribute and WithWorkbench trait both hook in
        // too late for that (after the app, and therefore PluginManager,
        // is already built).
        $link = default_skeleton_path().'/vendor';

        if (! is_link($link)) {
            symlink(package_path('vendor'), $link);
        }

        parent::setUp();

        $this->withSession([])->withHeader('Origin', 'http://localhost');
    }
}
