import mongoose, { Document } from "mongoose";

export default interface IDistribution extends Document {
    studentId: any;
    shift: string;
    date: string;
    status: string;
    foodItemList: any;
}
