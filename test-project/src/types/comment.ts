import { Recipe } from "./recipe";
import { User } from "./user";

export interface Comment{
    likes:string[];
    _id:string[];
    userId:User;
    recipeId:Recipe;
    created_on:string;
    updatedAt:string;
    __v:number;

}