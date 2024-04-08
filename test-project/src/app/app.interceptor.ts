import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { ErrorHandlingService } from "./shared/error-handling/error-handling.service";
import { Router } from "@angular/router";

const { apiUrl } = environment;

@Injectable()
export class AppInterceptors implements HttpInterceptor{

  API = '/api';

  constructor(private errorService: ErrorHandlingService, private router:Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (req.url.startsWith(this.API)) {
        // Modify the URL
        const modifiedUrl = req.url.replace(this.API, apiUrl);
      
        // Set the Authorization header
        const token = localStorage.getItem('token');
        if (token) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }
      
        // Update the request URL
        req = req.clone({ url: modifiedUrl, withCredentials: false });
      }
    

    return next.handle(req).pipe(
      catchError((err)=>{
        if(err.status === 401){
          this.router.navigate(['login']);
        }else{
          this.errorService.setError(err);
          this.router.navigate(['error'])
        }
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptors,
  multi: true,
  provide: HTTP_INTERCEPTORS
}