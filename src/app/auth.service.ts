import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  loggedIn:Boolean = false
  login(){
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn = false;
  }
  isAuthorized(){
    return this.loggedIn;
  }
}
