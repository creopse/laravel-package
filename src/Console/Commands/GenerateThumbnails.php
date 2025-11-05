<?php

namespace Creopse\Creopse\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class GenerateThumbnails extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:generate-thumbnails
                            {--force : Regenerate even if thumbnail already exists}
                            {--path= : Specific path in storage/app/public}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate thumbnails (small, medium, large) for all images';

    protected array $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Generating thumbnails...');

        $disk = Storage::disk('public');
        $searchPath = $this->option('path') ?: '';
        $force = $this->option('force');

        // Create thumbnail directories
        $sizes = config('thumbnail_sizes');

        foreach (array_keys($sizes) as $size) {
            $thumbnailPath = "thumbnails/{$size}";
            if (!$disk->exists($thumbnailPath)) {
                $disk->makeDirectory($thumbnailPath);
                $this->info("✓ Directory created: {$thumbnailPath}");
            }
        }

        // Get all files recursively
        $files = $disk->allFiles($searchPath);
        $imageFiles = collect($files)->filter(function ($file) {
            // Ignore files in thumbnails directory
            if (str_starts_with($file, 'thumbnails/')) {
                return false;
            }

            $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            return in_array($extension, $this->allowedExtensions);
        });

        if ($imageFiles->isEmpty()) {
            $this->warn('No images found.');
            return Command::SUCCESS;
        }

        $this->info("{$imageFiles->count()} image(s) found");

        $bar = $this->output->createProgressBar($imageFiles->count() * count($sizes));
        $bar->start();

        $generated = 0;
        $skipped = 0;
        $errors = 0;

        foreach ($imageFiles as $file) {
            $filename = basename($file);
            $fullPath = storage_path("app/public/{$file}");

            foreach ($sizes as $size => $dimensions) {
                $thumbnailPath = "thumbnails/{$size}/{$filename}";
                $thumbnailFullPath = storage_path("app/public/{$thumbnailPath}");

                // Check if thumbnail already exists
                if (!$force && $disk->exists($thumbnailPath)) {
                    $skipped++;
                    $bar->advance();
                    continue;
                }

                try {
                    // Generate thumbnail
                    Image::read($fullPath)
                        ->scaleDown(width: $dimensions['width'])
                        ->save($thumbnailFullPath);

                    $generated++;
                } catch (\Exception $e) {
                    $errors++;
                    $this->newLine();
                    $this->error("Error for {$file}: " . $e->getMessage());
                }

                $bar->advance();
            }
        }

        $bar->finish();
        $this->newLine(2);

        // Summary
        $this->info("✓ Generation completed!");
        $this->table(
            ['Status', 'Count'],
            [
                ['Generated', $generated],
                ['Skipped (existing)', $skipped],
                ['Errors', $errors],
            ]
        );

        return Command::SUCCESS;
    }
}
