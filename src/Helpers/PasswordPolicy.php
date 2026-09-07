<?php

namespace Creopse\Creopse\Helpers;

use Illuminate\Validation\Rules\Password;

class PasswordPolicy
{
    /**
     * The complexity rule applied to every password a user sets - at
     * registration, on reset, or when changing an existing one. Kept in one
     * place so the three flows can't silently drift apart in strength.
     */
    public static function complexity(): Password
    {
        return Password::min(8)->letters()->numbers();
    }
}
