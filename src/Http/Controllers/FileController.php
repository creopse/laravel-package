<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\MediaFileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Laravel\Facades\Image;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'file' => 'required|file',
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

        $path = $file->store($request->input('folder') ?? 'uploads', 'public');

        $fileType = MediaFileController::determineFileType($file);

        if ($fileType === MediaFileType::IMAGE) {
            // Generate thumbnails
            $sizes = config('thumbnail_sizes');

            try {
                foreach ($sizes as $sizeName => [$width, $height]) {
                    $resizedImage = Image::read($file)->resize($width, $height);

                    $thumbnailPath = "thumbnails/{$sizeName}/" . basename($path);
                    // Storage::put($thumbnailPath, $resizedImage);
                    $directory = dirname($thumbnailPath);
                    if (!Storage::disk('public')->exists($directory)) {
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
                $thumbnailPath = 'thumbnails/video/' . pathinfo($path, PATHINFO_FILENAME) . '.jpg';

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
            'current_path' => 'required',
            'file' => 'required|file',
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

        if (Storage::disk('public')->delete($request->input('current_path'))) {
            /** @var UploadedFile $file */
            $newFile = $request->file('file');

            $path = $request->input('current_path');

            Storage::disk('public')->put($path, $newFile, 'public');

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
            'path' => 'required',
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

        $deleted = Storage::disk('public')->delete($request->input('path'));

        if ($deleted) {
            return $this->sendResponse(
                [
                    'path' => $request->input('path'),
                    'url' => Storage::disk('public')->url($request->input('path'))
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
            'path' => 'required',
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

        // Check if file exists
        if (!Storage::disk('public')->exists($request->input('path'))) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'File not found',
            );
        }

        // Return response with file
        return response()->file(Storage::disk('public')->path($request->input('path')));
    }

    public function check(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'path' => 'required',
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

        // Check if file exists
        if (!Storage::disk('public')->exists($request->input('path'))) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'File not found',
            );
        }

        return $this->sendResponse(
            [
                'path' => $request->input('path'),
                'url' => Storage::disk('public')->url($request->input('path'))
            ],
            ResponseStatusCode::OK,
            'File exists',
        );
    }
}
