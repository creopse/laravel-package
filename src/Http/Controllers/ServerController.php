<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ServerController extends Controller
{
    /**
     * Check if server is up and running
     */
    public function check(): JsonResponse
    {
        $installLockExists = File::exists(public_path(config('installer.lock_file_path')));

        return $this->sendResponse(
            [
                'app_url' => config('app.url'),
                'admin_url' => config('app.admin_url'),
                'session_domain' => config('session.domain'),
                'installation_required' => $installLockExists,
            ],
            ResponseStatusCode::OK,
            'Server is up and running'
        );
    }

    /**
     * Update server URLs in .env file
     */
    public function configure(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'app_url' => 'required|url|max:255',
            'admin_url' => 'required|url|max:255',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        // Backup .env before modification
        $envPath = base_path('.env');
        $backupPath = base_path('.env.backup');

        // Path to config.jsonc
        $configJsonPath = public_path('creopse/config.jsonc');
        $configJsonBackupPath = public_path('creopse/config.jsonc.backup');

        try {
            if (!File::exists($envPath)) {
                $templatePath = base_path('.env.template') ?: base_path('.env.example');
                if (!File::exists($templatePath)) {
                    throw new \RuntimeException('.env.template or .env.example not found');
                }
                File::copy($templatePath, $envPath);
            } else {
                File::copy($envPath, $backupPath);
            }

            if (File::exists($configJsonPath)) {
                File::copy($configJsonPath, $configJsonBackupPath);
            }

            // Parse URLs to extract domains and ports
            $appParsed = parse_url($request->input('app_url'));
            $adminParsed = parse_url($request->input('admin_url'));

            $appDomain = $appParsed['host'] ?? '';
            $adminDomain = $adminParsed['host'] ?? '';
            $adminPort = isset($adminParsed['port']) ? ":{$adminParsed['port']}" : '';

            // Extract base domain for session (with leading dot for subdomain support)
            $sessionDomain = $this->extractBaseDomain($appDomain);

            // Build SANCTUM_STATEFUL_DOMAINS
            $statefulDomains = collect([
                $appDomain,
                $adminDomain,
                $adminDomain . $adminPort,
            ])->unique()->filter()->implode(',');

            // Update .env with new values
            $this->updateEnvironmentFile($envPath, [
                'APP_URL' => $request->input('app_url'),
                'ADMIN_URL' => $request->input('admin_url'),
                'SANCTUM_STATEFUL_DOMAINS' => $statefulDomains,
                'SESSION_DOMAIN' => $sessionDomain,
            ]);

            // Update config.jsonc with API base URL
            $this->updateConfigJsonc($configJsonPath, $request->input('app_url'));

            // Clear config cache
            Artisan::call('config:clear');

            // Clean up backup
            if (File::exists($backupPath)) {
                File::delete($backupPath);
            }
            if (File::exists($configJsonBackupPath)) {
                File::delete($configJsonBackupPath);
            }

            return $this->sendResponse(
                [
                    'app_url' => $request->input('app_url'),
                    'admin_url' => $request->input('admin_url'),
                    'sanctum_stateful_domains' => $statefulDomains,
                    'session_domain' => $sessionDomain,
                ],
                ResponseStatusCode::OK,
                'Server URLs configured successfully'
            );
        } catch (\Exception $e) {
            // Rollback: restore backup
            if (File::exists($backupPath)) {
                File::copy($backupPath, $envPath);
                File::delete($backupPath);
            }
            if (File::exists($configJsonBackupPath)) {
                File::copy($configJsonBackupPath, $configJsonPath);
                File::delete($configJsonBackupPath);
            }
            Artisan::call('config:clear');

            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Could not update server configuration. Error: ' . $e->getMessage()
            );
        }
    }

    /**
     * Update config.jsonc file with new API base URL (preserves comments)
     */
    private function updateConfigJsonc(string $configPath, string $apiBaseUrl): void
    {
        if (!File::exists($configPath)) {
            // Create default config.jsonc if it doesn't exist
            $defaultConfig = <<<JSONC
{
    // API Configuration
    "apiBaseUrl": "$apiBaseUrl"
}
JSONC;
            File::put($configPath, $defaultConfig);
            return;
        }

        $content = File::get($configPath);

        // Pattern to match "apiBaseUrl": "any value"
        // Handles optional whitespace and preserves indentation
        $pattern = '/("apiBaseUrl"\s*:\s*)"[^"]*"/';
        $replacement = '$1"' . addslashes($apiBaseUrl) . '"';

        if (preg_match($pattern, $content)) {
            // Update existing value
            $newContent = preg_replace($pattern, $replacement, $content);
        } else {
            // apiBaseUrl doesn't exist, we need to add it
            // Try to add it after the opening brace
            if (preg_match('/\{/', $content)) {
                $newContent = preg_replace(
                    '/(\{)\s*/',
                    "$1\n    \"apiBaseUrl\": \"" . addslashes($apiBaseUrl) . "\",\n",
                    $content,
                    1
                );
            } else {
                // Malformed JSON, recreate it
                $newContent = <<<JSONC
{
    "apiBaseUrl": "$apiBaseUrl"
}
JSONC;
            }
        }

        File::put($configPath, $newContent);
    }

    /**
     * Extract base domain for session cookie
     * Examples:
     * - admin.creopse.test -> .creopse.test
     * - creopse.test -> .creopse.test
     * - localhost -> null (no leading dot for localhost)
     */
    private function extractBaseDomain(string $domain): ?string
    {
        // Handle localhost and IP addresses
        if ($domain === 'localhost' || filter_var($domain, FILTER_VALIDATE_IP)) {
            return null;
        }

        // Split domain parts
        $parts = explode('.', $domain);

        // Need at least 2 parts (domain.tld)
        if (count($parts) < 2) {
            return null;
        }

        // Get last 2 parts (domain.tld) and add leading dot
        $baseDomain = implode('.', array_slice($parts, -2));

        return '.' . $baseDomain;
    }

    /**
     * Update .env file with new values
     */
    private function updateEnvironmentFile(string $envPath, array $values): void
    {
        $envContent = File::get($envPath);

        foreach ($values as $key => $value) {
            // Handle null values (remove the line or set empty)
            if ($value === null) {
                $pattern = "/^{$key}=.*$/m";
                $envContent = preg_replace($pattern, "{$key}=", $envContent);
                continue;
            }

            $escapedValue = $this->escapeEnvironmentValue($value);
            $pattern = "/^{$key}=.*$/m";

            if (preg_match($pattern, $envContent)) {
                // Update existing value
                $envContent = preg_replace($pattern, "{$key}={$escapedValue}", $envContent);
            } else {
                // Add new line
                $envContent .= "\n{$key}={$escapedValue}";
            }
        }

        File::put($envPath, $envContent);
    }

    /**
     * Escape special characters in .env values
     */
    private function escapeEnvironmentValue(mixed $value): string
    {
        $value = (string) $value;

        // If value contains spaces, #, ; or quotes, wrap it in double quotes
        if (preg_match('/[\s#;"\']/', $value)) {
            return '"' . str_replace('"', '\\"', $value) . '"';
        }

        return $value;
    }
}
