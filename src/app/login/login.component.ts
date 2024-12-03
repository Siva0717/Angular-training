import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  submit(){
  localStorage.setItem("username",this.username)
  localStorage.setItem("password",this.password)
  this.router.navigate(['/home'])

  }
  username="";
  password="";

}
