import { IStudent } from "./student.interfaces";
import { IFood } from "./food.interfaces";
export interface IDistributionFilter {
    page?: number;
    take?: number;
}

export interface IDistribution {
    _id: string;
    student: IStudent;
    shift: string;
    date: string;
    status: string;
    foodItems: IFood[];
}
export interface IUpdateDistribution {
    id?: string;
    student: IStudent;
    shift: string;
    date: string;
    status: string;
    foodItems: IFood[];
}

export interface ICreateDistribution {
    student: IStudent;
    shift: string;
    date: string;
    status: string;
    foodItems: IFood[];
}
