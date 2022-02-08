import mongoose from "mongoose";
import IDistribution from "./distribution.interface";
const { Schema } = mongoose;

const foodSchema = new Schema<IDistribution>(
    {
        student: {
            type: mongoose.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        shift: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "Served",
        },
        foodItems: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Food",
                required: true,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Distribution = mongoose.model<IDistribution>("Distribution", foodSchema);
export default Distribution;
