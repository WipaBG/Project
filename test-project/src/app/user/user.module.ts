import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../main/home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
// import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
  
    LoginComponent,
       RegisterComponent,
       ProfileComponent
  ],
  imports: [
    UserRoutingModule, RouterModule
  ],
  exports:[
  ]
})
export class UserModule { }
