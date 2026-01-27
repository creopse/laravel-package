<?php

namespace Creopse\Creopse\Http\Requests\Auth;

use Creopse\Creopse\Traits\RequestValidationException;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    use RequestValidationException;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', 'string'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
            'device_name' => ['sometimes', 'string'],
            'device_id' => ['sometimes', 'string'],
        ];
    }
}
