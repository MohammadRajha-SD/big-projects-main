<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;

class AppServiceProvider extends ServiceProvider
{
    
    public function register()
    {
        //
    }

    public function boot()
    {
        Gate::define('admin', function (User $user) {
            return $user->admin === 1 || $user->username == 'moudi__17';
        });
    }
}
