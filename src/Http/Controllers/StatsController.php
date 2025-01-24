<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Models\{MediaFile, NewsArticle, NewsCategory, NewsComment, NewsTag, User, UserSession};
use Illuminate\Http\Request;

class StatsController extends Controller
{
    /**
     * Count subscribers.
     */
    public function countSubscribers()
    {
        return $this->sendResponse(User::whereHasSubscriberProfile()->count());
    }

    /**
     * Count administrators.
     */
    public function countAdministrators()
    {
        return $this->sendResponse(User::whereHasAdminProfile()->count());
    }

    /**
     * Count users.
     */
    public function countUsers()
    {
        return $this->sendResponse(User::count());
    }

    /**
     * Count news categories.
     */
    public function countNewsCategories()
    {
        return $this->sendResponse(NewsCategory::count());
    }

    /**
     * Count news articles.
     */
    public function countNewsArticles()
    {
        return $this->sendResponse(NewsArticle::count());
    }

    /**
     * Count news articles by status.
     */
    public function countNewsArticlesByStatus(int $status)
    {
        return $this->sendResponse(NewsArticle::where('status', $status)->count());
    }

    /**
     * Count news articles by author.
     */
    public function countNewsArticlesByAuthor(int $id)
    {
        return $this->sendResponse(NewsArticle::where('author_id', $id)->count());
    }

    /**
     * Count news comments.
     */
    public function countNewsComments()
    {
        return $this->sendResponse(NewsComment::count());
    }

    /**
     * Count news tags.
     */
    public function countNewsTags()
    {
        return $this->sendResponse(NewsTag::count());
    }

    /**
     * Count media files.
     */
    public function countMediaFiles()
    {
        return $this->sendResponse(MediaFile::count());
    }

    /**
     * Count media files by type.
     */
    public function countMediaFilesByType(int $type)
    {
        return $this->sendResponse(MediaFile::where('type', $type)->count());
    }


    /**
     * Count trashed media files.
     */
    public function countTrashedMediaFiles()
    {
        return $this->sendResponse(MediaFile::onlyTrashed()->count());
    }

    /**
     * Get visits.
     */
    public function getVisits()
    {
        return $this->sendResponse(UserSession::whereNotNull('location_data')->get());
    }

    /**
     * Get visitors.
     */
    public function getVisitors()
    {
        return $this->sendResponse(UserSession::select('ip_address')->distinct()->whereNotNull('location_data')->get());
    }
}
