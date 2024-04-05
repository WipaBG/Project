import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../main/home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
  
    LoginComponent,
       RegisterComponent,
       ProfileComponent
  ],
  imports: [
    UserRoutingModule, RouterModule,CommonModule,SharedModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
  ]
})
export class UserModule { }
