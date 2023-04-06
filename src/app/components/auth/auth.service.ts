import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  loggedIn: boolean = false;

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

  IsAuthenticated(){
    return this.loggedIn;
  }

  setLoggedInState(value:boolean){
    this.loggedIn = value;
  }

}