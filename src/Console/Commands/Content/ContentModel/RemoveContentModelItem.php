<?php

namespace Creopse\Creopse\Console\Commands\Content\ContentModel;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\ContentModelItem;

class RemoveContentModelItem extends CreopseCommand
{
    protected $signature = 'creopse:remove-content-model-item
        {id : The ID of the content model item to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-content-model-item}';

    protected $aliases = ['creopse:delete-content-model-item'];

    protected $description = 'Delete a content model item.';

    public function handle()
    {
        $id = $this->argument('id');

        $item = ContentModelItem::find($id);

        if (! $item) {
            $this->error("Content model item #{$id} not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("content model item #{$id}")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $item->delete();

        $this->info("[item #{$id}] Content model item deleted successfully.");

        return self::SUCCESS;
    }
}
