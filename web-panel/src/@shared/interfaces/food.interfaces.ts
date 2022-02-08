export interface IFoodFilter {
    page?: number;
    take?: number;
    name?: string;
    price?: string;
}

export interface IFood {
    _id: string;
    name?: string;
    price?: string;
}
export interface IUpdateFood {
    id?: string;
    name?: string;
    price?: string;
}

export interface ICreateFood {
    name?: string;
    price?: string;
}
