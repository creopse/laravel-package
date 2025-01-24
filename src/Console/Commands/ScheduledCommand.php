<?php

namespace Creopse\Creopse\Console\Commands;

use Illuminate\Console\Command;

class ScheduledCommand extends Command
{
    protected $signature = 'creopse:scheduled-command';
    protected $description = 'This command runs as part of the schedule';

    public function handle()
    {
        $this->info('Scheduled command executed!');
    }
}
