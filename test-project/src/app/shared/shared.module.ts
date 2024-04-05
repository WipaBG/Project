import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from '../error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ErrorComponent,
    WelcomeComponent,
    EmailDirective,
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[NavComponent, FooterComponent, WelcomeComponent, EmailDirective]
})
export class SharedModule { }
