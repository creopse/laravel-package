<?php

namespace Creopse\Creopse\Http\Controllers\News;

use Creopse\Creopse\Enums\NewsArticleStatus;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\News\TagRequest;
use Creopse\Creopse\Http\Resources\News\ArticleCollection;
use Creopse\Creopse\Http\Resources\News\TagResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsTag;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(TagResource::collection(NewsTag::all()->loadCount(['articles'])));
    }

    /**
     * Display a listing of the resource.
     */
    public function indexWithArticles()
    {
        return $this->sendResponse(TagResource::collection(NewsTag::all()->load(['articles'])->loadCount(['articles'])));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TagRequest $request)
    {
        $request->validated();

        $newsTag = NewsTag::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'is_active' => $request->input('is_active'),
        ]);

        return $this->sendResponse(
            new TagResource($newsTag->loadCount(['articles'])),
            ResponseStatusCode::CREATED,
            'NewsTag created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsTag $newsTag)
    {
        return $this->sendResponse(new TagResource($newsTag->loadCount(['articles'])));
    }

    /**
     * Display the specified resource.
     */
    public function showWithArticles(NewsTag $newsTag)
    {
        return $this->sendResponse(new TagResource($newsTag->load(['articles'])->loadCount(['articles'])));
    }

    /**
     * Show the articles of a tag.
     *
     * @param NewsTag $newsTag The tag to show the articles of.
     * @return Inertia\Response The rendered TagArticles view.
     */
    public function showTagArticles(Request $request, NewsTag $newsTag)
    {
        $pageSize = $request->query('pageSize', 12);

        $newsArticles = NewsArticle::where('status', NewsArticleStatus::PUBLISHED->value)
            ->where('published_at', '<=', Carbon::now())
            ->whereHas('tags', function ($query) use ($newsTag) {
                $query->where('id', $newsTag->id);
            })
            ->orderBy('published_at', 'desc');

        $newsArticles->with('tags');

        $newsArticles = $newsArticles->paginate($pageSize);

        $appNameItem = AppInformation::where('key', 'name')->first();
        $appName = $appNameItem ? $appNameItem->value : config('app.name');

        return Inertia::render('list/TagArticles', [
            'tag' => new TagResource(
                $newsTag
            ),
            'paginatedArticles' => new ArticleCollection($newsArticles),
            'meta' => [
                'title' => Functions::trans($newsTag->name) . ' - ' . Lang::get('News Tag') . ' - ' . $appName,
                'description' => Functions::trans($newsTag->description),
                'url' => $request->url(),
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsTag $newsTag)
    {
        $newsTag->update($request->all());

        return $this->sendResponse(
            new TagResource($newsTag->loadCount(['articles'])),
            ResponseStatusCode::OK,
            'NewsTag updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsTag $newsTag)
    {
        $newsTag->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsTag deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(NewsTag $newsTag)
    {
        $newsTag->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsTag deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(NewsTag $newsTag)
    {
        $newsTag->restore();

        return $this->sendResponse(
            new TagResource($newsTag->loadCount(['articles'])),
            ResponseStatusCode::OK,
            'NewsTag restored successfully'
        );
    }
}
