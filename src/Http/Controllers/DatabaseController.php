<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Doctrine\DBAL\DriverManager;
use Illuminate\Support\Facades\Validator;

class DatabaseController extends Controller
{
    /**
     * Check if database connection is working
     */
    public function check(): JsonResponse
    {
        try {
            DB::connection()->getPdo();
            return $this->sendResponse(
                null,
                ResponseStatusCode::OK,
                'Connection established successfully to database: ' . DB::connection()->getDatabaseName()
            );
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::SERVICE_UNAVAILABLE,
                'Could not connect to the database. Error: ' . $e->getMessage()
            );
        }
    }

    /**
     * Test database connection without creating anything
     */
    public function test(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'host' => 'required|string|max:255',
            'port' => 'required|integer|between:1,65535',
            'username' => 'required|string|max:32',
            'password' => 'required|string',
            'dbname' => 'required|string|max:64|regex:/^[a-zA-Z0-9_]+$/',
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

        try {
            $connection = DriverManager::getConnection([
                'driver' => 'pdo_mysql',
                'host' => $request->input('host') === 'localhost' ? '127.0.0.1' : $request->input('host'),
                'port' => $request->input('port'),
                'user' => $request->input('username'),
                'password' => $request->input('password'),
                'charset' => 'utf8mb4',
            ]);

            // Test connection by executing a simple query
            $connection->executeQuery('SELECT 1');

            // Check if database already exists
            $result = $connection->executeQuery(
                'SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?',
                [$request->input('dbname')]
            );
            $exists = $result->rowCount() > 0;

            return $this->sendResponse(
                ['database_exists' => $exists],
                ResponseStatusCode::OK,
                $exists
                    ? "Connection successful. Database '{$request->input('dbname')}' already exists."
                    : 'Connection successful. Ready to create database.'
            );
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::SERVICE_UNAVAILABLE,
                'Connection failed: ' . $e->getMessage()
            );
        }
    }

    /**
     * Create database and update .env file
     */
    public function create(Request $request): JsonResponse
    {
        // Strict validation
        $validator = Validator::make($request->all(), [
            'host' => 'required|string|max:255',
            'port' => 'required|integer|between:1,65535',
            'username' => 'required|string|max:32',
            'password' => 'required|string',
            'dbname' => 'required|string|max:64|regex:/^[a-zA-Z0-9_]+$/',
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

        // Backup .env before any modification
        $envPath = base_path('.env');
        $backupPath = base_path('.env.backup');

        try {
            // 1. Create connection and database
            $connection = DriverManager::getConnection([
                'driver' => 'pdo_mysql',
                'host' => $request->input('host') === 'localhost' ? '127.0.0.1' : $request->input('host'),
                'port' => $request->input('port'),
                'user' => $request->input('username'),
                'password' => $request->input('password'),
                'charset' => 'utf8mb4',
            ]);

            // Check if database already exists
            $result = $connection->executeQuery(
                'SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?',
                [$request->input('dbname')]
            );

            if ($result->rowCount() === 0) {
                // Database doesn't exist, create it
                $connection->executeStatement(
                    'CREATE DATABASE `' . $request->input('dbname') . '` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci'
                );
            }
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::SERVICE_UNAVAILABLE,
                'Database creation failed: ' . $e->getMessage()
            );
        }

        try {
            // 2. Backup and update .env file
            if (!File::exists($envPath)) {
                $templatePath = base_path('.env.template') ?: base_path('.env.example');
                if (!File::exists($templatePath)) {
                    throw new \RuntimeException('.env.template or .env.example not found');
                }
                File::copy($templatePath, $envPath);
            } else {
                File::copy($envPath, $backupPath);
            }

            $this->updateEnvironmentFile($envPath, [
                'DB_HOST' => $request->input('host'),
                'DB_PORT' => $request->input('port'),
                'DB_DATABASE' => $request->input('dbname'),
                'DB_USERNAME' => $request->input('username'),
                'DB_PASSWORD' => $request->input('password'),
            ]);

            // 3. Clear config cache so Laravel picks up new params
            Artisan::call('config:clear');

            // 4. Test the new connection
            DB::purge('mysql');
            DB::reconnect('mysql');
            DB::connection()->getPdo();

            // 5. Clean up backup if everything went well
            if (File::exists($backupPath)) {
                File::delete($backupPath);
            }

            return $this->sendResponse(
                null,
                ResponseStatusCode::OK,
                "Database '{$request->input('dbname')}' created successfully and .env file updated"
            );
        } catch (\Exception $e) {
            // Rollback: restore backup
            if (File::exists($backupPath)) {
                File::copy($backupPath, $envPath);
                File::delete($backupPath);
                Artisan::call('config:clear');
            }

            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Could not update .env file. Error: ' . $e->getMessage()
            );
        }
    }

    /**
     * Run database migrations
     */
    public function migrate(): JsonResponse
    {
        try {
            // Check connection works before migrating
            DB::connection()->getPdo();

            Artisan::call('migrate', ['--force' => true]);

            $output = Artisan::output();

            return $this->sendResponse(
                ['output' => trim($output)],
                ResponseStatusCode::OK,
                'Database migrated successfully'
            );
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Database migration failed. Error: ' . $e->getMessage()
            );
        }
    }

    /**
     * Seed database with initial data
     */
    public function seed(): JsonResponse
    {
        try {
            // Check connection works
            DB::connection()->getPdo();

            Artisan::call('db:seed', ['--force' => true]);

            $output = Artisan::output();

            return $this->sendResponse(
                ['output' => trim($output)],
                ResponseStatusCode::OK,
                'Database seeded successfully'
            );
        } catch (\Exception $e) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'Database seeding failed. Error: ' . $e->getMessage()
            );
        }
    }

    /**
     * Update .env file with new values
     */
    private function updateEnvironmentFile(string $envPath, array $values): void
    {
        $envContent = File::get($envPath);

        foreach ($values as $key => $value) {
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
