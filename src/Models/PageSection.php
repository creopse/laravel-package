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

    protected function setKeysForSaveQuery($query)
    {
        $query->where('section_id', $this->getAttribute('section_id'))
            ->where('page_id', $this->getAttribute('page_id'))
            ->where('link_id', $this->getAttribute('link_id'));

        return $query;
    }

    public function dataSourcePage()
    {
        return $this->belongsTo(Page::class, 'data_source_page_id');
    }
}
