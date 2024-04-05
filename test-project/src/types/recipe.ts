import { Comment } from "./comment";
import { User } from "./user"

export interface Recipe{
    name: string,
    imgUrl:string,
    ingredients:string[],
    steps:string[],
    _id:string,
    owner_id:string,
    likes: string[],
    comments:Comment[];
    _createdOn:string;
    updatedAt:string;
    __v:number;

}

