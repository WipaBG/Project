import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidtor } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/constants';
import { ProfileDetails } from 'src/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode: boolean=false;


  profileDetails:ProfileDetails ={
    username: "John Doe",
    email:"johndoe@gmail.com"
    };

    form = this.fb.group({
      username:['',[Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required, emailValidtor(EMAIL_DOMAINS)]]

    })

    constructor(private fb :FormBuilder){}


  onToggle():void{
    this.showEditMode= !this.showEditMode;
  }

  saveProfileHandler():void{
    if(this.form.invalid){
      return
    }
    this.profileDetails = this.form.value as ProfileDetails
    this.onToggle();
  }

  onCancel(e: Event){
    e.preventDefault();
    this.onToggle();
    
  }


}
