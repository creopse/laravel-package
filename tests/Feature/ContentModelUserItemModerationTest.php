<?php

// SEC: PUT /content-model/user-items/{id} is a public route for anonymous
// submissions to user-editable content models. It used to mass-assign the
// whole request, letting an anonymous caller flip is_active to bypass
// moderation, spoof created_by_type/created_by, or reassign
// content_model_id into a different (possibly internal) content model
// after the access-scope check had already passed on the old value. Only
// title and content_model_data are accepted from this route now.

use Creopse\Creopse\Enums\ContentModel\AccessScope;
use Creopse\Creopse\Enums\ContentModel\ItemCreatorType;
use Creopse\Creopse\Models\ContentModel;
use Creopse\Creopse\Models\ContentModelItem;

function userEditableContentModel(array $attributes = []): ContentModel
{
    return ContentModel::create(array_merge([
        'name' => 'directory-listing-'.uniqid(),
        'title' => 'Directory Listing',
        'access_scope' => AccessScope::USER_EDITABLE->value,
    ], $attributes));
}

it('lets an anonymous caller update title and content_model_data on their own user-editable item', function () {
    $contentModel = userEditableContentModel();
    $item = ContentModelItem::create([
        'content_model_id' => $contentModel->id,
        'title' => 'Original title',
        'content_model_data' => ['description' => 'original'],
        'is_active' => false,
        'created_by_type' => ItemCreatorType::USER->value,
    ]);

    $this->putJson("/api/content-model/user-items/{$item->id}", [
        'title' => 'Edited title',
        'content_model_data' => ['description' => 'edited'],
    ])->assertOk();

    $item->refresh();
    expect($item->title)->toBe('Edited title');
    expect($item->content_model_data)->toBe(['description' => 'edited']);
});

it('does not let an anonymous update bypass moderation via is_active', function () {
    $contentModel = userEditableContentModel();
    $item = ContentModelItem::create([
        'content_model_id' => $contentModel->id,
        'title' => 'Pending item',
        'is_active' => false,
        'created_by_type' => ItemCreatorType::USER->value,
    ]);

    $this->putJson("/api/content-model/user-items/{$item->id}", [
        'title' => 'Still pending',
        'is_active' => true,
    ])->assertOk();

    $item->refresh();
    expect($item->is_active)->toBeFalse();
});

it('does not let an anonymous update spoof created_by_type or created_by', function () {
    $contentModel = userEditableContentModel();
    $item = ContentModelItem::create([
        'content_model_id' => $contentModel->id,
        'title' => 'Item',
        'created_by_type' => ItemCreatorType::USER->value,
        'created_by' => null,
    ]);

    $this->putJson("/api/content-model/user-items/{$item->id}", [
        'created_by_type' => ItemCreatorType::ADMIN->value,
        'created_by' => 999,
    ])->assertOk();

    $item->refresh();
    expect($item->created_by_type)->toBe(ItemCreatorType::USER->value);
    expect($item->created_by)->toBeNull();
});

it('does not let an anonymous update reassign the item to a different content model', function () {
    $userEditable = userEditableContentModel();
    $internal = ContentModel::create([
        'name' => 'internal-config-'.uniqid(),
        'title' => 'Internal Config',
        'access_scope' => AccessScope::INTERNAL->value,
    ]);

    $item = ContentModelItem::create([
        'content_model_id' => $userEditable->id,
        'title' => 'Item',
    ]);

    $this->putJson("/api/content-model/user-items/{$item->id}", [
        'content_model_id' => $internal->id,
        'title' => 'Moved item',
    ])->assertOk();

    $item->refresh();
    expect($item->content_model_id)->toBe($userEditable->id);
});

it('still refuses to update an item belonging to an internal content model', function () {
    $internal = ContentModel::create([
        'name' => 'internal-config-'.uniqid(),
        'title' => 'Internal Config',
        'access_scope' => AccessScope::INTERNAL->value,
    ]);

    $item = ContentModelItem::create([
        'content_model_id' => $internal->id,
        'title' => 'Item',
    ]);

    $this->putJson("/api/content-model/user-items/{$item->id}", [
        'title' => 'Should not apply',
    ])->assertStatus(500);

    expect($item->refresh()->title)->toBe('Item');
});
