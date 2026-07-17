<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Creopse\Creopse\Models\Section;

class AttachPageSection extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:attach-page-section
        {page : The name of the page}
        {section : The name of the section}
        {--link-id=default : Link ID, to distinguish multiple instances of the same section on a page}
        {--link-title=* : Locale:value pair for this instance\'s title, e.g. --link-title="en:Hero Top". Repeatable, optional.}
        {--data= : JSON for this instance\'s data, inline or @path/to/file.json}
        {--settings= : JSON for this instance\'s settings, inline or @path/to/file.json}
        {--source-page= : Name of another page to source this section instance\'s data from}
        {--source-link-id=default : Link ID of the section instance on the source page}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Attach a section to a page. Use --link-id to attach the same section multiple times.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $pageName = $this->argument('page');
        $sectionName = $this->argument('section');
        $linkId = $this->option('link-id');

        $page = Page::where('name', $pageName)->first();
        if (! $page) {
            $this->error("Page '{$pageName}' not found.");

            return self::FAILURE;
        }

        $section = Section::where('name', $sectionName)->first();
        if (! $section) {
            $this->error("Section '{$sectionName}' not found.");

            return self::FAILURE;
        }

        $exists = PageSection::where('page_id', $page->id)
            ->where('section_id', $section->id)
            ->where('link_id', $linkId)
            ->exists();

        if ($exists) {
            $this->warn("[{$pageName}] Section '{$sectionName}' with link-id '{$linkId}' is already attached, skipping.");

            return self::FAILURE;
        }

        $data = null;
        if ($this->option('data') !== null) {
            $data = $this->resolveJsonOption('data');
            if ($data === null) {
                return self::FAILURE;
            }
        }

        $settings = null;
        if ($this->option('settings') !== null) {
            $settings = $this->resolveJsonOption('settings');
            if ($settings === null) {
                return self::FAILURE;
            }
        }

        $sourcePageId = $page->id;
        if ($this->option('source-page') !== null) {
            $sourcePage = Page::where('name', $this->option('source-page'))->first();

            if (! $sourcePage) {
                $this->error("Source page '{$this->option('source-page')}' not found.");

                return self::FAILURE;
            }

            $sourcePageId = $sourcePage->id;
        }

        $page->sections()->attach($section->id, [
            'link_id' => $linkId,
            'link_title' => $this->mergeLocalizedOption([], 'link-title'),
            'data' => $data,
            'settings' => $settings,
            'data_source_page_id' => $sourcePageId,
            'data_source_link_id' => $this->option('source-link-id'),
        ]);

        $this->info("[{$pageName}] Section '{$sectionName}' attached (link-id: {$linkId}).");

        return self::SUCCESS;
    }
}
