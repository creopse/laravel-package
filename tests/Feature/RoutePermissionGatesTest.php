<?php

// These routes only required auth:sanctum, so any account - including one
// self-registered from a public template - could change the site settings,
// send email and SMS to anyone from the site, upload (any file type) to,
// browse and wipe the media library, read the dashboard statistics, and
// mark as read or delete other users' notifications. Each now requires the
// permission matching the admin screen that uses it; uploads also refuse
// files a web server could execute or a browser render as a page.

use Creopse\Creopse\Enums\PermissionList;
use Creopse\Creopse\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Sanctum\Sanctum;

function actingAsAccountWith(PermissionList ...$permissions): User
{
    $user = User::factory()->create();

    if ($permissions !== []) {
        $user->givePermissionTo(array_map(fn (PermissionList $permission) => $permission->value, $permissions));
    }

    Sanctum::actingAs($user, ['*']);

    return $user;
}

function notificationFor(User $user): string
{
    $id = (string) Str::uuid();

    $user->notifications()->create([
        'id' => $id,
        'type' => 'test',
        'data' => ['message' => 'hello'],
    ]);

    return $id;
}

beforeEach(function () {
    Storage::fake('public');
});

it('refuses these routes to an account without the matching permission', function (string $method, string $uri) {
    actingAsAccountWith();

    $this->json($method, $uri)->assertStatus(403);
})->with([
    'update app settings' => ['put', '/api/app-settings'],
    'update app information' => ['put', '/api/app-information'],
    'send email' => ['post', '/api/email'],
    'send sms' => ['post', '/api/sms'],
    'upload a file' => ['post', '/api/file/upload'],
    'replace a file' => ['post', '/api/file/replace'],
    'delete a file' => ['post', '/api/file/delete'],
    'list media' => ['get', '/api/media-files'],
    'upload media' => ['post', '/api/media-files/upload'],
    'delete media' => ['post', '/api/media-files/delete'],
    'empty the media trash' => ['delete', '/api/media-files/force/all'],
    'count users' => ['get', '/api/count/users'],
    'count articles' => ['get', '/api/count/news-articles'],
    'count media' => ['get', '/api/count/media-files'],
    'visits' => ['get', '/api/visits'],
]);

it('lets the matching permission through', function (PermissionList $permission, string $method, string $uri) {
    actingAsAccountWith($permission);

    expect($this->json($method, $uri)->status())->not->toBe(403);
})->with([
    'settings' => [PermissionList::MANAGE_APP_SETTINGS, 'put', '/api/app-settings'],
    'app information' => [PermissionList::MANAGE_CONTENT, 'put', '/api/app-information'],
    'email' => [PermissionList::MANAGE_CONTENT, 'post', '/api/email'],
    'sms' => [PermissionList::MANAGE_CONTENT, 'post', '/api/sms'],
    'media list' => [PermissionList::VIEW_MEDIA, 'get', '/api/media-files'],
    'media list from a content editor' => [PermissionList::MANAGE_CONTENT, 'get', '/api/media-files'],
    'media upload' => [PermissionList::UPLOAD_MEDIA, 'post', '/api/media-files/upload'],
    'media trash' => [PermissionList::DELETE_MEDIA, 'delete', '/api/media-files/force/all'],
    'dashboard counts' => [PermissionList::VIEW_DASHBOARD, 'get', '/api/count/users'],
    'article counts from a news editor' => [PermissionList::MANAGE_NEWS, 'get', '/api/count/news-articles'],
    'media counts from the media library' => [PermissionList::VIEW_MEDIA, 'get', '/api/count/media-files'],
]);

it('refuses uploads a web server could execute or a browser render as a page', function (string $uri, string $name, string $content) {
    actingAsAccountWith(PermissionList::UPLOAD_MEDIA);

    // A real temporary file rather than UploadedFile::fake(), whose MIME
    // type comes from the file name instead of the content.
    $path = tempnam(sys_get_temp_dir(), 'upload');
    file_put_contents($path, $content);

    $this->post($uri, ['file' => new UploadedFile($path, $name, null, null, true)], ['Accept' => 'application/json'])
        ->assertStatus(422);
})->with([
    'php on media' => ['/api/media-files/upload', 'shell.php', '<?php echo 1;'],
    'php disguised as an image' => ['/api/media-files/upload', 'photo.jpg', '<?php echo 1;'],
    'html on media' => ['/api/media-files/upload', 'page.html', '<html><script>alert(1)</script></html>'],
    'php on generic files' => ['/api/file/upload', 'shell.phtml', '<?php echo 1;'],
    'html on generic files' => ['/api/file/upload', 'page.htm', '<html><script>alert(1)</script></html>'],
]);

it('still accepts ordinary files', function (string $uri) {
    actingAsAccountWith(PermissionList::UPLOAD_MEDIA);

    $this->post($uri, ['file' => UploadedFile::fake()->createWithContent('notes.pdf', '%PDF-1.4 test')], ['Accept' => 'application/json'])
        ->assertSuccessful();
})->with(['/api/media-files/upload', '/api/file/upload']);

it('only lets a user mark as read or delete their own notifications', function () {
    $user = actingAsAccountWith();
    $own = notificationFor($user);
    $others = notificationFor(User::factory()->create());

    $this->putJson("/api/notifications/mark/{$others}")->assertStatus(404);
    $this->deleteJson("/api/notifications/{$others}")->assertStatus(404);

    $this->putJson("/api/notifications/mark/{$own}")->assertOk();
    $this->deleteJson("/api/notifications/{$own}")->assertOk();

    expect($user->notifications()->count())->toBe(0)
        ->and(User::find(User::max('id'))->notifications()->whereNull('read_at')->count())->toBe(1);
});

it('keeps app information and app settings under separate permissions', function () {
    actingAsAccountWith(PermissionList::MANAGE_APP_SETTINGS);

    $this->putJson('/api/app-information')->assertStatus(403);
});
