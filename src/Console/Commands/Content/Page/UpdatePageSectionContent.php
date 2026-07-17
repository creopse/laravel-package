<?php

namespace Creopse\Creopse\Console\Commands\Content\Page;

use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\PageSection;
use Creopse\Creopse\Models\Section;

class UpdatePageSectionContent extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:update-page-section-content
        {page : The name of the page}
        {section : The name of the section}
        {--link-id=default : Link ID of the section instance}
        {--link-title=* : Locale:value pair for this instance\'s title. Repeatable.}
        {--data= : JSON for this instance\'s data, inline or @path/to/file.json}
        {--settings= : JSON for this instance\'s settings, inline or @path/to/file.json}
        {--alias=creopse:edit-page-section-content}';

    /**
     * The console command aliases.
     *
     * @var array
     */
    protected $aliases = ['creopse:edit-page-section-content'];

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the title, data, and/or settings of a specific section instance attached to a page.';

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

        $payload = [];

        $currentLinkTitle = json_decode($pivot->link_title ?? '{}', true) ?: [];
        $linkTitle = $this->mergeLocalizedOption($currentLinkTitle, 'link-title');
        if ($linkTitle !== null) {
            $payload['link_title'] = $linkTitle;
        }

        if ($this->option('data') !== null) {
            $data = $this->resolveJsonOption('data');
            if ($data === null) {
                return self::FAILURE;
            }
            $payload['data'] = $data;
        }

        if ($this->option('settings') !== null) {
            $settings = $this->resolveJsonOption('settings');
            if ($settings === null) {
                return self::FAILURE;
            }
            $payload['settings'] = $settings;
        }

        if (empty($payload)) {
            $this->warn('No attribute provided. Use --link-title, --data, and/or --settings.');

            return self::FAILURE;
        }

        $pivot->update($payload);

        foreach (array_keys($payload) as $attribute) {
            $this->info("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}): '{$attribute}' updated.");
        }

        return self::SUCCESS;
    }
}
