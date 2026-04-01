<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Creopse\Creopse\PluginManager;

class PluginController extends Controller
{
    public function __construct(protected PluginManager $manager) {}

    /**
     * List all installed plugins using backend plugin.json metadata.
     */
    public function index(): JsonResponse
    {
        $backendPath = storage_path('plugins');

        if (!is_dir($backendPath)) {
            mkdir($backendPath, 0755, true);
        }

        $pluginsData = [];

        foreach (array_diff(scandir($backendPath), ['..', '.', '.active.json']) as $folder) {
            $pluginDir      = $backendPath . DIRECTORY_SEPARATOR . $folder;
            $pluginJsonPath = $pluginDir . DIRECTORY_SEPARATOR . 'plugin.json';

            if (!is_dir($pluginDir) || !file_exists($pluginJsonPath)) continue;

            $data = json_decode(file_get_contents($pluginJsonPath), true);

            if (json_last_error() !== JSON_ERROR_NONE) continue;

            // Sanitized id is the canonical id for all operations
            $pluginId            = $this->sanitizeId($data['id']);
            $data['id']          = $pluginId;
            $data['active']      = $this->isActive($pluginId);
            $data['hasBackend']  = true;
            $data['hasFrontend'] = is_dir(public_path("creopse/plugins/$pluginId"));

            $pluginsData[] = $data;
        }

        return $this->sendResponse($pluginsData);
    }

    /**
     * Get a single plugin's metadata by id.
     */
    public function show(string $pluginId): JsonResponse
    {
        $pluginId       = $this->sanitizeId($pluginId);
        $pluginDir      = storage_path("plugins/$pluginId");
        $pluginJsonPath = $pluginDir . DIRECTORY_SEPARATOR . 'plugin.json';

        if (!is_dir($pluginDir) || !file_exists($pluginJsonPath)) {
            return $this->sendResponse('Plugin not found.', ResponseStatusCode::NOT_FOUND);
        }

        $data                = json_decode(file_get_contents($pluginJsonPath), true);
        $data['id']          = $pluginId;
        $data['active']      = $this->isActive($pluginId);
        $data['hasBackend']  = true;
        $data['hasFrontend'] = is_dir(public_path("creopse/plugins/$pluginId"));

        return $this->sendResponse($data);
    }

    /**
     * Install a plugin from a ZIP archive.
     * Extracts backend/ to storage/plugins/{id}/ and frontend/ to public/creopse/plugins/{id}/.
     * Runs plugin migrations — rolls back and cleans up on failure.
     */
    public function install(Request $request): JsonResponse
    {
        $request->validate(['plugin' => 'required|file|mimes:zip']);

        $tmpPath = storage_path('tmp/plugin_' . uniqid());

        $archive = new \ZipArchive();
        if ($archive->open($request->file('plugin')->getPathname()) !== true) {
            return $this->sendResponse('Invalid ZIP.', ResponseStatusCode::UNPROCESSABLE_ENTITY);
        }
        $archive->extractTo($tmpPath);
        $archive->close();

        $manifest = $this->manager->readManifest($tmpPath);
        $pluginId = $this->sanitizeId($manifest['id']);

        if (is_dir(storage_path("plugins/$pluginId"))) {
            \File::deleteDirectory($tmpPath);
            return $this->sendResponse('Plugin already installed.', ResponseStatusCode::CONFLICT);
        }

        // Deploy backend
        $backendSrc = "$tmpPath/backend";
        if (is_dir($backendSrc)) {
            mkdir(storage_path("plugins/$pluginId"), 0755, true);
            \File::moveDirectory($backendSrc, storage_path("plugins/$pluginId"));
        }

        // Deploy frontend
        $frontendSrc = "$tmpPath/frontend";
        if (is_dir($frontendSrc)) {
            mkdir(public_path("creopse/plugins/$pluginId"), 0755, true);
            \File::moveDirectory($frontendSrc, public_path("creopse/plugins/$pluginId"));
        }

        // Deploy plugin.json (merged manifest) to backend folder
        $pluginJsonPath = "$tmpPath/plugin.json";
        if (file_exists($pluginJsonPath)) {
            copy($pluginJsonPath, storage_path("plugins/$pluginId/plugin.json"));
        }

        \File::deleteDirectory($tmpPath);

        // Run migrations
        $migrationsPath = storage_path("plugins/$pluginId/database/migrations");

        if (is_dir($migrationsPath)) {
            try {
                $this->runPluginMigrations($migrationsPath);
            } catch (\Throwable $e) {
                \File::deleteDirectory(storage_path("plugins/$pluginId"));
                \File::deleteDirectory(public_path("creopse/plugins/$pluginId"));
                return $this->sendResponse('Migration failed: ' . $e->getMessage(), ResponseStatusCode::INTERNAL_SERVER_ERROR);
            }
        }

        // $this->activate($pluginId);
        $this->manager->loadFromPath(storage_path("plugins/$pluginId"));

        return $this->sendResponse([
            'status'  => 'installed',
            'id'      => $pluginId,
            'version' => $manifest['version'],
        ]);
    }

