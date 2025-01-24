<?php

namespace Creopse\Creopse\Http\Controllers\News;

use Creopse\Creopse\Enums\NewsArticleStatus;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\News\CategoryRequest;
use Creopse\Creopse\Http\Resources\News\ArticleCollection;
use Creopse\Creopse\Http\Resources\News\CategoryResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(CategoryResource::collection(NewsCategory::withCount('articles')->orderBy('position')->get()));
    }

    /**
     * Display a listing of the resource.
     */
    public function indexWithArticles()
    {
        return $this->sendResponse(CategoryResource::collection(NewsCategory::with('articles')->withCount('articles')->orderBy('position')->get()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $request->validated();

        $newsCategory = NewsCategory::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'parent_id' => $request->input('parent_id'),
            'image' => $request->input('image'),
            'is_active' => $request->input('is_active'),
            'color' => $request->input('color'),
            'position' => $request->input('position'),
        ]);

        return $this->sendResponse(
            new CategoryResource($newsCategory->loadCount(['articles'])),
            ResponseStatusCode::CREATED,
            'NewsCategory created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsCategory $newsCategory)
    {
        return $this->sendResponse(new CategoryResource($newsCategory->loadCount(['articles'])));
    }

    /**
     * Display the specified resource.
     */
    public function showWithArticles(NewsCategory $newsCategory)
    {
        return $this->sendResponse(new CategoryResource($newsCategory->load(['articles'])->loadCount(['articles'])));
    }

    /**
     * Show the articles of a category.
     *
     * @param NewsCategory $newsCategory The category to show the articles of.
     * @return Inertia\Response The rendered CategoryArticles view.
     */
    public function showCategoryArticles(Request $request, NewsCategory $newsCategory)
    {
        $pageSize = $request->query('pageSize', 12);

        $newsCategoryResource = new CategoryResource($newsCategory);

        $newsCategories = $newsCategoryResource->subCategories->pluck('id');
        $newsCategories->push($newsCategory->id);

        $newsArticles = NewsArticle::where('status', NewsArticleStatus::PUBLISHED->value)
            ->where('published_at', '<=', Carbon::now())
            ->whereHas('categories', function ($query) use ($newsCategories) {
                $query->whereIn('id', $newsCategories);
            })
            ->orderBy('published_at', 'desc');

        $newsArticles->with('categories');

        $newsArticles = $newsArticles->paginate($pageSize);

        $appNameItem = AppInformation::where('key', 'name')->first();
        $appName = $appNameItem ? $appNameItem->value : config('app.name');

        return Inertia::render('list/CategoryArticles', [
            'category' => new CategoryResource(
                $newsCategory
            ),
            'paginatedArticles' => new ArticleCollection($newsArticles),
            'meta' => [
                'title' => Functions::trans($newsCategory->name) . ' - ' . Lang::get('Category') . ' - ' . $appName,
                'description' => Functions::trans($newsCategory->description),
                'url' => $request->url(),
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsCategory $newsCategory)
    {
        $newsCategory->update($request->all());

        return $this->sendResponse(
            new CategoryResource($newsCategory->loadCount(['articles'])),
            ResponseStatusCode::OK,
            'NewsCategory updated successfully'
        );
    }

    /**
     * Update the position of news categories based on the given order.
     */
    public function updatePosition(Request $request)
    {
        $items = $request->input('items');

        foreach ($items as $index => $item) {
            NewsCategory::where('id', $item['id'])->update([
                'position' => $index,
            ]);
        }

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsCategory position updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsCategory $newsCategory)
    {
        $newsCategory->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsCategory deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(NewsCategory $newsCategory)
    {
        $newsCategory->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsCategory deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(NewsCategory $newsCategory)
    {
        $newsCategory->restore();

        return $this->sendResponse(
            new CategoryResource($newsCategory->loadCount(['articles'])),
            ResponseStatusCode::OK,
            'NewsCategory restored successfully'
        );
    }
}
