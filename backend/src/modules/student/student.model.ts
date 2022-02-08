import mongoose from "mongoose";
import IStudent from "./student.interface";
const { Schema } = mongoose;

const studentSchema = new Schema<IStudent>(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        roll: {
            type: String,
            required: true,
        },
        hall: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Student = mongoose.model<IStudent>("User", studentSchema);
export default Student;
