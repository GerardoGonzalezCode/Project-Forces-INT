import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  param:any;
  users:any;
  delTarget:any;
  delName:any;

  constructor( private activatedRoute:ActivatedRoute, private usersService:UsersService ) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.param = params.term
      console.log(this.param);
      
    })

    this.usersService.searchUsers(this.param).subscribe( usert =>{
      this.users = usert
      console.log(this.users);
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

}
