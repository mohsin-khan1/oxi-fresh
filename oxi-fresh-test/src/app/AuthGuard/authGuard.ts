import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService,
                    private route:Router,

    ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Authenticate user
    // If no token, redirect to login
    console.log('AUth Guard')
    if (!this.loginService.Check()) {
      // Redirect to login here...
      this.route.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    // Token exists, check expiry
    // If expired, redirect to login
    if (this.loginService.isExpired()) {
      // Redirect to login here...
      this.route.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    return true;
  }

}
