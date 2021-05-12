import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

interface rolReg {
  name:string;
  seed:number;
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roleU: rolReg = {
    name:"",
    seed:0
  }

  roles: any[] = [];
  delTarget: any;
  delName:any;
  updTarget: any;

  constructor( private roleService: RoleService, private http: HttpClient ) { 
    roleService.getRoles().subscribe( (resp:any) =>{
      this.roles = resp;
      console.log(resp);
    })
  }

  targetRole(role:any){
    this.delTarget = role
    this.delName = this.delTarget.name
  }

  targetRoleM(role:any){
    this.updTarget = role
    this.roleU.name = this.updTarget.name
    this.roleU.seed = this.updTarget.seed
  }

  deleteRole(){
    this.roleService.deleteRole(this.delTarget.id).subscribe( resp =>{
      console.log(resp);
    })
    window.location.reload();
  }

  regRole(){
    this.roleService.registerRole(this.roleU).subscribe( role =>{
      
    })
    this.roleU.name = "";
    this.roleU.seed = 0;
    window.location.reload();
  }

  updRole(){
    this.roleService.updateRole(this.roleU, this.updTarget.id).subscribe( role =>{
      
    })
    this.roleU.name = "";
    this.roleU.seed = 0;
    window.location.reload();
  }

  closeTab(){
    this.roleU.name = "";
    this.roleU.seed = 0;
  }

  ngOnInit(): void {
  }

}
