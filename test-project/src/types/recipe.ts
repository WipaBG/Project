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
// {    recipeName: "Пържени картофи",
//     ingredients: "картофи",
//     _id:"5fa64a9f2183ce1728ff371a",
//     likes: ["5fa64a9f2183ce1728ff371a"],
//     userId:"5fa64a072183ce1728ff3719",
//     comments:Comment[];
//     created_at:"2020-11-07T07:19:59.933+00:00";
//     updatedAt:"2020-11-07T08:33:44.801+00:00";
//     __v:0;}

