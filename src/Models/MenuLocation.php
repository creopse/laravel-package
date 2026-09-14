<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MenuLocation extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * @return HasOne<Menu, $this>
     */
    public function menu(): HasOne
    {
        return $this->hasOne(Menu::class, 'menu_location_id');
    }
}
