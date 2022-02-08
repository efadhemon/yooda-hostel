export interface IStudentFilter {
    page?: number;
    take?: number;
    name?: string;
    age?: string;
    class?: string;
    roll?: string;
    hall1?: string;
    status?: string;
}

export interface IStudent {
    _id: string;
    name: string;
    age: string;
    class: string;
    roll: string;
    hall: string;
    status: string;
}
export interface IUpdateStudent {
    id?: string;
    name: string;
    age: string;
    class: string;
    roll: string;
    hall: string;
    status: string;
}

export interface ICreateStudent {
    name: string;
    age: string;
    class: string;
    roll: string;
    hall: string;
    status: string;
}
