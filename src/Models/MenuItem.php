<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }

    public function page()
    {
        return $this->belongsTo(Page::class, 'page_id');
    }

    public function type()
    {
        return $this->belongsTo(MenuItemType::class, 'menu_item_type_id');
    }

    public function group()
    {
        return $this->belongsTo(MenuItemGroup::class, 'menu_item_group_id');
    }

    public function parent()
    {
        return $this->belongsTo(static::class, 'parent_id');
    }

    public function subMenuItems()
    {
        return $this->hasMany(static::class, 'parent_id');
    }
}
