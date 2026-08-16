<?php

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\ContentModelItem;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

it('reorders content model items and persists the new position', function () {
    $user = User::factory()->create();
    $user->givePermissionTo(PermissionList::MANAGE_CONTENT->value);
    Sanctum::actingAs($user, ['*']);

    $contentModel = ContentModel::create([
        'name' => 'articles',
        'title' => 'Articles',
    ]);

    $itemA = ContentModelItem::create(['title' => 'A', 'content_model_id' => $contentModel->id, 'position' => 0]);
    $itemB = ContentModelItem::create(['title' => 'B', 'content_model_id' => $contentModel->id, 'position' => 1]);
    $itemC = ContentModelItem::create(['title' => 'C', 'content_model_id' => $contentModel->id, 'position' => 2]);

    expect(
        ContentModelItem::orderBy('position')->pluck('title')->all()
    )->toBe(['A', 'B', 'C']);

    $response = $this->putJson('/api/content-model-items/position', [
        'items' => [
            ['id' => $itemC->id],
            ['id' => $itemA->id],
            ['id' => $itemB->id],
        ],
    ]);

    $response->assertOk();

    expect(
        ContentModelItem::orderBy('position')->pluck('title')->all()
    )->toBe(['C', 'A', 'B']);
});

it('rejects the reorder endpoint for a guest', function () {
    $response = $this->putJson('/api/content-model-items/position', [
        'items' => [],
    ]);

    $response->assertStatus(401);
});
