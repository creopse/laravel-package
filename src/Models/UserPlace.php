<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int|null $user_id
 * @property-read User|null $user
 */
class UserPlace extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
