import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from '../not-found/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    WelcomeComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[NavComponent, FooterComponent, WelcomeComponent, EmailDirective, SlicePipe]
})
export class SharedModule { }
