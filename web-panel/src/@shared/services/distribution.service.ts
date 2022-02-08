import { CoreAxiosInstance } from "@shared/config";
import {
    IDistributionFilter,
    ICreateDistribution,
    IUpdateDistribution,
} from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/distribution/";

export const distributionService = {
    NAME: END_POINT,
    create(payload: ICreateDistribution) {
        return CoreAxiosInstance.post(END_POINT, payload);
    },
    filter(options: IDistributionFilter) {
        return CoreAxiosInstance.get(
            `${END_POINT}?${concatFilterQuery(options)}`
        );
    },
    filterById(id: string) {
        return CoreAxiosInstance.get(`${END_POINT}${id}`);
    },
    update(payload: IUpdateDistribution) {
        const { id } = payload;
        delete payload.id;
        return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
    },
    delete(id: string) {
        return CoreAxiosInstance.delete(`${END_POINT}${id}`);
    },
};
