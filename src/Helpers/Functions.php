<?php

namespace Creopse\Creopse\Helpers;

use Creopse\Creopse\Enums\TokenAbility;
use Creopse\Creopse\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\NewAccessToken;
use Illuminate\Support\Str;

class Functions
{
    /**
     * check if array is associative
     *
     * @param  mixed $arr
     * @return bool
     */
    static function isAssoc(array $arr)
    {
        if (array() === $arr) return false;

        return array_keys($arr) !== range(0, count($arr) - 1);
    }

    /**
     * check if string start with provided string part
     *
     * @param  mixed $string
     * @param  mixed $startString
     * @return bool
     */
    static function startsWith($string, $startString)
    {
        $len = strlen($startString);

        return (substr($string, 0, $len) === $startString);
    }

    /**
     * check if string end with provided string part
     *
     * @param  mixed $string
     * @param  mixed $endString
     * @return bool
     */
    static function endsWith($string, $endString)
    {
        $len = strlen($endString);

        if ($len == 0) return true;

        return (substr($string, -$len) === $endString);
    }

    /**
     * Check if the request is an API request.
     *
     * @return bool
     */
    static function isApiRequest(Request $request): bool
    {
        return $request->is('api/*') || $request->header('Accept') == 'application/json';
    }

    /**
     * generate uid
     *
     * @return string
     */
    static function generateUid(): string
    {
        $uid = (string) Str::uuid();

        if (User::whereUid($uid)->exists()) {
            return self::generateUid();
        }

        return $uid;
    }

    /**
     * generate access token
     *
     * @return NewAccessToken
     */
    static function generateAccessToken(User $user, $expireAt = null): NewAccessToken
    {
        return $user->createToken(
            'access-token',
            [TokenAbility::ACCESS_API->value],
            $expireAt ?? now()->addHours(24)
        );
    }

    /**
     * generate refresh token
     *
     * @return NewAccessToken
     */
    static function generateRefreshToken(User $user, $longDuration = true): NewAccessToken
    {
        $tokens = $user->tokens()->where('name', 'refresh-token')->get();

        foreach ($tokens as $token) {
            $token->delete();
        }

        return $user->createToken(
            'refresh-token',
            [TokenAbility::ISSUE_ACCESS_TOKEN->value],
            $longDuration ? now()->addWeeks(3) : now()->addDays(3)
        );
    }

    /**
     * translate json string
     *
     * @return string
     */
    static function trans($jsonString): string
    {
        if ($jsonString !== null) {
            $cleanJsonString = preg_replace('/\s+/', ' ', $jsonString);
            $data = json_decode($cleanJsonString, true);

            $currentLocale = app()->getLocale();

            // Get the value for the current locale, if available
            $firstValue = $data[$currentLocale] ?? null;

            try {
                // If the value for the current locale is empty, try other locales
                if (empty($firstValue)) {
                    foreach ($data as $value) {
                        if (!empty($value)) {
                            $firstValue = $value;
                            break;
                        }
                    }
                }
            } catch (\Exception $e) {
                Log::channel('debug')->debug($cleanJsonString);
                Log::channel('debug')->debug($e->getMessage());
            }

            return $firstValue ?? '';
        }

        return '';
    }

    /**
     * Converts the keys of an array or object to camel case recursively.
     *
     * @param mixed $data The data to convert the keys of.
     * @return array The converted data with camel case keys.
     */
    static function convertKeysToCamelCase($data)
    {
        if (is_null($data)) {
            return $data;
        }

        return collect($data)->map(function ($value, $key) {
            if (is_array($value)) {
                $value = self::convertKeysToCamelCase($value); // Recursively convert sub-properties
            }

            return [Str::camel($key) => $value];
        })->flatMap(function ($item) {
            return $item;
        })->all();
    }

    /**
     * Converts the keys of a collection to camel case recursively.
     *
     * @param mixed $data The data to convert the keys of.
     * @return Collection The converted collection with camel case keys.
     */
    static function convertCollectionKeysToCamelCase($data)
    {
        return $data->map(function ($item) {
            return self::convertKeysToCamelCase($item);
        });
    }

    /**
     * Convert a string to PascalCase.
     *
     * @param string $string
     * @return string
     */
    static function strToPascalCase(string $string): string
    {
        $string = ucwords(str_replace(['-', '_', ' '], ' ', $string));

        return str_replace(' ', '', $string);
    }

    /**
     * Convert a string to normal text with only the first letter uppercase and words separated by space.
     *
     * @param string $string
     * @return string
     */
    static function strToNormalText(string $string): string
    {
        // Replace underscores and hyphens with spaces
        $string = str_replace(['-', '_'], ' ', $string);

        // Insert a space before each uppercase letter (for camel case)
        $string = preg_replace('/(?<!\ )[A-Z]/', ' $0', $string);

        // Convert the string to lowercase
        $string = strtolower($string);

        // Capitalize the first letter of the entire string
        $string = ucfirst($string);

        return $string;
    }

