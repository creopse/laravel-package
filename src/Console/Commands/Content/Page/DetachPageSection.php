<?php

namespace Creopse\Creopse\Console\Commands\Content\Page;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Creopse\Creopse\Models\Section;

class DetachPageSection extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:detach-page-section
        {page : The name of the page}
        {section : The name of the section}
        {--link-id=default : Link ID of the section instance to detach}
        {--force : Skip the confirmation prompt}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Detach a specific section instance from a page.';

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
            $this->error("[{$pageName}] Section '{$sectionName}' with link-id '{$linkId}' is not attached.");

            return self::FAILURE;
        }

        if (! $this->confirmDestruction("section '{$sectionName}' (link-id: {$linkId}) from page '{$pageName}'")) {
            $this->warn('Aborted.');

            return self::FAILURE;
        }

        $pivot->delete();

        $this->info("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}) detached.");

        return self::SUCCESS;
    }
}