    /**
     * Update an existing plugin from a new ZIP archive.
     * Replaces both backend and frontend in place.
     */
    public function update(Request $request, string $pluginId): JsonResponse
    {
        $request->validate(['plugin' => 'required|file|mimes:zip']);

        $pluginId = $this->sanitizeId($pluginId);
        $tmpPath  = storage_path('tmp/plugin_' . uniqid());

        $archive = new \ZipArchive();
        if ($archive->open($request->file('plugin')->getPathname()) !== true) {
            return $this->sendResponse('Invalid ZIP.', ResponseStatusCode::UNPROCESSABLE_ENTITY);
        }
        $archive->extractTo($tmpPath);
        $archive->close();

        $manifest = $this->manager->readManifest($tmpPath);

        $backendSrc     = "$tmpPath/backend";
        $backendDest    = storage_path("plugins/$pluginId");
        $frontendSrc    = "$tmpPath/frontend";
        $frontendDest   = public_path("creopse/plugins/$pluginId");
        $backendBackup  = storage_path("plugins/{$pluginId}_backup");
        $frontendBackup = public_path("creopse/plugins/{$pluginId}_backup");

        // Back up existing versions before replacing
        if (is_dir($backendDest))  \File::copyDirectory($backendDest, $backendBackup);
        if (is_dir($frontendDest)) \File::copyDirectory($frontendDest, $frontendBackup);

        // Replace backend
        if (is_dir($backendSrc)) {
            \File::deleteDirectory($backendDest);
            \File::moveDirectory($backendSrc, $backendDest);
        }

        // Replace frontend
        if (is_dir($frontendSrc)) {
            \File::deleteDirectory($frontendDest);
            \File::moveDirectory($frontendSrc, $frontendDest);
        }

        // Replace plugin.json (merged manifest)
        $pluginJsonPath = "$tmpPath/plugin.json";
        if (file_exists($pluginJsonPath)) {
            copy($pluginJsonPath, storage_path("plugins/$pluginId/plugin.json"));
        }

        \File::deleteDirectory($tmpPath);

        // Run migrations — restore backup on failure
        $migrationsPath = storage_path("plugins/$pluginId/database/migrations");

        if (is_dir($migrationsPath)) {
            try {
                $this->runPluginMigrations($migrationsPath);
            } catch (\Throwable $e) {
                \File::deleteDirectory($backendDest);
                \File::deleteDirectory($frontendDest);
                if (is_dir($backendBackup))  \File::moveDirectory($backendBackup, $backendDest);
                if (is_dir($frontendBackup)) \File::moveDirectory($frontendBackup, $frontendDest);
                \File::deleteDirectory($backendBackup);
                \File::deleteDirectory($frontendBackup);

                return $this->sendResponse('Migration failed: ' . $e->getMessage(), ResponseStatusCode::INTERNAL_SERVER_ERROR);
            }
        }

        // Clean up backups after successful update
        \File::deleteDirectory($backendBackup);
        \File::deleteDirectory($frontendBackup);

        $this->activate($pluginId);
        $this->manager->loadFromPath(storage_path("plugins/$pluginId"));

        return $this->sendResponse([
            'status'  => 'updated',
            'id'      => $pluginId,
            'version' => $manifest['version'],
        ]);
    }

    /**
     * Uninstall a plugin.
     * Rolls back all plugin migrations before removing files.
     */
    public function uninstall(string $pluginId): JsonResponse
    {
        $pluginId     = $this->sanitizeId($pluginId);
        $backendPath  = storage_path("plugins/$pluginId");
        $frontendPath = public_path("creopse/plugins/$pluginId");

        if (!is_dir($backendPath)) {
            return $this->sendResponse('Plugin not found.', ResponseStatusCode::NOT_FOUND);
        }

        // Rollback all plugin migrations before touching the files
        $migrationsPath = "$backendPath/database/migrations";

        if (is_dir($migrationsPath)) {
            try {
                $this->rollbackPluginMigrations($migrationsPath);
            } catch (\Throwable $e) {
                return $this->sendResponse('Migration rollback failed: ' . $e->getMessage(), ResponseStatusCode::INTERNAL_SERVER_ERROR);
            }
        }

        \File::deleteDirectory($backendPath);
        if (is_dir($frontendPath)) \File::deleteDirectory($frontendPath);

        $this->deactivate($pluginId);

        return $this->sendResponse([
            'status' => 'uninstalled',
            'id'     => $pluginId,
        ]);
    }

