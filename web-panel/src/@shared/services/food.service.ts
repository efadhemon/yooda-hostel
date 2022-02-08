import { CoreAxiosInstance } from "@shared/config";
import { IFoodFilter, ICreateFood, IUpdateFood } from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/foods/";

export const foodService = {
    NAME: END_POINT,
    create(payload: ICreateFood) {
        return CoreAxiosInstance.post(END_POINT, payload);
    },
    filter(options: IFoodFilter) {
        return CoreAxiosInstance.get(
            `${END_POINT}?${concatFilterQuery(options)}`
        );
    },
    filterById(id: string) {
        return CoreAxiosInstance.get(`${END_POINT}${id}`);
    },
    update(payload: IUpdateFood) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
