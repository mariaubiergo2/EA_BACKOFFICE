import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChallengeService } from 'src/service/challenge.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-modifychallenge',
  templateUrl: './modifychallenge.component.html',
  styleUrls: ['./modifychallenge.component.scss']
})
export class ModifychallengeComponent {
  model:Challenge = {_id:'',name:'', descr:'', exp:0, lat:'', long:''}

  constructor(private challengeService: ChallengeService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.editClicked.subscribe(() => {
      this.model = this.sharedDataService.challenge;
    });
  }

  editarChallenge(id:any){
    this.challengeService.actualizarChallenge(id,this.model).subscribe(data =>{
      this.model = {_id:'',name:'', descr:'', exp:0, lat:'', long:''};
      this.sharedDataService.challengeAdded.next(true);
    }, error => {
      console.log(error);
    })
  }

}
