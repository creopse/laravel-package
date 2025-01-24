<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Casts\Json;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Support\Str;

class ContentModel extends Model
{
    use HasFactory, HasSlug;

    protected $guarded = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'data_structure' => Json::class,
        'has_permalink' => 'boolean',
    ];

    public function items()
    {
        return $this->hasMany(ContentModelItem::class, 'content_model_id');
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
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }
}
