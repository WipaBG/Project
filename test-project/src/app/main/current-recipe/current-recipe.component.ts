import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Comment } from 'src/types/comment';
import { Recipe } from 'src/types/recipe';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.css']
})
export class CurrentRecipeComponent implements OnInit{
  recipe={} as Recipe
  comments: Comment[]=[];
  comment= {} as Comment;


  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute){}

  
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data)=>{
      const id = data['recipeId'];


      this.apiService.getRecipe(id).subscribe((recipe)=>{
        this.recipe = recipe;
  
        console.log({recipe})
      })
      
     this.apiService.getComments().subscribe((comments)=>{
      this.comments = comments;
      console.log({comments})


     })


      
  
    })





}

}
