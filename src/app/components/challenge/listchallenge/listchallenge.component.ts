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

  public popoverTitle: string = '¡Atención!';
  public popoverMessage: string = '¿Seguro que quieres eliminarlo definitivamente?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  pageNumber: number = 1;
  nPerPage: number = 5;
  count: number = 0;
  tableSizes: any = [5, 10, 15, 20];

  challenges: Challenge [] = [];

  constructor(private challengeService: ChallengeService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.obtenerChallenges();
    this.sharedDataService.challengeAdded.subscribe(() => {
      this.obtenerChallenges();
    });
  }

  obtenerChallenges(){
    this.challengeService.getChallenges(this.pageNumber, this.nPerPage).subscribe(data => {
      this.challenges = data;
      this.count = Number(this.challengeService.getChallengeCount());
    }, error => {
      console.log(error);
    })
  }

  eliminarChallenge(id: string){
    this.challengeService.deleteChallenge(id).subscribe(data => {
      this.obtenerChallenges();    
    }, error => {
      console.log(error);
    })
  }

  editarChallenge(i: any){
    this.sharedDataService.challenge = this.challenges[i];
    this.sharedDataService.editClicked.next(true);
  }

  renderPage(event: number) {
    this.pageNumber = event;
    this.obtenerChallenges();
  }

  renderSize(event: any): void {
    this.nPerPage = event.target.value;
    this.pageNumber = 1;
    this.obtenerChallenges();
  }
}
