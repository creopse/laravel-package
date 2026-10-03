<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Twilio\Rest\Client as TwilioClient;

class SmsController extends Controller
{
    public function send(Request $request)
    {
        $twilioConfig = config('services.twilio');

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'content' => 'required|string',
            'from' => 'sometimes|string',
            'from_name' => 'sometimes|string',
            'recipients' => 'required|array',
            'recipients.*' => 'phone',
        ]);

        // If data not valid return error
        if ($validator->fails()) {
            return $this->sendResponse(
                $validator->errors(),
                ResponseStatusCode::UNPROCESSABLE_ENTITY,
                'SMS data validation failed',
                ResponseErrorCode::FORM_INVALID_DATA
            );
        }

        try {
            $twilio = new TwilioClient($twilioConfig['sid'], $twilioConfig['token']);

            $messageSids = [];

            foreach ($request->input('recipients') as $phoneNumber) {
                $message = $twilio->messages->create(
                    $phoneNumber,
                    [
                        'from' => $request->input('from'),
                        'body' => strip_tags($request->input('content')),
                    ]
                );

                $messageSids[] = $message->sid;
            }

            return $this->sendResponse(
                $messageSids,
                ResponseStatusCode::OK,
                'SMS sent successfully with Twilio',
            );
        } catch (\Exception $e) {
            // Logged, never returned: the raw exception used to be sent back
            // to the client, provider request details included.
            Log::error('SMS sending failed: '.$e->getMessage());

            return $this->sendResponse(
                null,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                'SMS sending failed',
            );
        }
    }
}
