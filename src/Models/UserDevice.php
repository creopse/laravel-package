<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;

class UserDevice extends Model
{
    protected $guarded = [];
    protected $casts = [
        'data' => 'array',
        'is_active' => 'boolean',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
