import { Component, OnInit  } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import jwt_decode from 'jwt-decode';
import { UserService } from "src/service/user.service";
import { SharedDataService } from "src/service/challenge.sharedservices";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent {

  public show:boolean = true;
  ngOnInit () {  }

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private userService: UserService, private sharedService: SharedDataService) {}

  //private isLoggedIn: boolean = false;

  token: string = '';

  model:any = {email:'', password:''};

  login(username: string, pass: string): boolean {
    // console.log(username + '   ' +password);
    if (username === "admin" && pass === "admin") {
      // this.isLoggedIn = true;
      this.authService.setLoggedInState(true);
        this.show = false;
      
      return true;
    }
    this.authService.setLoggedInState(false);
    return false;    
  }

  login2(email: string, password: string): boolean {

    this.model = {email, password};
    console.log(this.model);

    this.userService.getToken(this.model).subscribe(data => {
      this.token = data.token;
      this.model = {email:'', password:''};
      var decoded:any = jwt_decode(this.token);
      if (decoded.role === "admin"){
        this.authService.setLoggedInState(true);
        this.sharedService.token =  this.token;
        console.log(this.sharedService.token);
        this.show = false;
        return true;
      }else{
        console.log("ERROR!!!!!!!!!! HABER ESTUDIAO");
        this.authService.setLoggedInState(false);
        return false;
      }     
    }, error => {
      console.log(error);
    })

    return false;
  }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }

  // isLogged(): boolean {
  //   return this.isLoggedIn;
  // }
}