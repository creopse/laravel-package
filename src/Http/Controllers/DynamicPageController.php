<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\NewsArticleStatus;
use Creopse\Creopse\Enums\PermalinkContentType;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Resources\Content\ContentModelItemResource;
use Creopse\Creopse\Http\Resources\News\ArticleCollection;
use Creopse\Creopse\Http\Resources\News\ArticleResource;
use Creopse\Creopse\Http\Resources\News\CategoryResource;
use Creopse\Creopse\Http\Resources\News\TagResource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\ContentModelItem;
use Creopse\Creopse\Models\MenuItem;
use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsCategory;
use Creopse\Creopse\Models\NewsTag;
use Creopse\Creopse\Models\Permalink;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DynamicPageController extends Controller
{
    public function getPage(Request $request)
    {
        $currentPath = $request->route()->uri() === '/' ? $request->route()->uri() : '/' . $request->route()->uri();

        $menuItem = MenuItem::where('path', $currentPath)->first();

        if ($menuItem) {
            return Inertia::render('Container', []);
        }

        return $this->return404($request);
    }

    public function getContentPage(Request $request, mixed $id)
    {
        $currentPath = $request->route()->uri() === '/' ? $request->route()->uri() : '/' . $request->route()->uri();

        $prefix = rtrim($currentPath, '/{id}');

        $permalink = Permalink::where('path_prefix', $prefix)->first();

        if ($permalink && !is_null($permalink->page_id)) {
            $appNameItem = AppInformation::where('key', 'name')->first();
            $appName = $appNameItem ? $appNameItem->value : config('app.name');

            switch ($permalink->content_type) {
                case PermalinkContentType::NEWS_ARTICLE->value:
                    $newsArticle = NewsArticle::where($permalink->content_param, $id)->first();

                    if ($newsArticle) {
                        return Inertia::render('Container', [
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
                    } else {
                        return $this->return404($request);
                    }
                    break;

                case PermalinkContentType::NEWS_CATEGORY->value:
                    $newsCategory = NewsCategory::where($permalink->content_param, $id)->first();

                    if ($newsCategory) {
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

                        $newsArticles = $newsArticles->paginate(12);

                        return Inertia::render('Container', [
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
                    } else {
                        return $this->return404($request);
                    }
                    break;

                case PermalinkContentType::NEWS_TAG->value:
                    $newsTag = NewsTag::where($permalink->content_param, $id)->first();

                    if ($newsTag) {
                        $newsArticles = NewsArticle::where('status', NewsArticleStatus::PUBLISHED->value)
                            ->where('published_at', '<=', Carbon::now())
                            ->whereHas('tags', function ($query) use ($newsTag) {
                                $query->where('id', $newsTag->id);
                            })
                            ->orderBy('published_at', 'desc');

                        $newsArticles->with('tags');

                        $newsArticles = $newsArticles->paginate(12);

                        return Inertia::render('Container', [
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
                    } else {
                        return $this->return404($request);
                    }
                    break;

                case PermalinkContentType::CONTENT_MODEL->value:
                    $contentModelItem = ContentModelItem::where($permalink->content_param, $id)->first();

                    if ($contentModelItem) {
                        return Inertia::render('Container', [
                            'contentModelItem' => new ContentModelItemResource(
                                $contentModelItem
                            ),
                        ]);
                    } else {
                        return $this->return404($request);
                    }
                    break;

                default:
                    return $this->return404($request);
            }
        }

        return $this->return404($request);
    }

    private function return404(Request $request)
    {
        $appInformation = AppInformation::all();

        $nameItem = $appInformation->firstWhere('key', 'name');
        $name = $nameItem ? $nameItem->value : config('app.name');

        $iconItem = $appInformation->firstWhere('key', 'icon');
        $icon = $iconItem && $iconItem->value ? (Str::isUrl($iconItem->value, ['http', 'https']) ? $iconItem->value : Storage::disk('public')->url($iconItem->value)) : asset('assets/images/creopse/icon.svg');

        return Inertia::render('NotFound', [
            'meta' => [
                'title' => Lang::get('Error 404 - Page not found') . ' - ' . $name,
                'description' => Lang::get('Oops! The page you are looking for does not exist. It might have been moved or deleted.'),
                'url' => $request->url(),
                'image' => $icon,
                'favicon' => $icon
            ]
        ]);
    }
}
