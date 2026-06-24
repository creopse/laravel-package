<?php

namespace App\Models;

use Creopse\Creopse\Models\User;
use Database\Factories\SubscriberProfileFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class SubscriberProfile extends Model
{
    /** @use HasFactory<SubscriberProfileFactory> */
    use HasFactory;

    protected $guarded = [];

    /** @return MorphOne<User, $this> */
    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'profile');
    }
}
