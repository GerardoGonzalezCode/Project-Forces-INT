import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: any[] = [];
  delTarget: any;
  delName:any;

  constructor( private usersService: UsersService, private http: HttpClient ) { 
    usersService.getUsers().subscribe( (resp:any) =>{
      this.users = resp;
      console.log(resp);
    })
  }

  targetUser(user:any){
    this.delTarget = user
    this.delName = this.delTarget.name
  }

  deleteUser(){
    this.usersService.deleteUsers(this.delTarget.id).subscribe( resp =>{
      console.log(resp);
    })
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
