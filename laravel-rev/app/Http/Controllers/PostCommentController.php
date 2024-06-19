<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;

class PostCommentController extends Controller
{
    
    public function store(Post $post) 
    {
        request()->validate([
            'body' => 'required',
        ]);

        $post->comments()->create([
            'user_id' => auth()->id(),
            'body' => request('body')
        ]);

        return back()->with('success', 'Comment has been Added.');
    }

    public function update(Comment $comment) {
        request()->validate([
            'body-comment' => 'required|min:3|max:255',
        ]);

        $comment->update([
            'body' => request('body-comment')
        ]);
        
        return back()->with('success', 'Comment Updated.');
    }
    public function destroy(Comment $comment) {
       
        $comment->delete();
        return back()->with('success', 'Comment Deleted.');
    }
}