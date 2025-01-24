<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['location'];

    public function items()
    {
        return $this->hasMany(MenuItem::class, 'menu_id');
    }

    public function location()
    {
        return $this->belongsTo(MenuLocation::class, 'menu_location_id');
    }
}
