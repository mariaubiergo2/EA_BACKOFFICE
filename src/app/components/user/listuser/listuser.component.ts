import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { User } from 'src/models/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent {
  model:User = {_id:'',name:'', surname:'', email:"", password:'', xp:0}  

  ngOnInit(): void {
    // this.obtenerUsers();
  }

  users: User [] = [];

  obtenerUsers(){
    // this._employeeService.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    // }, error => {
    //   console.log(error);
    // })
  }

  eliminarUser(id:string){
    // var answer = confirm('Estas seguro de querer eliminarlo?');
    // if(answer){
    //   this._employeeService.eliminarUser(id).subscribe(data => {
    //     this.users = [];
    //     this.obtenerUsers();    
    //   }, error => {
    //     console.log(error);
    //   })
    // }    
  }

  editarUser(id:any){
    // this._employeeService.actualizarUser(id,this.model2).subscribe(data =>{
    //   this.model2 = {_id:'',name:'',surname:'',email:'',password:0};
    //   this.hideUpdate = true;
    //   this.users = [];
    //   this.obtenerUsers();
    // }, error => {
    //   console.log(error);
    // })
  }
}
