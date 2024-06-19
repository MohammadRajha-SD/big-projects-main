
<x-dropdown>
    <x-slot name="trigger"> 
        <button type="submit" 
        class="border-gray-300 rounded h-5 w-5 ease-soft text-base rounded-1.4 overflow-hidden checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer  border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-bg-green-100 checked:bg-gray-100 checked:after:opacity-100" 
        {{-- @click="show = !show" --}}
    >
    {{-- x-show='show'  --}}
    <x-dropdown-item>
        <div class="bg-blue-500">
            <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-18.02 -18.02 114.41 114.41" xml:space="preserve" stroke="#fff" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path> </g> </g></svg>
        </div>
    </x-dropdown-item>
        
        
    </button>
</x-slot>

</x-dropdown>


 {{-- <input 
                                                    
                                                    @click.prevent="document.querySelector('#new-admin-form').submit();" 
                                                    @click="user_id={{ $post->user_id}}"
                                                    
                                                    id="checkbox-{{ $loop->iteration }}" type="checkbox" 
                                                    {{ $post->admin == 1 ? 'checked' : '' }}
                                                    {{ $post->user_id == auth()->user()->id ? 'disabled' : ''}}
                                                    class="border-gray-300 rounded h-5 w-5 ease-soft text-base rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer  border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-bg-green-100 checked:bg-gray-100 checked:after:opacity-100" 
                                                /> --}}


                                                <button class="text-xs text-center border border-green-400 text-green-500 px-2 rounded">Save</button>
