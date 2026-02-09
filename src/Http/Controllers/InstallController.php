<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class InstallController extends Controller
{
    /**
     * Finalize installation process
     */
    public function finalize(Request $request): JsonResponse
    {
        try {
            $installLockPath = public_path('creopse/install.lock');

            // Check that all required steps are completed
            if (!File::exists(base_path('.env'))) {
                throw new \RuntimeException('.env file not configured');
            }

            if (!config('database.connections.mysql.database')) {
                throw new \RuntimeException('Database not configured');
            }

            // Test database connection
            DB::connection()->getPdo();

            // Check if migrations were run (optional but recommended)
            // You can check for a specific table or use Schema::hasTable()

            // Delete install.lock
            if (File::exists($installLockPath)) {
                File::delete($installLockPath);
            }

            // Create a completion marker (optional)
            $composer = json_decode(file_get_contents(base_path('composer.json')), true);
            File::put(storage_path('installed.lock'), json_encode([
                'installed_at' => now()->toIso8601String(),
                'version' => $composer['require']['creopse/creopse'],
            ]));

            return $this->sendResponse(
                [
                    'installation_required' => false,
                    'installed_at' => now()->toIso8601String(),
                ],
                ResponseStatusCode::OK,
                'Installation completed successfully'
            );
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Installation finalization failed. Error: ' . $e->getMessage()
            );
        }
    }
}
