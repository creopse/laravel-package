<?php

// getData() used to run NewsComment::find($id)->with([...])->first(), which
// starts a fresh query and returns the first comment in the table instead of
// the one being notified. It also eager-loaded a non-existent `publisher`
// relation and read `$comment->user`, which does not exist either.

use Creopse\Creopse\Models\NewsArticle;
use Creopse\Creopse\Models\NewsComment;
use Creopse\Creopse\Models\User;
use Creopse\Creopse\Notifications\UserCreateComment;

function notifiedArticle(string $title): NewsArticle
{
    return NewsArticle::create(['title' => json_encode(['en' => $title]), 'slug' => 'article-'.uniqid()]);
}

it('describes the notified comment, not the first one in the table', function () {
    $olderAuthor = User::factory()->create(['firstname' => 'Older', 'lastname' => 'Author']);
    $author = User::factory()->create(['firstname' => 'Jane', 'lastname' => 'Doe']);

    NewsComment::create([
        'content' => 'Older comment',
        'article_id' => notifiedArticle('Older article')->id,
        'author_id' => $olderAuthor->id,
    ]);

    $article = notifiedArticle('Fresh article');
    $comment = NewsComment::create([
        'content' => 'Fresh comment',
        'article_id' => $article->id,
        'author_id' => $author->id,
    ]);

    $data = (new UserCreateComment($comment->id, $article->id))->toArray(User::factory()->create());

    expect($data['title'])->toContain('Fresh article')
        ->and($data['content'])->toContain('Jane Doe')
        ->and($data['triggeredBy'])->toBe($author->id);
});

it('falls back to the typed name for a guest comment', function () {
    $article = notifiedArticle('Guest article');
    $comment = NewsComment::create([
        'content' => 'Guest comment',
        'article_id' => $article->id,
        'name' => 'Anonymous Visitor',
    ]);

    $data = (new UserCreateComment($comment->id, $article->id))->toArray(User::factory()->create());

    expect($data['content'])->toContain('Anonymous Visitor')
        ->and($data['triggeredBy'])->toBeNull();
});
