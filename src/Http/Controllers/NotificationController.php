<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Resources\NotificationResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\DatabaseNotification as Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Index all user notifications.
     */
    public function userIndex(Request $request)
    {
        $pageSize = $request->query('pageSize');

        if ($pageSize) {

            $notifications = Auth::user()->notifications()->paginate($pageSize);

            return $this->sendResponse([
                'notifications' => NotificationResource::collection($notifications),
                'meta' => [
                    'links' => [
                        'first' => $notifications->url(1),
                        'last' => $notifications->url($notifications->lastPage()),
                        'prev' => $notifications->previousPageUrl(),
                        'next' => $notifications->nextPageUrl(),
                    ],
                    'currentPage' => $notifications->currentPage(),
                    'perPage' => $notifications->perPage(),
                    'total' => $notifications->total(),
                    'lastPage' => $notifications->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(Auth::user()->notifications()->get());
    }

    /**
     * User unread notifications.
     */
    public function userIndexUnread()
    {
        return $this->sendResponse(Auth::user()->unreadNotifications()->get());
    }

    /**
     * User read notifications.
     */
    public function userIndexRead()
    {
        return $this->sendResponse(Auth::user()->readNotifications()->get());
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
