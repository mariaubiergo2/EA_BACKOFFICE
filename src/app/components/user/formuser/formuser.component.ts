import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';


@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})
export class FormuserComponent {
  model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};
  //model:User = {_id:'',name:'', surname:'', email:"", xp:0, latitud:'', longitud:''}  

  ngOnInit(): void {
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
