import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/models/challenge';
import { environment } from 'src/env/env';
import { SharedDataService } from './challenge.sharedservices';

@Injectable({
  providedIn: 'root'
})

export class ChallengeService {
  url = environment.API_URL + "/challenge";


  constructor(private http: HttpClient, private sharedService: SharedDataService) { }

  getAllChallenges(): Observable<Challenge[]> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Challenge[]>(this.url + '/get/all', {headers});
  }

  getChallenges(pageNumber: number, nPerPage: number): Observable<Challenge[]> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Challenge[]>(this.url + '/get/pagination/' + pageNumber + '/' + nPerPage, {headers});
  }

  getChallengeCount(): Observable<String>{
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<String>(this.url + '/count', {headers});
  } 

  addChallenge(challenge: Challenge): Observable<any>{
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.url + '/add', challenge, {headers});
  }

  actualizarChallenge(id:String, challenge: Challenge): Observable<any>{
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.url + '/update/' + id, challenge, {headers});
  }

  deleteChallenge(id: String): Observable<any> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(this.url + '/delete/' + id, {headers});
  } 
}