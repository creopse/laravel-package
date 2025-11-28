<?php

namespace Creopse\Creopse\Listeners;

use Creopse\Creopse\Events\Content\UserEntryEvent;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Notifications\UserEntryContent;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class ContentSubscriber implements ShouldQueue
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
     * Handle the event UserEntry.
     */
    public function onUserEntry(UserEntryEvent $event)
    {
        if (ContentModel::where('id', $event->contentModelId)->exists()) {
            $admins = User::whereHasAdminProfile()->get();
            Notification::send($admins, new UserEntryContent($event->contentModelId));
        }
    }

    /**
     * Subscribe to events.
     */
    public function subscribe(Dispatcher $dispatcher)
    {
        return [
            UserEntryEvent::class => 'onUserEntry',
        ];
    }
}
