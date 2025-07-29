<?php

namespace Creopse\Creopse\Console\Commands;

class ScheduledCommand extends CreopseCommand
{
    protected $signature = 'creopse:scheduled-command';
    protected $description = 'This command runs as part of the schedule';

    public function handle()
    {
        $this->info('Scheduled command executed!');
    }
}
