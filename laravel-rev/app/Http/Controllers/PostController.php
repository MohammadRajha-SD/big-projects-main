<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Models\Post;
use App\Models\Category;

class PostController extends Controller
{
    public function index()
    {
        return view('posts.index', [
            'posts' => Post::latest()
                        ->filter(request(['author', 'category', 'search']))
                        ->paginate(5)
                        ->withQueryString()
        ]);
    }

    public function show(Post $post)
    {
        if(!$post) {
            return abort(404);
        }
        return view('posts.show', [
            'post' => $post
        ]);
    }
}

