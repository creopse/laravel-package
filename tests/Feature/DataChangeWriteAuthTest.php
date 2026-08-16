<?php

// SEC: /api/data-changes had no auth middleware at all - anyone could
// tamper with the table_name -> change_id cache-invalidation ledger that
// clients poll (via GET data-changes/table/{name}) to decide when to
// refetch. Reads stay public (needed pre-session, no sensitive data);
// writes now require auth:sanctum, and update() no longer mass-assigns
// the full request.

use Creopse\Creopse\Models\DataChange;
use Creopse\Creopse\Models\User;
use Laravel\Sanctum\Sanctum;

// DataChange has neither $fillable nor $guarded set (defaults to fully
// guarded) - it's only ever written to via DataChangeObserver's raw query
// builder calls, never through Eloquent mass assignment. Set up fixtures
// via direct attribute assignment, which bypasses that guard same as a
// plain property set would.
function makeDataChange(string $tableName): DataChange
{
    $dataChange = new DataChange;
    $dataChange->table_name = $tableName;
    $dataChange->save();

    return $dataChange;
}

it('still allows anonymous reads', function () {
    $dataChange = makeDataChange('sections');

    $this->getJson('/api/data-changes')->assertOk();
    $this->getJson("/api/data-changes/{$dataChange->id}")->assertOk();
    $this->getJson('/api/data-changes/table/sections')->assertOk();
});

it('refuses anonymous writes', function () {
    $dataChange = makeDataChange('sections');

    $this->postJson('/api/data-changes', ['table_name' => 'pages'])
        ->assertStatus(401);

    $this->putJson("/api/data-changes/{$dataChange->id}", ['table_name' => 'tampered'])
        ->assertStatus(401);

    $this->deleteJson("/api/data-changes/{$dataChange->id}")
        ->assertStatus(401);

    expect($dataChange->refresh()->table_name)->toBe('sections');
});

it('does not mass-assign an authenticated update beyond table_name/change_id', function () {
    $user = User::factory()->create();
    Sanctum::actingAs($user, ['*']);

    $dataChange = makeDataChange('sections');

    $this->putJson("/api/data-changes/{$dataChange->id}", [
        'table_name' => 'sections-renamed',
        'id' => 999999,
    ])->assertOk();

    $dataChange->refresh();
    expect($dataChange->table_name)->toBe('sections-renamed');
    expect($dataChange->id)->not->toBe(999999);
});