    /**
     * Replaces empty spaces in a string with a given string.
     *
     * @param string $str The string to replace empty spaces in.
     * @param string $with The string to replace empty spaces with.
     * @return string The string with empty spaces replaced.
     */
    static function replaceEmptySpaces($str, $with = '%20'): string
    {
        return str_replace(' ', $with, $str);
    }

    /**
     * Generates a route name from a given path.
     *
     * This function takes a route path and converts it into a valid route name.
     * It removes leading and trailing slashes, replaces route parameters with
     * a placeholder, replaces slashes with dots, and replaces dashes with
     * underscores (optional).
     *
     * @param string $path The route path to generate a route name from.
     * @return string The generated route name.
     */
    static function generateRouteNameFromPath(string $path): string
    {
        if ($path === '/') return 'home.index';

        // Remove leading and trailing slashes
        $path = trim($path, '/');

        // Replace parameters (e.g., {id}) with a placeholder
        $path = preg_replace('/\{[^\/]+\}/', 'param', $path);

        // Replace slashes with dots
        $name = str_replace('/', '.', $path);

        return $name;
    }

    /**
     * Generates a password with the specified length and character options.
     *
     * @param int $length The length of the password to be generated. Default is 10.
     * @param array $options The character options for the password. Default is ['letters' => true, 'numbers' => true, 'symbols' => false].
     * @return string The generated password.
     */
    static function genPassword(int $length = 10, array $options = ['letters' => true, 'numbers' => true, 'symbols' => false]): string
    {
        $letters = $options['letters'] ?? true;
        $numbers = $options['numbers'] ?? true;
        $symbols = $options['symbols'] ?? false;

        if (!$letters && !$numbers && !$symbols) {
            return '';
        }

        $lettersBase = str_split('abcdefghijklmnopqrstuvwxyz');
        $numbersBase = str_split('0123456789');
        $symbolsBase = str_split('!@#$%^&*()');

        $base = [];

        if ($letters) {
            $base = array_merge($base, $lettersBase);
        }
        if ($numbers) {
            $base = array_merge($base, $numbersBase);
        }
        if ($symbols) {
            $base = array_merge($base, $symbolsBase);
        }

        shuffle($base);

        $password = '';

        for ($i = 0; $i < $length; $i++) {
            $char = $base[array_rand($base)];

            // Randomly convert letters to uppercase
            if (in_array($char, $lettersBase) && rand(0, 1) === 0) {
                $char = strtoupper($char);
            }

            $password .= $char;
        }

        return $password;
    }


    /**
     * Decode a JSONC string into a PHP variable.
     *
     * JSONC (JSON with comments) is a superset of JSON that allows comments
     * using the C-style comment syntax (// for single-line and \/* *\/ for
     * multi-line comments).
     *
     * This function takes a JSONC string and returns the decoded PHP variable.
     * It ignores any comments in the input string and passes the rest of the
     * string to the json_decode function.
     *
     * @param string $jsonc The JSONC string to decode.
     * @param bool $assoc When true, returned objects will be converted into associative arrays.
     * @param int $depth User specified recursion depth.
     * @param int $flags Bitmask of JSON decode flags.
     * @return mixed The decoded PHP variable.
     */
    static function jsoncDecodeSafe(string $jsonc, bool $assoc = true, int $depth = 512, int $flags = 0)
    {
        $output = '';
        $in_string = false;
        $in_single_line_comment = false;
        $in_multi_line_comment = false;
        $prev_char = '';
        $len = strlen($jsonc);

        for ($i = 0; $i < $len; $i++) {
            $char = $jsonc[$i];
            $next_char = $i + 1 < $len ? $jsonc[$i + 1] : '';

            // Handle string toggling
            if (!$in_single_line_comment && !$in_multi_line_comment) {
                if ($char === '"' && $prev_char !== '\\') {
                    $in_string = !$in_string;
                }
            }

            // Start of // comment
            if (!$in_string && !$in_multi_line_comment && $char === '/' && $next_char === '/') {
                $in_single_line_comment = true;
                $i++; // skip next /
                continue;
            }

            // Start of /* comment
            if (!$in_string && !$in_single_line_comment && $char === '/' && $next_char === '*') {
                $in_multi_line_comment = true;
                $i++; // skip next *
                continue;
            }

            // End of // comment
            if ($in_single_line_comment && ($char === "\n" || $char === "\r")) {
                $in_single_line_comment = false;
                $output .= $char;
                continue;
            }

            // End of /* comment */
            if ($in_multi_line_comment && $char === '*' && $next_char === '/') {
                $in_multi_line_comment = false;
                $i++; // skip /
                continue;
            }

            if (!$in_single_line_comment && !$in_multi_line_comment) {
                $output .= $char;
            }

            $prev_char = $char;
        }

        return json_decode($output, $assoc, $depth, $flags);
    }
}
