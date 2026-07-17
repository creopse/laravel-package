<?php

namespace Creopse\Creopse\Console\Commands\Media;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MediaFile;
use Creopse\Creopse\Traits\HandlesMediaProcessing;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ReplaceMediaFile extends CreopseCommand
{
    use HandlesMediaProcessing;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:replace-media
        {id : The ID of the media file record to replace}
        {path : Local path to the replacement file}
        {--folder=uploads : Storage folder}
        {--filename= : Override the display name (defaults to the original filename)}
        {--metadata= : JSON for additional_metadata, inline or @path/to/file.json, merged with auto-extracted image metadata}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Replace a media file\'s underlying file and refresh its record.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');
        $localPath = $this->argument('path');

        $mediaFile = MediaFile::find($id);

        if (! $mediaFile) {
            $this->error("Media file #{$id} not found.");

            return self::FAILURE;
        }

        if (! File::exists($localPath)) {
            $this->error("File not found: {$localPath}");

            return self::FAILURE;
        }

        $extraMetadata = [];
        if ($this->option('metadata') !== null) {
            $extraMetadata = $this->resolveJsonOption('metadata');
            if ($extraMetadata === null) {
                return self::FAILURE;
            }
        }

        if (! Storage::disk('public')->exists($mediaFile->path) || Storage::disk('public')->delete($mediaFile->path)) {
            $file = new \Illuminate\Http\File($localPath);
            $result = $this->storeAndProcessMediaFile($file, $this->option('folder'));

            foreach ($result['warnings'] as $warning) {
                $this->warn($warning);
            }

            $extension = pathinfo($localPath, PATHINFO_EXTENSION);

            $mediaFile->update([
                'path' => $result['path'],
                'name' => $this->option('filename') ?? basename($localPath),
                'mime_type' => $result['mime_type'],
                'size' => $result['size'],
                'extension' => $extension,
                'type' => $result['type'],
                'additional_metadata' => array_merge($extraMetadata, $result['metadata']),
            ]);

            $this->info("[media #{$id}] Replaced successfully (new path: {$result['path']}).");

            return self::SUCCESS;
        }

        $this->error("[media #{$id}] Could not delete the existing file, aborting replacement.");

        return self::FAILURE;
    }
}
