<?php

namespace Creopse\Creopse\Console\Commands;

use Creopse\Creopse\Models\Page;
use Illuminate\Support\Facades\File;

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
        $pairs = $this->option('title');

        if (empty($pairs)) {
            return null;
        }

        $title = [];

        foreach ($pairs as $pair) {
            if (! str_contains($pair, ':')) {
                $this->error("[--title] Invalid format '{$pair}', expected 'locale:value'.");

                continue;
            }

            [$locale, $value] = explode(':', $pair, 2);
            $locale = trim($locale);
            $value = trim($value);

            if ($locale === '' || $value === '') {
                $this->error("[--title] Empty locale or value in '{$pair}', skipped.");

                continue;
            }

            $title[$locale] = $value;
        }

        return json_encode($title, JSON_UNESCAPED_UNICODE);
    }

    /**
     * Resolve a plain-text option (inline or @file). No JSON validation —
     * content is stored as raw text/HTML, not a structured payload.
     */
    private function resolveTextOption(string $option): ?string
    {
        $raw = $this->option($option);

        if ($raw === null) {
            return null;
        }

        if (str_starts_with($raw, '@')) {
            $path = substr($raw, 1);

            if (! File::exists($path)) {
                $this->error("[--{$option}] File not found: {$path}");

                return null;
            }

            return File::get($path);
        }

        return $raw;
    }
}
