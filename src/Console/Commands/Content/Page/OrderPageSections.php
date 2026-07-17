<?php

namespace Creopse\Creopse\Console\Commands\Content\Page;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Creopse\Creopse\Models\Section;

class OrderPageSections extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:order-page-sections
        {page : The name of the page}
        {--item=* : section-name:link-id in the desired order, e.g. --item="Hero:default" --item="Footer:default". Repeatable.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set the display order of a page\'s attached sections.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $pageName = $this->argument('page');
        $items = $this->option('item');

        $page = Page::where('name', $pageName)->first();
        if (! $page) {
            $this->error("Page '{$pageName}' not found.");

            return self::FAILURE;
        }

        if (empty($items)) {
            $this->warn('No --item provided. Use --item="section-name:link-id" (repeatable).');

            return self::FAILURE;
        }

        $order = [];

        foreach ($items as $item) {
            $linkId = 'default';
            $sectionName = $item;

            if (str_contains($item, ':')) {
                [$sectionName, $linkId] = explode(':', $item, 2);
                $sectionName = trim($sectionName);
                $linkId = trim($linkId) ?: 'default';
            }

            $section = Section::where('name', $sectionName)->first();
            if (! $section) {
                $this->error("Section '{$sectionName}' not found, aborting.");

                return self::FAILURE;
            }

            $attached = PageSection::where('page_id', $page->id)
                ->where('section_id', $section->id)
                ->where('link_id', $linkId)
                ->exists();

            if (! $attached) {
                $this->warn("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}) is not attached to this page, included anyway.");
            }

            $order[] = "{$section->slug}__{$linkId}";
        }

        $page->update(['sections_order' => $order]);

        $this->info("[{$pageName}] Section order updated (".count($order).' item(s)).');

        return self::SUCCESS;
    }
}
