<?php

namespace Creopse\Creopse\Console\Commands\Content\Permalink;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\Permalink;

class MakePermalink extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-permalink
        {path-prefix : The path prefix, e.g. /blog}
        {content-type : news-tag, news-category, news-article, or content-model}
        {--content-id= : Required if content-type=content-model. Numeric ID or content model name.}
        {--content-param=id : The content param used to resolve the target, e.g. id or slug}
        {--page= : Name of the page/template used to render this content}
        {--alias=creopse:add-permalink}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-permalink'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a permalink.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $pathPrefix = rtrim($this->argument('path-prefix'), '/');

        $contentType = $this->resolveEnum($this->argument('content-type'), ContentType::class, 'content-type');
        if ($contentType === null) {
            return self::FAILURE;
        }

        $contentId = null;

        if ($contentType === ContentType::CONTENT_MODEL) {
            if ($this->option('content-id') === null) {
                $this->error('--content-id is required when content-type is content-model.');

                return self::FAILURE;
            }

            $contentId = $this->resolveContentModelId($this->option('content-id'));
            if ($contentId === null) {
                return self::FAILURE;
            }
        } elseif ($this->option('content-id') !== null) {
            $contentId = (int) $this->option('content-id');
        }

        $pageId = null;
        if ($this->option('page') !== null) {
            $page = Page::where('name', $this->option('page'))->first();

            if (! $page) {
                $this->error("Page '{$this->option('page')}' not found.");

                return self::FAILURE;
            }

            $pageId = $page->id;
        }

        $permalink = Permalink::create([
            'path_prefix' => $pathPrefix,
            'content_type' => $contentType->value,
            'content_param' => $this->option('content-param'),
            'content_id' => $contentId,
            'page_id' => $pageId,
        ]);

        $this->info("Permalink created successfully (id: {$permalink->id}, path: {$pathPrefix}).");

        return self::SUCCESS;
    }

    /**
     * Resolve --content-id for a content-model target: accepts either a
     * raw numeric ID or a content model name, resolved to its ID.
     */
    private function resolveContentModelId(string $rawValue): ?int
    {
        if (ctype_digit($rawValue)) {
            return (int) $rawValue;
        }

        $contentModel = ContentModel::where('name', $rawValue)->first();

        if (! $contentModel) {
            $this->error("[--content-id] No content model found with name '{$rawValue}'.");

            return null;
        }

        return $contentModel->id;
    }
}
