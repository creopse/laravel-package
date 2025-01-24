<?php

namespace Creopse\Creopse\Http\Controllers\Ads;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\Ads\AdRequest;
use Creopse\Creopse\Http\Resources\Ads\AdResource;
use Creopse\Creopse\Models\Ad;
use Illuminate\Http\Request;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->sendResponse(AdResource::collection(Ad::all()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AdRequest $request)
    {
        $request->validated();

        $ad = Ad::create([
            'pid' => $request->input('pid'),
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'description' => $request->input('description'),
            'display' => $request->input('display'),
            'data' => $request->input('data'),
            'broadcast_start' => $request->input('broadcast_start'),
            'broadcast_end' => $request->input('broadcast_end')
        ]);

        return $this->sendResponse(
            new AdResource($ad),
            ResponseStatusCode::CREATED,
            'Ad created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Ad $ad)
    {
        return $this->sendResponse(new AdResource($ad));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ad $ad)
    {
        $ad->update($request->all());

        return $this->sendResponse(
            new AdResource($ad),
            ResponseStatusCode::OK,
            'Ad updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ad)
    {
        $ad->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'Ad deleted successfully'
        );
    }
}
