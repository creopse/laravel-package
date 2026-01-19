<?php

namespace Creopse\Creopse\Http\Controllers\News;

use Creopse\Creopse\Enums\NewsArticleStatus;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\News\ArticleRequest;
use Creopse\Creopse\Http\Resources\News\ArticleCollection;
use Creopse\Creopse\Http\Resources\News\ArticleResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsTag;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $categories = $request->query('categories');
        $isHeadline = $request->query('isHeadline');
        $isVisible = $request->query('isVisible');
        $inRandomOrder = $request->query('inRandomOrder');
        $months = $request->query('months');
        $status = $request->query('status');
        $query = $request->query('query');
        $tags = $request->query('tags');

        if ($pageSize) {

            $newsArticles = NewsArticle::query();

            if ($query) {
                $newsArticles = $newsArticles
                    ->where('title', 'like', '%' . $query . '%')
                    ->orWhere('summary', 'like', '%' . $query . '%')
                    ->orWhere('content', 'like', '%' . $query . '%');
            }

            if ($status && $status > 0) {
                if ($status == 10) {
                    $user = Auth::user();
                    $newsArticles = $newsArticles->where('author_id', $user->id);
                } else {
                    $newsArticles = $newsArticles->where('status', $status);

                    if ($status == NewsArticleStatus::PUBLISHED->value && $isVisible) {
                        $newsArticles = $newsArticles->where(function ($query) {
                            $query->whereNull('published_at')->orWhere('published_at', '<=', Carbon::now());
                        });
                    }
                }
            }

            if ($categories) {
                $newsArticles = $newsArticles->whereHas('categories', function ($query) use ($categories) {
                    $query->whereIn('id', $categories);
                });
            }

            if ($tags) {
                $newsArticles = $newsArticles->whereHas('tags', function ($query) use ($tags) {
                    $query->whereIn('id', $tags);
                });
            }

            if ($months) {
                $newsArticles = $newsArticles->where(function ($query) use ($months) {
                    foreach ($months as $month) {
                        list($year, $month) = explode('-', $month);
                        $query->orWhereYear('created_at', $year)
                            ->whereMonth('created_at', $month);
                    }
                });
            }

            if (!is_null($isHeadline)) {
                $newsArticles = $newsArticles->where('is_headline', filter_var($isHeadline, FILTER_VALIDATE_BOOLEAN));
            }

            $newsArticles->with(['categories:id,name,slug', 'tags:id,name,slug']);

            if ($inRandomOrder) {
                $newsArticles = $newsArticles->inRandomOrder()->paginate($pageSize);
            } else {
                $newsArticles = $newsArticles->latest()->paginate($pageSize);
            }

            return $this->sendResponse([
                'articles' => new ArticleCollection($newsArticles),
                'meta' => [
                    'links' => [
                        'first' => $newsArticles->url(1),
                        'last' => $newsArticles->url($newsArticles->lastPage()),
                        'prev' => $newsArticles->previousPageUrl(),
                        'next' => $newsArticles->nextPageUrl(),
                    ],
                    'currentPage' => $newsArticles->currentPage(),
                    'perPage' => $newsArticles->perPage(),
                    'total' => $newsArticles->total(),
                    'lastPage' => $newsArticles->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(ArticleResource::collection(NewsArticle::all()->load(['categories:id,name,slug', 'tags:id,name,slug'])));
    }

    /**
     * Display a random listing of the resource.
     */
    public function indexRandomList(Request $request, ?int $limit = null)
    {
        if (is_null($limit)) {
            return $this->sendResponse(
                ArticleResource::collection(
                    NewsArticle::inRandomOrder()
                        ->where('status', NewsArticleStatus::PUBLISHED->value)
                        ->where(function ($q) {
                            $q->whereNull('published_at')->orWhere('published_at', '<=', Carbon::now());
                        })
                        ->get()
                        ->load(['categories:id,name,slug', 'tags:id,name,slug'])
                )
            );
        } else {
            return $this->sendResponse(
                ArticleResource::collection(
                    NewsArticle::inRandomOrder()
                        ->where('status', NewsArticleStatus::PUBLISHED->value)
                        ->where(function ($q) {
                            $q->whereNull('published_at')->orWhere('published_at', '<=', Carbon::now());
                        })
                        ->take($limit)
                        ->get()
                        ->load(['categories:id,name,slug', 'tags:id,name,slug'])
                )
            );
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function indexWithCategories()
    {
        return $this->sendResponse(ArticleResource::collection(NewsArticle::all()->load(['categories'])));
    }

    /**
     * Display a listing of the resource.
     */
    public function indexWithTags()
    {
        return $this->sendResponse(ArticleResource::collection(NewsArticle::all()->load(['tags'])));
    }

    /**
     * Display a listing of the resource.
     */
    public function indexHeadlines(Request $request, ?int $limit = null)
    {
        if (is_null($limit)) {
            return $this->sendResponse(
                ArticleResource::collection(
                    NewsArticle::where('is_headline', true)->orderBy('created_at', 'desc')->get()->load(['categories:id,name,slug', 'tags:id,name,slug'])
                )
            );
        } else {
            return $this->sendResponse(
                ArticleResource::collection(
                    NewsArticle::where('is_headline', true)->take($limit)->orderBy('created_at', 'desc')->get()->load(['categories:id,name,slug', 'tags:id,name,slug'])
                )
            );
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        $request->validated();

        $newsArticle = NewsArticle::create([
            'title' => $request->input('title'),
            'summary' => $request->input('summary'),
            'content' => $request->input('content'),
            'featured_image' => $request->input('featured_image'),
            'legend' => $request->input('legend'),
            'allow_comments' => $request->input('allow_comments'),
            'is_headline' => $request->input('is_headline'),
            'status' => $request->input('status'),
            'published_at' => $request->input('published_at'),
            'publisher_id' => $request->input('publisher_id'),
            'author_id' => $request->input('author_id'),
        ]);

        if ($request->has('tags')) {
            $tags = $request->input('tags');
            $tagIds = [];

            foreach ($tags as $tag) {
                if (is_numeric($tag)) {
                    $tagIds[] = $tag;
                } else {
                    $newTag = NewsTag::firstOrCreate([
                        'name' => '{ "en": "' . $tag . '", "fr": "' . $tag . '" }'
                    ]);
                    $tagIds[] = $newTag->id;
                }
            }

            $newsArticle->tags()->sync($tagIds);
        }

        if ($request->has('categories')) {
            $newsArticle->categories()->sync($request->input('categories'));
        }

        return $this->sendResponse(
            new ArticleResource($newsArticle->load(['categories', 'tags'])),
            ResponseStatusCode::CREATED,
            'NewsArticle created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsArticle $newsArticle)
    {
        return $this->sendResponse(new ArticleResource($newsArticle->load(['categories', 'tags'])));
    }

    /**
     * Display the list of specified resources.
     */
    public function showList(Request $request)
    {
        $newsArticles = NewsArticle::whereIn('id', $request->input('ids') ?? [])->get();

        return $this->sendResponse(ArticleResource::collection($newsArticles->load(['categories', 'tags'])));
    }

    /**
     * Display the search result for a given query.
     *
     * @param Request $request The HTTP request object.
     * @param string $query The search query.
     * @return \Inertia\Response The rendered search articles page.
     */
    public function showSearchResult(Request $request, string $query)
    {
        $newsArticles = NewsArticle::where('status', NewsArticleStatus::PUBLISHED->value)
            ->where(function ($q) {
                $q->whereNull('published_at')->orWhere('published_at', '<=', Carbon::now());
            })
            ->where(function ($q) use ($query) {
                $q->where('title', 'like', '%' . $query . '%')
                    ->orWhere('summary', 'like', '%' . $query . '%')
                    ->orWhere('content', 'like', '%' . $query . '%');
            })
            ->orderBy('published_at', 'desc')
            ->get();

        return Inertia::render('list/SearchArticles', [
            'articles' => ArticleResource::collection($newsArticles->load(['categories', 'tags'])),
            'query' => $query,
            'meta' => [
                'title' => Lang::get('Search') . ' - «' . $query . '»',
                'description' => '',
                'url' => $request->url(),
            ]
        ]);
    }

    /**
     * Display the search result for a given query.
     *
     * @param Request $request The HTTP request object.
     * @param string $query The search query.
     * @return \Inertia\Response The rendered search articles page.
     */
    public function searchArticles(Request $request, string $query = '')
    {
        $newsArticles = NewsArticle::where('title', 'like', '%' . $query . '%')->get();

        return $this->sendResponse(ArticleResource::collection($newsArticles->load(['categories', 'tags'])));
    }

    /**
     * Show the articles page.
     *
     * @return Inertia\Response The rendered articles page.
     */
    public function showArticles(Request $request)
    {
        $pageSize = $request->query('pageSize', 12);
        $categories = $request->query('categories');
        $tags = $request->query('tags');

        $newsArticles = NewsArticle::query();

        $newsArticles
            ->where('status', NewsArticleStatus::PUBLISHED->value)
            ->where(function ($q) {
                $q->whereNull('published_at')->orWhere('published_at', '<=', Carbon::now());
            });

        if ($categories) {
            $newsArticles->whereHas('categories', function ($query) use ($categories) {
                $query->whereIn('id', $categories);
            });
        }

        if ($tags) {
            $newsArticles->whereHas('tags', function ($query) use ($tags) {
                $query->whereIn('id', $tags);
            });
        }

        $newsArticles->orderBy('published_at', 'desc');

        $newsArticles->with(['categories', 'tags']);

        $newsArticles = $newsArticles->paginate($pageSize);

        return Inertia::render('list/Articles', [
            'paginatedArticles' => new ArticleCollection($newsArticles),
            'filters' => [
                'categories' => $categories,
                'tags' => $tags,
            ],
            'meta' => [
                'title' => Lang::get('Blog'),
                'description' => Lang::get('Articles'),
                'url' => $request->url(),
            ]
        ]);
    }

    /**
     * Retrieves a list of months in descending order based on the creation date of news articles.
     *
     * @param Request $request The HTTP request object.
     * @return Response The HTTP response object containing the list of months.
     */
    public function showMonthsList(Request $request)
    {
        $months = NewsArticle::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month')
            ->groupBy('month')
            ->orderBy('month', 'desc')
            ->pluck('month');

        return $this->sendResponse($months);
    }

    /**
     * Show the details of a article.
     *
     * @param NewsArticle $newsArticle The article to show the details of.
     * @return Inertia\Response The rendered article details page.
     */
    public function showArticleDetails(Request $request, NewsArticle $newsArticle)
    {
        $appNameItem = AppInformation::where('key', 'name')->first();
        $appName = $appNameItem ? $appNameItem->value : config('app.name');

        return Inertia::render('details/Article', [
            'article' =>
            $newsArticle->status === NewsArticleStatus::PUBLISHED->value && (is_null($newsArticle->published_at) || $newsArticle->published_at <= Carbon::now())
                ? (new ArticleResource(
                    $newsArticle
                        ->load(['categories', 'tags', 'comments'])
                        ->loadCount(['categories', 'tags', 'comments'])
                ))
                : null,
            'meta' => [
                'title' => Functions::trans($newsArticle->title) . ' - ' . $appName,
                'description' => Functions::trans($newsArticle->summary),
                'url' => $request->url(),
                'image' => Functions::replaceEmptySpaces($newsArticle->featured_image_url) ?? asset('assets/images/creopse/icon.svg'),
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsArticle $newsArticle)
    {
        $newsArticle->update($request->except(['tags', 'categories', 'slug']));

        if ($request->has('tags')) {
            $tags = $request->input('tags');
            $tagIds = [];

            foreach ($tags as $tag) {
                if (is_numeric($tag)) {
                    $tagIds[] = $tag;
                } else {
                    $newTag = NewsTag::firstOrCreate([
                        'name' => '{ "en": "' . $tag . '", "fr": "' . $tag . '" }'
                    ]);
                    $tagIds[] = $newTag->id;
                }
            }

            $newsArticle->tags()->sync($tagIds);
        }

        if ($request->has('categories')) {
            $newsArticle->categories()->sync($request->input('categories'));
        }

        if ($request->has('slug')) {
            if ($newsArticle->slug !== $request->input('slug')) {
                $newsArticle->slug = $request->input('slug');
                $newsArticle->save();
            }
        }

        return $this->sendResponse(
            new ArticleResource($newsArticle->load(['categories', 'tags'])),
            ResponseStatusCode::OK,
            'NewsArticle updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsArticle $newsArticle)
    {
        $newsArticle->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsArticle deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(NewsArticle $newsArticle)
    {
        $newsArticle->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsArticle deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(NewsArticle $newsArticle)
    {
        $newsArticle->restore();

        return $this->sendResponse(
            new ArticleResource($newsArticle->load(['categories', 'tags'])),
            ResponseStatusCode::OK,
            'NewsArticle restored successfully'
        );
    }

    /**
     * Return a collection of 250 most recent published news articles
     * for RSS feed.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public static function getFeedItems()
    {
        return NewsArticle::where('status', NewsArticleStatus::PUBLISHED->value)
            ->where(function ($q) {
                $q->whereNull('published_at')->orWhere('published_at', '<=', Carbon::now());
            })
            ->orderBy('published_at', 'desc')
            ->take(250)
            ->get()
            ->load(['categories:id,name,slug', 'tags:id,name,slug']);
    }
}
