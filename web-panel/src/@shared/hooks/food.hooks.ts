import { IStudentFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { foodService } from "@shared/services";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

//---------------- useFoods hook ------------------------------------
type IFuseFoods = {
    options?: IStudentFilter;
};
export const useFoods = ({ options = {} }: IFuseFoods = {}) => {
    return useQuery({
        queryKey: [foodService.NAME, options],
        queryFn: () => foodService.filter(options),
    });
};

//---------------- useFood hook ------------------------------------
type IFuseFood = {
    id: string;
    config?: QueryConfig<typeof foodService.filterById>;
};

export const useFood = ({ id, config }: IFuseFood) => {
    return useQuery({
        ...config,
        queryFn: () => foodService.filterById(id),
    });
};

//---------------- useCreateFood hook ------------------------------------
type IFuseCreateFood = {
    config?: MutationConfig<typeof foodService.create>;
};

export const useCreateFood = ({ config }: IFuseCreateFood = {}) => {
    return useMutation({
        ...config,
        mutationFn: foodService.create,
    });
};

//---------------- useUpdateFood hook ------------------------------------
type IFuseUpdateFood = {
    config?: MutationConfig<typeof foodService.update>;
};

export const useUpdateFood = ({ config }: IFuseUpdateFood = {}) => {
    return useMutation({
        ...config,
        mutationFn: foodService.update,
    });
};

//---------------- useDeleteFood hook ------------------------------------
type IFuseDeleteFood = {
    config?: MutationConfig<typeof foodService.delete>;
};

export const useDeleteFood = ({ config }: IFuseDeleteFood = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(foodService.NAME);
            notification.success({
                type: "success",
                message: "Food Deleted",
            });
        },
        ...config,
        mutationFn: foodService.delete,
    });
};
