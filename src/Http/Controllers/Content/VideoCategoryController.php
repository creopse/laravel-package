<?php

namespace Creopse\Creopse\Http\Controllers\Content;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Requests\Content\VideoCategoryRequest;
use Creopse\Creopse\Http\Resources\Content\VideoCategoryResource;
use Creopse\Creopse\Models\VideoCategory;
use Illuminate\Http\Request;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Resources\Content\VideoItemResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\VideoItem;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class VideoCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(VideoCategoryResource::collection(VideoCategory::withCount('items')->orderBy('position')->get()));
    }

    /**
     * Display a listing of the resource.
     */
    public function indexWithItems()
    {
        return $this->sendResponse(VideoCategoryResource::collection(VideoCategory::with('items')->withCount('items')->orderBy('position')->get()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VideoCategoryRequest $request)
    {
        $request->validated();

        $videoCategory = VideoCategory::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'parent_id' => $request->input('parent_id'),
            'image' => $request->input('image'),
            'is_active' => $request->input('is_active'),
            'color' => $request->input('color'),
            'position' => $request->input('position'),
        ]);

        return $this->sendResponse(
            new VideoCategoryResource($videoCategory->loadCount(['items'])),
            ResponseStatusCode::CREATED,
            'VideoCategory created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(VideoCategory $videoCategory)
    {
        return $this->sendResponse(new VideoCategoryResource($videoCategory->loadCount(['items'])));
    }

    /**
     * Display the specified resource.
     */
    public function showWithItems(VideoCategory $videoCategory)
    {
        return $this->sendResponse(new VideoCategoryResource($videoCategory->load(['items'])->loadCount(['items'])));
    }

    /**
     * Show the items of a category.
     *
     * @param VideoCategory $videoCategory The category to show the items of.
     * @return Inertia\Response The rendered CategoryItems view.
     */
    public function showCategoryItems(Request $request, VideoCategory $videoCategory)
    {
        $pageSize = $request->query('pageSize', 12);

        $videoCategoryResource = new VideoCategoryResource($videoCategory);

        $videoCategories = $videoCategoryResource->subCategories->pluck('id');
        $videoCategories->push($videoCategory->id);

        $videoItems = VideoItem::where('visible', true)
            ->whereHas('categories', function ($query) use ($videoCategories) {
                $query->whereIn('id', $videoCategories);
            })
            ->orderBy('published_at', 'desc');

        $videoItems->with('categories');

        $videoItems = $videoItems->paginate($pageSize);

        $appNameItem = AppInformation::where('key', 'name')->first();
        $appName = $appNameItem ? $appNameItem->value : config('app.name');

        return Inertia::render('list/CategoryVideoItems', [
            'category' => new VideoCategoryResource(
                $videoCategory
            ),
            'paginatedItems' => VideoItemResource::collection($videoItems),
            'meta' => [
                'title' => Functions::trans($videoCategory->name) . ' - ' . Lang::get('Category') . ' - ' . $appName,
                'description' => Functions::trans($videoCategory->description),
                'url' => $request->url(),
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VideoCategory $videoCategory)
    {
        $videoCategory->update($request->all());

        return $this->sendResponse(
            new VideoCategoryResource($videoCategory->loadCount(['items'])),
            ResponseStatusCode::OK,
            'VideoCategory updated successfully'
        );
    }

    /**
     * Update the position of news categories based on the given order.
     */
    public function updatePosition(Request $request)
    {
        $items = $request->input('items');

        foreach ($items as $index => $item) {
            VideoCategory::where('id', $item['id'])->update([
                'position' => $index,
            ]);
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'VideoCategory position updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VideoCategory $videoCategory)
    {
        $videoCategory->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'VideoCategory deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(VideoCategory $videoCategory)
    {
        $videoCategory->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'VideoCategory deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(VideoCategory $videoCategory)
    {
        $videoCategory->restore();

        return $this->sendResponse(
            new VideoCategoryResource($videoCategory->loadCount(['items'])),
            ResponseStatusCode::OK,
            'VideoCategory restored successfully'
        );
    }
}
