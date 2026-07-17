<?php

namespace Creopse\Creopse\Console\Commands\Content\Page;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Page;

class MakePage extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:make-page
        {name : The unique name/slug of the page}
        {--title=* : Locale:value pair for the title, e.g. --title="en:Home". Repeatable.}
        {--content= : Content of the page, either inline or @file path.}
        {--position=0 : Display position/order of the page}
        {--alias=creopse:add-page}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:add-page'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an empty page. Sections must be attached separately via the admin UI or API.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        if (Page::where('name', $name)->exists()) {
            $this->warn("[{$name}] A page with this name already exists, skipping.");

            return self::FAILURE;
        }

        $title = $this->buildTitlePayload();
        $content = $this->resolveTextOption('content');

        $page = Page::create([
            'name' => $name,
            'title' => $title,
            'content' => $content,
            'position' => (int) $this->option('position'),
        ]);

        $this->info("[{$name}] Page created successfully (id: {$page->id}).");
        $this->line('Sections not attached — use the admin UI or API to link sections to this page.');

        return self::SUCCESS;
    }

    /**
     * Build the title JSON from the locale:value pairs passed via --title.
     * Returns null if --title was not used at all (falls back to model/DB default).
     */
    private function buildTitlePayload(): ?string
    {
        return $this->mergeLocalizedOption([]);
    }
}
