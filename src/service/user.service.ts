import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'http://localhost:3002/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/get/all');
  }

  addUsers(user: User): Observable<any>{
    return this.http.post(this.url + '/signup', user);
  }

  deleteUser(id: String): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  } 

  actualizarUser(id:String, user: User): Observable<any>{
    return this.http.post(this.url + '/update/' + id, user);
  }

}