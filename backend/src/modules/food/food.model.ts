import mongoose from "mongoose";
import IFood from "./food.interface";
const { Schema } = mongoose;

const foodSchema = new Schema<IFood>(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Food = mongoose.model<IFood>("Food", foodSchema);
export default Food;
