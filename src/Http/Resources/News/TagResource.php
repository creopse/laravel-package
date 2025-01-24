<?php

namespace Creopse\Creopse\Http\Resources\News;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
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
            'isActive' => $this->is_active,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'articles' => $this->whenLoaded('articles', function () {
                return ArticleResource::collection($this->articles->load(['categories:id,name,slug', 'tags:id,name,slug']));
            }),
            'articlesCount' => $this->whenCounted('articles'),
        ];
    }
}
