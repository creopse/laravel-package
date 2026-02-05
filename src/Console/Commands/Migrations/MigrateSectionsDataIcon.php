<?php

namespace Creopse\Creopse\Console\Commands\Migrations;

use Closure;
use DOMDocument;
use Creopse\Creopse\Console\Commands\CreopseCommand;
use Creopse\Creopse\Models\PageSection;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

class MigrateSectionsDataIcon extends CreopseCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'creopse:migrate-sections-data-icon {--dry-run : Simulate the migration without saving}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate legacy SVG data to icon names using structural Bigram fuzzy matching';

    /**
     * Minimum similarity threshold (0.0 to 1.0).
     * With Bigrams, we can lower it slightly as the matches are stricter.
     */
    private const SIMILARITY_THRESHOLD = 0.85;

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $this->info("Fetching icons map from GitHub...");

        $response = Http::get('https://raw.githubusercontent.com/noeGnh/vue3-icon-picker/master/packages/vue3-icon-picker/icons-map.json');

        if ($response->failed()) {
            $this->error("Target icon map unreachable. Aborting.");
            return;
        }

        $iconsMap = $response->json();

        // 1. Indexing: Pre-calculate hashes and signatures to avoid O(n^2) overhead during the loop
        $this->info("Indexing icons repository...");
        $svgIndex = collect($iconsMap)->map(function ($svg, $key) {
            return [
                'hash'      => $this->normalizeSvg($svg), // For exact matches
                'svg'       => $svg,
                'name'      => $this->extractIconName($key),
                'signature' => $this->getPathSignature($svg), // For fuzzy matches (Bigrams)
                'nodeCount' => $this->countGeometryNodes($svg)
            ];
        });

        $stats = ['matched' => 0, 'fuzzy' => 0, 'failed' => 0];
        $total = PageSection::count();
        $bar = $this->output->createProgressBar($total);

        foreach (PageSection::cursor() as $pageSection) {
            $originalData = $pageSection->data;

            // Recursive replacement
            $updatedData = $this->replaceSvgInData($originalData, function ($svg) use ($svgIndex, &$stats) {

                // A. Exact Match Strategy
                $normalized = $this->normalizeSvg($svg);
                $exact = $svgIndex->firstWhere('hash', $normalized);

                if ($exact) {
                    $stats['matched']++;
                    return $exact['name'];
                }

                // B. Fuzzy Match Strategy (Vector Space Model with Bigrams)
                $fuzzy = $this->findSimilarSvg($svg, $svgIndex);

                if ($fuzzy && $fuzzy['similarity'] >= self::SIMILARITY_THRESHOLD) {
                    $stats['fuzzy']++;
                    // Optional: Log fuzzy matches to verify later
                    // Log::debug("Fuzzy match: {$fuzzy['similarity']} -> {$fuzzy['name']}");
                    return $fuzzy['name'];
                }

                $stats['failed']++;
                return $svg; // Keep original if no match found
            });

            if (!$this->option('dry-run')) {
                $pageSection->update(['data' => $updatedData]);
            }

            $bar->advance();
        }

        $bar->finish();
        $this->newLine(2);

        $this->table(['Match Type', 'Count'], [
            ['Exact Matches (Hash)', $stats['matched']],
            ['Fuzzy Matches (Bigram Cosine)', $stats['fuzzy']],
            ['Failures (Kept original)', $stats['failed']],
        ]);

        if ($this->option('dry-run')) {
            $this->warn("This was a DRY RUN. No changes were saved to the database.");
        }
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

    /**
     * Generates a deterministic hash based purely on geometry.
     * Styles (fill, stroke, classes) are stripped out.
     */
    private function normalizeSvg(string $svg): string
    {
        $dom = $this->getDom($svg);
        if (!$dom) return md5($svg);

        $shapes = [];
        $geometryMap = [
            'path'    => ['d'],
            'rect'    => ['x', 'y', 'width', 'height'],
            'circle'  => ['cx', 'cy', 'r'],
            'ellipse' => ['cx', 'cy', 'rx', 'ry'],
            'line'    => ['x1', 'y1', 'x2', 'y2'],
            'polygon' => ['points'],
            'polyline' => ['points'],
        ];

        foreach ($geometryMap as $tag => $attrs) {
            foreach ($dom->getElementsByTagName($tag) as $node) {
                $geom = [];
                foreach ($attrs as $attr) {
                    if ($node->hasAttribute($attr)) {
                        $val = $node->getAttribute($attr);
                        // Normalize numbers to ignore float precision diffs (10.0001 vs 10)
                        $geom[$attr] = in_array($attr, ['d', 'points']) ? $this->normalizePathNumbers($val) : $val;
                    }
                }
                ksort($geom);
                $shapes[] = $tag . ':' . json_encode($geom);
            }
        }

        sort($shapes);
        return md5(implode('|', $shapes));
    }

    private function findSimilarSvg(string $targetSvg, Collection $svgIndex): ?array
    {
        $targetSig = $this->getPathSignature($targetSvg);
        $targetNodes = $this->countGeometryNodes($targetSvg);

        // Sanity check: if empty, no match possible
        if ($targetNodes === 0 || empty($targetSig)) return null;

        $bestMatch = null;
        $maxSimilarity = 0;

        foreach ($svgIndex as $candidate) {
            // Heuristic Optimization:
            // If node count differs significantly (> 20%), it's likely a completely different shape.
            if ($candidate['nodeCount'] > 0) {
                $nodeDiff = abs($targetNodes - $candidate['nodeCount']) / $targetNodes;
                if ($nodeDiff > 0.2) continue;
            }

            $similarity = $this->calculateCosineSimilarity($targetSig, $candidate['signature']);

            if ($similarity > $maxSimilarity) {
                $maxSimilarity = $similarity;
                $bestMatch = ['name' => $candidate['name'], 'similarity' => $similarity];
            }

            // Early exit on perfect fuzzy match
            if ($similarity > 0.99) break;
        }

        return $bestMatch;
    }

    /**
     * Generates a "Bag of Bigrams" signature from the SVG path commands.
     * Instead of {M:1, L:1}, we get {ML:1, La:1}. This preserves sequence context.
     */
    private function getPathSignature(string $svg): array
    {
        // Extract all command letters (case sensitive to preserve relative/absolute distinction)
        preg_match_all('/[A-Za-z]/', $svg, $matches);
        $commands = $matches[0];

        if (empty($commands)) return [];

        $bigrams = [];
        $count = count($commands);

        // If only 1 command (e.g., a simple shape or weird SVG), we treat it as a unigram
        if ($count === 1) {
            return [$commands[0] => 1];
        }

        for ($i = 0; $i < $count - 1; $i++) {
            $pair = $commands[$i] . $commands[$i + 1];
            if (!isset($bigrams[$pair])) {
                $bigrams[$pair] = 0;
            }
            $bigrams[$pair]++;
        }

        return $bigrams;
    }

    /**
     * Calculates Cosine Similarity between two bigram vectors.
     * Returns a float between 0 (orthonormal/different) and 1 (identical vector direction).
     */
    private function calculateCosineSimilarity(array $sig1, array $sig2): float
    {
        $allKeys = array_unique(array_merge(array_keys($sig1), array_keys($sig2)));
        $dotProduct = 0;
        $mag1 = 0;
        $mag2 = 0;

        foreach ($allKeys as $key) {
            $v1 = $sig1[$key] ?? 0;
            $v2 = $sig2[$key] ?? 0;

            $dotProduct += $v1 * $v2;
            $mag1 += $v1 ** 2;
            $mag2 += $v2 ** 2;
        }

        if ($mag1 == 0 || $mag2 == 0) return 0;

        return $dotProduct / (sqrt($mag1) * sqrt($mag2));
    }

    private function normalizePathNumbers(string $pathData): string
    {
        // Round all numbers to 1 decimal to standardise precision
        return preg_replace_callback('/-?\d+\.?\d*/', fn($m) => round((float)$m[0], 1), $pathData);
    }

    private function countGeometryNodes(string $svg): int
    {
        return preg_match_all('/<(path|rect|circle|ellipse|line|polygon|polyline)/i', $svg);
    }

    private function getDom(string $xml): ?DOMDocument
    {
        $dom = new DOMDocument();
        libxml_use_internal_errors(true);
        // Load XML without network access for security
        if (!$dom->loadXML($xml, LIBXML_NONET)) {
            libxml_clear_errors();
            return null;
        }
        libxml_clear_errors();
        return $dom;
    }

    private function extractIconName(string $key): string
    {
        // Extracts "heroicons_solid" from "heroicons_solid__check-circle"
        $parts = explode('__', $key, 2);
        return $parts[1] ?? $key;
    }
}
