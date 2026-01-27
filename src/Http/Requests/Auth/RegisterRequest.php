<?php

namespace Creopse\Creopse\Http\Requests\Auth;

use Creopse\Creopse\Traits\RequestValidationException;
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['sometimes', 'unique:users'],
            'lastname' => ['required'],
            'firstname' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->numbers()
                //->uncompromised()
            ],
            'account_status' => ['sometimes'],
            'preferences' => ['sometimes', 'array'],
            'avatar' => ['sometimes'],
            'device_name' => ['sometimes', 'string'],
            'device_id' => ['sometimes', 'string'],
        ];
    }
}
