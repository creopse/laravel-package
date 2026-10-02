<?php

namespace Creopse\Creopse\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Http\UploadedFile;

class SafeUpload implements ValidationRule
{
    /**
     * Extensions a web server may execute, or a browser render as a page
     * from the site's own origin. Uploads land on the public disk and are
     * served from the same domain as the admin, so any of these could run
     * server-side code or script in an administrator's session.
     */
    private const BLOCKED_EXTENSIONS = [
        'php', 'php3', 'php4', 'php5', 'php7', 'php8', 'phtml', 'pht', 'phps', 'phar',
        'cgi', 'pl', 'py', 'sh', 'asp', 'aspx', 'jsp',
        'htaccess', 'htpasswd',
        'html', 'htm', 'xhtml', 'shtml', 'xht',
    ];

    /**
     * Run the validation rule.
     *
     * The media library otherwise accepts any file type on purpose (see
     * config/creopse.php). Both the client-supplied extension and the one
     * guessed from the file's content are checked: the stored file name
     * takes the guessed one, and the client one may still be served as-is
     * by a download.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! $value instanceof UploadedFile) {
            return;
        }

        $extensions = array_filter([
            strtolower($value->getClientOriginalExtension()),
            strtolower((string) $value->guessExtension()),
        ]);

        // PHP source has no extension mapped to its MIME type, so the
        // content check above can't catch a script renamed to photo.jpg.
        $isPhpSource = str_contains(strtolower((string) $value->getMimeType()), 'php');

        if ($isPhpSource || array_intersect($extensions, self::BLOCKED_EXTENSIONS) !== []) {
            $fail('This file type is not allowed.');
        }
    }
}
