<?php

namespace Creopse\Creopse\Console\Commands\Content\ContentModel;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentModel\ItemCreatorType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\ContentModelItem;

class MakeContentModelItem extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-content-model-item
        {content-model : The name of the content model this item belongs to}
        {--title=* : Locale:value pair for the title, e.g. --title="en:First Article". Repeatable, optional.}
        {--data= : JSON for content_model_data, inline or @path/to/file.json}
        {--is-active=true : Whether the item is active (true/false)}
        {--created-by-type=system : user, admin, or system}
        {--alias=creopse:add-content-model-item}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-content-model-item'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a content model item for a given content model (by name).';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $modelName = $this->argument('content-model');

        $contentModel = ContentModel::where('name', $modelName)->first();

        if (! $contentModel) {
            $this->error("Content model '{$modelName}' not found.");

            return self::FAILURE;
        }

        $isActive = $this->resolveBooleanOption('is-active');
        if ($isActive === null) {
            return self::FAILURE;
        }

        $createdByType = $this->resolveEnum($this->option('created-by-type'), ItemCreatorType::class, '--created-by-type');
        if ($createdByType === null) {
            return self::FAILURE;
        }

        $data = null;
        if ($this->option('data') !== null) {
            $data = $this->resolveJsonOption('data');
            if ($data === null) {
                return self::FAILURE;
            }
        }

        $title = $this->mergeLocalizedOption([], 'title');

        $item = ContentModelItem::create([
            'title' => $title,
            'content_model_data' => $data,
            'is_active' => $isActive,
            'content_model_id' => $contentModel->id,
            'created_by_type' => $createdByType->value,
            'created_by' => null,
        ]);

        $this->info("[{$modelName}] Content model item created successfully (id: {$item->id}).");

        return self::SUCCESS;
    }
}
