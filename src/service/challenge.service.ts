import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/models/challenge';

@Injectable({
  providedIn: 'root'
})

export class ChallengeService {
  url = 'http://localhost:3002/challenge';

  constructor(private http: HttpClient) { }

  getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.url + '/get/all');
  }

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.url + '/all');
//   }

//   eliminarUser(id: String): Observable<any> {
//     return this.http.delete(this.url + '/' + id);
//   } 

//   eliminarAllUsers(): Observable<any> {
//     return this.http.delete(this.url + '/');
//   } 

//   añadirUser(user: User): Observable<any>{
//     return this.http.post(this.url + '/', user);
//   }

//   actualizarUser(id:String, user: User): Observable<any>{
//     return this.http.put(this.url + '/' + id, user);
//   }

}