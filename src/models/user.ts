import { ObjectId, Schema, model } from "mongoose";

export interface User {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    xp: number;
};