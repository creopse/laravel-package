<?php

namespace Creopse\Creopse\Console\Commands\Content\ContentModel;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentModel\AccessScope;
use Creopse\Creopse\Enums\ContentModel\Intent;
use Creopse\Creopse\Enums\PermalinkContentType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Permalink;

class MakeContentModel extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-content-model
        {name : The unique name of the content model}
        {intent : editorial-content, user-data, or system-data}
        {access-scope : internal or user-editable}
        {--title=* : Locale:value pair for the title, e.g. --title="en:Article". Repeatable.}
        {--description=* : Locale:value pair for the description, inline or locale:@path/to/file. Repeatable.}
        {--image= : Path or URL to the content model image}
        {--data-structure= : JSON for the data structure, inline or @path/to/file.json}
        {--title-field-name= : Name of the data_structure field used as the display title field}
        {--has-permalink= : Whether this content model has a permalink (true/false)}
        {--alias=creopse:add-content-model}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-content-model'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a content model with its data structure and optional permalink.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        if (ContentModel::where('name', $name)->exists()) {
            $this->warn("[{$name}] A content model with this name already exists, skipping.");

            return self::FAILURE;
        }

        $intent = $this->resolveEnum($this->argument('intent'), Intent::class, 'intent');
        if ($intent === null) {
            return self::FAILURE;
        }

        $accessScope = $this->resolveEnum($this->argument('access-scope'), AccessScope::class, 'access-scope');
        if ($accessScope === null) {
            return self::FAILURE;
        }

        $dataStructure = null;
        if ($this->option('data-structure') !== null) {
            $dataStructure = $this->resolveJsonOption('data-structure');
            if ($dataStructure === null) {
                return self::FAILURE;
            }
        }

        $hasPermalink = false;
        if ($this->option('has-permalink') !== null) {
            $hasPermalink = $this->resolveBooleanOption('has-permalink');
            if ($hasPermalink === null) {
                return self::FAILURE;
            }
        }

        $contentModel = ContentModel::create([
            'name' => $name,
            'title' => $this->mergeLocalizedOption(['en' => $name, 'fr' => $name], 'title'),
            'description' => $this->mergeLocalizedOption([], 'description'),
            'image' => $this->option('image'),
            'data_structure' => $dataStructure,
            'title_field_name' => $this->option('title-field-name'),
            'intent' => $intent->value,
            'access_scope' => $accessScope->value,
            'has_permalink' => $hasPermalink,
        ]);

        if ($hasPermalink) {
            Permalink::create([
                'path_prefix' => '/'.rtrim($contentModel->slug, '/'),
                'content_type' => PermalinkContentType::CONTENT_MODEL->value,
                'content_param' => 'id',
                'content_id' => $contentModel->id,
            ]);
        }

        $this->info("[{$name}] Content model created successfully (id: {$contentModel->id}).");

        return self::SUCCESS;
    }
}
