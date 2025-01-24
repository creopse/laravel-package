<?php

namespace Creopse\Creopse\Http\Resources\News;

use Creopse\Creopse\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
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
            'summary' => $this->summary,
            'content' => $this->content,
            'featuredImage' => $this->featured_image,
            'featuredImageUrl' => $this->featured_image_url,
            'legend' => $this->legend,
            'allowComments' => $this->allow_comments,
            'isHeadline' => $this->is_headline,
            'status' => $this->status,
            'publishedAt' => $this->published_at,
            'publisher' => new UserResource(
                $this->publisher
            ),
            'publisherId' => $this->publisher_id,
            'author' => new UserResource($this->author),
            'authorId' => $this->author_id,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'categories' => $this->whenLoaded('categories', function () {
                return CategoryResource::collection($this->categories);
            }),
            'categoriesCount' => $this->whenCounted('categories'),
            'tags' => $this->whenLoaded('tags', function () {
                return TagResource::collection($this->tags);
            }),
            'tagsCount' => $this->whenCounted('tags'),
            'comments' => $this->whenLoaded('comments', function () {
                return CommentResource::collection($this->comments->sortBy('created_at'));
            }),
            'commentsCount' => $this->whenCounted('comments'),
        ];
    }
}
