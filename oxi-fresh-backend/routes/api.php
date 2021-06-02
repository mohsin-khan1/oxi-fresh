<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserSubscriptionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api'
], function ($router) {

    // Auth routes
    Route::group([
        'prefix' => 'auth'
    ], function() {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::get('/user-profile', [AuthController::class, 'userProfile']);  
    });

    Route::group([
        'prefix' => 'subscription'
    ], function() {
        Route::get('/list', [SubscriptionController::class, 'listAllSubscriptions']);
    });

    Route::group([
        'prefix' => 'user-subscription'
    ], function() {
        Route::post('/create', [UserSubscriptionController::class, 'createUserSubscription']);
        Route::post('/remove', [UserSubscriptionController::class, 'removeUserSubscription']);
        Route::get('/list', [UserSubscriptionController::class, 'listUserSubscriptions']);
    });
});