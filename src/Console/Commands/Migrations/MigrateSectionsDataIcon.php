<?php

namespace Creopse\Creopse\Console\Commands\Migrations;

use Closure;
use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\PageSection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MigrateSectionsDataIcon extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:migrate-sections-data-icon';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate sections data icons';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $iconsMap = Http::get(
            'https://raw.githubusercontent.com/noeGnh/vue3-icon-picker/master/packages/vue3-icon-picker/icons-map.json'
        )->json();

        $svgIndex = collect($iconsMap)->mapWithKeys(function ($svg, $key) {
            Log::info('Normalized SVG: ' . $this->normalizeSvg($svg));
            Log::info('SVG: ' . $svg);
            return [$this->normalizeSvg($svg) => $this->extractIconName($key)];
        });

        foreach (PageSection::cursor() as $pageSection) {
            $data = $pageSection->data;

            $data = $this->replaceSvgInData($data, function ($svg) use ($svgIndex) {
                $normalized = $this->normalizeSvg($svg);

                Log::info('Normalized SVG: ' . $normalized);
                Log::info('SVG: ' . $svg);

                return $svgIndex->get($normalized, $svg);
            });

            $pageSection->data = $data;
            $pageSection->save();
        }

        $this->info('Sections data icons migrated successfully.');
    }

    private function replaceSvgInData(mixed $data, Closure $replacer): mixed
    {
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                $data[$key] = $this->replaceSvgInData($value, $replacer);
            }
            return $data;
        }

        if (is_string($data) && str_contains($data, '<svg')) {
            return $replacer($data);
        }

        return $data;
    }

    private function normalizeSvg(string $svg): string
    {
        $dom = new \DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadXML($svg, LIBXML_NONET);
        libxml_clear_errors();

        $shapes = [];

        // Shapes avec leur géométrie pure
        $geometryMap = [
            'path' => ['d'],
            'rect' => ['x', 'y', 'width', 'height', 'rx', 'ry'],
            'circle' => ['cx', 'cy', 'r'],
            'ellipse' => ['cx', 'cy', 'rx', 'ry'],
            'line' => ['x1', 'y1', 'x2', 'y2'],
            'polygon' => ['points'],
            'polyline' => ['points'],
        ];

        foreach ($geometryMap as $tag => $attrs) {
            foreach ($dom->getElementsByTagName($tag) as $node) {
                $geom = [];
                foreach ($attrs as $attr) {
                    if ($node->hasAttribute($attr)) {
                        $geom[$attr] = $node->getAttribute($attr);
                    }
                }
                ksort($geom); // Ordre déterministe
                $shapes[] = $tag . ':' . json_encode($geom);
            }
        }

        sort($shapes);
        return md5(implode('|', $shapes));
    }

    private function extractIconName(string $key): string
    {
        return explode('__', $key, 2)[1] ?? $key;
    }
}
