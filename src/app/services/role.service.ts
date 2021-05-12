import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor( private http: HttpClient ) {
    console.log("Servicio Funcionando");
  }

  getRoles() {
    return this.http.get(`http://localhost:3000/role`)
  }

  getRoleByID(id: number) {
    return this.http.get(`http://localhost:3000/role/${id}`)
  }

  updateRole(role:any, id:number) {
    return this.http.put(`http://localhost:3000/role/${id}`, role)
  }

  deleteRole(id:number) {
    return this.http.delete(`http://localhost:3000/role/${id}`)
  }

  registerRole(role:any) {
    return this.http.post(`http://localhost:3000/role`, role)
  }
}
