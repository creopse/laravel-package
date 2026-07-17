<?php

namespace Creopse\Creopse\Console\Commands\Media;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MediaFile;

class RemoveMediaRecord extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:remove-media-record
        {id : The ID of the media file record to remove}
        {--permanent : Force-delete the record instead of soft-deleting it}
        {--force : Skip the confirmation prompt}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete a MediaFile record. Does not touch the underlying file on disk — use creopse:remove-media-file for that.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');

        $mediaFile = MediaFile::find($id);

        if (! $mediaFile) {
            $this->error("Media file record #{$id} not found.");

            return self::FAILURE;
        }

        $permanent = $this->option('permanent');
        $label = "media file record #{$id}".($permanent ? ' permanently' : '');

        if (! $this->confirmDestruction($label)) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        if ($permanent) {
            $mediaFile->forceDelete();
            $this->info("[media #{$id}] Record permanently deleted.");
        } else {
            $mediaFile->delete();
            $this->info("[media #{$id}] Record soft-deleted.");
        }

        $this->line('The underlying file on disk was not touched — use creopse:remove-media-file if needed.');

        return self::SUCCESS;
    }
}
