import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifychallenge',
  templateUrl: './modifychallenge.component.html',
  styleUrls: ['./modifychallenge.component.scss']
})
export class ModifychallengeComponent {
  model:Challenge = {_id:'',name:'', descr:'', exp:0, lat:'', long:''}

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
