import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

interface userReg {
  name:string;
  email:string;
  phone:number;
  imageUrl:string;
  birth:string;
}
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  registerU: userReg = {
    name:"",
    email:"",
    phone:0,
    imageUrl:"",
    birth:""
  }

  param:number = 0;

  user:any;
  userbirth:any;

  constructor( private activatedRoute:ActivatedRoute, private usersService:UsersService ) { 

    this.activatedRoute.params.subscribe( params =>{
      this.param = params.id  
      console.log(this.param);
      
    })

    this.usersService.getUsersByID(this.param).subscribe( usert =>{
      this.user = usert
      this.userbirth = this.user[0].birth.slice(0,10)
      this.registerU.name = this.user[0].name;
      this.registerU.email = this.user[0].email;
      this.registerU.phone = this.user[0].phone;
      this.registerU.imageUrl = this.user[0].imageurl;
      this.registerU.birth = this.userbirth;
    })
  }

  updateUser(){
    console.log(this.user[0]);
  }

  submit(){
    this.usersService.updateUsers(this.registerU, this.param).subscribe( user =>{

    })
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
