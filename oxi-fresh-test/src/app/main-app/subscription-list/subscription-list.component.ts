import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Subscription from 'src/app/Interface/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

  pageSize = 50;
  currentPage = 1;
  searchField: string;

  subscriptionList:any[];

  constructor(
    private service : SubscriptionService,
    private toastr: ToastrService
  
  ) {

   }

  ngOnInit(): void {

    const id = localStorage.getItem('user_id')
    this.service.getData(id).subscribe(data => this.subscriptionList = data);
    console.log(this.subscriptionList)
  }

  unsubscribe(id : any, company : any){
    this.service.removeUserSubscription({userSubscriptionId: id}).subscribe(res => { 
      console.log('subscribe_submit_success_response',res);
      this.toastr.success(`Successfully Unubscribed to ${company}.`);
      this.subscriptionList = this.subscriptionList.filter(res => res.id != id)
    }, err => { 
      console.log('error_in_subscription',err);
      this.toastr.error(`Failed to Unsubscribe ${company}}`);
    });

  }
  

}
