<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int|null $user_id
 * @property-read User|null $user
 */
class UserSession extends Model
{
    protected $guarded = [];

    protected $casts = [
        'location_data' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
