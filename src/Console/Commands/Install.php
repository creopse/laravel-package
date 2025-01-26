<?php

namespace Creopse\Creopse\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class Install extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:install {--force=true}';

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
        $force = $this->option('force');

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
                        throw new Exception("Failed to delete file: $file");
                    }
                }

                echo "All files in the folder $folder have been deleted.";
            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
        }

        // Step 2: Publish configuration files
        $this->info('Publishing configuration files...');
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

        // Step 3: Publish public assets
        $this->info('Publishing public assets...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-public',
            '--force' => $force,
        ]);

        // Step 4: Publish resources
        $this->info('Publishing resources...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-resources',
            '--force' => $force,
        ]);

        // Step 5: Publish translations
        $this->info('Publishing translations...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-translations',
            '--force' => $force,
        ]);

        // Step 6: Publish inertia middleware
        $this->info('Publishing inertia middleware...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-inertia-middleware',
            '--force' => $force,
        ]);

        // Step 7: Publish other files (e.g., routes, controllers)
        $this->info('Publishing other files...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-other-files',
            '--force' => $force,
        ]);

        // Step 8: Publish models
        $this->info('Publishing models...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-models',
            '--force' => $force,
        ]);

        // Step 9: Publish enums
        $this->info('Publishing enums...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-enums',
            '--force' => $force,
        ]);

        // Step 10: Publish subscriber profile factory
        $this->info('Publishing subscriber profile factory...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-subscriber-profile-factory',
            '--force' => $force,
        ]);

        // Step 11: Publish admin
        $this->info('Publishing creopse admin...');
        $this->call('vendor:publish', [
            '--tag' => 'creopse-admin',
            '--force' => $force,
        ]);

        // Step 12: Install pnpm dependencies
        $this->info('Installing pnpm dependencies...');
        $process = new Process(['pnpm', 'i']);
        $process->setTimeout(300);
        // Run the process
        $process->run();
        // Check if the process was successful
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        // Output the result
        echo $process->getOutput();

        // Step 13: Cache config
        $this->info('Caching config...');
        $this->call('config:cache');

        // Step 14: Generate app key
        $this->info('Generating app key...');
        $this->call('key:generate');

        // Step 15: Clear config
        $this->info('Clearing config...');
        $this->call('config:clear');

        // Step 16: Update composer dependencies
        $this->info('Updating composer dependencies...');
        $process = new Process(['composer', 'update']);
        $process->setTimeout(300);
        // Run the process
        $process->run();
        // Check if the process was successful
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        // Output the result
        echo $process->getOutput();

        // Step 17: Link storage folder to public folder
        $this->info('Linking storage folder to public folder...');
        $this->call('storage:link');

        // Step 18: Clear cache
        $this->info('Clearing cache...');
        $this->call('cache:clear');

        // Step 19: Run migrations
        // $this->info('Running migrations...');
        // $this->call('migrate');

        // Step 20: Run seeders
        // $this->info('Running seeders...');
        // $this->call('db:seed');

        $this->info('Creopse package installation completed successfully!');
    }
}
