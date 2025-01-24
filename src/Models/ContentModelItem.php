<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Casts\Json;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentModelItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['relatedItems'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'content_model_data' => Json::class,
    ];

    public function contentModel()
    {
        return $this->belongsTo(ContentModel::class, 'content_model_id');
    }

    // Define the relationship to link items
    public function relatedItems()
    {
        return $this->belongsToMany(
            self::class,
            'content_model_item_relationships',
            'item_id',
            'related_item_id'
        );
    }

    // Optionally define reverse relation (related to this item)
    public function relatedTo()
    {
        return $this->belongsToMany(
            self::class,
            'content_model_item_relationships',
            'related_item_id',
            'item_id'
        );
    }
}
