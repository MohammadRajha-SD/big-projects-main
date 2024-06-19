<x-layout>
    <x-setting heading='Create a New Post'>
        <form action="/admin/posts" method="POST" enctype="multipart/form-data">
            @csrf
            <x-form.input name="title" required />
            <x-form.input name="thumbnail" type="file" required />

            <x-form.textarea name="excerpt" required />
            <x-form.textarea name="body" required />
        
            <x-dropdown-category />

            <x-form.button>Create</x-form.button>
        </form>
    </x-setting>
</x-layout>