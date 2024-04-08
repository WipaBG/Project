import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidtor } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/constants';
import { ProfileDetails } from 'src/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
    profileDetails:ProfileDetails={
      username:"",
      email:"",
    }

  showEditMode: boolean=false;

    form = this.fb.group({
      username:['',[Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required, emailValidtor(EMAIL_DOMAINS)]]

    })


  constructor(private fb :FormBuilder, private userService:UserService){}
  ngOnInit(): void {
   const {username, email}= this.userService.user!;
    this.profileDetails={
      username,
      email,
    }


    this.form.setValue({
      username,
      email,
    })
  };


  
 

  onToggle():void{
    this.showEditMode= !this.showEditMode;
  }

  saveProfileHandler():void{
    if(this.form.invalid){
      return
    }
    this.profileDetails = this.form.value as ProfileDetails
    const {username, email} = this.profileDetails;

    this.userService.updateProfile(username, email).subscribe(()=>{

      this.onToggle();
    });
  
  }
 
  onCancel(e: Event){
    e.preventDefault();
    this.onToggle();
    
  }


}
