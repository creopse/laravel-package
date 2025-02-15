<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;

class UserPlace extends Model
{
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
