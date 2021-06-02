import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import subscribe from '../Interface/subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http_client : HttpClient,) { }


  getSubscribeList():Observable<any>{
    return this.http_client.get<subscribe[]>(`${environment.Api_url}/subscription/list`);
  }

  createUserSubscription(body: any){
    return this.http_client.post<any>(`${environment.Api_url}/user-subscription/create`, body)
  }
}


