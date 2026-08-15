<?php

// SEC-10: store() is public and used to take author_id/is_active straight
// from request input, letting any anonymous visitor post a pre-approved
// comment under someone else's identity. update() mass-assigned via
// $request->all(), letting any authenticated caller reassign an existing
// comment's authorship. author_id now only ever reflects Auth::id() and is
// never accepted from the update payload.

use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsComment;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

function commentArticle(): NewsArticle
{
    return NewsArticle::create(['title' => 'An article', 'slug' => 'an-article-'.uniqid()]);
}

it('ignores a guest-supplied author_id and posts anonymously', function () {
    $victim = User::factory()->create();
    $article = commentArticle();

    $response = $this->postJson('/api/news-comments', [
        'content' => 'Hello there',
        'article_id' => $article->id,
        'author_id' => $victim->id,
        'is_active' => true,
    ]);

    $response->assertCreated();

    $comment = NewsComment::first();
    expect($comment->author_id)->toBeNull();
});

it('attributes a comment to the actual authenticated caller, not a spoofed author_id', function () {
    $caller = User::factory()->create();
    $victim = User::factory()->create();
    $article = commentArticle();

    Sanctum::actingAs($caller, ['*']);

    $this->postJson('/api/news-comments', [
        'content' => 'Hello there',
        'article_id' => $article->id,
        'author_id' => $victim->id,
    ])->assertCreated();

    $comment = NewsComment::first();
    expect($comment->author_id)->toBe($caller->id);
});

it('refuses to let an update reassign a comment\'s author_id', function () {
    $author = User::factory()->create();
    $impersonator = User::factory()->create();
    $article = commentArticle();
    $comment = NewsComment::create([
        'content' => 'Original content',
        'article_id' => $article->id,
        'author_id' => $author->id,
        'is_active' => true,
    ]);

    Sanctum::actingAs($impersonator, ['*']);

    $this->putJson("/api/news-comments/{$comment->id}", [
        'content' => 'Edited content',
        'author_id' => $impersonator->id,
    ])->assertOk();

    $comment->refresh();
    expect($comment->author_id)->toBe($author->id);
    expect($comment->content)->toBe('Edited content');
});
