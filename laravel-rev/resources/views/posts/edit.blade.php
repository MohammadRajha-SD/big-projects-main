<x-layout>
    <x-setting heading="Update a Post!">
        <form action="/admin/posts/{{ $post->id }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            
            <x-form.input name="title" :value="$post->title" required/>
            <x-form.input name="thumbnail" type="file" />
            
            <x-form.textarea name="excerpt" required > {{ $post->excerpt }} </x-form.textarea>
            <x-form.textarea name="body" required > {{ $post->body }} </x-form.textarea>
            
            <x-form.button>Update</x-form.button>
        </form>
    </x-setting>
</x-layout>