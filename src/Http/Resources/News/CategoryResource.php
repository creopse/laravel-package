<?php

namespace Creopse\Creopse\Http\Resources\News;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
                return new CategoryResource($this->parent);
            }),
            'articles' => $this->whenLoaded('articles', function () {
                return ArticleResource::collection($this->articles->load(['categories:id,name,slug', 'tags:id,name,slug']));
            }),
            'subCategories' => $this->whenLoaded('subCategories', function () {
                return CategoryResource::collection($this->subCategories->load(['articles']));
            }),
            'articlesCount' => $this->whenCounted('articles'),
            'subCategoriesCount' => $this->whenCounted('subCategories'),
        ];
    }
}
