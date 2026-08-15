<?php

namespace Creopse\Creopse\Http\Controllers\News;

use Creopse\Creopse\Enums\ResponseStatusCode;
use Creopse\Creopse\Events\News\CommentCreatedEvent;
use Creopse\Creopse\Http\Controllers\Controller;
use Creopse\Creopse\Http\Requests\News\CommentRequest;
use Creopse\Creopse\Http\Resources\News\CommentResource;
use Creopse\Creopse\Models\NewsComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pageSize = $request->query('pageSize');
        $query = $request->query('query');

        if ($pageSize) {

            $newsComments = NewsComment::query();

            if ($query) {
                $newsComments = $newsComments->where('name', 'like', '%'.$query.'%')
                    ->orWhere('email', 'like', '%'.$query.'%')
                    ->orWhere('content', 'like', '%'.$query.'%');
            }

            $newsComments = $newsComments->with(['article'])->latest()->paginate($pageSize);

            return $this->sendResponse([
                'comments' => CommentResource::collection($newsComments),
                'meta' => [
                    'links' => [
                        'first' => $newsComments->url(1),
                        'last' => $newsComments->url($newsComments->lastPage()),
                        'prev' => $newsComments->previousPageUrl(),
                        'next' => $newsComments->nextPageUrl(),
                    ],
                    'currentPage' => $newsComments->currentPage(),
                    'perPage' => $newsComments->perPage(),
                    'total' => $newsComments->total(),
                    'lastPage' => $newsComments->lastPage(),
                ],
            ]);
        }

        return $this->sendResponse(CommentResource::collection(NewsComment::all()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CommentRequest $request)
    {
        $request->validated();

        // SEC-10: this route is public - author_id and is_active used to be
        // taken straight from request input, letting any anonymous visitor
        // post a pre-approved comment under someone else's identity.
        // author_id now only ever reflects the actual caller (null for a
        // guest), and is_active is left to the model's own default.
        $newsComment = NewsComment::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'content' => $request->input('content'),
            'article_id' => $request->input('article_id'),
            'author_id' => Auth::id(),
        ]);

        event(new CommentCreatedEvent($newsComment->id, $request->input('article_id')));

        return $this->sendResponse(
            new CommentResource($newsComment),
            ResponseStatusCode::CREATED,
            'NewsComment created successfully'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsComment $newsComment)
    {
        return $this->sendResponse(new CommentResource($newsComment));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsComment $newsComment)
    {
        // SEC-10: author_id must never be mass-assignable here - open
        // assignment let any authenticated caller reassign an existing
        // comment's authorship to impersonate someone else.
        $newsComment->update($request->only(['name', 'email', 'content', 'is_active', 'article_id']));

        return $this->sendResponse(
            new CommentResource($newsComment),
            ResponseStatusCode::OK,
            'NewsComment updated successfully'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsComment $newsComment)
    {
        $newsComment->delete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsComment deleted successfully'
        );
    }

    /**
     * Remove permanently the specified resource from storage.
     */
    public function forceDestroy(NewsComment $newsComment)
    {
        $newsComment->forceDelete();

        return $this->sendResponse(
            null,
            ResponseStatusCode::OK,
            'NewsComment deleted permanently successfully'
        );
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(NewsComment $newsComment)
    {
        $newsComment->restore();

        return $this->sendResponse(
            new CommentResource($newsComment),
            ResponseStatusCode::OK,
            'NewsComment restored successfully'
        );
    }
}
