<?php

namespace Creopse\Creopse\Http\Resources\Ads;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdIdentifierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'contentType' => $this->content_type,
            'contentSize' => $this->content_size,
            'reusable' => $this->reusable,
            'params' => $this->params,
            'ads' => $this->whenLoaded('ads', function () {
                return AdResource::collection($this->ads);
            }),
            'adsCount' => $this->ads_count,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
