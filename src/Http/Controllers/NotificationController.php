<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Models\User;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\DatabaseNotification as Notification;
use Illuminate\Support\Facades\Cache;

class NotificationController extends Controller
{
    /**
     * Index all user notifications.
     */
    public function userIndex()
    {
        $userId = Auth::id();
        $cacheKey = "user_{$userId}_notifications";

        $notifications = Cache::remember($cacheKey, 3600, function () use ($userId) {
            return User::find($userId)->notifications()->get();
        });

        return $this->sendResponse($notifications);
    }

    /**
     * User unread notifications.
     */
    public function userIndexUnread()
    {
        $userId = Auth::id();
        $cacheKey = "user_{$userId}_notifications";

        $unreadNotifications = Cache::remember($cacheKey, 3600, function () use ($userId) {
            return User::find($userId)->unreadNotifications()->get();
        });

        return $this->sendResponse($unreadNotifications);
    }

    /**
     * User read notifications.
     */
    public function userIndexRead()
    {
        $userId = Auth::id();
        $cacheKey = "user_{$userId}_notifications";

        $readNotifications = Cache::remember($cacheKey, 3600, function () use ($userId) {
            return User::find($userId)->readNotifications()->get();
        });

        return $this->sendResponse($readNotifications);
    }

    /**
     * Mark notification as read.
     */
    public function mark(Notification $notification)
    {
        $notification->markAsRead();
        return $this->sendResponse(null, ResponseStatusCode::OK, 'Notification marked as read');
    }

    /**
     * Mark all user notifications as read.
     */
    public function userMarkAll()
    {
        Auth::user()->unreadNotifications()->markAsRead();
        return $this->sendResponse(null, ResponseStatusCode::OK, 'All notifications marked as read');
    }

    /**
     * Delete notification.
     */
    public function destroy(Notification $notification)
    {
        $notification->delete();
        return $this->sendResponse(null, ResponseStatusCode::OK, 'Notification deleted successfully');
    }
}
