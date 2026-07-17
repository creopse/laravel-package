<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\Page;
use Creopse\Creopse\Models\Section;

class TogglePageSectionStatus extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:toggle-page-section-status
        {page : The name of the page}
        {section : The name of the section}
        {--link-id=default : Link ID of the section instance}
        {--disabled=true : Whether the section instance should be disabled (true/false)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enable or disable a specific section instance on a page.';

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

        $disabled = $this->resolveBooleanOption('disabled');
        if ($disabled === null) {
            return self::FAILURE;
        }

        $key = "{$section->slug}__{$linkId}";
        $current = $page->sections_disabled ?? [];
        $current = is_array($current) ? $current : [];

        if ($disabled) {
            if (! in_array($key, $current, true)) {
                $current[] = $key;
            }
        } else {
            $current = array_values(array_filter($current, fn($entry) => $entry !== $key));
        }

        $page->update(['sections_disabled' => $current]);

        $state = $disabled ? 'disabled' : 'enabled';
        $this->info("[{$pageName}] Section '{$sectionName}' (link-id: {$linkId}) {$state}.");

        return self::SUCCESS;
    }
}
