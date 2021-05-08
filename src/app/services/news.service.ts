import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {
    console.log("Servicio Funcionando");
  }
}
