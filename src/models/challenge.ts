import { ObjectId, Schema, model } from "mongoose";

export interface Challenge {
    _id: string;
    name: string;
    ubicacion: number;
};