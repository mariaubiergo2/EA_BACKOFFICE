import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/models/challenge';

@Injectable({
  providedIn: 'root'
})

export class ChallengeService {
  url = 'http://127.0.0.1:3002/challenge';

  constructor(private http: HttpClient) { }

  getAllChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.url + '/get/all');
  }

  getChallenges(pageNumber: number, nPerPage: number): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.url + '/get/pagination/' + pageNumber + '/' + nPerPage);
  }

  getChallengeCount(): Observable<String>{
    return this.http.get<String>(this.url + '/count');
  } 

  addChallenge(challenge: Challenge): Observable<any>{
    return this.http.post(this.url + '/add', challenge);
  }

  deleteChallenge(id: String): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  } 

  actualizarChallenge(id:String, challenge: Challenge): Observable<any>{
    return this.http.post(this.url + '/update/' + id, challenge);
  }

}