<?php

// SEC-06: replace/delete/download/check used to accept any path on the
// 'public' disk with zero scoping - any authenticated user could target
// another user's media-library file, a generated thumbnail, or (in theory)
// anything reachable via a '..' segment. FileController::rejectUnmanageablePath()
// now blocks all of that, and upload() gives every new generic file its own
// unguessable 'generic/{uuid}' folder instead of the shared 'uploads' one.

use Creopse\Creopse\Models\MediaFile;
use Creopse\Creopse\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\Sanctum;

beforeEach(function () {
    Storage::fake('public');
    Sanctum::actingAs(User::factory()->create(), ['*']);
});

it('stores each generic upload under its own unguessable folder', function () {
    $response = $this->postJson('/api/file/upload', [
        'file' => UploadedFile::fake()->image('photo.jpg'),
    ]);

    $response->assertOk();

    $path = $response->json('data.path');

    expect($path)->toMatch('#^generic/[0-9a-f-]{36}/#');
    Storage::disk('public')->assertExists($path);
});

it('gives two uploads different folders', function () {
    $first = $this->postJson('/api/file/upload', ['file' => UploadedFile::fake()->image('a.jpg')])->json('data.path');
    $second = $this->postJson('/api/file/upload', ['file' => UploadedFile::fake()->image('b.jpg')])->json('data.path');

    expect($first)->not->toBe($second);
    expect(dirname($first))->not->toBe(dirname($second));
});

it('completes the full generic-file lifecycle for a legitimate upload', function () {
    $path = $this->postJson('/api/file/upload', [
        'file' => UploadedFile::fake()->create('report.pdf', 10, 'application/pdf'),
    ])->json('data.path');

    $this->postJson('/api/file/check', ['path' => $path])->assertOk();
    $this->postJson('/api/file/download', ['path' => $path])->assertOk();

    $this->postJson('/api/file/replace', [
        'current_path' => $path,
        'file' => UploadedFile::fake()->create('report-v2.pdf', 10, 'application/pdf'),
    ])->assertOk();

    $this->postJson('/api/file/delete', ['path' => $path])->assertOk();
    Storage::disk('public')->assertMissing($path);
});

it('refuses to delete, download or check a path tracked by the media library', function (string $route) {
    Storage::disk('public')->put('uploads/protected.jpg', 'protected content');
    MediaFile::create(['name' => 'protected.jpg', 'path' => 'uploads/protected.jpg', 'size' => 18]);

    $this->postJson($route, ['path' => 'uploads/protected.jpg'])->assertStatus(404);

    Storage::disk('public')->assertExists('uploads/protected.jpg');
    expect(Storage::disk('public')->get('uploads/protected.jpg'))->toBe('protected content');
})->with([
    'delete' => ['/api/file/delete'],
    'download' => ['/api/file/download'],
    'check' => ['/api/file/check'],
]);

it('refuses to replace a path tracked by the media library', function () {
    Storage::disk('public')->put('uploads/protected.jpg', 'protected content');
    MediaFile::create(['name' => 'protected.jpg', 'path' => 'uploads/protected.jpg', 'size' => 18]);

    $this->postJson('/api/file/replace', [
        'current_path' => 'uploads/protected.jpg',
        'file' => UploadedFile::fake()->create('evil.jpg', 5),
    ])->assertStatus(404);

    expect(Storage::disk('public')->get('uploads/protected.jpg'))->toBe('protected content');
});

it('refuses to touch the generated thumbnails folder', function () {
    Storage::disk('public')->put('thumbnails/large/photo.jpg', 'a thumbnail');

    $this->postJson('/api/file/delete', ['path' => 'thumbnails/large/photo.jpg'])->assertStatus(404);
    $this->postJson('/api/file/download', ['path' => 'thumbnails/large/photo.jpg'])->assertStatus(404);
    $this->postJson('/api/file/check', ['path' => 'thumbnails/large/photo.jpg'])->assertStatus(404);

    Storage::disk('public')->assertExists('thumbnails/large/photo.jpg');
});

it('refuses path traversal and absolute path attempts', function (string $path) {
    $this->postJson('/api/file/check', ['path' => $path])->assertStatus(404);
})->with([
    '../../etc/passwd',
    'uploads/../../secret/secret.txt',
    '..\\..\\secret\\secret.txt',
    '/etc/passwd',
]);
