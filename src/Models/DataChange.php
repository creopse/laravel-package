<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataChange extends Model
{
    use HasFactory;

    // Neither $fillable nor $guarded was ever set here, which defaults to
    // fully guarded - DataChangeController::store()/update() have never
    // actually been able to write anything through Eloquent. The
    // controller already whitelists the exact fields it passes through.
    protected $guarded = [];
}
