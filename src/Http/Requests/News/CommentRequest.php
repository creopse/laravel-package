<?php

namespace Creopse\Creopse\Http\Requests\News;

use Creopse\Creopse\Traits\RequestValidationException;
use Illuminate\Foundation\Http\FormRequest;

class CommentRequest extends FormRequest
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
            'content' => 'required|string',
            'article_id' => 'required|exists:news_articles,id',
        ];
    }
}
