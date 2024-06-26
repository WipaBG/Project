import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { CurrentRecipeComponent } from "./current-recipe/current-recipe.component";
import { authActivate } from "../guards/auth.activate";
import { CommentsComponent } from "./comments/comments.component";

const routes: Routes = [{path:'recipes', children:[{path:'', pathMatch:'full', component:RecipesComponent},
{path:':recipeId', component:CurrentRecipeComponent}]},
{path:'comments', component: CommentsComponent},
{path:'add-recipe', component: AddRecipeComponent,
canActivate:[authActivate]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule{}