import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  constructor(private userService:UserService){}
  
  get isLoggedIn():boolean{
    return this.userService.isLogged;
  }
}
