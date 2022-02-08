import { AxiosResponse } from "axios";
import { IStudentFilter } from "@shared/interfaces";
import { MutationConfig, QueryConfig, queryClient } from "@shared/config";
import { studentService } from "@shared/services";
import { useMutation, useQuery } from "react-query";
import { notification } from "antd";

//---------------- useStudents hook ------------------------------------
type IFuseStudents = {
    options: IStudentFilter;
};
export const useStudents = ({ options }: IFuseStudents) => {
    return useQuery({
        queryKey: [studentService.NAME, options],
        queryFn: () => studentService.filter(options),
    });
};

//---------------- useStudent hook ------------------------------------
type IFuseStudent = {
    id: string;
    config?: QueryConfig<typeof studentService.filterById>;
};

export const useStudent = ({ id, config }: IFuseStudent) => {
    return useQuery({
        ...config,
        queryFn: () => studentService.filterById(id),
    });
};

//---------------- useCreateStudent hook ------------------------------------
type IFuseCreateStudent = {
    config?: MutationConfig<typeof studentService.create>;
};

export const useCreateStudent = ({ config }: IFuseCreateStudent = {}) => {
    return useMutation({
        ...config,
        mutationFn: studentService.create,
    });
};

//---------------- useUpdateStudent hook ------------------------------------
type IFuseUpdateStudent = {
    config?: MutationConfig<typeof studentService.update>;
};

export const useUpdateStudent = ({ config }: IFuseUpdateStudent = {}) => {
    return useMutation({
        ...config,
        mutationFn: studentService.update,
    });
};

//---------------- useUpdateStudents hook ------------------------------------
type IFuseUpdateStudents = {
    config?: MutationConfig<typeof studentService.updateMany>;
};

export const useUpdateStudents = ({ config }: IFuseUpdateStudents = {}) => {
    return useMutation({
        ...config,
        mutationFn: studentService.updateMany,
    });
};

//---------------- useDeleteStudent hook ------------------------------------
type IFuseDeleteStudent = {
    config?: MutationConfig<typeof studentService.delete>;
};

export const useDeleteStudent = ({ config }: IFuseDeleteStudent = {}) => {
    return useMutation({
        onSuccess: (res: AxiosResponse) => {
            if (res?.data?.success) {
                queryClient.invalidateQueries(studentService.NAME);
                notification.success({
                    message: res?.data?.message,
                });
            } else {
                notification.error({
                    type: "error",
                    message: res?.data?.message || "Something is wrong",
                });
            }
        },
        ...config,
        mutationFn: studentService.delete,
    });
};
