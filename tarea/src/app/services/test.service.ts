import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Info2 {
        
  constructor(private http: HttpClient){}
           
    getInfo(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
  
  
}
