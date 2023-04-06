import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { User } from 'src/models/user';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.scss']
})
export class ModifyuserComponent {
  model:User = {_id:'',name:'', surname:'', email:"", password:'', xp:0}

  ngOnInit(): void {
  }

  editarChallenge(id:any){
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
