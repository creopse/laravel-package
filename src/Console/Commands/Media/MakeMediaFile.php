<?php

namespace Creopse\Creopse\Console\Commands\Media;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\MediaFile;
use Creopse\Creopse\Traits\HandlesMediaProcessing;
use Illuminate\Support\Facades\File;

class MakeMediaFile extends CreopseCommand
{
    use HandlesMediaProcessing;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:upload-media
        {path : Local path to the file to upload}
        {--folder=uploads : Storage folder}
        {--filename= : Override the display name (defaults to the original filename)}
        {--metadata= : JSON for additional_metadata, inline or @path/to/file.json, merged with auto-extracted image metadata}
        {--sender= : ID of the user this upload is attributed to}
        {--alias=creopse:add-media}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-media'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upload a local file to the media library, generating thumbnails for images/videos.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $localPath = $this->argument('path');

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

        $file = new \Illuminate\Http\File($localPath);
        $result = $this->storeAndProcessMediaFile($file, $this->option('folder'));

        foreach ($result['warnings'] as $warning) {
            $this->warn($warning);
        }

        $extension = pathinfo($localPath, PATHINFO_EXTENSION);

        $mediaFile = MediaFile::create([
            'path' => $result['path'],
            'name' => $this->option('filename') ?? basename($localPath),
            'mime_type' => $result['mime_type'],
            'size' => $result['size'],
            'extension' => $extension,
            'type' => $result['type'],
            'sender_id' => $this->option('sender'),
            'additional_metadata' => array_merge($extraMetadata, $result['metadata']),
        ]);

        $this->info("Media file uploaded successfully (id: {$mediaFile->id}, path: {$result['path']}).");

        return self::SUCCESS;
    }
}
