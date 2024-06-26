import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    HomeComponent,
    RecipesComponent,
    AddRecipeComponent,
    CurrentRecipeComponent,
    MainContentComponent,
    CommentsComponent

    
  ],
  imports: [
    CommonModule, RecipeRoutingModule, SharedModule,FormsModule
  ],
  exports:[HomeComponent,MainContentComponent]
})
export class MainModule { }
