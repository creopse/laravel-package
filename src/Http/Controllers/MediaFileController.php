<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\MediaFileType;
use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Resources\MediaFileResource;
use Creopse\Creopse\Models\MediaFile;
use Creopse\Creopse\Traits\HandlesMediaProcessing;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MediaFileController extends Controller
{
    use HandlesMediaProcessing;

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
                $mediaFiles = $mediaFiles->where('name', 'like', '%'.$query.'%')
                    ->orWhere('title', 'like', '%'.$query.'%');
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
                        [$year, $month] = explode('-', $month);
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
     * @param  Request  $request  The HTTP request object.
     * @return JsonResponse The HTTP response object containing the list of months.
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
     * @param  Request  $request  The HTTP request object.
     * @param  string  $query  The search query.
     * @return JsonResponse The rendered search articles page.
     */
    public function searchMediaFiles(Request $request, string $query = '')
    {
        $mediaFiles = MediaFile::where('name', 'like', '%'.$query.'%')->orWhere('title', 'like', '%'.$query.'%')->get();

        return $this->sendResponse(MediaFileResource::collection($mediaFiles));
    }

    /**
     * Uploads a file and creates a MediaFile record in the database.
     *
     * @param  Request  $request  The HTTP request object.
     * @return JsonResponse The JSON response containing the uploaded MediaFile resource.
     *
     * @throws \Exception If the file validation fails.
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

        $result = $this->storeAndProcessMediaFile($file, $request->input('folder') ?? 'uploads');

        foreach ($result['warnings'] as $warning) {
            Log::info($warning);
        }

        $additionalMetadata = $this->mergeMediaMetadata($request->input('additional_metadata'), $result['metadata']);

        $mediaFile = MediaFile::create([
            'path' => $result['path'],
            'name' => $request->input('filename') ?? $file->getClientOriginalName(),
            'mime_type' => $result['mime_type'],
            'size' => $result['size'],
            'extension' => $file->getClientOriginalExtension(),
            'type' => $result['type'],
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
     * @param  Request  $request  The HTTP request object containing the new file to replace the existing file.
     * @param  MediaFile  $mediaFile  The MediaFile record to be updated.
     * @return JsonResponse The JSON response containing the updated MediaFile resource or an error message.
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

        if (! Storage::disk('public')->exists($mediaFile->path) || Storage::disk('public')->delete($mediaFile->path)) {
            /** @var UploadedFile $newFile */
            $newFile = $request->file('file');

            $result = $this->storeAndProcessMediaFile($newFile, $request->input('folder') ?? 'uploads');

            foreach ($result['warnings'] as $warning) {
                Log::info($warning);
            }

            $additionalMetadata = $this->mergeMediaMetadata($request->input('additional_metadata'), $result['metadata']);

            $mediaFile->update([
                'path' => $result['path'],
                'name' => $request->input('filename') ?? $newFile->getClientOriginalName(),
                'mime_type' => $result['mime_type'],
                'size' => $result['size'],
                'extension' => $newFile->getClientOriginalExtension(),
                'type' => $result['type'],
                'additional_metadata' => $additionalMetadata,
            ]);

            return $this->sendResponse(
                new MediaFileResource($mediaFile),
                ResponseStatusCode::OK,
                'Media file replaced successfully',
            );
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::NOT_FOUND,
            'Media file not found',
        );
    }

    /**
     * Deletes a file from the public disk and returns a JSON response indicating the success or failure of the operation.
     *
     * @param  Request  $request  The HTTP request object containing the path of the file to be deleted.
     * @return JsonResponse The JSON response containing the path of the deleted file and its URL, or an error message.
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
                    'url' => Storage::disk('public')->url($request->input('path')),
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
     * @param  MediaFile  $mediaFile  The MediaFile record to be deleted.
     * @return JsonResponse The JSON response containing the success message.
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
     * @param  MediaFile  $mediaFile  The MediaFile record to be deleted.
     * @return JsonResponse The JSON response containing the success message.
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
     * @return JsonResponse The JSON response containing the success message.
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
     * @param  MediaFile  $mediaFile  The MediaFile record to be deleted.
     * @return JsonResponse The JSON response containing the success message.
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
     * Merge request-provided additional_metadata with auto-extracted
     * metadata (e.g. image dimensions), preserving null when neither
     * is present — matching the original controller's null-vs-array semantics.
     */
    private function mergeMediaMetadata(?array $requestMetadata, array $autoMetadata): ?array
    {
        if ($requestMetadata === null && empty($autoMetadata)) {
            return null;
        }

        return array_merge($requestMetadata ?? [], $autoMetadata);
    }

    /**
     * Determine the file type. Kept as a static wrapper for backward
     * compatibility with any external callers of MediaFileController::determineFileType().
     */
    public static function determineFileType(UploadedFile $file): MediaFileType
    {
        return self::determineFileTypeFromMime($file->getMimeType());
    }
}
