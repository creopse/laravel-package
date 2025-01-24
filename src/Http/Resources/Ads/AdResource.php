<?php

namespace Creopse\Creopse\Http\Resources\Ads;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdResource extends JsonResource
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
            'pid' => $this->pid,
            'title' => $this->title,
            'description' => $this->description,
            'content' => $this->content,
            'contentUrl' => $this->content_url,
            'display' => $this->display,
            'data' => $this->data,
            'broadcastStart' => $this->broadcast_start,
            'broadcastEnd' => $this->broadcast_end,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'adIdentifier' => $this->adIdentifier,
        ];
    }
}
