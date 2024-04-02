import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/types/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  recipes: Recipe[] = [];

  constructor(private api: ApiService){}
  ngOnInit(): void {
    this.api.getRecipes().subscribe(recipes=>{
      console.log(recipes)
      this.recipes = recipes;
    })
  }

}
 