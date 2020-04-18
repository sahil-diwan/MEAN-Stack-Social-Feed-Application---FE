import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData:any;
  constructor(private authService:AuthService) { 
  this.registerData={};
 }

  ngOnInit(): void {
  }

  post(){
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }

}
