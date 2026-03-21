<?php

namespace Creopse\Creopse\Models;

use Creopse\Creopse\Enums\PermalinkContentType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\Relation;

class Permalink extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function booted(): void
    {
        Relation::morphMap([
            PermalinkContentType::NEWS_ARTICLE->value => NewsArticle::class,
            PermalinkContentType::NEWS_CATEGORY->value => NewsCategory::class,
            PermalinkContentType::NEWS_TAG->value => NewsTag::class,
            PermalinkContentType::CONTENT_MODEL->value => ContentModel::class,
        ]);
    }

    public function content(): MorphTo
    {
        return $this->morphTo();
    }

    public function page()
    {
        return $this->belongsTo(Page::class, 'page_id');
    }
}
