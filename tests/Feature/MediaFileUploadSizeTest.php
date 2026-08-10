<?php

// Disk-exhaustion guard for the media library (SEC-05) - the library
// intentionally accepts any file type, so the only thing enforced here is a
// configurable size ceiling.

use Creopse\Creopse\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\Sanctum;

it('accepts an upload within the configured size limit', function () {
    Storage::fake('public');
    config(['creopse.uploads.max_size' => 100]);
    Sanctum::actingAs(User::factory()->create(), ['*']);

    $response = $this->postJson('/api/media-files/upload', [
        'file' => UploadedFile::fake()->create('report.pdf', 50, 'application/pdf'),
    ]);

    $response->assertOk();
});

it('rejects an upload exceeding the configured size limit', function () {
    Storage::fake('public');
    config(['creopse.uploads.max_size' => 10]);
    Sanctum::actingAs(User::factory()->create(), ['*']);

    $response = $this->postJson('/api/media-files/upload', [
        'file' => UploadedFile::fake()->create('report.pdf', 50, 'application/pdf'),
    ]);

    $response->assertStatus(422);
    expect($response->json('data.file'))->not->toBeNull();
});
