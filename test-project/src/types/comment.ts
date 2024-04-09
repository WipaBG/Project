import { Recipe } from "./recipe";
import { User } from "./user";

export interface Comment{
    _id:string;
    _ownerId:User;
    content: string,
    recipeId:string;
    _createdOn:string;
    likes:string;
    updatedAt:string;
    __v:number;

}