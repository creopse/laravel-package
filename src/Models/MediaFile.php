<?php

namespace Creopse\Creopse\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class MediaFile extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $with = ['sender'];

    protected $casts = [
        'additional_metadata' => 'array',
    ];

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    /**
     * Get media url from file path.
     */
    public function getMediaUrlAttribute()
    {
        if (env('APP_ENV') == 'local' || env('APP_ENV') == 'development') {
            if ($this->foreign_url) return $this->foreign_url;
        }

        if ($this->path) {
            return Storage::disk('public')->url($this->path);
        }

        return null;
    }
}
