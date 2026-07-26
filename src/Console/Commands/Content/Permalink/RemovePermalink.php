<?php

namespace Creopse\Creopse\Console\Commands\Content\Permalink;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Enums\ContentType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\Permalink;

class RemovePermalink extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:remove-permalink
        {--id= : The ID of the permalink to remove}
        {--path-prefix= : Identify the permalink by its current path prefix}
        {--content-model= : Identify the permalink by its content model name}
        {--force : Skip the confirmation prompt}
        {--alias=creopse:delete-permalink}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:delete-permalink'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete a permalink.';

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

        if (! $this->confirmDestruction("permalink #{$permalink->id} ('{$permalink->path_prefix}')")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $permalink->delete();

        $this->info("[permalink #{$permalink->id}] Deleted successfully.");

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
