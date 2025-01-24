<?php

namespace Creopse\Creopse\Http\Controllers;

use Creopse\Creopse\Enums\ResponseErrorCode;
use Creopse\Creopse\Enums\ResponseStatusCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Twilio\Rest\Client as TwilioClient;

class SmsController extends Controller
{
    public function send(Request $request)
    {
        $twilioConfig = config('services.twilio');
        $wassaSmsConfig = config('services.wassa_sms');

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'content' => 'required|string',
            'from' => 'sometimes|string',
            'from_name' => 'sometimes|string',
            'recipients' => 'required|array',
            'recipients.*' => 'phone',
            'provider' => 'sometimes|in:twilio,wassa_sms'
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
            if ($request->input('provider') == 'wassa_sms') {
                $client = new \GuzzleHttp\Client();

                $messageSids = [];

                foreach ($request->input('recipients') as $phoneNumber) {
                    $response = $client->get(
                        $wassaSmsConfig['endpoint'],
                        [
                            'query' => [
                                'access-token' => $wassaSmsConfig['token'],
                                'sender'       => $request->input('from'),
                                'receiver'     => str_replace('+', '', $phoneNumber),
                                'text'         => strip_tags($request->input('content')),
                                'dlr_url'      => '',
                            ]
                        ]
                    );

                    $messageSids[] = $response->getBody()->getContents();
                }

                return $this->sendResponse(
                    $messageSids,
                    ResponseStatusCode::OK,
                    'SMS sent successfully with WassaSMS',
                );
            } else {
                $twilio = new TwilioClient($twilioConfig['sid'], $twilioConfig['token']);

                $messageSids = [];

                foreach ($request->input('recipients') as $phoneNumber) {
                    $message = $twilio->messages->create(
                        $phoneNumber,
                        [
                            "from" => $request->input('from'),
                            "body" => strip_tags($request->input('content'))
                        ]
                    );

                    $messageSids[] = $message->sid;
                }

                return $this->sendResponse(
                    $messageSids,
                    ResponseStatusCode::OK,
                    'SMS sent successfully with Twilio',
                );
            }
        } catch (\Exception $e) {

            return $this->sendResponse(
                $e,
                ResponseStatusCode::INTERNAL_SERVER_ERROR,
                "SMS sending failed: $e",
            );
        }
    }
}
