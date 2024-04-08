import { Component, OnInit } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit{
  errorMsg ='';

  
  constructor(private errorService:ErrorHandlingService){}
  ngOnInit(): void {
    this.errorService.apiError$.subscribe((err: any)=>{
      this.errorMsg = err?.message || '';

    })
  }
}
