<?php

namespace Creopse\Creopse\Notifications;

use Creopse\Creopse\Enums\NotificationSource;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\NewsComment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserCreateComment extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(private int $commentId, private int $articleId)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        $emailNotifEnabled = isset($notifiable->preferences['email_notif_enabled']) && $notifiable->preferences['email_notif_enabled'] === 1;

        if ($notifiable->email && $emailNotifEnabled) {
            return ['mail', 'database'];
        }

        return ['database'];
    }

    /**
     * Get the notification data.
     *
     * @return array
     */
    private function getData(): array
    {
        $comment = NewsComment::find($this->commentId)->with(['author', 'publisher'])->first();

        return [
            'comment' => $comment,
            'title' => __('notifications.user_create_comment.title', ['title' => Functions::trans($comment->article->title)]),
            'content' => __('notifications.user_create_comment.content', ['name' => $comment->user->fullname]),
        ];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $data = $this->getData();

        return (new MailMessage)
            ->subject($data['title'])
            ->line($data['title'])
            ->line($data['content'])
            ->action(__('notifications.user_create_comment.action'), env('FRONTEND_URL') . '/news-management/comments');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $data = $this->getData();

        return [
            'title' => $data['title'],
            'content' => $data['content'],
            'params' => [],
            'triggeredBy' => $data['comment']?->author_id,
            'source' => NotificationSource::SYSTEM->value,
            'target' => '/news-management/comments',
            'removable' => true,
        ];
    }
}
