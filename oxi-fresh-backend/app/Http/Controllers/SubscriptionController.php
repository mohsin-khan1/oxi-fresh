<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function listAllSubscriptions()
    {
        $userId = 1;

        return $groupsWithoutUser = Subscription::whereDoesntHave('userSubscriptions', function($query) use ($userId) {
            $query->where('user_id', $userId);
        })->get();

        return response()->json(Subscription::all());
    }
}
