<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Http\Resources\UserResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Support\Str;

class NewsArticle extends Model implements Feedable
{
    use HasFactory, HasSlug, SoftDeletes;

    protected $guarded = [];

    protected $with = ['author', 'publisher'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_headline' => 'boolean',
        'allow_comments' => 'boolean',
    ];

    public function categories()
    {
        return $this->belongsToMany(NewsCategory::class);
    }

    public function tags()
    {
        return $this->belongsToMany(NewsTag::class);
    }

    public function comments()
    {
        return $this->hasMany(NewsComment::class, 'article_id');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function getAuthorNameAttribute()
    {
        return $this->author ? $this->author->name : null;
    }

    public function publisher()
    {
        return $this->belongsTo(User::class, 'publisher_id');
    }

    public function getPublisherNameAttribute()
    {
        return $this->publisher ? $this->publisher->name : null;
    }

    /**
     * Get featured image url from article featured image path.
     */
    public function getFeaturedImageUrlAttribute()
    {
        /* if (env('APP_ENV') == 'local' || env('APP_ENV') == 'development') {
            if ($this->foreign_featured_image) return $this->foreign_featured_image;
        } */

        if ($this->featured_image) {
            return Str::isUrl($this->featured_image, ['http', 'https']) ? $this->featured_image : Storage::disk('public')->url($this->featured_image);
        }

        return null;
    }

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom(function ($model) {
                return Functions::trans($model->title);
            })
            ->saveSlugsTo('slug');
    }

    /**
     * Create a new feed item for the current article.
     *
     * @return \Spatie\Feed\FeedItem
     */
    public function toFeedItem(): FeedItem
    {
        $author = new UserResource($this->author);
        return FeedItem::create([
            'id' => $this->id,
            'title' => Functions::trans($this->title),
            'summary' => Functions::trans($this->summary),
            'content' => Functions::trans($this->content),
            'updated' => Carbon::parse($this->published_at ?? $this->updated_at),
            'link' => url('article', $this->slug),
            'authorName' => $author->fullname,
            'categories' => $this->categories->pluck('name')->map(function ($name) {
                return Functions::trans($name);
            })->all(),
            'tags' => $this->tags->pluck('name')->map(function ($name) {
                return Functions::trans($name);
            })
        ]);
    }
}
