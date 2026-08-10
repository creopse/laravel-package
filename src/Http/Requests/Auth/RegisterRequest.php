<?php

namespace Creopse\Creopse\Http\Requests\Auth;

use Creopse\Creopse\Traits\RequestValidationException;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['sometimes', 'unique:users'],
            'lastname' => ['required'],
            'firstname' => ['required'],
            // The trailing regex is a compensating control for CVE-2026-48019
            // (CRLF injection via the email rule) - fixed upstream in Laravel
            // 12.60.0/13.10.0 but not backported to 11.x, which this package
            // still supports. Mirrors the exact check Laravel's own patch
            // added to validateEmail().
            'email' => ['required', 'email', 'regex:/^[^\r\n]*$/', 'unique:users'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->numbers(),
                // ->uncompromised()
            ],
            'account_status' => ['sometimes'],
            'preferences' => ['sometimes', 'array'],
            'avatar' => ['sometimes'],
            'device_name' => ['sometimes', 'string'],
            'device_id' => ['sometimes', 'string'],
            'guard' => ['sometimes', 'string', 'in:api,web,admin,mobile'],
        ];
    }
}
