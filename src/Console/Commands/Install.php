<?php

namespace Creopse\Creopse\Console\Commands;

use Illuminate\Console\Command;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:install {name="Creopse"} {--force=true}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install creopse package';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');
        $force = $this->option('force');

        $this->info('Starting package installation...');

        // Step 1: Publish configuration files
        $this->info('Publishing configuration file...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-config',
            '--force' => $force,
        ]);

        // Step 2: Publish public assets
        $this->info('Publishing public assets...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-public',
            '--force' => $force,
        ]);

        // Step 3: Publish resources
        $this->info('Publishing resources...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-resources',
            '--force' => $force,
        ]);

        // Step 4: Publish translations
        $this->info('Publishing translations...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-translations',
            '--force' => $force,
        ]);

        // Step 5: Publish inertia middleware
        $this->info('Publishing inertia middleware...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-inertia-middleware',
            '--force' => $force,
        ]);

        // Step 6: Publish other files (e.g., routes, controllers)
        $this->info('Publishing other files...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-other-files',
            '--force' => $force,
        ]);

        // Step 7: Install composer dependencies
        $this->info('Installing composer dependencies...');
        $this->call('composer install');

        // Step 8: Install pnpm dependencies
        $this->info('Installing pnpm dependencies...');
        $this->call('pnpm i');

        // Step 9: Clear cache
        $this->info('Clearing cache...');
        $this->call('cache:clear');

        // Step 10: Generate app key
        $this->info('Generating app key...');
        $this->call('key:generate');

        // Step 11: Link storage folder to public folder
        $this->info('Linking storage folder to public folder...');
        $this->call('storage:link');

        // Step 12: Run migrations
        // $this->info('Running migrations...');
        // $this->call('migrate');

        // Step 13: Run seeders
        // $this->info('Running seeders...');
        // $this->call('db:seed');

        $this->info('Package installation completed successfully!');
    }
}
