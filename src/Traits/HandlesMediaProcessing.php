<?php

namespace Creopse\Creopse\Traits;

use Creopse\Creopse\Enums\MediaFileType;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;
use Symfony\Component\HttpFoundation\File\File as SymfonyFile;

trait HandlesMediaProcessing
{
    /**
     * Determine the MediaFileType from a MIME type string.
     */
    public static function determineFileTypeFromMime(string $mimeType): MediaFileType
    {
        $mimeType = strtolower($mimeType);

        $imageMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/svg+xml'];
        $videoMimes = ['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-ms-wmv', 'video/x-msvideo', 'video/x-flv'];
        $audioMimes = ['audio/mpeg', 'audio/wav', 'audio/x-wav', 'audio/ogg', 'audio/midi', 'audio/x-ms-wma'];
        $documentMimes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'text/plain',
            'application/rtf',
        ];

        if (in_array($mimeType, $imageMimes, true)) {
            return MediaFileType::IMAGE;
        }

        if (in_array($mimeType, $videoMimes, true)) {
            return MediaFileType::VIDEO;
        }

        if (in_array($mimeType, $audioMimes, true)) {
            return MediaFileType::AUDIO;
        }

        if (in_array($mimeType, $documentMimes, true)) {
            return MediaFileType::DOCUMENT;
        }

        return MediaFileType::OTHER;
    }

    /**
     * Store a file (UploadedFile from HTTP, or a local Illuminate\Http\File
     * for CLI use) onto the public disk under the given folder, generate
     * thumbnails for images/videos, and return the resulting metadata.
     *
     * 'extension' and 'name' are intentionally NOT included here — they
     * differ between HTTP (client-original name/extension) and CLI (local
     * filename) contexts, and are the caller's responsibility to resolve.
     *
     * @return array{path: string, mime_type: string, size: int, type: MediaFileType, metadata: array, warnings: array<int, string>}
     */
    protected function storeAndProcessMediaFile(SymfonyFile $file, string $folder): array
    {
        $path = Storage::disk('public')->putFile($folder, $file);

        $mimeType = $file->getMimeType();
        $fileType = self::determineFileTypeFromMime($mimeType);

        $metadata = [];
        $warnings = [];

        if ($fileType === MediaFileType::IMAGE) {
            $imageMetadata = @getimagesize($file->getRealPath());
            if ($imageMetadata) {
                $metadata['width'] = $imageMetadata[0];
                $metadata['height'] = $imageMetadata[1];
                $metadata['image_type'] = $imageMetadata[2];
            }

            try {
                $this->generateImageThumbnails($file->getRealPath(), $path);
            } catch (\Exception $e) {
                $warnings[] = "Image thumbnail generation failed: {$e->getMessage()}";
            }
        }

        if ($fileType === MediaFileType::VIDEO) {
            try {
                $this->generateVideoThumbnail($path);
            } catch (\Exception $e) {
                $warnings[] = "Video thumbnail generation failed: {$e->getMessage()}";
            }
        }

        return [
            'path' => $path,
            'mime_type' => $mimeType,
            'size' => $file->getSize(),
            'type' => $fileType,
            'metadata' => $metadata,
            'warnings' => $warnings,
        ];
    }

    /**
     * Generate resized thumbnails for an image, per config('thumbnail_sizes').
     *
     * Uses a manually instantiated Intervention ImageManager rather than the
     * Image facade, to avoid resolving Laravel's own native Illuminate\Image
     * facade — both packages register under an ambiguous 'image' accessor,
     * and which one wins the container binding can differ between HTTP and
     * console contexts.
     */
    private function generateImageThumbnails(string $localPath, string $storedPath): void
    {
        $sizes = config('thumbnail_sizes');
        $manager = new ImageManager(new Driver());

        foreach ($sizes as $sizeName => $dimensions) {
            $resizedImage = $manager->read($localPath);
            $resizedImage->scaleDown(width: $dimensions['width']);

            $thumbnailPath = "thumbnails/{$sizeName}/" . basename($storedPath);
            $directory = dirname($thumbnailPath);

            if (! Storage::disk('public')->exists($directory)) {
                Storage::disk('public')->makeDirectory($directory);
            }

            $resizedImage->save(Storage::disk('public')->path($thumbnailPath));
        }
    }

    /**
     * Generate a video thumbnail from the first second of the clip.
     */
    private function generateVideoThumbnail(string $storedPath): void
    {
        $thumbnailPath = 'thumbnails/video/' . pathinfo($storedPath, PATHINFO_FILENAME) . '.jpg';

        FFMpeg::fromDisk('public')
            ->open($storedPath)
            ->getFrameFromSeconds(1)
            ->export()
            ->toDisk('public')
            ->save($thumbnailPath);
    }
}
