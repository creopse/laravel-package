<?php

namespace Creopse\Creopse\Http\Resources\Content;

use Creopse\Creopse\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VideoItemResource extends JsonResource
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
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'path' => $this->path,
            'url' => $this->url,
            'thumbnail' => $this->thumbnail,
            'thumbnailUrl' => $this->thumbnail_url,
            'source' => $this->source,
            'displayType' => $this->display_type,
            'isVisible' => $this->is_visible,
            'categories' => VideoCategoryResource::collection($this->categories),
            'publisher' => new UserResource(
                $this->publisher
            ),
            'publisherId' => $this->publisher_id,
            'publishedAt' => $this->published_at,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
