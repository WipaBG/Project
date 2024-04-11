import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Comment } from 'src/types/comment';
import { Recipe } from 'src/types/recipe';
import { User } from 'src/types/user';

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

  getUser(id:string){
    const {apiUrlData} = environment;
    return this.http.get<User>(`${apiUrlData}/users/${id}`)
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


  // createRecipe(recipeName: string, recipeIngredients: string, recipeSteps: string): Observable<Recipe> {
  //   const { apiUrlData } = environment;
  //   const payload = { recipeName, recipeIngredients, recipeSteps };

  //   // Get the access token from localStorage
  //   const token = localStorage.getItem('token');

  //   // Set the headers with the Authorization token
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-Authorization': token || '' // If token is null, set it as empty string
  //   });

  //   // Make the HTTP POST request with headers
  //   return this.http.post<Recipe>(`${apiUrlData}/recipes`, payload, { headers });
  // }



}
