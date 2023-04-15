import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { User } from 'src/models/user';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.scss']
})
export class ModifyuserComponent {
  model:User = {_id:"", name:'', surname:'', username:"", email:"", password:'',level:0, exp:0, role:""}  

  constructor(private userChallenge: UserService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.editClickedUser.subscribe(() => {
      this.model = this.sharedDataService.user;
    });
  }

  editarUser(id:any){
    this.userChallenge.actualizarUser(id,this.model).subscribe(data =>{
      this.model = {_id:"", name:'', surname:'', username:"", email:"", password:'',level:0, exp:0, role:""};
      this.sharedDataService.userAdded.next(true);
    }, error => {
      console.log(error);
    })
  }
}
