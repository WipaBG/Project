import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

   

  addRecipe(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value)


  }
}
