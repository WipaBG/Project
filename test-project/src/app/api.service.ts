import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Comment } from 'src/types/comment';
import { Recipe } from 'src/types/recipe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRecipes(){
    const {apiUrl} = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/recipes`)
  }

  getComment(limit?: number){
    const {apiUrl} = environment;
    
    let url = `${apiUrl}/comments`
    if(limit){
      url += `?limit=${limit}`
    }

    return this.http.get<Comment[]>(url)

  }

  getRecipe(id:string){

    const {apiUrl} = environment;
    return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`)
  }

  createRecipe(recipeName:string, recipeIngredients:string, recipeSteps:string){
    const {apiUrl} = environment;
    const payload =  {recipeName, recipeIngredients, recipeSteps};

    return this.http.post<Recipe>(`${apiUrl}/recipes`, payload)
  }
}
