export interface User{
    recipes: string[],
        comments:[string][],
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
    firstName:string,
    email:string,
    phoneNuber:string,
    password:string,

}