<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsletterCampaign extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'recipients' => 'array',
        'history' => 'array',
    ];
}
