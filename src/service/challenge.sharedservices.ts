import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Challenge } from 'src/models/challenge';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  challengeAdded = new Subject<boolean>();

  editClicked = new Subject<boolean>();

  challenge: any = null;
}
