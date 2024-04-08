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
    const {apiUrlData} = environment;
    return this.http.get<Recipe[]>(`${apiUrlData}/recipes`)
  }

  getComments(){
    const {apiUrlData} = environment;
    
    let url = `${apiUrlData}/comments`
  

    return this.http.get<Comment[]>(url)

  }


  getConcreteComments(id:string){
    const {apiUrlData} = environment;
    return this.http.get<Comment>(`${apiUrlData}/comments/${id}`);
  }

  getRecipe(id:string){

    const {apiUrlData} = environment;
    return this.http.get<Recipe>(`${apiUrlData}/recipes/${id}`)
  }

  createRecipe(recipeName:string, recipeIngredients:string, recipeSteps:string){
    const {apiUrlData} = environment;

    const payload =  {recipeName, recipeIngredients, recipeSteps};

    return this.http.post<Recipe>(`${apiUrlData}/recipes`, payload)
  }
}
