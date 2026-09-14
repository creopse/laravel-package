<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MenuItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['group', 'type'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'is_visible' => 'boolean',
    ];

    /**
     * Get image url from menu item image path.
     */
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return Str::isUrl($this->image, ['http', 'https']) ? $this->image : Storage::disk('public')->url($this->image);
        }

        return null;
    }

    /**
     * @return BelongsTo<Menu, $this>
     */
    public function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }

    /**
     * @return BelongsTo<Page, $this>
     */
    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class, 'page_id');
    }

    /**
     * @return BelongsTo<MenuItemType, $this>
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(MenuItemType::class, 'menu_item_type_id');
    }

    /**
     * @return BelongsTo<MenuItemGroup, $this>
     */
    public function group(): BelongsTo
    {
        return $this->belongsTo(MenuItemGroup::class, 'menu_item_group_id');
    }

    /**
     * @return BelongsTo<static, $this>
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(static::class, 'parent_id');
    }

    /**
     * @return HasMany<static, $this>
     */
    public function subMenuItems(): HasMany
    {
        return $this->hasMany(static::class, 'parent_id');
    }
}
