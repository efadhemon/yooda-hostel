import { IStudentFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { distributionService } from "@shared/services";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

//---------------- useDistributions hook ------------------------------------
type IFuseDistributions = {
    options: IStudentFilter;
};
export const useDistributions = ({ options }: IFuseDistributions) => {
    return useQuery({
        queryKey: [distributionService.NAME, options],
        queryFn: () => distributionService.filter(options),
    });
};

//---------------- useDistribution hook ------------------------------------
type IFuseDistribution = {
    id: string;
    config?: QueryConfig<typeof distributionService.filterById>;
};

export const useDistribution = ({ id, config }: IFuseDistribution) => {
    return useQuery({
        ...config,
        queryFn: () => distributionService.filterById(id),
    });
};

//---------------- useCreateDistribution hook ------------------------------------
type IFuseCreateDistribution = {
    config?: MutationConfig<typeof distributionService.create>;
};

export const useCreateDistribution = ({
    config,
}: IFuseCreateDistribution = {}) => {
    return useMutation({
        ...config,
        mutationFn: distributionService.create,
    });
};

//---------------- useUpdateDistribution hook ------------------------------------
type IFuseUpdateDistribution = {
    config?: MutationConfig<typeof distributionService.update>;
};

export const useUpdateDistribution = ({
    config,
}: IFuseUpdateDistribution = {}) => {
    return useMutation({
        ...config,
        mutationFn: distributionService.update,
    });
};

//---------------- useDeleteDistribution hook ------------------------------------
type IFuseDeleteDistribution = {
    config?: MutationConfig<typeof distributionService.delete>;
};

export const useDeleteDistribution = ({
    config,
}: IFuseDeleteDistribution = {}) => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries(distributionService.NAME);
            notification.success({
                type: "success",
                message: "Distribution Deleted",
            });
        },
        ...config,
        mutationFn: distributionService.delete,
    });
};
