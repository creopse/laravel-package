<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Casts\Json;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ContentModelItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['relatedItems', 'createdByUser'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'content_model_data' => Json::class,
    ];

    /**
     * @return BelongsTo<ContentModel, $this>
     */
    public function contentModel(): BelongsTo
    {
        return $this->belongsTo(ContentModel::class, 'content_model_id');
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function createdByUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // Define the relationship to link items
    /**
     * @return BelongsToMany<self, $this>
     */
    public function relatedItems(): BelongsToMany
    {
        return $this->belongsToMany(
            self::class,
            'content_model_item_relationships',
            'item_id',
            'related_item_id'
        );
    }

    // Optionally define reverse relation (related to this item)
    /**
     * @return BelongsToMany<self, $this>
     */
    public function relatedTo(): BelongsToMany
    {
        return $this->belongsToMany(
            self::class,
            'content_model_item_relationships',
            'related_item_id',
            'item_id'
        );
    }
}
