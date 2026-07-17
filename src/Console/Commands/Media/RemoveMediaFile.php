<?php

namespace Creopse\Creopse\Console\Commands\Media;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Illuminate\Support\Facades\Storage;

class RemoveMediaFile extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:remove-media-file
        {path : The storage path of the file to delete (public disk)}
        {--force : Skip the confirmation prompt}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete a file from the public disk by path. Does not touch any MediaFile record.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $path = $this->argument('path');

        if (! Storage::disk('public')->exists($path)) {
            $this->error("File not found on disk: {$path}");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("file '{$path}' from the public disk")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        Storage::disk('public')->delete($path);

        $this->info("File '{$path}' deleted from disk.");

        return self::SUCCESS;
    }
}
