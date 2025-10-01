<?php

namespace Creopse\Creopse\Http\Resources\Content;

use Illuminate\Http\Resources\Json\JsonResource;

class VideoCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'color' => $this->color,
            'position' => $this->position,
            'description' => $this->description,
            'parentId' => $this->parent_id,
            'isActive' => $this->is_active,
            'image' => $this->image,
            'imageUrl' => $this->image_url,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'parent' => $this->whenLoaded('parent', function () {
                return new VideoCategoryResource($this->parent);
            }),
            'items' => $this->whenLoaded('items', function () {
                return VideoItemResource::collection($this->items->load(['categories:id,name,slug']));
            }),
            'subCategories' => $this->whenLoaded('subCategories', function () {
                return VideoCategoryResource::collection($this->subCategories->load(['items']));
            }),
            'itemsCount' => $this->whenCounted('items'),
            'subCategoriesCount' => $this->whenCounted('subCategories'),
        ];
    }
}
