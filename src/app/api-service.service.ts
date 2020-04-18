import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  messages:any;
  constructor(private http:HttpClient) { }

  getMessages(){
    this.http.get('http://localhost:3000/posts').subscribe(res=>{
      this.messages=res;
    })
  }
}
