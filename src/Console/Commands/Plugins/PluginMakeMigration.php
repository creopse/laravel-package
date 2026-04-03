<?php

namespace Creopse\Creopse\Console\Commands\Plugins;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

/**
 * Generates a timestamped migration file inside the plugin's database/migrations directory.
 *
 * Does NOT extend PluginGeneratorCommand because migrations have no PSR-4 namespace.
 * Stub resolution follows the same Option A priority:
 *   1. Host project stubs/migration.create.stub (or migration.stub)
 *   2. Laravel framework native stubs
 */
class PluginMakeMigration extends Command
{
    protected $name        = 'plugin:make-migration';
    protected $description = 'Create a new migration file inside a plugin';

    protected function sanitizePluginId(string $id): string
    {
        return str_replace('/', '-', preg_replace('/[^a-z0-9\/\-]/', '', $id));
    }

    public function handle(): int
    {
        $pluginId   = $this->sanitizePluginId($this->argument('plugin'));
        $pluginRoot = storage_path("plugins/{$pluginId}");

        if (! is_dir($pluginRoot)) {
            $this->error("Plugin directory not found: {$pluginRoot}");
            return self::FAILURE;
        }

        $migrationsDir = "{$pluginRoot}/database/migrations";

        if (! is_dir($migrationsDir)) {
            mkdir($migrationsDir, 0755, true);
        }

        $name     = $this->argument('name');
        $fileName = now()->format('Y_m_d_His') . "_{$name}.php";
        $filePath = "{$migrationsDir}/{$fileName}";

        if (file_exists($filePath)) {
            $this->error("Migration already exists: {$fileName}");
            return self::FAILURE;
        }

        $stub    = $this->resolveStub();
        $content = $this->populateStub($stub);

        file_put_contents($filePath, $content);

        $this->components->info("Migration [{$filePath}] created successfully.");

        return self::SUCCESS;
    }

    // -------------------------------------------------------------------------
    // Stub resolution — Option A
    // -------------------------------------------------------------------------

    private function resolveStub(): string
    {
        $filename = $this->option('create') ? 'migration.create.stub' : 'migration.stub';

        // Priority 1: host project published stubs
        $hostStub = $this->laravel->basePath("stubs/{$filename}");
        if (file_exists($hostStub)) {
            return file_get_contents($hostStub);
        }

        // Priority 2: Laravel framework native stubs
        // Migrations stubs live in the Foundation package, not Console
        $frameworkPaths = [
            base_path("vendor/laravel/framework/src/Illuminate/Database/Migrations/stubs/{$filename}"),
            base_path("vendor/laravel/framework/src/Illuminate/Console/stubs/{$filename}"),
        ];

        foreach ($frameworkPaths as $path) {
            if (file_exists($path)) {
                return file_get_contents($path);
            }
        }

        // Fallback: inline stub (safe last resort, matches Laravel's native output)
        return $this->option('create') ? $this->inlineCreateStub() : $this->inlineBlankStub();
    }

    private function populateStub(string $stub): string
    {
        $table = $this->option('create') ?? $this->option('table') ?? 'table';

        return str_replace(
            ['{{ table }}', '{{table}}'],
            $table,
            $stub
        );
    }

    // -------------------------------------------------------------------------
    // Inline fallback stubs — mirrors Laravel native output exactly
    // -------------------------------------------------------------------------

    private function inlineCreateStub(): string
    {
        return <<<'PHP'
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('{{ table }}', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('{{ table }}');
    }
};
PHP;
    }

    private function inlineBlankStub(): string
    {
        return <<<'PHP'
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        //
    }

    public function down(): void
    {
        //
    }
};
PHP;
    }

    // -------------------------------------------------------------------------
    // Arguments & options
    // -------------------------------------------------------------------------

    protected function getArguments(): array
    {
        return [
            ['plugin', InputArgument::REQUIRED, 'The plugin id (e.g. vendor/plugin-name)'],
            ['name',   InputArgument::REQUIRED, 'The migration name (e.g. create_posts_table)'],
        ];
    }

    protected function getOptions(): array
    {
        return [
            ['create', null, InputOption::VALUE_OPTIONAL, 'The table to be created'],
            ['table',  null, InputOption::VALUE_OPTIONAL, 'The table to modify'],
        ];
    }
}
