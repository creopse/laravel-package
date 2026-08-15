<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\MediaFileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Models\MediaFile;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'file' => ['required', 'file', 'max:'.config('creopse.uploads.max_size')],
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'File validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        /** @var UploadedFile $file */
        $file = $request->file('file');

        // SEC-06: generic uploads used to land in the same 'uploads' folder
        // the tracked media library defaults to, and any authenticated user
        // could then target any path on the disk via replace/delete/download
        // /check below - including other users' media-library files. Each
        // generic upload now gets its own unguessable folder, so a future
        // caller can't stumble onto (or enumerate) another caller's file.
        $path = $file->store('generic/'.Str::uuid(), 'public');

        $fileType = MediaFileController::determineFileType($file);

        if ($fileType === MediaFileType::IMAGE) {
            // Generate thumbnails
            $sizes = config('thumbnail_sizes');
            $manager = new ImageManager(new Driver);

            try {
                foreach ($sizes as $sizeName => $dimensions) {
                    $resizedImage = $manager->read($file)->scaleDown(width: $dimensions['width']);

                    $thumbnailPath = "thumbnails/{$sizeName}/".basename($path);
                    // Storage::put($thumbnailPath, $resizedImage);
                    $directory = dirname($thumbnailPath);
                    if (! Storage::disk('public')->exists($directory)) {
                        Storage::disk('public')->makeDirectory($directory);
                    }
                    $resizedImage->save(Storage::disk('public')->path($thumbnailPath));
                }
            } catch (\Exception $e) {
                // Do nothing
            }
        }

        if ($fileType === MediaFileType::VIDEO) {
            try {
                $thumbnailPath = 'thumbnails/video/'.pathinfo($path, PATHINFO_FILENAME).'.jpg';

                FFMpeg::fromDisk('public')
                    ->open($path)
                    ->getFrameFromSeconds(1)
                    ->export()
                    ->toDisk('public')
                    ->save($thumbnailPath);
            } catch (\Exception $e) {
                // Failed to generate video thumbnail, do nothing
            }
        }

        return $this->sendResponse(
            ['path' => $path, 'url' => Storage::disk('public')->url($path)],
            ResponseStatusCode::OK,
            'File uploaded successfully',
        );
    }

    public function replace(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'current_path' => 'required|string',
            'file' => ['required', 'file', 'max:'.config('creopse.uploads.max_size')],
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $path = $request->input('current_path');

        if ($unmanageable = $this->rejectUnmanageablePath($path)) {
            return $unmanageable;
        }

        if (Storage::disk('public')->delete($path)) {
            /** @var UploadedFile $newFile */
            $newFile = $request->file('file');

            // put() silently redirects File/UploadedFile instances to
            // putFile(), which treats $path as a *directory* and picks its
            // own hashed filename inside it instead of writing to $path
            // itself. Passing a raw stream keeps the exact path intact.
            $stream = fopen($newFile->getRealPath(), 'r');
            Storage::disk('public')->put($path, $stream, 'public');
            if (is_resource($stream)) {
                fclose($stream);
            }

            return $this->sendResponse(
                ['path' => $path, 'url' => Storage::disk('public')->url($path)],
                ResponseStatusCode::OK,
                'File replaced successfully',
            );
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'File not found',
            );
        }
    }

    public function delete(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'path' => 'required|string',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'File path required',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $path = $request->input('path');

        if ($unmanageable = $this->rejectUnmanageablePath($path)) {
            return $unmanageable;
        }

        $deleted = Storage::disk('public')->delete($path);

        if ($deleted) {
            return $this->sendResponse(
                [
                    'path' => $path,
                    'url' => Storage::disk('public')->url($path),
                ],
                ResponseStatusCode::OK,
                'File deleted successfully',
            );
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'File not found',
            );
        }
    }

    public function download(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'path' => 'required|string',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'File path required',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $path = $request->input('path');

        if ($unmanageable = $this->rejectUnmanageablePath($path)) {
            return $unmanageable;
        }

        // Check if file exists
        if (! Storage::disk('public')->exists($path)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'File not found',
            );
        }

        // Return response with file
        return response()->file(Storage::disk('public')->path($path));
    }

    public function check(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'path' => 'required|string',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'File path required',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        $path = $request->input('path');

        if ($unmanageable = $this->rejectUnmanageablePath($path)) {
            return $unmanageable;
        }

        // Check if file exists
        if (! Storage::disk('public')->exists($path)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'File not found',
            );
        }

        return $this->sendResponse(
            [
                'path' => $path,
                'url' => Storage::disk('public')->url($path),
            ],
            ResponseStatusCode::OK,
            'File exists',
        );
    }

    /**
     * SEC-06: replace/delete/download/check used to accept any path on the
     * public disk, letting any authenticated user read, overwrite, or
     * delete files that were never uploaded through this generic-file
     * system - tracked media-library files and generated thumbnails
     * included. Reject anything that isn't a plain path under this
     * controller's own control.
     */
    private function rejectUnmanageablePath(string $path): ?JsonResponse
    {
        $isUnmanageable = $path === ''
            || str_starts_with($path, '/')
            || str_starts_with($path, 'thumbnails/')
            || preg_match('#(^|[\\\\/])\.\.([\\\\/]|$)#', $path) === 1
            || MediaFile::where('path', $path)->exists();

        if (! $isUnmanageable) {
            return null;
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::NOT_FOUND,
            'File not found',
        );
    }
}
