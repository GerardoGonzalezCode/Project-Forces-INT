import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) {
    console.log("Servicio Funcionando");
  }

  getUsers() {
    return this.http.get(`http://localhost:3000/users`)
  }

  getUsersByID(id: number) {
    return this.http.get(`http://localhost:3000/users/user/${id}`)
  }

  searchUsers(email: string) {
    return this.http.get(`http://localhost:3000/users/search/${email}`)
  }

  updateUsers(user:any, id:number) {
    return this.http.put(`http://localhost:3000/users/${id}`, user)
  }

  deleteUsers(id:number) {
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }

  registerUsers(user:any) {
    return this.http.post(`http://localhost:3000/users`, user)
  }

  passwordUsers() {
    return this.http.get(`http://localhost:3000/users/password`)
  }
}