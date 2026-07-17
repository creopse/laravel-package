<?php

namespace Creopse\Creopse\Console\Commands\Content\Page;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Creopse\Creopse\Models\Section;

class SetPageSectionSource extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:set-page-section-source
        {page : The name of the page}
        {section : The name of the section}
        {--link-id=default : Link ID of the section instance}
        {--source-page= : Name of the page to source data from. Use "none" to clear the source.}
        {--source-link-id=default : Link ID of the section instance on the source page}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set or clear the data source page for a specific section instance on a page.';

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

        $pivot = PageSection::where('page_id', $page->id)
            ->where('section_id', $section->id)
            ->where('link_id', $linkId)
            ->first();

        if (! $pivot) {
            $this->error("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}) is not attached.");

            return self::FAILURE;
        }

        $rawSourcePage = $this->option('source-page');

        if ($rawSourcePage === null || strtolower($rawSourcePage) === 'none') {
            $pivot->update([
                'data_source_page_id' => null,
                'data_source_link_id' => 'default',
            ]);

            $this->info("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}) source cleared.");

            return self::SUCCESS;
        }

        $sourcePage = Page::where('name', $rawSourcePage)->first();
        if (! $sourcePage) {
            $this->error("Source page '{$rawSourcePage}' not found.");

            return self::FAILURE;
        }

        $pivot->update([
            'data_source_page_id' => $sourcePage->id,
            'data_source_link_id' => $this->option('source-link-id'),
        ]);

        $this->info("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}) source set to page '{$rawSourcePage}'.");

        return self::SUCCESS;
    }
}
