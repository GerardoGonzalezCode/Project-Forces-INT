import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) {
    console.log("Servicio Funcionando");
  }

  getNews(keyword1: any) {
    return this.http.get(`http://localhost:3000/news?keyword=${keyword1}`)
  }
}
