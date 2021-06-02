
@component('mail::message')
Hello **{{$name}}**,  {{-- use double space for line break --}}
You have successfully unsubscribed!!

Click below to make changes in your subscription list:
@component('mail::button', ['url' => $link])
Manage your Prefrences
@endcomponent
Sincerely,
Oxi-Fresh team.


@endcomponent