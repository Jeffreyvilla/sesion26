import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private httpClient: HttpClient) {
   }
  
  traerUsuarios() {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users` );
  }
}

