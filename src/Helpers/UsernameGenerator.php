<?php

namespace Creopse\Creopse\Helpers;

use App\Models\User;
use Illuminate\Support\Str;

class UsernameGenerator
{
    /**
     * Generate a unique username from firstname and lastname
     */
    public static function generate(string $firstname, string $lastname): string
    {
        // Base normalization
        $base = self::normalize($firstname, $lastname);

        // If already unique, return it directly
        if (!self::exists($base)) {
            return $base;
        }

        // Otherwise add a numeric suffix
        return self::makeUnique($base);
    }

    /**
     * Normalize and create the base username
     */
    private static function normalize(string $firstname, string $lastname): string
    {
        // Convert to lowercase, remove accents and special characters
        $firstname = Str::slug(Str::lower($firstname), '');
        $lastname = Str::slug(Str::lower($lastname), '');

        // Format: firstname.lastname (you can adapt to your preferences)
        $username = $firstname . '.' . $lastname;

        // Length limit (optional)
        if (strlen($username) > 30) {
            // Shorten firstname if too long
            $username = substr($firstname, 0, 1) . '.' . $lastname;
        }

        return $username;
    }

    /**
     * Check if username already exists
     */
    private static function exists(string $username): bool
    {
        return User::where('username', $username)->exists();
    }

    /**
     * Make username unique by adding a suffix
     */
    private static function makeUnique(string $base): string
    {
        $counter = 1;

        do {
            $username = $base . $counter;
            $counter++;
        } while (self::exists($username));

        return $username;
    }
}
