import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';


interface rolReg {
  name:string;
  incharge:string;
  manager:string
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentU: rolReg = {
    name:"",
    incharge:"",
    manager:""
  }

  departments: any[] = [];
  delTarget: any;
  delName:any;
  updTarget: any;

  constructor( private departmentService: DepartmentService, private http: HttpClient ) { 
    departmentService.getDepartments().subscribe( (resp:any) =>{
      this.departments = resp;
      console.log(resp);
    })
  }

  targetDepartment(department:any){
    this.delTarget = department
    this.delName = this.delTarget.name
  }

  targetDepartmentM(department:any){
    this.updTarget = department
    this.departmentU.name = this.updTarget.name
    this.departmentU.incharge = this.updTarget.incharge
    this.departmentU.manager = this.updTarget.manager
  }

  deleteDepartment(){
    this.departmentService.deleteDepartment(this.delTarget.id).subscribe( resp =>{
      console.log(resp);
    })
    window.location.reload();
  }

  regDepartment(){
    this.departmentService.registerDepartment(this.departmentU).subscribe( department =>{
      
    })
    this.departmentU.name = "";
    this.departmentU.incharge = "";
    this.departmentU.manager = "";
    window.location.reload();
  }

  updDepartment(){
    this.departmentService.updateDepartment(this.departmentU, this.updTarget.id).subscribe( department =>{
      
    })
    this.departmentU.name = "";
    this.departmentU.incharge = "";
    this.departmentU.manager = "";
    window.location.reload();
  }

  closeTab(){
    this.departmentU.name = "";
    this.departmentU.incharge = "";
    this.departmentU.manager = "";
  }

  ngOnInit(): void {
  }

}
