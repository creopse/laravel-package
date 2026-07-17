<?php

namespace Creopse\Creopse\Console\Commands\Content\ContentModel;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentModel\ItemCreatorType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\ContentModelItem;

class UpdateContentModelItem extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-content-model-item
        {id : The ID of the content model item to update}
        {--content-model= : Move the item to a different content model, by name}
        {--title=* : Locale:value pair for the title, e.g. --title="fr:Article 1". Repeatable.}
        {--data= : JSON for content_model_data, inline or @path/to/file.json}
        {--is-active= : Whether the item is active (true/false)}
        {--created-by-type= : user, admin, or system}
        {--alias=creopse:edit-content-model-item}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-content-model-item'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a content model item. Relationships (related_items) are not managed here.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');

        $item = ContentModelItem::find($id);

        if (! $item) {
            $this->error("Content model item #{$id} not found.");

            return self::FAILURE;
        }

        $payload = [];

        if ($this->option('content-model') !== null) {
            $modelName = $this->option('content-model');
            $contentModel = ContentModel::where('name', $modelName)->first();

            if (! $contentModel) {
                $this->error("Content model '{$modelName}' not found.");

                return self::FAILURE;
            }

            $payload['content_model_id'] = $contentModel->id;
        }

        $currentTitle = json_decode($item->title ?? '{}', true) ?: [];
        $title = $this->mergeLocalizedOption($currentTitle, 'title');
        if ($title !== null) {
            $payload['title'] = $title;
        }

        if ($this->option('data') !== null) {
            $data = $this->resolveJsonOption('data');
            if ($data === null) {
                return self::FAILURE;
            }
            $payload['content_model_data'] = $data;
        }

        if ($this->option('is-active') !== null) {
            $isActive = $this->resolveBooleanOption('is-active');
            if ($isActive === null) {
                return self::FAILURE;
            }
            $payload['is_active'] = $isActive;
        }

        if ($this->option('created-by-type') !== null) {
            $createdByType = $this->resolveEnum($this->option('created-by-type'), ItemCreatorType::class, '--created-by-type');
            if ($createdByType === null) {
                return self::FAILURE;
            }
            $payload['created_by_type'] = $createdByType->value;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided.');

            return self::FAILURE;
        }

        $item->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[item #{$id}] '{$attribute}' updated successfully.");
        }

        $this->line('Relationships (related_items) not touched — use the admin UI or API to manage them.');

        return self::SUCCESS;
    }
}
