<?php

namespace Creopse\Creopse\Http\Resources\Content;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContentModelResource extends JsonResource
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
            'slug' => $this->slug,
            'name' => $this->name,
            'title' => $this->title,
            'image' => $this->image,
            'imageUrl' => $this->image_url,
            'description' => $this->description,
            'dataStructure' => $this->data_structure,
            'titleFieldName' => $this->title_field_name,
            'intent' => $this->intent,
            'accessScope' => $this->access_scope,
            'hasPermalink' => $this->has_permalink,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
