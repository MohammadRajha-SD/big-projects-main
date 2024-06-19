 @props(['comment'])
<x-panel class="bg-gray-50 w-full">
    <div x-data="{show: false}">

    <article class="flex space-x-4 w-full">
        <div class="flex-shrink-0"> 
            <img src="https://i.pravatar.cc/60?u={{ $comment->user_id }}" alt="" width="60" height="60" class="rounded-xl"/>
        </div>

        <div class="w-full">
            <header class="mb-4">
                <h3 class="font-bold">{{ $comment->author->username }}</h3>
                <p class="text-xs"> 
                    Posted 
                    <time>{{ $comment->created_at->diffForHumans() }}</time>
                </p>
            </header>
            
            <p x-show="!show">  
                {{ $comment->body }}
            </p>
            <form action="/posts/{{ $comment->id }}/comments" class="flex justify-between" method="post" x-show="show">
                @csrf
                @method('PUT')
              
                <input type="text" placeholder="Edit a Comment" name="body-comment" class="border border-gray-400 p-2 w-full" value="{{ $comment->body }}"/>
                <button class="text-xs text-white bg-blue-700 p-2 rounded w-20 ml-5" onerror="alert()">Save</button>
            </form>
        </div>
        
    </article>

    @auth
        @if ($comment->author->id === auth()->id() ||  auth()->user()->admin === 1)
        <div class="flex justify-end mt-6 pt-6 border-t border-gray-200" >
                <button class="text-xs text-white bg-green-400 p-2 rounded" @click="show = !show">Edit Comment </button>
                <form action="/posts/{{ $comment->id }}/comments" method="post">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="text-xs text-white bg-red-400 p-2 ml-3 rounded"> Delete Comment </button>
                </form>
            </div>
        @endif
    @endauth
    </div>

</x-panel>