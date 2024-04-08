import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/types/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent{
  constructor(private apiService:ApiService, private router:Router){}

   

  addRecipe(form:NgForm){
    if(form.invalid){
      return;
    }

    console.log(form.value)

    const {recipeName,ingredientsText, stepsText}=form.value;
    this.apiService.createRecipe(recipeName,ingredientsText,stepsText).subscribe(()=>{
        this.router.navigate(['/recipes'])
    })

  }
}
