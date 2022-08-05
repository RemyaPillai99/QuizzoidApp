import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthGuardService, private router: Router) {}
  canActivate():  boolean {
      console.log("CanActivate called")
      if (!this.Authguardservice.isLoggedIn()) {  //if (true)  
        this.router.navigateByUrl("/welcome");  
    }  
    return this.Authguardservice.isLoggedIn();  
    
  }
}