    /**
     * Enable a plugin without reinstalling it.
     */
    public function enable(string $pluginId): JsonResponse
    {
        $pluginId = $this->sanitizeId($pluginId);

        if (!is_dir(storage_path("plugins/$pluginId"))) {
            return $this->sendResponse('Plugin not found.', ResponseStatusCode::NOT_FOUND);
        }

        if ($this->isActive($pluginId)) {
            return $this->sendResponse('Plugin already enabled.', ResponseStatusCode::CONFLICT);
        }

        $this->activate($pluginId);

        return $this->sendResponse(['status' => 'enabled', 'id' => $pluginId]);
    }

    /**
     * Disable a plugin without uninstalling it.
     */
    public function disable(string $pluginId): JsonResponse
    {
        $pluginId = $this->sanitizeId($pluginId);

        if (!$this->isActive($pluginId)) {
            return $this->sendResponse('Plugin already disabled.', ResponseStatusCode::CONFLICT);
        }

        $this->deactivate($pluginId);

        return $this->sendResponse(['status' => 'disabled', 'id' => $pluginId]);
    }

    // -------------------------------------------------------------------------
    // Migration helpers
    // -------------------------------------------------------------------------

    protected function runPluginMigrations(string $migrationsPath): void
    {
        \Artisan::call('migrate', [
            '--path'  => $this->relativeMigrationsPath($migrationsPath),
            '--force' => true,
        ]);
    }

    protected function rollbackPluginMigrations(string $migrationsPath): void
    {
        $relativePath = $this->relativeMigrationsPath($migrationsPath);

        // Find all migration files belonging to this plugin
        $migrationFiles = array_map(
            fn($f) => pathinfo($f, PATHINFO_FILENAME),
            glob($migrationsPath . '/*.php') ?: []
        );

        if (empty($migrationFiles)) return;

        // Find all distinct batches for these migrations, ordered desc
        $batches = \DB::table('migrations')
            ->whereIn('migration', $migrationFiles)
            ->orderByDesc('batch')
            ->pluck('batch')
            ->unique()
            ->values();

        foreach ($batches as $batch) {
            \Artisan::call('migrate:rollback', [
                '--path'  => $relativePath,
                '--step'  => 1,
                '--force' => true,
            ]);
        }
    }

    /**
     * Artisan expects a path relative to the Laravel base path.
     */
    protected function relativeMigrationsPath(string $absolutePath): string
    {
        return str_replace(base_path() . DIRECTORY_SEPARATOR, '', $absolutePath);
    }

    // -------------------------------------------------------------------------
    // Active state helpers
    // -------------------------------------------------------------------------

    /**
     * Active state is persisted in storage/plugins/.active.json —
     * a simple map of plugin id => bool, readable without booting the plugin.
     */
    protected function getActiveState(): array
    {
        $path = storage_path('plugins/.active.json');
        if (!file_exists($path)) return [];
        return json_decode(file_get_contents($path), true) ?? [];
    }

    protected function saveActiveState(array $state): void
    {
        if (!is_dir(storage_path('plugins'))) mkdir(storage_path('plugins'), 0755, true);
        file_put_contents(storage_path('plugins/.active.json'), json_encode($state, JSON_PRETTY_PRINT));
    }

    protected function isActive(string $pluginId): bool
    {
        return $this->getActiveState()[$pluginId] ?? false;
    }

    protected function activate(string $pluginId): void
    {
        $state            = $this->getActiveState();
        $state[$pluginId] = true;
        $this->saveActiveState($state);
    }

    protected function deactivate(string $pluginId): void
    {
        $state            = $this->getActiveState();
        $state[$pluginId] = false;
        $this->saveActiveState($state);
    }

    // -------------------------------------------------------------------------

    protected function sanitizeId(string $id): string
    {
        return str_replace('/', '-', preg_replace('/[^a-z0-9\/\-]/', '', $id));
    }
}
