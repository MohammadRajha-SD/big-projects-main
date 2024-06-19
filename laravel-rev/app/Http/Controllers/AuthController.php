<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function create() 
    {
        return view('register');
    }

    public function store(Request $request) 
    {
        $attr = $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users,username',
            'email' => 'required|unique:users,email',
            'password' => 'required',
        ]);
        
        $attr['password'] = bcrypt($attr['password']);
        $user = User::create($attr);

        auth()->login($user);

        return redirect('/')->with('success', 'Logged In');
    }

    public function loginCreate() 
    {
        return view('login');
    }
    public function loginStore(Request $request)
    {
        $attr = $request->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required',
        ]);

        if(!auth()->attempt($attr)){
            throw ValidationException::withMessages([
                'email' => 'Your provided credentials could not be verified.',
            ]);
        }

        session()->regenerate();

        return redirect('/')->with('success', 'Welcome Back!.');
    }

    public function logout(Request $request) 
    {
        auth()->logout();
        return redirect('/login')->with('success', 'Logged Out');
    }
}
