import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  //private isLoggedIn: boolean = false;

  login(username: string, pass: string): boolean {
    // console.log(username + '   ' +password);
    if (username === "admin" && pass === "admin") {
      // this.isLoggedIn = true;
      this.authService.setLoggedInState(true);
      return true;
    }
    this.authService.setLoggedInState(false);
    return false;    
  }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }

  // isLogged(): boolean {
  //   return this.isLoggedIn;
  // }
}