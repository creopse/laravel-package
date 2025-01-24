<?php

namespace Creopse\Creopse\Enums;

enum ContentType: string
{
    case NEWS_TAG = 'news-tag';
    case NEWS_CATEGORY = 'news-category';
    case NEWS_ARTICLE = 'news-article';
    case CONTENT_MODEL = 'content-model';

    public function getModelClass(): ?string
    {
        return match ($this) {
            self::NEWS_TAG => \Creopse\Creopse\Models\NewsTag::class,
            self::NEWS_CATEGORY => \Creopse\Creopse\Models\NewsCategory::class,
            self::NEWS_ARTICLE => \Creopse\Creopse\Models\NewsArticle::class,
            self::CONTENT_MODEL => \Creopse\Creopse\Models\ContentModelItem::class,
        };
    }
}
