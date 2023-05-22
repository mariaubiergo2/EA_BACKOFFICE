import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';
import { UserService } from 'src/service/user.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent {
  model:any = {name:'', surname:'', username:"", email:"", password:'',level:0, exp:'', role:"user"}  
//model:User = {_id:'',name:'', surname:'', email:"", xp:0, latitud:'', longitud:''}  

  constructor(private userService: UserService, private sharedDataService: SharedDataService){}
  ngOnInit(): void {
  }

  agregarUser(){
    this.userService.addUsers(this.model).subscribe(data => {
      console.log(this.model);
      this.model = {name:'', surname:'', username:"", email:"", password:'',level:0, exp:'', role:"user"};   
      this.sharedDataService.userAdded.next(true);   
      console.log(this.model.password);
    }, error => {
      console.log(this.model)
      console.log(error);
    })
  }
}