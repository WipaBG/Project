import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Recipe } from 'src/types/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  recipes: Recipe[] = [];
  comments: Comment[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService){}

    
  get isLoggedIn():boolean{
    return this.userService.isLogged;
  }

  get userId():string{
    return this.userService.user?.id || '';
  }



  ngOnInit(): void {
    this.api.getRecipes().subscribe(recipes=>{
      console.log(recipes)
      this.recipes = recipes;
    })


  
  }




  // comments: Comment[] = [];

  // constructor(private api:ApiService){}
  
  // ngOnInit(): void {
  //   this.api.getComments().subscribe((comments)=>{
  //     console.log(comments);
  //     this.comments = comments
  //   })
  // }



  isLiked(recipe: Recipe){
    const isLikedUser = recipe.likes.find((s)=> {
      console.log({s, id: this.userService.user?.id})

      return s===this.userService.user?.id;
    });
    console.log({isLikedUser: !!isLikedUser});

    return !!isLikedUser;

  }



}
 