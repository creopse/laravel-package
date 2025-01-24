<?php

namespace Creopse\Creopse\Traits;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;

trait RequestValidationException
{
    use ApiResponse;

    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $request = request();

        if (Functions::isApiRequest($request)) {
            throw new \Illuminate\Validation\ValidationException($validator, $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'Validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            ));
        } else {
            parent::failedValidation($validator);
        }
    }
}
