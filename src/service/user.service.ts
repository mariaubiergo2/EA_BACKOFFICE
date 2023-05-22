import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/models/user';
import { environment } from 'src/env/env';
import { SharedDataService } from './challenge.sharedservices';
@Injectable({
  providedIn: 'root'
})


export class UserService {
  url = environment.API_URL + "/user";
  
  
  constructor(private http: HttpClient, private sharedService: SharedDataService) { }

  
  getAllUsers(): Observable<User[]> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User[]>(this.url + '/get/all', {headers});
  }

  getUsers(pageNumber: number, nPerPage: number): Observable<User[]> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User[]>(this.url + '/get/pagination/' + pageNumber + '/' + nPerPage, {headers});
  }

  getUserCount(): Observable<String>{
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<String>(this.url + '/count', {headers});
  } 

  addUsers(user: User): Observable<any>{
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(environment.API_URL + '/auth/register', user, {headers});
  }

  getToken(body: any): Observable<any>{
    return this.http.post(environment.API_URL + '/auth/login', body);
  }

  actualizarUser(id:String, user: User): Observable<any>{
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.url + '/update/' + id, user, {headers});
  }

  disableUser(id: String, body:any): Observable<any> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.url + '/disable/' + id, body, {headers});
  }

  unableUser(id: String, body:any): Observable<any> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.url + '/unable/' + id, body, {headers});
  }

  deleteUser(id: String): Observable<any> {
    const token:string = this.sharedService.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(this.url + '/delete/' + id, {headers});
  } 
}