import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:RegistrationService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree{
      const userRole = this.api.getUserRole();
      
      if(!this.api.IsloggedIn()){
        return this.router.createUrlTree(['/login']);
      }
      
      if (route.data.roles && !route.data.roles.includes(userRole)) {
        // if user's role is not authorized for this route, redirect to home page
        return this.router.createUrlTree(['/']);
      } 
      return true;
  }
}
