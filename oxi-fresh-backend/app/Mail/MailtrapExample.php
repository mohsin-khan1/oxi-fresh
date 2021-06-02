<?php
 
namespace App\Mail;
 
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
 
class MailtrapExample extends Mailable
{
    use Queueable, SerializesModels;
    protected $name;
 
    /*
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($temp)
    {
        $this->name = $temp;
    }
    /*
     * Build the message.
     *
     * @return $this
     */
public function build()
    {
        return $this->from('mail@oxi-fresh.com', 'Oxi-Fresh')
            ->subject('Oxifresh Confirmation')
            ->markdown($this->name)
            ->with([
                'name' => 'New Oxifresh User',
                'link' => 'http://localhost:4200/main/subscription'
            ]);
    }
}