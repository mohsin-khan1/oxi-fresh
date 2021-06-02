import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Login from '../Interface/login';
import Registration from '../Interface/registration';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http_client : HttpClient,) {
   }


  login(data: Login){
    return this.http_client.post<any>(`${environment.Api_url}/auth/login`, data)

  }

  registration(reg: Registration){
    return this.http_client.post<any>(`${environment.Api_url}/auth/register`, reg)

  }

  Set(token: string, key?: string): void {
    localStorage.setItem(key || environment.key, token);
  }

  Check(): boolean {
    return localStorage.getItem(environment.key) != null;
  }

  isExpired(): boolean {
    const token = localStorage.getItem(environment.key);
    const decoded_token = jwt_decode(<string>token) as any;
    return (decoded_token.exp * 1000) < Date.now();
  }

  // redirect(): void {
  //   window.location.href = "/login";
  // }

}
