<?php

namespace Creopse\Creopse\Enums;

enum PermalinkContentType: string
{
    case NEWS_TAG = 'news-tag';
    case NEWS_CATEGORY = 'news-category';
    case NEWS_ARTICLE = 'news-article';
    case CONTENT_MODEL = 'content-model';
}
