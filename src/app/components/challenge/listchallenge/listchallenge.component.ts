import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/service/challenge.service';
import { FormchallengeComponent } from '../formchallenge/formchallenge.component';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-listchallenge',
  templateUrl: './listchallenge.component.html',
  styleUrls: ['./listchallenge.component.scss']
})
export class ListchallengeComponent {
  model:Challenge = {_id:'',name:'', descr:'', exp:0, lat:'', long:''}  

  constructor(private challengeService: ChallengeService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.obtenerChallenges();
    this.sharedDataService.challengeAdded.subscribe(() => {
      this.obtenerChallenges();
    });
  }

  challenges: Challenge [] = [];

  obtenerChallenges(){
    this.challengeService.getChallenges().subscribe(data => {
      console.log(data);
      this.challenges = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarChallenge(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this.challengeService.deleteChallenge(id).subscribe(data => {
        this.obtenerChallenges();    
      }, error => {
        console.log(error);
      })
    }    
  }

  editarChallenge(i:any){
    this.sharedDataService.challenge = this.challenges[i];
    this.sharedDataService.editClicked.next(true);
  }

}
