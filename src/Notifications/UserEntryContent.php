<?php

namespace Creopse\Creopse\Notifications;

use Creopse\Creopse\Enums\NotificationSource;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Models\ContentModel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserEntryContent extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(private int $contentModelId)
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
        $contentModel = ContentModel::find($this->contentModelId);

        return [
            'contentModel' => $contentModel,
            'title' => __('creopse::notifications.user_entry_content.title'),
            'content' => __('creopse::notifications.user_entry_content.content', ['contentModelTitle' => Functions::trans($contentModel->title)]),
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
            ->action(__('creopse::notifications.user_entry_content.action'), env('ADMIN_URL') . '/content-management');
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
            'triggeredBy' => 'user',
            'source' => NotificationSource::SYSTEM->value,
            'target' => '/content-management',
            'removable' => true,
        ];
    }
}
