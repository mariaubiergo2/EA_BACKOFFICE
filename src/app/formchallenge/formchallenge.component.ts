import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';


@Component({
  selector: 'app-formchallenge',
  templateUrl: './formchallenge.component.html',
  styleUrls: ['./formchallenge.component.scss']
})
export class FormchallengeComponent {
  model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};

  ngOnInit(): void {
    // this.obtenerUsers();
  }

  agregarUser(){
  //   this._employeeService.añadirUser(this.model).subscribe(data => {
  //     this.users = [];
  //     this.obtenerUsers();
  //     this.model = {_id:'',name:'',surname:'',email:'',password:0};  
  //   }, error => {
  //     console.log(error);
  //   })
  }
}
