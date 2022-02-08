import { CoreAxiosInstance } from "@shared/config";
import {
    IStudentFilter,
    ICreateStudent,
    IUpdateStudent,
} from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/students/";

export const studentService = {
    NAME: END_POINT,
    create(payload: ICreateStudent) {
        return CoreAxiosInstance.post(END_POINT, payload);
    },
    filter(options: IStudentFilter) {
        return CoreAxiosInstance.get(
            `${END_POINT}?${concatFilterQuery(options)}`
        );
    },
    filterById(id: string) {
        return CoreAxiosInstance.get(`${END_POINT}${id}`);
    },
    update(payload: IUpdateStudent) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
