import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/service/challenge.service';


@Component({
  selector: 'app-formchallenge',
  templateUrl: './formchallenge.component.html',
  styleUrls: ['./formchallenge.component.scss']
})
export class FormchallengeComponent {
  // model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};
  model:any = {name:'', descr:'', exp:0, lat:'', long:''}

  @Output() challengeAdded = new EventEmitter<boolean>();

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
  }

  addChallenge(){
    this.challengeService.addChallenge(this.model).subscribe(data => {
      console.log(this.model);
      this.model = {name:'', descr:'', exp:0, lat:'', long:''};
      this.challengeAdded.emit(true);
    }, error => {
      console.log(error);
      this.challengeAdded.emit(false);
    })
  }
}
