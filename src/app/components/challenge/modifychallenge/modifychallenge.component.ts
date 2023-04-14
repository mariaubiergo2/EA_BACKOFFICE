import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChallengeService } from 'src/service/challenge.service';

@Component({
  selector: 'app-modifychallenge',
  templateUrl: './modifychallenge.component.html',
  styleUrls: ['./modifychallenge.component.scss']
})
export class ModifychallengeComponent {
  model:Challenge = {_id:'',name:'', descr:'', exp:0, lat:'', long:''}

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
  }

  editarChallenge(id:any){
    this.challengeService.actualizarChallenge(id,this.model).subscribe(data =>{
      this.model = {_id:'',name:'', descr:'', exp:0, lat:'', long:''};
      // this.hideUpdate = true;
      // this.users = [];
      // this.obtenerChallenges();
    }, error => {
      console.log(error);
    })
  }

}
