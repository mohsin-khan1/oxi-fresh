<?php

namespace App\Http\Controllers;

use App\Models\UserSubscription;
use Illuminate\Http\Request;

use App\Mail\MailtrapExample;
use Illuminate\Support\Facades\Mail;

class UserSubscriptionController extends Controller
{
    public function listUserSubscriptions(Request $request)
    {
        $userId = $request['id'];
        $subscriptions = UserSubscription::where('user_id', $userId)->with(['user', 'subscription'])->get();
        return response()->json($subscriptions);
    }

    public function createUserSubscription(Request $request)
    {
        $userId = $request['id'];
        $subscriptionId = $request['subscriptionId'];
        $email = $request['email'];

        $subscription = new UserSubscription;
        $subscription->user_id = $userId;
        $subscription->subscription_id = $subscriptionId;
        $subscription->save();

        Mail::to($email)->send(new MailtrapExample());

        return response()->json($subscription);
    }

    public function removeUserSubscription(Request $request) {
        $subscriptionId = $request['userSubscriptionId'];

        UserSubscription::where('id', $subscriptionId)->delete();

        return response()->json(
            [
                'success' => true
            ]
        );
    }
}
