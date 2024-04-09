import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NotFoundComponent } from './not-found/error.component';
import { RecipesComponent } from './main/recipes/recipes.component';

const routes: Routes = [{
  path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo: '/404'},
  {path:'404', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
