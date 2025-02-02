<x-layout>
    <section class="px-6 py-8">
        <main class="max-w-lg mx-auto bg-gray-100 p-6 border border-gray-200 rounded-xl">
            <h1 class="text-center font-bold text-xl">Login!</h1>
            <form action="/login" method="POST" class="mt-10">
                @csrf
                
                {{-- Email --}}
                <div class="mb-6">
                    <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">
                        Email
                    </label>
                    <input 
                        class="border border-gray-400 p-2 w-full"
                        type="email"
                        name="email"
                        id="email"
                        value="{{ old('email') }}"
                        required
                    />
                    @error('email')
                        <p class="text-red-500 text-xs mt-2"> {{ $message }}</p>
                    @enderror
                </div>

                {{-- Password --}}
                <div class="mb-6">
                    <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">
                        Password
                    </label>
                    <input 
                        class="border border-gray-400 p-2 w-full"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                    @error('password')
                        <p class="text-red-500 text-xs mt-2"> {{ $message }}</p>
                    @enderror
                </div>

                {{-- Submit Btn --}}
                <div class="mb-6">
                    <button 
                        type="submit"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    </section>
</x-layout>