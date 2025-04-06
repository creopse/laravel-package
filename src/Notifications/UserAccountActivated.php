<?php

namespace Creopse\Creopse\Notifications;

use Creopse\Creopse\Enums\NotificationSource;
use Creopse\Creopse\Models\AppInformation;
use Creopse\Creopse\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserAccountActivated extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(private int $userId)
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
        return ['mail', 'database'];
    }

    /**
     * Get the notification data.
     *
     * @return array
     */
    private function getData(): array
    {
        $appNameItem = AppInformation::where('key', 'name')->first();
        $appName = $appNameItem ? $appNameItem->value : config('app.name');

        $user = User::find($this->userId);

        return [
            'user' => $user,
            'title' => __('creopse::notifications.account_activation.title', ['appName' => $appName]),
            'mail_content' => __('creopse::notifications.account_activation.content_1'),
            'app_content' => __('creopse::notifications.account_activation.content_2'),
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
            ->line($data['mail_content']);
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
            'content' => $data['app_content'],
            'params' => [],
            'triggeredBy' => $data['user']?->id,
            'source' => NotificationSource::SYSTEM->value,
            'target' => '',
            'removable' => true,
        ];
    }
}
