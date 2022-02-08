import mongoose, { Document } from "mongoose";

export default interface IDistribution extends Document {
    student: any;
    shift: string;
    date: string;
    status: string;
    foodItems: any;
}
