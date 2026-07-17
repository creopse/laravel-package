<?php

namespace Creopse\Creopse\Console\Commands\Content\Page;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Page;

class UpdatePage extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-page
        {name : The name of the page to update}
        {--title=* : Locale:value pair for the title, e.g. --title="fr:Accueil". Repeatable.}
        {--content= : Content of the page, either inline or @file path.}
        {--position= : Display position/order of the page}
        {--alias=creopse:edit-page}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-page'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the title, content, and/or position of an existing page. Sections are not managed here.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $page = Page::where('name', $name)->first();

        if (! $page) {
            $this->error("Page '{$name}' not found.");

            return self::FAILURE;
        }

        $payload = [];

        $title = $this->buildTitlePayload($page);
        if ($title !== null) {
            $payload['title'] = $title;
        }

        $content = $this->resolveTextOption('content');
        if ($content !== null) {
            $payload['content'] = $content;
        }

        if ($this->option('position') !== null) {
            $payload['position'] = (int) $this->option('position');
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --title, --content, and/or --position.');

            return self::FAILURE;
        }

        $page->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$name}] '{$attribute}' updated successfully.");
        }

        $this->line('Sections not touched — use the admin UI or API to manage section attachments.');

        return self::SUCCESS;
    }

    /**
     * Merge the page's existing locale values with the locale:value
     * pairs passed via --title. Returns null if --title was not used.
     */
    private function buildTitlePayload(Page $page): ?string
    {
        $current = json_decode($page->title ?? '{}', true);

        if (! is_array($current)) {
            $current = [];
        }

        return $this->mergeLocalizedOption($current);
    }
}
