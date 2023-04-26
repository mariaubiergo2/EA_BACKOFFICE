import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'http://127.0.0.1:3002/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/get/all');
  }

  getUsers(pageNumber: number, nPerPage: number): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/get/pagination/' + pageNumber + '/' + nPerPage);
  }

  getUserCount(): Observable<String>{
    return this.http.get<String>(this.url + '/count');
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

  disableUser(id: String, body:any): Observable<any> {
    return this.http.post(this.url + '/disable/' + id, body);
  }

}