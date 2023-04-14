import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  challengeAdded = new Subject<boolean>();

  editClicked = new Subject<boolean>();
}
