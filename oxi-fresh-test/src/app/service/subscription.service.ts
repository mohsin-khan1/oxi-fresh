import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Subscription from '../Interface/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(
    private http_client : HttpClient,
  ) { }

  getData(id: any):Observable<any>{
    
    return this.http_client.get<Subscription[]>(`${environment.Api_url}/user-subscription/list?id=${id}`);

  }
  removeUserSubscription(body: any){
    return this.http_client.post<any>(`${environment.Api_url}/user-subscription/remove`, body)
  }
}
