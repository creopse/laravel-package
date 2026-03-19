<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;

class CompressResponse
{
    /**
     * MIME types eligible for compression.
     * Binary types (images, videos, zip...) are already compressed — no point recompressing.
     */
    protected array $compressibleTypes = [
        'text/html',
        'text/plain',
        'text/css',
        'text/javascript',
        'text/xml',
        'text/csv',
        'application/json',
        'application/javascript',
        'application/xml',
        'application/rss+xml',
        'application/atom+xml',
        'application/ld+json',
        'application/geo+json',
        'image/svg+xml',
    ];

    /**
     * Paths excluded from compression (debug bar, telescope, horizon...).
     */
    protected array $excludedPaths = [
        '_debugbar',
        'telescope',
        'horizon',
    ];

    public function handle(Request $request, Closure $next): mixed
    {
        $response = $next($request);

        // Binary and streamed responses are not compressible
        if ($response instanceof BinaryFileResponse || $response instanceof StreamedResponse) {
            return $response;
        }

        // Skip excluded paths
        if ($this->isExcludedPath($request)) {
            return $response;
        }

        // Already compressed upstream (nginx, cloudflare...)
        if ($response->headers->has('Content-Encoding')) {
            return $response;
        }

        // Non-compressible Content-Type
        if (! $response instanceof Response || ! $this->isCompressibleContentType($response)) {
            return $response;
        }

        $content = $response->getContent();

        // No content, nothing to do
        if ($content === false || $content === '') {
            return $response;
        }

        // Minimum threshold: no point compressing tiny payloads
        $minLength = config('creopse.compression.min_length', 1024);
        if (strlen($content) < $minLength) {
            return $response;
        }

        // Negotiate the best algorithm based on client's Accept-Encoding
        $encoding = $this->negotiateEncoding($request);

        if ($encoding === null) {
            return $response;
        }

        $compressed = $this->compress($content, $encoding);

        if ($compressed === false) {
            return $response;
        }

        // Sanity check: if compression inflated the response, bail out
        if (strlen($compressed) >= strlen($content)) {
            return $response;
        }

        return $response
            ->setContent($compressed)
            ->withHeaders([
                'Content-Encoding' => $encoding,
                'Content-Length'   => (string) strlen($compressed),
                'Vary'             => 'Accept-Encoding',
            ]);
    }

    /**
     * Negotiate the optimal algorithm in order: br > gzip > deflate.
     * Brotli is only used over HTTPS — browsers refuse it over plain HTTP.
     */
    protected function negotiateEncoding(Request $request): ?string
    {
        $accepted = strtolower($request->header('Accept-Encoding', ''));
        $secure   = $request->isSecure();

        if ($secure && str_contains($accepted, 'br') && function_exists('brotli_compress')) {
            return 'br';
        }

        if (str_contains($accepted, 'gzip') && function_exists('gzencode')) {
            return 'gzip';
        }

        if (str_contains($accepted, 'deflate') && function_exists('gzdeflate')) {
            return 'deflate';
        }

        return null;
    }

    /**
     * Compress content using the negotiated algorithm.
     */
    protected function compress(string $content, string $encoding): string|false
    {
        $level = (int) config('creopse.compression.level', 5);

        return match ($encoding) {
            'br'      => $this->brotliCompress($content, $level),
            'gzip'    => gzencode($content, min($level, 9)),
            'deflate' => gzdeflate($content, min($level, 9)),
            default   => false,
        };
    }

    /**
     * Brotli compression isolated in its own method to avoid static analysis
     * errors when ext-brotli is not installed (Intelephense, PHPStan...).
     */
    protected function brotliCompress(string $content, int $level): string|false
    {
        if (! function_exists('brotli_compress')) {
            return false;
        }

        /** @var callable $fn */
        $fn = 'brotli_compress';

        return $fn($content, min($level, 11));
    }

    /**
     * Check whether the response Content-Type is in the compressible whitelist.
     */
    protected function isCompressibleContentType(Response $response): bool
    {
        $contentType = $response->headers->get('Content-Type', '');

        // Strip parameters (e.g. "application/json; charset=utf-8")
        $type = strtolower(explode(';', $contentType)[0]);

        return in_array(trim($type), $this->compressibleTypes, strict: true);
    }

    /**
     * Check whether the current path is excluded from compression.
     */
    protected function isExcludedPath(Request $request): bool
    {
        $path = $request->path();

        foreach ($this->excludedPaths as $excluded) {
            if (str_starts_with($path, $excluded)) {
                return true;
            }
        }

        return false;
    }
}
