import { Component, NgModule } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { User } from 'src/models/user';
import { SharedDataService } from 'src/service/challenge.sharedservices';
import { UserService } from 'src/service/user.service';
import {NgxPaginationModule} from 'ngx-pagination'

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})

export class ListuserComponent {
  model:User = {_id:"", name:'', surname:'', username:"", email:"", password:'', level:0, exp:0, role:""}  

  public popoverTitle: string = '¡Atención!';
  public popoverMessage: string = '¿Seguro que quieres eliminarlo definitivamente?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  pageNumber: number = 1;
  nPerPage: number = 5;
  count: number = 0;
  tableSizes: any = [5, 10, 15, 20];

  users: User [] = [];

constructor(private userService: UserService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.obtenerUsers();
    this.sharedDataService.userAdded.subscribe(() => {
      this.obtenerUsers(); 
    });
  }

  obtenerUsers(){
    //this.userService.getUsers(this.pageNumber, this.nPerPage).subscribe(data => { this.users = data; })
    //this.userService.getUserCount().subscribe(data => { this.count = Number(data); })
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.count = data.length;
    }, error => {
      console.log(error);
    })
  }

  editarUser(i: any){
    this.sharedDataService.user = this.users[i];
    this.sharedDataService.editClickedUser.next(true);
  }

  deshabilitarUser(id: string){
    const body = null;
    this.userService.disableUser(id, body).subscribe(data => {
      this.obtenerUsers();    
    }, error => {
      console.log(error);
    }) 
  }

  eliminarUser(id: string){
    this.userService.deleteUser(id).subscribe(data => {
      this.obtenerUsers();    
    }, error => {
      console.log(error);
    })        
  }

  renderPage(event: number) {
    this.pageNumber = event;
    this.obtenerUsers();
  }

  renderSize(event: any): void {
    this.nPerPage = event.target.value;
    this.pageNumber = 1;
    this.obtenerUsers();
  }
}
