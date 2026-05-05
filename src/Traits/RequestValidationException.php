<?php

namespace Creopse\Creopse\Traits;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Helpers\Functions;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

trait RequestValidationException
{
    use ApiResponse;

    /**
     * Handle a failed validation attempt.
     *
     * @return void
     *
     * @throws ValidationException
     */
    protected function failedValidation(Validator $validator)
    {
        $request = request();

        if (Functions::isApiRequest($request)) {
            throw new ValidationException($validator, $this->sendResponse(
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
