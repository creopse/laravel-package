<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class VideoItem extends Model
{
    use HasFactory, HasSlug, SoftDeletes;

    protected $guarded = [];

    protected $with = ['publisher', 'categories:id,name,slug'];

    protected $casts = [
        'is_visible' => 'boolean',
        'user_metadata' => 'array',
    ];

    /**
     * @return BelongsToMany<VideoCategory, $this>
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(VideoCategory::class);
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function publisher(): BelongsTo
    {
        return $this->belongsTo(User::class, 'publisher_id');
    }

    public function getPublisherNameAttribute()
    {
        return $this->publisher ? $this->publisher->name : null;
    }

    /**
     * Get thumbnail url from video thumbnail path.
     */
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return Str::isUrl($this->thumbnail, ['http', 'https']) ? $this->thumbnail : Storage::disk('public')->url($this->thumbnail);
        }

        return null;
    }

    /**
     * Get url from video path.
     */
    public function getUrlAttribute()
    {
        if ($this->path) {
            return Str::isUrl($this->path, ['http', 'https']) ? $this->path : Storage::disk('public')->url($this->path);
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
                return Str::limit(Functions::trans($model->title), 240, '');
            })
            ->saveSlugsTo('slug');
    }
}
