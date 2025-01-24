<?php

namespace Creopse\Creopse\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class Json implements CastsAttributes
{
    /**
     * Cast the given value by decoding it from JSON format to an associative array.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return json_decode($value, true);
    }

    /**
     * Prepare the given value for storage by encoding it to JSON format with the JSON_FORCE_OBJECT option.
     * It can replace default 'array' cast in the case it is useful to force empty array conversion to object.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return json_encode($value, JSON_FORCE_OBJECT);
    }
}
