import { ObjectId, Schema, model } from "mongoose";

export interface Challenge {
    _id: string;
    name: string;
    descripcion : string;
    xp: number;
    latitud: string;
    longitud: string;
};