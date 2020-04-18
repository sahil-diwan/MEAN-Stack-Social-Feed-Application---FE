import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData:any;
  constructor(private authService:AuthService) { 
  this.loginData={};
 }

  ngOnInit(): void {
  }

  post(){
    console.log(this.loginData);
    this.authService.loginUser(this.loginData);
  }

}
