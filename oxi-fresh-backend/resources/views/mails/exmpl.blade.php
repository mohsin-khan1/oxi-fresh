
@component('mail::message')
Hello **{{$name}}**,  {{-- use double space for line break --}}
Thank You for Subscription!

Click below to make changes in your subscription list:
@component('mail::button', ['url' => $link])
Manage your Prefrences
@endcomponent
Sincerely,
Oxi-Fresh team.
@endcomponent