import { Comment } from "./comment";

export interface User{
    recipes: string[],
        comments:Comment[],
        _id: string;
        tel: string;
        email: string;
        username: string;
        password:string;
        created_on:string;
        updateAt:string;
        __v:number;

}

export interface UserForAuth{
    id:string,
    firstName:string,
    email:string,
    phoneNuber:string,
    password:string,

}