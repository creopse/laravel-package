<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
