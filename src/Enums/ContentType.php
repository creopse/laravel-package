<?php

namespace Creopse\Creopse\Enums;

use Creopse\Creopse\Models\ContentModelItem;
use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsCategory;
use Creopse\Creopse\Models\NewsTag;

enum ContentType: string
{
    case NEWS_TAG = 'news-tag';
    case NEWS_CATEGORY = 'news-category';
    case NEWS_ARTICLE = 'news-article';
    case CONTENT_MODEL = 'content-model';

    public function getModelClass(): ?string
    {
        return match ($this) {
            self::NEWS_TAG => NewsTag::class,
            self::NEWS_CATEGORY => NewsCategory::class,
            self::NEWS_ARTICLE => NewsArticle::class,
            self::CONTENT_MODEL => ContentModelItem::class,
        };
    }
}
