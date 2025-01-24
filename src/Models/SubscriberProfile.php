<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Database\Factories\SubscriberProfileFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriberProfile extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->morphOne('Creopse\Creopse\Models\User', 'profile');
    }

    protected static function newFactory()
    {
        return SubscriberProfileFactory::new();
    }
}
