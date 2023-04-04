import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';


@Component({
  selector: 'app-formchallenge',
  templateUrl: './formchallenge.component.html',
  styleUrls: ['./formchallenge.component.scss']
})
export class FormchallengeComponent {
  // model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};
  model:Challenge = {_id:'',name:'', descripcion:'', xp:0, latitud:'', longitud:''}  

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
