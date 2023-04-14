import { Component } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/service/challenge.service';

@Component({
  selector: 'app-listchallenge',
  templateUrl: './listchallenge.component.html',
  styleUrls: ['./listchallenge.component.scss']
})
export class ListchallengeComponent {
  model:Challenge = {_id:'',name:'', descr:'', exp:0, lat:'', long:''}  

  constructor(private challengeService: ChallengeService) {}

  // onChallengeAdded() {
  //   this.obtenerChallenges();
  // }

  ngOnInit(): void {
    this.obtenerChallenges();
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
    // var answer = confirm('Estas seguro de querer eliminarlo?');
    // if(answer){
    //   this._employeeService.eliminarUser(id).subscribe(data => {
    //     this.users = [];
    //     this.obtenerUsers();    
    //   }, error => {
    //     console.log(error);
    //   })
    // }    
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
