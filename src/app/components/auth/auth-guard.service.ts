import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { AuthService } from './auth.service';

// export class AuthGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(): boolean {
//     // if (!this.auth.isAuthenticated()) {
//     //   this.router.navigate(['login']);
//     //   return false;
//     // }
//     return true;
//   }
// }

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private authService: AuthService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if (this.authService.IsAuthenticated()){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
    }
}