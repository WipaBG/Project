import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { UserForAuth } from 'src/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{

  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();


  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;



  get isLogged():boolean{
    
    return !!this.user;
  }

  constructor(private http:HttpClient) { 
   this.userSubscription = this.user$.subscribe((user)=>{
      this.user = user;
    })
    
 
  }

  register(username:string, email:string, password:string, rePassword:string){
      return this.http.post<UserForAuth>('/api/register',{username, email, password, rePassword}).pipe(tap((user)=>
        this.user$$.next(user)));

  }

  login(email:string, password:string){
    return this.http.post<UserForAuth>('/api/login', {email,password}).pipe(tap((user)=>
      this.user$$.next(user)));


  }

  logout(){
    return this.http.post('/api/logout', {}).pipe(tap(()=>
      this.user$$.next(undefined)));

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
