import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor( private http: HttpClient ) {
    console.log("Servicio Funcionando");
  }

  getDepartments() {
    return this.http.get(`http://localhost:3000/department`)
  }

  getDepartmentByID(id: number) {
    return this.http.get(`http://localhost:3000/department/${id}`)
  }

  updateDepartment(department:any, id:number) {
    return this.http.put(`http://localhost:3000/department/${id}`, department)
  }

  deleteDepartment(id:number) {
    return this.http.delete(`http://localhost:3000/department/${id}`)
  }

  registerDepartment(department:any) {
    return this.http.post(`http://localhost:3000/department`, department)
  }
}
