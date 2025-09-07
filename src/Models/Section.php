<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Casts\Json;
use Creopse\Creopse\Observers\DataChangeObserver;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Section extends Model
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
        'settings_structure' => Json::class,
    ];

    public function pages()
    {
        return $this->belongsToMany(Page::class)
            ->using(PageSection::class)
            ->withPivot(['data_source_page_id', 'link_id', 'data', 'settings'])
            ->withTimestamps();
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

    public function getRouteKeyName()
    {
        return 'slug'; // Use 'slug' attribute for route binding
    }

    protected static function booted()
    {
        static::observe(DataChangeObserver::class);
    }
}
