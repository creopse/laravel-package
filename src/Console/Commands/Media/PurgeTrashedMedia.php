<?php

namespace Creopse\Creopse\Console\Commands\Media;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MediaFile;

class PurgeTrashedMedia extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:purge-trashed-media
        {--force : Skip the confirmation prompt}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Permanently delete all soft-deleted MediaFile records. Does not touch files on disk.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $count = MediaFile::onlyTrashed()->count();

        if ($count === 0) {
            $this->info('No trashed media file records to purge.');

            return self::SUCCESS;
        }

        if (! $this->confirmDestruction("{$count} trashed media file record(s) permanently")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        MediaFile::onlyTrashed()->forceDelete();

        $this->info("{$count} trashed media file record(s) permanently deleted.");

        $this->line('Underlying files on disk were not touched — use creopse:remove-media-file if needed.');

        return self::SUCCESS;
    }
}
