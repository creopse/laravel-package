<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Enums\VideoItemSource;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Resources\Content\VideoItemResource;
use Creopse\Creopse\Models\VideoItem;
use Creopse\Creopse\Models\VideoSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class VideoItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orderByPublishedAt = $request->query('orderByPublishedAt');
        $displayType = $request->query('displayType');
        $categories = $request->query('categories');
        $isVisible = $request->query('isVisible');
        $pageSize = $request->query('pageSize');
        $source = $request->query('source');
        $query = $request->query('query');

        $apiKeyItem = VideoSetting::where('key', 'youtubeApiKey')->first();
        $channelIdItem = VideoSetting::where('key', 'youtubeChannelId')->first();
        $youtubeChannelVideosAutoUpdateItem = VideoSetting::where('key', 'youtubeChannelVideosAutoUpdate')->first();

        if (
            isset($apiKeyItem) && !empty($apiKeyItem->value) &&
            isset($channelIdItem) && !empty($channelIdItem->value) &&
            isset($youtubeChannelVideosAutoUpdateItem) && $youtubeChannelVideosAutoUpdateItem->value == '1'
        ) {
            $youtubeLastChannelVideosUpdateItem = VideoSetting::where('key', 'youtubeLastChannelVideosUpdate')->first();
            $makeUpdate = false;

            if (isset($youtubeLastChannelVideosUpdateItem) && !empty($youtubeLastChannelVideosUpdateItem->value)) {
                if (Carbon::parse($youtubeLastChannelVideosUpdateItem->value)->diffInHours(Carbon::now()) >= 6) {
                    $makeUpdate = true;
                }
            } else {
                $makeUpdate = true;
            }

            if ($makeUpdate) {
                $videos = $this->fetchChannelVideos($channelIdItem->value, $apiKeyItem->value);

                foreach ($videos as $video) {
                    $videoItem = VideoItem::where('foreign_id', $video['videoId'])->first();

                    VideoItem::updateOrCreate(
                        [
                            'foreign_id' => $video['videoId'],
                        ],
                        [
                            'title' => '{ "en": "' . $video['title'] . '", "fr": "' . $video['title'] . '" }',
                            'description' => '{ "en": "' . $video['description'] . '", "fr": "' . $video['description'] . '" }',
                            'path' => 'https://www.youtube.com/embed/' . $video['videoId'] . '?autoplay=1&rel=0',
                            'thumbnail' => $video['thumbnail'],
                            'source' => VideoItemSource::YOUTUBE->value,
                            'is_visible' => true,
                            'publisher_id' => $videoItem ? $videoItem->publisher_id : ($request->user() ? $request->user()->id : null),
                            'published_at' => $video['publishedAt'],
                        ]
                    );
                }

                VideoSetting::updateOrCreate(
                    [
                        'key' => 'youtubeLastChannelVideosUpdate',
                    ],
                    [
                        'value' => Carbon::now()->format('Y-m-d H:i:s'),
                    ]
                );
            }
        }

        if ($pageSize) {

            $videoItems = VideoItem::query();

            if ($query) {
                $videoItems = $videoItems->where(function ($q) use ($query) {
                    $q->where('title', 'like', '%' . $query . '%')
                        ->orWhere('description', 'like', '%' . $query . '%');
                });
            }

            if ($source && $source != 'all') {
                $videoItems = $videoItems->where('source', $source);
            }

            if ($displayType) {
                $videoItems = $videoItems->where('display_type', $displayType);
            }

            if ($isVisible) {
                $videoItems = $videoItems->where('is_visible', true);
            }

            if ($categories) {
                $videoItems = $videoItems->whereHas('categories', function ($query) use ($categories) {
                    $query->whereIn('id', $categories);
                });
            }

            if (($source && $source == VideoItemSource::YOUTUBE->value) || $orderByPublishedAt) {
                $videoItems = $videoItems->latest('published_at')->paginate($pageSize);
            } else {
                $videoItems = $videoItems->latest()->paginate($pageSize);
            }

            return $this->sendResponse([
                'videoItems' => VideoItemResource::collection($videoItems),
                'meta' => [
                    'links' => [
                        'first' => $videoItems->url(1),
                        'last' => $videoItems->url($videoItems->lastPage()),
                        'prev' => $videoItems->previousPageUrl(),
                        'next' => $videoItems->nextPageUrl(),
                    ],
                    'currentPage' => $videoItems->currentPage(),
                    'perPage' => $videoItems->perPage(),
                    'total' => $videoItems->total(),
                    'lastPage' => $videoItems->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(VideoItemResource::collection(VideoItem::all()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $videoItem = null;

        if ($request->input('source') == VideoItemSource::YOUTUBE->value && !is_null($request->input('path'))) {
            $videoId = $this->extractYoutubeVideoId($request->input('path'));

            if (is_null($videoId)) {
                return $this->sendResponse(
                    null,
                    ResponseStatusCode::NOT_FOUND,
                    'Video id not found',
                    ResponseErrorCode::REQUEST_PARAMS_MISSING
                );
            }

            if (VideoItem::where('foreign_id', $videoId)->exists()) {
                return $this->sendResponse(
                    null,
                    ResponseStatusCode::CONFLICT,
                    'Video already exists',
                    ResponseErrorCode::REQUEST_DATA_ALREADY_EXISTS
                );
            }

            $apiKeyItem = VideoSetting::where('key', 'youtubeApiKey')->first();

            if (isset($apiKeyItem) && !empty($apiKeyItem->value)) {
                $videoInfo = $this->fetchYoutubeVideoInfo($videoId, $apiKeyItem->value);

                if ($videoInfo) {
                    $snippet = $videoInfo['items'][0]['snippet'];

                    $videoItem = VideoItem::create([
                        'foreign_id' => $videoId,
                        'title' => '{ "en": "' . $snippet['title'] . '", "fr": "' . $snippet['title'] . '" }',
                        'description' => '{ "en": "' . $snippet['description'] . '", "fr": "' . $snippet['description'] . '" }',
                        'path' => 'https://www.youtube.com/embed/' . $videoId . '?autoplay=1&rel=0',
                        'thumbnail' => $this->getThumbnail($snippet['thumbnails']),
                        'source' => $request->input('source'),
                        'user_metadata' => $request->input('user_metadata'),
                        'is_visible' => true,
                        'display_type' => $request->input('display_type'),
                        'publisher_id' => $request->input('publisher_id') ?? $request->user()->id,
                        'published_at' => Carbon::parse($snippet['publishedAt'])->format('Y-m-d H:i:s'),
                    ]);

                    if ($request->has('categories')) {
                        $videoItem->categories()->sync($request->input('categories'));
                    }
                } else {
                    return $this->sendResponse(
                        null,
                        ResponseStatusCode::SERVICE_UNAVAILABLE,
                        'Failed to retrieve video info',
                        ResponseErrorCode::REQUEST_DATA_RETRIEVAL_FAILED
                    );
                }
            } else {
                return $this->sendResponse(
                    null,
                    ResponseStatusCode::NOT_FOUND,
                    'Youtube API key not found',
                    ResponseErrorCode::REQUEST_PARAMS_MISSING
                );
            }
        } else {
            $validator = Validator::make($request->all(), [
                'title' => 'required|string',
                'path' => 'required|string',
                'source' => 'sometimes|string',
            ]);

            // If data not valid return error
            if ($validator->fails()) {
                return $this->sendResponse(
                    $validator->errors(),
                    ResponseStatusCode::UNPROCESSABLE_ENTITY,
                    'Video item data validation failed',
                    ResponseErrorCode::FORM_INVALID_DATA
                );
            }

            $videoItem = VideoItem::create([
                'foreign_id' => $request->input('foreign_id'),
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'path' => $request->input('path'),
                'thumbnail' => $request->input('thumbnail'),
                'source' => $request->input('source'),
                'user_metadata' => $request->input('user_metadata'),
                'is_visible' => $request->input('is_visible'),
                'display_type' => $request->input('display_type'),
                'publisher_id' => $request->input('publisher_id') ?? $request->user()->id,
                'published_at' => $request->input('published_at') ?? Carbon::now()->format('Y-m-d H:i:s'),
            ]);

            if ($request->has('categories')) {
                $videoItem->categories()->sync($request->input('categories'));
            }
        }

        return $this->sendResponse(
            new VideoItemResource($videoItem),
            ResponseStatusCode::CREATED,
            'Video item created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(VideoItem $videoItem)
    {
        return $this->sendResponse(new VideoItemResource($videoItem));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VideoItem $videoItem)
    {
        $videoItem->update($request->except(['categories']));

        if ($request->has('categories')) {
            $videoItem->categories()->sync($request->input('categories'));
        }

        return $this->sendResponse(
            new VideoItemResource($videoItem),
            ResponseStatusCode::OK,
            'VideoItem updated successfully'
        );
    }

    /**
     * Update the youtube channel videos.
     */
    public function updateYoutubeChannelVideos(Request $request)
    {
        $apiKeyItem = VideoSetting::where('key', 'youtubeApiKey')->first();
        $channelIdItem = VideoSetting::where('key', 'youtubeChannelId')->first();

        if (!isset($apiKeyItem) || empty($apiKeyItem->value) || !isset($channelIdItem) || empty($channelIdItem->value)) {
            return $this->sendResponse(
                null,
                ResponseStatusCode::NOT_FOUND,
                'Youtube API key or channel id not found',
                ResponseErrorCode::REQUEST_PARAMS_MISSING
            );
        }

        $videos = $this->fetchChannelVideos($channelIdItem->value, $apiKeyItem->value);

        foreach ($videos as $video) {
            $videoItem = VideoItem::where('foreign_id', $video['videoId'])->first();

            VideoItem::updateOrCreate(
                [
                    'foreign_id' => $video['videoId'],
                ],
                [
                    'title' => '{ "en": "' . $video['title'] . '", "fr": "' . $video['title'] . '" }',
                    'description' => '{ "en": "' . $video['description'] . '", "fr": "' . $video['description'] . '" }',
                    'path' => 'https://www.youtube.com/embed/' . $video['videoId'] . '?autoplay=1&rel=0',
                    'thumbnail' => $video['thumbnail'],
                    'source' => VideoItemSource::YOUTUBE->value,
                    'is_visible' => true,
                    'publisher_id' => $videoItem ? $videoItem->publisher_id : ($request->user() ? $request->user()->id : null),
                    'published_at' => $video['publishedAt'],
                ]
            );
        }

        VideoSetting::updateOrCreate(
            [
                'key' => 'youtubeLastChannelVideosUpdate',
            ],
            [
                'value' => Carbon::now()->format('Y-m-d H:i:s'),
            ]
        );

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Youtube channel videos updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VideoItem $videoItem)
    {
        $videoItem->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'VideoItem deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(VideoItem $videoItem)
    {
        $videoItem->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'VideoItem deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(VideoItem $videoItem)
    {
        $videoItem->restore();

        return $this->sendResponse(
            new VideoItemResource($videoItem),
            ResponseStatusCode::OK,
            'VideoItem restored successfully'
        );
    }

    private function extractYoutubeVideoId($url)
    {
        // Regular expression for YouTube URL (works for both formats)
        $pattern = '%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i';

        // Try to match the video ID using the regex pattern
        if (preg_match($pattern, $url, $matches)) {
            return $matches[1]; // Returns the video ID (e.g. "5HSf4WUyKyc")
        }

        return null; // Return null if the URL doesn't match
    }

    private function fetchYoutubeVideoInfo($videoId, $apiKey)
    {
        $url = "https://www.googleapis.com/youtube/v3/videos";

        $params = [
            'id' => $videoId,
            'key' => $apiKey,
            'part' => 'snippet',
        ];

        $response = Http::get($url, $params);

        if ($response->successful()) {
            return $response->json();
        } else {
            return null;
        }
    }

    private function fetchChannelVideos($channelId, $apiKey)
    {
        $url = 'https://www.googleapis.com/youtube/v3/search';
        $videos = [];
        $nextPageToken = null;

        do {
            $params = [
                'key' => $apiKey,
                'channelId' => $channelId,
                'part' => 'snippet',
                'order' => 'date',
                'maxResults' => 50,
                'pageToken' => $nextPageToken,
                'type' => 'video'
            ];

            $response = Http::get($url, $params);

            if ($response->successful()) {
                $data = $response->json();
                $nextPageToken = $data['nextPageToken'] ?? null;

                foreach ($data['items'] as $item) {
                    $snippet = $item['snippet'];
                    $videos[] = [
                        'title' => $snippet['title'],
                        'description' => $snippet['description'],
                        'publishedAt' => Carbon::parse($snippet['publishedAt'])->format('Y-m-d H:i:s'),
                        'thumbnail' => $this->getThumbnail($snippet['thumbnails']),
                        'videoId' => $item['id']['videoId']
                    ];
                }
            } else {
                return $videos;
            }
        } while ($nextPageToken);

        return $videos;
    }

    private function getThumbnail($thumbnails)
    {
        if (isset($thumbnails['maxres'])) {
            return $thumbnails['maxres']['url'];
        } elseif (isset($thumbnails['high'])) {
            return $thumbnails['high']['url'];
        } elseif (isset($thumbnails['medium'])) {
            return $thumbnails['medium']['url'];
        } elseif (isset($thumbnails['default'])) {
            return $thumbnails['default']['url'];
        }

        return null;
    }
}
