<?php

namespace Creopse\Creopse\Listeners;

use Creopse\Creopse\Events\Auth\AccountActivatedEvent;
use Creopse\Creopse\Events\Auth\EmailVerifiedEvent;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Events\Auth\UserLoggedInEvent;
use Creopse\Creopse\Events\Auth\UserLoggedOutEvent;
use Creopse\Creopse\Events\Auth\UserRegisteredEvent;
use Creopse\Creopse\Events\Auth\ProfileCreatedEvent;
use Creopse\Creopse\Events\Auth\ProfileUpdatedEvent;
use Creopse\Creopse\Helpers\Functions;
use Creopse\Creopse\Notifications\UserAccountActivated;
use Creopse\Creopse\Notifications\WelcomeUser;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class AuthSubscriber implements ShouldQueue
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
     * Handle the event AccountActivatedEvent.
     */
    public function onAccountActivated(AccountActivatedEvent $event)
    {
        $user = User::find($event->userId);

        if ($user) {
            $user->notify(new UserAccountActivated($user->id));
        }
    }

    /**
     * Handle the event UserLoggedIn.
     */
    public function onUserLoggedIn(UserLoggedInEvent $event)
    {
        $user = User::find($event->userId);
        if ($user) {
            Functions::generateRefreshToken($user);

            $user->last_logged_in_at = now();
            $user->save();
        }
    }

    /**
     * Handle the event UserLoggedOut.
     */
    public function onUserLoggedOut(UserLoggedOutEvent $event)
    {
        //
    }

    /**
     * Handle the event UserRegistered.
     */
    public function onUserRegistered(UserRegisteredEvent $event)
    {
        $user = User::find($event->userId);
        if ($user) Functions::generateRefreshToken($user);
    }

    /**
     * Handle the event ProfileCreated.
     */
    public function onProfileCreated(ProfileCreatedEvent $event)
    {
        $user = User::find($event->userId);
        if ($user) {
            $user->notify(new WelcomeUser($user->id));

            if ($user instanceof MustVerifyEmail && !$user->hasVerifiedEmail()) {
                try {
                    $user->sendEmailVerificationNotification();
                } catch (\Exception $e) {
                    Log::channel('debug')->debug($e->getMessage());
                }
            }
        }
    }

    /**
     * Handle the event ProfileUpdated.
     */
    public function onProfileUpdated(ProfileUpdatedEvent $event)
    {
        //
    }

    /**
     * Handle the event EmailVerified.
     */
    public function onEmailVerified(EmailVerifiedEvent $event)
    {
        //
    }

    public function subscribe(Dispatcher $dispatcher)
    {
        return [
            UserLoggedInEvent::class => 'onUserLoggedIn',
            UserLoggedOutEvent::class => 'onUserLoggedOut',
            UserRegisteredEvent::class => 'onUserRegistered',
            ProfileCreatedEvent::class => 'onProfileCreated',
            ProfileUpdatedEvent::class => 'onProfileUpdated',
            EmailVerifiedEvent::class => 'onEmailVerified',
            AccountActivatedEvent::class => 'onAccountActivated',
        ];
    }
}
