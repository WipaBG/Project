import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/types/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent{
  constructor(private apiService:ApiService){}



   

  addRecipe(ev:Event, recipeName:string, recipeIngredients:string, recipeSteps:string ){
    ev.preventDefault();
    console.log({recipeName, recipeIngredients, recipeSteps});

    this.apiService.createRecipe(recipeName, recipeIngredients, recipeSteps).pipe(tap((data)=>{
      console.log({data});
    }))
  }
}
