import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { MainModule } from './main/main.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ErrorHandlingComponent } from './shared/error-handling/error-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    ErrorHandlingComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    SharedModule,
    MainModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
