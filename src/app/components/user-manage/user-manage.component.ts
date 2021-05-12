import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { RoleService } from 'src/app/services/role.service';
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
  department:any;
  role:any;
  userbirth:any;

  paramD:number=0;
  paramR:number=0;

  constructor( private activatedRoute:ActivatedRoute, private usersService:UsersService, 
               private departmentService:DepartmentService, private roleService:RoleService) { 

  }
  changeDR(){
    this.departmentService.getDepartmentByID(this.paramD).subscribe( (departmentt:any) =>{

      this.user[0].department = departmentt[0].name
      
    })
    this.roleService.getRoleByID(this.paramR).subscribe( (rolet:any) =>{
      this.user[0].role = rolet[0].name
      
    })
  }

  changeINT(){
    this.user[0].department = this.paramD
    this.user[0].role = this.paramR
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
      this.paramD = this.user[0].department;
      this.paramR = this.user[0].role;

    })
  }

}

