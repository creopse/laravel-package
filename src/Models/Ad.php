<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Ad extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'display' => 'boolean',
        'data' => 'array',
    ];

    protected $with = ['adIdentifier'];

    public function adIdentifier()
    {
        return $this->belongsTo(AdIdentifier::class, 'pid', 'id');
    }

    public function getContentUrlAttribute()
    {
        if ($this->content) {
            return Str::isUrl($this->content, ['http', 'https']) ? $this->content : Storage::disk('public')->url($this->content);
        }

        return null;
    }
}
