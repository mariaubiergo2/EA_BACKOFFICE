import { ObjectId, Schema, model } from "mongoose";

export interface User {
    _id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    level: number;
    exp: number;
    role: string;
};

//model:User = {_id:'',name:'',surname:'',email:'',password:'', xp:0};