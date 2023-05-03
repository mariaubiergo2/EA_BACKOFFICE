import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/service/challenge.service';
import { ListchallengeComponent } from '../listchallenge/listchallenge.component';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formchallenge',
  templateUrl: './formchallenge.component.html',
  styleUrls: ['./formchallenge.component.scss']
})
export class FormchallengeComponent {
  // model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};
  model:any = {name:'', descr:'', exp:0, lat:'', long:''}

  constructor(private challengeService: ChallengeService, private sharedDataService: SharedDataService, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  addChallenge(){
    this.challengeService.addChallenge(this.model).subscribe(data => {
      console.log(this.model);
      this.model = {name:'', descr:'', exp:0, lat:'', long:''};   
      this.sharedDataService.challengeAdded.next(true);   
    }, (error:any) => {
      this.model = {name:'', descr:'', exp:0, lat:'', long:''};   
      switch (error.status) {
        case 400:
          this.toastr.error('There is already a challenge with this name!','ERROR');
          break;
        default: 
          this.toastr.error(error.message, 'ERROR');
          break;
      }
    })
  }
}
