import { Recipe } from "./recipe";
import { User } from "./user";

export interface Comment{
    _id:string;
    _ownerId:User;
    content: string,
    recipeId:Recipe;
    _createdOn:string;
    likes:string;
    updatedAt:string;
    __v:number;

}