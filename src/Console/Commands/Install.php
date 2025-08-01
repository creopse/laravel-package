<?php

namespace Creopse\Creopse\Console\Commands;

use Exception;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class Install extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:install
                            {--t|template=vue : Selects the frontend template (vue or react)}
                            {--no-force : Disable force mode (enabled by default)}';

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
        $force = !$this->option('no-force');
        $template = strtolower($this->option('template'));

        if (!in_array($template, ['vue', 'react'])) {
            $this->error("Invalid template: {$template}. Accepted values: vue, react.");
            return 1;
        }

        $this->info('Starting package installation...');

        // Step 1: Delete some files
        // List of files to delete
        $filesToDelete = [
            base_path('vite.config.js'),
            base_path('routes/api.php'),
            base_path('routes/web.php'),
        ];
        // List of folders to delete
        $foldersToDelete = [
            base_path('resources'),
        ];
        // List of folders files to delete
        $foldersFilesToDelete = [
            database_path('migrations'),
            database_path('seeders'),
        ];
        // Delete files
        foreach ($filesToDelete as $file) {
            if (File::exists($file)) {
                File::delete($file);
                $this->info("Deleted file: $file");
            } else {
                $this->warn("File not found: $file");
            }
        }
        // Delete folders
        foreach ($foldersToDelete as $folder) {
            if (File::isDirectory($folder)) {
                File::deleteDirectory($folder);
                $this->info("Deleted folder: $folder");
            } else {
                $this->warn("Folder not found: $folder");
            }
        }
        // Delete folders files
        foreach ($foldersFilesToDelete as $folder) {
            try {
                $files = File::files($folder);

                foreach ($files as $file) {
                    if (!File::delete($file)) {
                        throw new Exception("\nFailed to delete file: $file");
                    }
                }

                echo "\nAll files in the folder $folder have been deleted.";
            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
        }

        // Step 2: Publish configuration files
        $this->info("\nPublishing configuration files...");
        $this->call('vendor:publish', [
            '--tag' => 'creopse-config',
            '--force' => $force,
        ]);
        $this->call('vendor:publish', [
            '--tag' => 'creopse-auth-config',
            '--force' => $force,
        ]);
        $this->call('vendor:publish', [
            '--tag' => 'creopse-laratrust-config',
            '--force' => $force,
        ]);
        $this->call('vendor:publish', [
            '--tag' => 'creopse-cache-config',
            '--force' => $force,
        ]);
        $this->call('vendor:publish', [
            '--tag' => 'creopse-broadcasting-config',
            '--force' => $force,
        ]);

        // Step 3: Publish public assets
        $this->info('Publishing public assets...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-public',
            '--force' => $force,
        ]);

        // Step 4: Publish resources
        if ($template === 'react') {
            $this->call('vendor:publish', [
                '--tag' => 'creopse-react-resources',
                '--force' => $force,
            ]);
        } else {
            $this->info('Publishing resources...');
            $this->call('vendor:publish', [
                '--tag' => 'creopse-resources',
                '--force' => $force,
            ]);
        }

        // Step 5: Publish translations
        $this->info('Publishing translations...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-translations',
            '--force' => $force,
        ]);

        // Step 6: Publish middlewares
        $this->info('Publishing inertia middleware...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-inertia-middleware',
            '--force' => $force,
        ]);
        $this->info('Publishing other middlewares...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-v11-middlewares',
            '--force' => $force,
        ]);

        // Step 7: Publish other files (e.g., routes, controllers)
        $this->info('Publishing other files...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-other-files',
            '--force' => $force,
        ]);

        if ($template === 'react') {
            $this->call('vendor:publish', [
                '--tag' => 'creopse-react-files',
                '--force' => $force,
            ]);
        }

        // Step 8: Publish providers
        $this->info('Publishing providers...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-providers',
            '--force' => $force,
        ]);

        // Step 9: Publish routes
        $this->info('Publishing routes...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-routes',
            '--force' => $force,
        ]);

        // Step 10: Publish controllers
        $this->info('Publishing controllers...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-controllers',
            '--force' => $force,
        ]);

        // Step 11: Publish models
        $this->info('Publishing models...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-models',
            '--force' => $force,
        ]);

        // Step 12: Publish enums
        $this->info('Publishing enums...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-enums',
            '--force' => $force,
        ]);

        // Step 13: Publish subscriber profile factory
        $this->info('Publishing subscriber profile factory...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-subscriber-profile-factory',
            '--force' => $force,
        ]);

        // Step 14: Publish database seeder
        $this->info('Publishing database seeder...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-database-seeder',
            '--force' => $force,
        ]);

        // Step 15: Publish bootstrap files
        $this->info('Publishing bootstrap files...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-bootstrap-files',
            '--force' => $force,
        ]);

        // Step 16: Publish admin
        $this->info('Publishing creopse admin...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-admin',
            '--force' => $force,
        ]);

        // Step 17: Install pnpm dependencies
        $this->info('Installing pnpm dependencies...');
        $process = new Process(['pnpm', 'i']);
        $process->setTimeout(900);
        // Run the process
        $process->run();
        // Check if the process was successful
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        // Output the result
        echo $process->getOutput();

        try {
            // Step 18: Cache config
            $this->info('Caching config...');
            $this->call('config:cache');
        } catch (Exception $e) {
            //
        }

        try {
            // Step 19: Generate app key
            $this->info('Generating app key...');
            $this->call('key:generate');
        } catch (Exception $e) {
            //
        }

        try {
            // Step 20: Clear config
            $this->info('Clearing config...');
            $this->call('config:clear');
        } catch (Exception $e) {
            //
        }

        // Step 21: Update composer dependencies
        $this->info('Updating composer dependencies...');
        $process = new Process(['composer', 'update']);
        $process->setTimeout(900);
        // Run the process
        $process->run();
        // Check if the process was successful
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        // Output the result
        echo $process->getOutput();

        // Step 22: Link storage folder to public folder
        $this->info('Linking storage folder to public folder...');
        $this->call('storage:link');

        // Step 23: Clear cache
        $this->info('Clearing cache...');
        $this->call('cache:clear');

        // Step 24: Run migrations
        // $this->info('Running migrations...');
        // $this->call('migrate');

        // Step 25: Run seeders
        // $this->info('Running seeders...');
        // $this->call('db:seed');

        $this->info('Creopse package installation completed successfully!');
    }
}
