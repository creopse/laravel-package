<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Database\Factories\AdminProfileFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class AdminProfile extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * @return MorphOne<User, $this>
     */
    public function user(): MorphOne
    {
        return $this->morphOne('Creopse\Creopse\Models\User', 'profile');
    }

    protected static function newFactory()
    {
        return AdminProfileFactory::new();
    }
}
