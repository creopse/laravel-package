<?php

namespace Creopse\Creopse\Listeners;

use Creopse\Creopse\Events\News\CommentCreatedEvent;
use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsComment;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Notifications\UserCreateComment;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;

class NewsSubscriber implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Create the event subscriber.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event CommentCreated.
     */
    public function onCommentCreated(CommentCreatedEvent $event)
    {
        if (NewsComment::where('id', $event->commentId)->exists() && NewsArticle::where('id', $event->articleId)->exists()) {
            $admins = User::whereHasAdminProfile()->get();
            Notification::send($admins, new UserCreateComment($event->commentId, $event->articleId));
            foreach ($admins as $admin) {
                Cache::forget("user_{$admin->id}_notifications");
            }
        }
    }

    /**
     * Subscribe to events.
     */
    public function subscribe(Dispatcher $dispatcher)
    {
        return [
            CommentCreatedEvent::class => 'onCommentCreated',
        ];
    }
}
