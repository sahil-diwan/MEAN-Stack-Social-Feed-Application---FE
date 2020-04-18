import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(registerData){
    this.http.post('http://localhost:3000/register',registerData).subscribe(res=>{
    })
  }

  loginUser(loginData){
    this.http.post('http://localhost:3000/login',loginData).subscribe(res=>{
      localStorage.setItem('token',res['token']);
    })
  }
}
