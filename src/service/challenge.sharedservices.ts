import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Challenge } from 'src/models/challenge';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  //--------------CHALLENGES SHARED DATA------------------
  challengeAdded = new Subject<boolean>();

  editClicked = new Subject<boolean>();

  challenge: any = null;


  //--------------USER SHARED DATA-----------------

  userAdded = new Subject<boolean>();

  editClickedUser = new Subject<boolean>();

  user: any = null;

  //-----------------TOKEN------------------------------
  token:any = "";  
}

