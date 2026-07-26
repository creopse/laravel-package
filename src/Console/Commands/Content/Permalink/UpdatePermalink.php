<?php

namespace Creopse\Creopse\Console\Commands\Content\Permalink;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\Permalink;

class UpdatePermalink extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-permalink
        {--id= : The ID of the permalink to update}
        {--path-prefix= : Identify the permalink by its current path prefix}
        {--content-model= : Identify the permalink by its content model name}
        {--new-path-prefix= : New path prefix}
        {--content-param= : New content param, e.g. id or slug}
        {--page= : Name of the page/template. Use "none" to unset.}
        {--alias=creopse:edit-permalink}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-permalink'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update a permalink\'s path prefix, content param, and/or page. The content target cannot be changed once set.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $permalink = $this->resolvePermalink();

        if ($permalink === false) {
            return self::FAILURE;
        }

        if (! $permalink) {
            $this->error('No matching permalink found.');

            return self::FAILURE;
        }

        $payload = [];

        if ($this->option('new-path-prefix') !== null) {
            $payload['path_prefix'] = rtrim($this->option('new-path-prefix'), '/');
        }

        if ($this->option('content-param') !== null) {
            $payload['content_param'] = $this->option('content-param');
        }

        if ($this->option('page') !== null) {
            $rawPage = $this->option('page');

            if (strtolower($rawPage) === 'none') {
                $payload['page_id'] = null;
            } else {
                $page = Page::where('name', $rawPage)->first();

                if (! $page) {
                    $this->error("Page '{$rawPage}' not found.");

                    return self::FAILURE;
                }

                $payload['page_id'] = $page->id;
            }
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --new-path-prefix, --content-param, and/or --page.');

            return self::FAILURE;
        }

        $permalink->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[permalink #{$permalink->id}] '{$attribute}' updated successfully.");
        }

        return self::SUCCESS;
    }

    /**
     * Resolve the target permalink from --id, --path-prefix, or
     * --content-model (exactly one must be provided). Returns the
     * Permalink, null if not found, or false if the options were
     * ambiguous/invalid (error already printed).
     */
    private function resolvePermalink(): Permalink|false|null
    {
        $provided = array_filter([
            $this->option('id'),
            $this->option('path-prefix'),
            $this->option('content-model'),
        ], fn ($value) => $value !== null);

        if (count($provided) !== 1) {
            $this->error('Provide exactly one of --id, --path-prefix, or --content-model.');

            return false;
        }

        if ($this->option('id') !== null) {
            return Permalink::find($this->option('id'));
        }

        if ($this->option('path-prefix') !== null) {
            $pathPrefix = rtrim($this->option('path-prefix'), '/');

            return Permalink::where('path_prefix', $pathPrefix)->first();
        }

        $contentModel = ContentModel::where('name', $this->option('content-model'))->first();

        if (! $contentModel) {
            $this->error("Content model '{$this->option('content-model')}' not found.");

            return false;
        }

        return Permalink::where('content_type', ContentType::CONTENT_MODEL->value)
            ->where('content_id', $contentModel->id)
            ->first();
    }
}
