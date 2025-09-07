<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Casts\Json;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PageSection extends Pivot
{
    protected $table = 'page_section';

    protected $guarded = [];

    protected $foreignKey = 'section_id';
    protected $relatedKey = 'page_id';

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'data' => Json::class,
        'settings' => Json::class,
    ];

    public function dataSourcePage()
    {
        return $this->belongsTo(Page::class, 'data_source_page_id');
    }
}
