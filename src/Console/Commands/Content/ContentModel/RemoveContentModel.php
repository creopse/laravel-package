<?php

namespace Creopse\Creopse\Console\Commands\Content\ContentModel;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\PermalinkContentType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Permalink;

class RemoveContentModel extends CreopseCommand
{
    protected $signature = 'creopse:remove-content-model
        {name : The name of the content model to remove}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-content-model}';

    protected $aliases = ['creopse:delete-content-model'];

    protected $description = 'Delete a content model and its associated permalink, if any.';

    public function handle()
    {
        $name = $this->argument('name');

        $contentModel = ContentModel::where('name', $name)->first();

        if (! $contentModel) {
            $this->error("Content model '{$name}' not found.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("content model '{$name}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $contentModelId = $contentModel->id;

        $contentModel->delete();

        $permalink = Permalink::where('content_type', PermalinkContentType::CONTENT_MODEL->value)
            ->where('content_id', $contentModelId)
            ->first();

        if ($permalink) {
            $permalink->delete();
        }

        $this->info("[{$name}] Content model deleted successfully.");

        return self::SUCCESS;
    }
}
