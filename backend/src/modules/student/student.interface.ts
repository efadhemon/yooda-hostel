import { Document } from "mongoose";

export default interface IStudent extends Document {
    name: string;
    age: string;
    class: string;
    roll: string;
    hall: string;
    status: string;
}
