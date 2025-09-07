<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Casts\Json;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Page extends Model
{
    use HasFactory, HasSlug;

    protected $guarded = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'sections_data' => Json::class,
        'sections_order' => 'array',
        'sections_disabled' => 'array',
    ];

    /**
     * The relationships that should always be loaded.
     *
     * @var array<int, string>
     */
    protected $with = ['sections'];

    public function sections()
    {
        return $this->belongsToMany(Section::class)
            ->using(PageSection::class)
            ->withPivot(['data_source_page_id', 'link_id', 'data', 'settings'])
            ->withTimestamps();
    }

    public function permalinks()
    {
        return $this->hasMany(Permalink::class, 'page_id');
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
}
