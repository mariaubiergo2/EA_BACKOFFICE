import { ObjectId, Schema, model } from "mongoose";

export interface Challenge {
    _id: string;
    name: string;
    descr: string;
    exp: number;
    lat: string;
    long: string;
};