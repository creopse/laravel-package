<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuLocation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function menu()
    {
        return $this->hasOne(Menu::class, 'menu_location_id');
    }
}
