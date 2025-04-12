<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\MediaFileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Resources\MediaFileResource;
use Creopse\Creopse\Models\MediaFile;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Laravel\Facades\Image;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class MediaFileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $minSize = $request->query('minSize');
        $maxSize = $request->query('maxSize');
        $months = $request->query('months');
        $query = $request->query('query');
        $type = $request->query('type');

        if ($pageSize) {

            $mediaFiles = MediaFile::query();

            if ($query) {
                $mediaFiles = $mediaFiles->where('name', 'like', '%' . $query . '%')
                    ->orWhere('title', 'like', '%' . $query . '%');
            }

            if ($minSize) {
                $mediaFiles = $mediaFiles->where('size', '>=', $minSize);
            }

            if ($maxSize) {
                $mediaFiles = $mediaFiles->where('size', '<=', $maxSize);
            }

            if ($type) {
                if ($type == 10) {
                    $mediaFiles = $mediaFiles->onlyTrashed();
                } else {
                    $mediaFiles = $mediaFiles->where('type', $type);
                }
            }

            if ($months) {
                $mediaFiles = $mediaFiles->where(function ($query) use ($months) {
                    foreach ($months as $month) {
                        list($year, $month) = explode('-', $month);
                        $query->orWhereYear('created_at', $year)
                            ->whereMonth('created_at', $month);
                    }
                });
            }

            $mediaFiles = $mediaFiles->latest()->paginate($pageSize);

            return $this->sendResponse([
                'mediaFiles' => MediaFileResource::collection($mediaFiles),
                'meta' => [
                    'links' => [
                        'first' => $mediaFiles->url(1),
                        'last' => $mediaFiles->url($mediaFiles->lastPage()),
                        'prev' => $mediaFiles->previousPageUrl(),
                        'next' => $mediaFiles->nextPageUrl(),
                    ],
                    'currentPage' => $mediaFiles->currentPage(),
                    'perPage' => $mediaFiles->perPage(),
                    'total' => $mediaFiles->total(),
                    'lastPage' => $mediaFiles->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(
            MediaFileResource::collection(MediaFile::all())
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(MediaFile $mediaFile)
    {
        return $this->sendResponse(new MediaFileResource($mediaFile));
    }

    /**
     * Display the list of specified resources.
     */
    public function showList(Request $request)
    {
        $mediaFiles = MediaFile::whereIn('id', $request->input('ids') ?? [])->get();

        return $this->sendResponse(MediaFileResource::collection($mediaFiles));
    }

    /**
     * Display the list of specified resources by paths.
     */
    public function showListByPaths(Request $request)
    {
        $mediaFiles = MediaFile::whereIn('path', $request->input('paths') ?? [])->get();

        return $this->sendResponse(MediaFileResource::collection($mediaFiles));
    }

    /**
     * Retrieves a list of months in descending order based on the creation date of media files.
     *
     * @param Request $request The HTTP request object.
     * @return Response The HTTP response object containing the list of months.
     */
    public function showMonthsList(Request $request)
    {
        $months = MediaFile::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month')
            ->groupBy('month')
            ->orderBy('month', 'desc')
            ->pluck('month');

        return $this->sendResponse($months);
    }

    /**
     * Display the search result for a given query.
     *
     * @param Request $request The HTTP request object.
     * @param string $query The search query.
     * @return \Inertia\Response The rendered search articles page.
     */
    public function searchMediaFiles(Request $request, string $query = '')
    {
        $mediaFiles = MediaFile::where('name', 'like', '%' . $query . '%')->orWhere('title', 'like', '%' . $query . '%')->get();

        return $this->sendResponse(MediaFileResource::collection($mediaFiles));
    }

    /**
     * Uploads a file and creates a MediaFile record in the database.
     *
     * @param Request $request The HTTP request object.
     * @throws \Exception If the file validation fails.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the uploaded MediaFile resource.
     */
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
                'Media file validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        /** @var UploadedFile $file */
        $file = $request->file('file');

        $path = $file->store($request->input('folder') ?? 'uploads', 'public');

        $fileType = self::determineFileType($file);

        $additionalMetadata = $request->input('additional_metadata') ?? null;

        if ($fileType === MediaFileType::IMAGE) {
            $additionalMetadata = $additionalMetadata ?? [];

            $imageMetadata = getimagesize($file->getRealPath());
            if ($imageMetadata) {
                $additionalMetadata['width'] = $imageMetadata[0];
                $additionalMetadata['height'] = $imageMetadata[1];
                $additionalMetadata['image_type'] = $imageMetadata[2];
            }

            // Generate thumbnails
            $sizes = config('thumbnail_sizes');

            try {
                foreach ($sizes as $sizeName => [$width, $height]) {
                    $resizedImage = Image::read($file);
                    $resizedImage->resize($width, $height);

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
                Log::info($e->getMessage());
                // Failed to generate video thumbnail, do nothing
            }
        }

        $mediaFile = MediaFile::create([
            'path' => $path,
            'name' => $request->input('filename') ?? $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
            'extension' => $file->getClientOriginalExtension(),
            'type' => $fileType,
            'sender_id' => $request->input('sender_id') ?? (Auth::check() ? Auth::user()->id : null),
            'additional_metadata' => $additionalMetadata,
        ]);

        return $this->sendResponse(
            new MediaFileResource($mediaFile),
            ResponseStatusCode::OK,
            'Media file uploaded successfully',
        );
    }

    /**
     * Replaces a media file with a new file and updates the corresponding MediaFile record in the database.
     *
     * @param Request $request The HTTP request object containing the new file to replace the existing file.
     * @param MediaFile $mediaFile The MediaFile record to be updated.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the updated MediaFile resource or an error message.
     */
    public function replace(Request $request, MediaFile $mediaFile)
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
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        if (!Storage::disk('public')->exists($mediaFile->path) || Storage::disk('public')->delete($mediaFile->path)) {
            /** @var UploadedFile $file */
            $newFile = $request->file('file');

            $path = $newFile->store($request->input('folder') ?? 'uploads', 'public');

            $fileType = self::determineFileType($newFile);

            $additionalMetadata = $request->input('additional_metadata') ?? null;

            if ($fileType === MediaFileType::IMAGE) {
                $additionalMetadata = $additionalMetadata ?? [];

                $imageMetadata = getimagesize($newFile->getRealPath());
                if ($imageMetadata) {
                    $additionalMetadata['width'] = $imageMetadata[0];
                    $additionalMetadata['height'] = $imageMetadata[1];
                    $additionalMetadata['image_type'] = $imageMetadata[2];
                }

                // Generate thumbnails
                $sizes = config('thumbnail_sizes');

                try {
                    foreach ($sizes as $sizeName => [$width, $height]) {
                        $resizedImage = Image::read($newFile);
                        $resizedImage->resize($width, $height);

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

            $mediaFile->update([
                'path' => $path,
                'name' => $request->input('filename') ?? $newFile->getClientOriginalName(),
                'mime_type' => $newFile->getMimeType(),
                'size' => $newFile->getSize(),
                'extension' => $newFile->getClientOriginalExtension(),
                'type' => $fileType,
                'additional_metadata' => $additionalMetadata,
            ]);

            return $this->sendResponse(
                new MediaFileResource($mediaFile),
                ResponseStatusCode::OK,
                'Media file replaced successfully',
            );
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'Media file not found',
            );
        }
    }

    /**
     * Deletes a file from the public disk and returns a JSON response indicating the success or failure of the operation.
     *
     * @param Request $request The HTTP request object containing the path of the file to be deleted.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the path of the deleted file and its URL, or an error message.
     */
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
                'Media file path required',
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
                'Media file deleted successfully',
            );
        } else {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'Media file not found',
            );
        }
    }

    /**
     * Deletes a MediaFile record from the database.
     *
     * @param MediaFile $mediaFile The MediaFile record to be deleted.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the success message.
     */
    public function destroy(MediaFile $mediaFile)
    {
        $mediaFile->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Media file record deleted successfully'
        );
    }

    /**
     * Deletes a MediaFile record permanently from the database.
     *
     * @param MediaFile $mediaFile The MediaFile record to be deleted.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the success message.
     */
    public function forceDestroy(MediaFile $mediaFile)
    {
        $mediaFile->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Media file record deleted permanently successfully'
        );
    }

    /**
     * Deletes all MediaFile records permanently from the database.
     *
     * @return \Illuminate\Http\JsonResponse The JSON response containing the success message.
     */
    public function forceDestroyAll()
    {
        MediaFile::onlyTrashed()->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Media files record deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param MediaFile $mediaFile The MediaFile record to be deleted.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the success message.
     */
    public function restore(MediaFile $mediaFile)
    {
        $mediaFile->restore();

        return $this->sendResponse(
            new MediaFileResource($mediaFile),
            ResponseStatusCode::OK,
            'Media file record restored successfully'
        );
    }

    /**
     * Determine the file type.
     *
     * @param UploadedFile $file
     * @return MediaFileType
     */
    public static function determineFileType(UploadedFile $file): MediaFileType
    {
        $mimeType = strtolower($file->getMimeType());

        // Define MIME types and extensions for each MediaFileType
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
            'application/rtf'
        ];

        if (in_array($mimeType, $imageMimes)) {
            return MediaFileType::IMAGE;
        }

        if (in_array($mimeType, $videoMimes)) {
            return MediaFileType::VIDEO;
        }

        if (in_array($mimeType, $audioMimes)) {
            return MediaFileType::AUDIO;
        }

        if (in_array($mimeType, $documentMimes)) {
            return MediaFileType::DOCUMENT;
        }

        // If the MIME type doesn't match any of the above, return OTHER
        return MediaFileType::OTHER;
    }
}
