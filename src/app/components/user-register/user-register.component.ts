import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

interface userReg {
  name:string;
  email:string;
  phone:number;
  password:string;
  imageUrl:string;
  birth:string;
  department:number;
  role:number;

}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerU: userReg = {
    name:"",
    email:"",
    phone: 33,
    password:"",
    imageUrl:"",
    birth:"",
    department:1,
    role:1
  }

  userBut = false;
  userLook: userReg = {
    name:"",
    email:"",
    phone: 33,
    password:"",
    imageUrl:"",
    birth:"",
    department:1,
    role:1
  }

  constructor( private usersService:UsersService, private formBuilder:FormBuilder ) { }

  submit(){
    this.usersService.passwordUsers().subscribe( (password:any) =>{
      this.registerU.password = password.pass
    })
    this.usersService.registerUsers(this.registerU).subscribe( user =>{
      
    })
    this.userLook = this.registerU
    this.registerU.name = "";
    this.registerU.email = "";
    this.registerU.phone = 33;
    this.registerU.password = "";
    this.registerU.imageUrl = "";
    this.registerU.birth = "";
    this.registerU.department = 1;
    this.registerU.role = 1;
    this.userBut = true;
    
  }

  salirHome(){
    window.location.href = '/table';
  }

  ngOnInit(): void {
  }

}
