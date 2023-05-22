import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';
import { UserService } from 'src/service/user.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { hash, compare, hashSync } from "bcryptjs"; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})

export class FormuserComponent {
  model:any = {name:'', surname:'', username:"", email:"", password:'',level:0, exp:'', role:"user"}  

  constructor(private userService: UserService, private sharedDataService: SharedDataService, private toastr: ToastrService){}
  
  ngOnInit(): void {

  }

  agregarUser(){
    this.userService.addUsers(this.model).subscribe(data => {
      console.log(this.model);
      this.model = {name:'', surname:'', username:"", email:"", password:'',level:0, exp:'', role:"user"};   
      this.sharedDataService.userAdded.next(true);
    }, (error:any) => {
      this.model = {name:'', surname:'', username:"", email:"", password:'',level:0, exp:'', role:"user"};   
      switch (error.status) {
        case 400:
          this.toastr.error('There is already a user with this email!','ERROR');
          break;
        default: 
          this.toastr.error(error.message, 'ERROR');
          break;
      }
    })
  }
}