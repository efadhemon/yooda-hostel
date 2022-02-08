import { Document } from "mongoose";

export default interface IFood extends Document {
    name: string;
    price: string;
}
