<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'data' => 'array',
    ];

    protected $with = ['location'];

    /**
     * @return HasMany<MenuItem, $this>
     */
    public function items(): HasMany
    {
        return $this->hasMany(MenuItem::class, 'menu_id');
    }

    /**
     * @return BelongsTo<MenuLocation, $this>
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(MenuLocation::class, 'menu_location_id');
    }
}
