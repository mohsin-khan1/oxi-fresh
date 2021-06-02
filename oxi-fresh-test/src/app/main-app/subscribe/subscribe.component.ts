import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubscribeService } from 'src/app/service/subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    subscribeList: new FormArray([])
  });

  subscribeList: [];
  constructor( private service : SubscribeService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) {
   }

  ngOnInit(): void {

    this.service.getSubscribeList().subscribe(data => { 
      this.subscribeList = data
      this.updateSubscribeListFormArray();
    });
  }

  get subscribeListFormArray() {
    return this.form.controls.subscribeList as FormArray;
  }


  newSubscription(subscription: any) {
    return new FormGroup({
      id: new FormControl(subscription.id),
      compnay_email: new FormControl(subscription.compnay_email),
      description: new FormControl(subscription.description),
      isSubscribe: new FormControl(false)
    });
  }

  private updateSubscribeListFormArray() {
    this.subscribeList.forEach((subscription) => this.subscribeListFormArray.push(this.newSubscription(subscription)));
    console.log('this.subscribeListFormArray', this.subscribeListFormArray);
  }

  submit() {
    console.log('allSubscriptions', this.form.value.subscribeList);
    const checkedSubscriptions = this.form.value.subscribeList.filter((s: any) => s.isSubscribe !== false )
    console.log('checkedSubscriptions', checkedSubscriptions);

    const user_id = localStorage.getItem('user_id');
    const user_email = localStorage.getItem('user_email');
    const user_name = localStorage.getItem('user_name');
    checkedSubscriptions.forEach((subscription:any) => {
    
      const body = {
        subscriptionId: subscription.id,
        id: user_id,
        email: user_email,
        username : user_name
      };
      this.service.createUserSubscription(body).subscribe(res => { 
        console.log('subscribe_submit_success_response',res);
        this.toastr.success(`Successfully Subscribed to ${subscription?.compnay_email}.`);
        this.subscribeListFormArray.removeAt(this.subscribeListFormArray.value.findIndex((fa: any) => fa.id === subscription.id));
      }, err => { 
        console.log('error_in_subscription',err);
        this.toastr.error(`Failed to subscribe ${subscription?.compnay_email}}`);
      });

    });
  }

}
