import { Injectable } from '@angular/core';
import { UserForAuth } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';


  get isLogged():boolean{
    return !!this.user;
  }

  constructor() { 
    try{
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    }
    catch(error){
      this.user = undefined;
    }
 
  }

  login(){
    this.user = {
      id: '35c62d76-8152-4626-8712-eeb96381bea8',
      firstName: 'Petko',
      email: 'petkoivanov@abv.bg',
      password:'123123',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
