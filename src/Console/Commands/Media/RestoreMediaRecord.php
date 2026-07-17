<?php

namespace Creopse\Creopse\Console\Commands\Media;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MediaFile;

class RestoreMediaRecord extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:restore-media-record
        {id : The ID of the soft-deleted media file record to restore}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Restore a soft-deleted MediaFile record.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');

        $mediaFile = MediaFile::onlyTrashed()->find($id);

        if (! $mediaFile) {
            $this->error("Trashed media file record #{$id} not found. It may not exist, or it isn't trashed.");

            return self::FAILURE;
        }

        $mediaFile->restore();

        $this->info("[media #{$id}] Record restored successfully.");

        return self::SUCCESS;
    }
}
