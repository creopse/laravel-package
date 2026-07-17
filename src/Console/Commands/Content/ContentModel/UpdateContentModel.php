<?php

namespace Creopse\Creopse\Console\Commands\Content\ContentModel;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentModel\AccessScope;
use Creopse\Creopse\Enums\ContentModel\Intent;
use Creopse\Creopse\Enums\PermalinkContentType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Permalink;

class UpdateContentModel extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-content-model
        {name : The name of the content model to update}
        {--title=* : Locale:value pair for the title, e.g. --title="fr:Article". Repeatable.}
        {--description=* : Locale:value pair for the description, inline or locale:@path/to/file. Repeatable.}
        {--image= : Path or URL to the content model image}
        {--data-structure= : JSON for the data structure, inline or @path/to/file.json}
        {--title-field-name= : Name of the data_structure field used as the display title field}
        {--intent= : editorial-content, user-data, or system-data}
        {--access-scope= : internal or user-editable}
        {--has-permalink= : Whether this content model has a permalink (true/false)}
        {--alias=creopse:edit-content-model}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-content-model'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a content model. Permalink is only touched if --has-permalink is explicitly passed.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $contentModel = ContentModel::where('name', $name)->first();

        if (! $contentModel) {
            $this->error("Content model '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        $currentTitle = json_decode($contentModel->title ?? '{}', true) ?: [];
        $title = $this->mergeLocalizedOption($currentTitle, 'title');
        if ($title !== null) {
            $payload['title'] = $title;
        }

        $currentDescription = json_decode($contentModel->description ?? '{}', true) ?: [];
        $description = $this->mergeLocalizedOption($currentDescription, 'description');
        if ($description !== null) {
            $payload['description'] = $description;
        }

        if ($this->option('image') !== null) {
            $payload['image'] = $this->option('image');
        }

        if ($this->option('data-structure') !== null) {
            $dataStructure = $this->resolveJsonOption('data-structure');
            if ($dataStructure === null) {
                return self::FAILURE;
            }
            $payload['data_structure'] = $dataStructure;
        }

        if ($this->option('title-field-name') !== null) {
            $payload['title_field_name'] = $this->option('title-field-name');
        }

        if ($this->option('intent') !== null) {
            $intent = $this->resolveEnum($this->option('intent'), Intent::class, '--intent');
            if ($intent === null) {
                return self::FAILURE;
            }
            $payload['intent'] = $intent->value;
        }

        if ($this->option('access-scope') !== null) {
            $accessScope = $this->resolveEnum($this->option('access-scope'), AccessScope::class, '--access-scope');
            if ($accessScope === null) {
                return self::FAILURE;
            }
            $payload['access_scope'] = $accessScope->value;
        }

        $hasPermalinkProvided = $this->option('has-permalink') !== null;
        $hasPermalink = null;
        if ($hasPermalinkProvided) {
            $hasPermalink = $this->resolveBooleanOption('has-permalink');
            if ($hasPermalink === null) {
                return self::FAILURE;
            }
            $payload['has_permalink'] = $hasPermalink;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided.');

            return self::FAILURE;
        }

        $contentModel->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        if ($hasPermalinkProvided) {
            $this->syncPermalink($contentModel, $hasPermalink);
        }

        return self::SUCCESS;
    }

    /**
     * Create or delete the content model's permalink to match the
     * explicitly requested has_permalink state.
     */
    private function syncPermalink(ContentModel $contentModel, bool $hasPermalink): void
    {
        $permalink = Permalink::where('content_type', PermalinkContentType::CONTENT_MODEL->value)
            ->where('content_id', $contentModel->id)
            ->first();

        if ($hasPermalink) {
            if (! $permalink) {
                Permalink::create([
                    'path_prefix' => '/'.rtrim($contentModel->slug, '/'),
                    'content_type' => PermalinkContentType::CONTENT_MODEL->value,
                    'content_param' => 'id',
                    'content_id' => $contentModel->id,
                ]);
                $this->info("[{$contentModel->name}] Permalink created.");
            }

            return;
        }

        if ($permalink) {
            $permalink->delete();
            $this->info("[{$contentModel->name}] Permalink removed.");
        }
    }
}
