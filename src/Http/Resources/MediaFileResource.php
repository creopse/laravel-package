<?php

namespace Creopse\Creopse\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaFileResource extends JsonResource
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
            'foreignId' => $this->foreign_id,
            'senderId' => $this->sender_id,
            'sender' => new UserResource($this->sender),
            'url' => $this->media_url,
            'name' => $this->name,
            'path' => $this->path,
            'size' => $this->size,
            'type' => $this->type,
            'extension' => $this->extension,
            'mimeType' => $this->mime_type,
            'title' => $this->title,
            'description' => $this->description,
            'additionalMetadata' => $this->additional_metadata,
            'deletedAt' => $this->deleted_at,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
