<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthPostController;
use App\Http\Controllers\PostCommentController;

Route::get('/', [PostController::class, 'index'])->name('home');
Route::get('/posts/{post:slug}', [PostController::class, 'show']);
Route::post('/posts/{post:slug}/comments', [PostCommentController::class, 'store']);
Route::get('/posts/{post:slug}/comments', [AuthPostController::class, 'error']);

Route::delete('/posts/{comment}/comments', [PostCommentController::class, 'destroy']);
Route::get('/posts/{comment}/comments/edit', [PostCommentController::class, 'edit']);
Route::put('/posts/{comment}/comments', [PostCommentController::class, 'update']);

Route::get('/register', [AuthController::class, 'create'])->middleware('guest');
Route::post('/register', [AuthController::class, 'store'])->middleware('guest');
Route::get('/login', [AuthController::class, 'loginCreate'])->middleware('guest');
Route::post('/login', [AuthController::class, 'LoginStore'])->middleware('guest');

Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');


Route::middleware('can:admin')->group(function () {
    Route::resource('/admin/posts', AuthPostController::class)->except('show');
    Route::post('/admin/{user}/make-new-admin', [AuthPostController::class, 'new_admin']);
    Route::get('/admin/{user}/make-new-admin', [AuthPostController::class, 'error']);
});
