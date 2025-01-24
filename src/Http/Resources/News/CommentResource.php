<?php

namespace Creopse\Creopse\Http\Resources\News;

use Creopse\Creopse\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'email' => $this->email,
            'content' => $this->content,
            'isActive' => $this->is_active,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'article' => $this->whenLoaded('article', function () {
                return new ArticleResource($this->article->load(['categories:id,name,slug', 'tags:id,name,slug']));
            }),
            'author' => $this->whenLoaded('author', function () {
                return new UserResource($this->author->load(['profile', 'roles', 'permissions']));
            }),
        ];
    }
}
