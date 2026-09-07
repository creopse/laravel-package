<?php

namespace Creopse\Creopse\Http\Requests\Auth;

use Creopse\Creopse\Traits\RequestValidationException;
use Illuminate\Contracts\Validation\Rule;
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
     * @return array<string, Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', 'string'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
            'device_name' => ['sometimes', 'string'],
            'device_id' => ['sometimes', 'string'],
            // Only guards actually configured in config/auth.php - 'api'/'mobile'
            // are Spatie permission guard_name tags, not real Laravel auth
            // guards, and Auth::shouldUse() would error on either.
            'guard' => ['sometimes', 'string', 'in:web,admin'],
        ];
    }
}
