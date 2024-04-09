import { Component, NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private userService:UserService, private router:Router){}

  login(form:NgForm){
    if(form.invalid){
      return;
    }

    const {email, password} = form.value;

    this.userService.login(email, password).subscribe(()=>{
      this.router.navigate(['/recipes']);

    })

 
  }


}
