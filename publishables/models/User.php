<?php

namespace App\Models;

use App\Enums\ProfileType;
use Creopse\Creopse\Models\User as CreopseUser;
use Illuminate\Database\Eloquent\Builder;

/**
 * @property string|null $profile_type
 * @property int|null $profile_id
 * @property SubscriberProfile|null $profile
 */
class User extends CreopseUser
{
    /**
     * Subscriber Profile accessor
     */
    public function getHasSubscriberProfileAttribute(): bool
    {
        return $this->profile_type === ProfileType::SUBSCRIBER->value;
    }

    /**
     * @param  Builder<static>  $builder
     * @return Builder<static>
     */
    public function scopeWhereHasSubscriberProfile(Builder $builder): Builder
    {
        return $builder->where('profile_type', ProfileType::SUBSCRIBER->value);
    }
}
