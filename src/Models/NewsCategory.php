<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Helpers\Functions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Support\Str;

class NewsCategory extends Model
{
    use HasFactory, HasSlug, SoftDeletes;

    protected $guarded = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function articles()
    {
        return $this->belongsToMany(NewsArticle::class);
    }

    public function parent()
    {
        return $this->belongsTo(static::class, 'parent_id');
    }

    public function subCategories()
    {
        return $this->hasMany(static::class, 'parent_id');
    }

    /**
     * Get image url from category image path.
     */
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return Str::isUrl($this->image, ['http', 'https']) ? $this->image : Storage::disk('public')->url($this->image);
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
                return Functions::trans($model->name);
            })
            ->saveSlugsTo('slug');
    }
}
