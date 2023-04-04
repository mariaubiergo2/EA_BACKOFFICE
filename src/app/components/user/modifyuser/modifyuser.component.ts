import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.scss']
})
export class ModifyuserComponent {
  model:Challenge = {_id:'',name:'', descripcion:'', xp:0, latitud:'', longitud:''}

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
