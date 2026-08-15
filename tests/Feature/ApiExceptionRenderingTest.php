<?php

// SEC-15: Laravel's default exception rendering embeds the exception class,
// file path, line number, and full stack trace in JSON responses whenever
// APP_DEBUG is enabled — including for API clients, who should never see
// server filesystem paths or stack traces regardless of the app's debug
// configuration. CreopseServiceProvider now registers a renderable that
// intercepts every exception on API requests and always returns a safe
// {message} envelope instead.

use Illuminate\Support\Facades\Route;

beforeEach(function () {
    Route::get('/api/__test/boom', function () {
        throw new RuntimeException('leaked db password: hunter2');
    });

    Route::get('/api/__test/forbidden', function () {
        abort(403, 'Custom forbidden message');
    });
});

it('never leaks exception class, file, line, or trace on API requests, even with APP_DEBUG on', function () {
    config(['app.debug' => true]);

    $response = $this->getJson('/api/__test/boom');

    $response->assertStatus(500);
    $response->assertJsonMissingPath('exception');
    $response->assertJsonMissingPath('file');
    $response->assertJsonMissingPath('line');
    $response->assertJsonMissingPath('trace');
    expect($response->json('message'))->toBe('Server error');
    expect(json_encode($response->json()))->not->toContain('hunter2');
});

it('still returns a safe generic envelope when APP_DEBUG is off', function () {
    config(['app.debug' => false]);

    $response = $this->getJson('/api/__test/boom');

    $response->assertStatus(500);
    $response->assertJsonMissingPath('exception');
    expect($response->json('message'))->toBe('Server error');
});

it('preserves the real status code and message for HTTP exceptions', function () {
    config(['app.debug' => true]);

    $response = $this->getJson('/api/__test/forbidden');

    $response->assertStatus(403);
    $response->assertJsonMissingPath('trace');
    expect($response->json('message'))->toBe('Custom forbidden message');
});
