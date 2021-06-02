import { Pipe, PipeTransform } from '@angular/core';
import Subscription from '../Interface/subscription';

@Pipe({
  name: 'searchPipe'
})
export class SubscriptionListPipe implements PipeTransform {

  transform(value: Subscription[], searchItem: string): Subscription[]{

    if(!searchItem){
      return value
    }
    searchItem = searchItem.toLowerCase();
    return value.filter(res => res.subscription.compnay_name?.toLowerCase().includes(searchItem)
    )
  }

}
