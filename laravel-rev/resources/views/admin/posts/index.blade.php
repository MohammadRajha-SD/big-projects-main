<x-layout>
    <x-setting heading='Publish New Post'>
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-blue-500 text-white font-semibold text-sm text-center divide-y ">
                                <tr>
                                    <td class="py-2 border ">ID</td>
                                    <td class="py-2 border ">Username</td>
                                    <td class="py-2 border ">Title</td>
                                    <td class="py-2 border ">Admin</td>
                                    <td class="py-2 border ">Edit</td>
                                    <td class="py-2 border ">Delete</td>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 text-center text-xs">
                                @foreach ($posts as $post)
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowarp ">
                                            <div class="text-sm font-medium text-gray-900">
                                               {{ $post->user_id }}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowarp ">
                                            <div class="text-sm font-medium text-gray-900">
                                                <a href="/?author={{ $post->author->username }}">
                                                    {{ $post->author->username }}
                                                </a>
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowarp">
                                            <div class="text-sm font-medium text-gray-900">
                                                <a href="/posts/{{ $post->slug }}">
                                                    {{ $post->title }}
                                                </a>
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowarp">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800 ">
                                                <div class="flex items-center space-x-2 py-2">
                                                    <form action="/admin/{{ $post->user_id }}/make-new-admin" method="POST"  id="new-admin-form" class="flex">
                                                        @csrf
                                                        <input 
                                                            class="check"
                                                            {{ $post->author->admin == 1 || $post->author->username == 'moudi__17' ? 'checked' : '' }}
                                                            id="checkbox checkbox-{{ $loop->iteration }} " type="checkbox" 
                                                            name="ids[]"
                                                            value="true"
                                                            {{ $post->user_id == auth()->user()->id || $post->author->username == 'moudi__17' ? 'disabled' : ''}}
                                                            class="border-gray-300 justify-center items-center rounded h-5 w-5 ease-soft text-base rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer  border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-bg-green-100 checked:bg-gray-100 checked:after:opacity-100" 
                                                        /> 
                                                        @if ($post->user_id != auth()->user()->id && $post->author->username != 'moudi__17')
                                                            <button type="submit" class="btn text-xs font-bold ml-4 text-gray-400 hover:text-gray-500 text-center justify-center items-center">Save</button>
                                                        @endif
                                                    </form>

                                                    <p class="px-3">
                                                        @if ($post->author->username == 'moudi__17')
                                                            Main Admin
                                                        @elseif ($post->user_id == auth()->user()->id)
                                                            You're admin
                                                        @endif
                                                    </p>
                                                </div>
                                            </span>
                                        </td>

                                        <td class="pr-6 py-4 whitespace-nowarp text-right text-sm font-medium ">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800 text-center ">
                                                <div class="flex items-center py-2">
                                                    <a href="/admin/posts/{{ $post->id }}/edit" class="text-blue-500 hover:text-blue-600 text-center justify-center items-center">Edit</a>
                                                </div>
                                            </span>
                                        </td>
                                        <td class="pr-6 py-4 whitespace-nowarp text-right text-sm font-medium">
                                            <form action="/admin/posts/{{ $post->id }}" method="post">
                                                <span class="inline-flex text-xs leading-5 font-semibold rounded-full text-green-800 ">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="text-xs text-red-400 hover:text-red-500 text-center justify-center items-center">Delete</button>
                                                </span>
                                            </form>
                                        </td>
                                        
                                    </tr>
                                @endforeach

                                <script>
                                    $('.btn').click(function(e) {
                                        let is_sure = confirm('Are you sure?');
                                        if (!is_sure) {
                                            e.preventDefault();
                                        }
                                    });
                                </script>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </x-setting>
</x-layout>