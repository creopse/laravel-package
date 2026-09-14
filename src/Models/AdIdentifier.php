<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AdIdentifier extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'params' => 'array',
        'reusable' => 'boolean',
    ];

    protected $keyType = 'string';

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected static function booted()
    {
        static::addGlobalScope('adsCount', function (Builder $builder) {
            $builder->withCount('ads');
        });
    }

    /**
     * @return HasMany<Ad, $this>
     */
    public function ads(): HasMany
    {
        return $this->hasMany(Ad::class, 'pid', 'id');
    }
}
