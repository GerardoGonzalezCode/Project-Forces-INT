import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  buscarEmp(emp:string){
    console.log(emp);
    if (emp) {
      window.location.href = '/search/'+emp;
    }
  }

}
