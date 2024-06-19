<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Models\Post;
use App\Models\User;

class AuthPostController extends Controller
{
    public function index() {
        return view('admin.posts.index', [
            'posts' => Post::paginate(50),
        ]);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        $attr = $request->validate([
            'title' => 'required|max:100',
            'thumbnail' => 'required',
            'excerpt' => 'required',
            'body' => 'required|max:255',
        ]);
        
        $attr['slug'] = Str::slug($attr['title']);
        $slug = Post::where('slug',  $attr['slug'])->first();
        
        if($slug) {
            throw ValidationException::withMessages([
                'title' => 'your title has been taken.',
            ]);
        }
           
        $attr['user_id'] = auth()->user()->id;
        $attr['category_id'] = $request->category_id;
        $attr['thumbnail'] = request()->file('thumbnail')->store('thumbnails');

        Post::create($attr);

        return redirect('/')->with('success', 'Your Post has been created Successfully!.');
    }

    public function edit(Post $post)
    {
        return view('posts.edit', [
            'post' => $post
        ]);
    }

    public function update(Post $post)
    {
        $attr = request()->validate([
            'title' => 'required',
            'body' => 'required',
            'thumbnail' => 'image',
            'excerpt' => 'required'
        ]);

        if($attr['thumbnail'] ?? false) {
            $attr['thumbnail'] = request()->file('thumbnail')->store('thumbnails');
        }

        $post->update($attr);
        
        return redirect('/')->with('success', 'Your Post has been Updated.');
    }


    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/')->with('success', 'Post Deleted');
    }

    public function new_admin(User $user, Request $request){
        $is_admin = isset($request->ids[0]);
        
        $user->update(["admin" => $is_admin ? 1 : 0]);

        $msg = ucwords($user->name) . ($is_admin ? ' has been an Admin.' : ' has been a User.');

        return redirect('/')->with('success', $msg);
    }
    public function error() {
        abort(419);
    }
}





