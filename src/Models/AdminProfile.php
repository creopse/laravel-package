<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Database\Factories\AdminProfileFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminProfile extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->morphOne('Creopse\Creopse\Models\User', 'profile');
    }

    protected static function newFactory()
    {
        return AdminProfileFactory::new();
    }
}
