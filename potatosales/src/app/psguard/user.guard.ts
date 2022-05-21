import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../psservice/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private loginservice: LoginService, private router: Router) {

  }
  canActivate(): boolean {
    if(this.loginservice.checkLoginFromCache()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
