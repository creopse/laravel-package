<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int|null $user_id
 * @property-read User|null $user
 */
class UserDevice extends Model
{
    protected $guarded = [];

    protected $casts = [
        'data' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
