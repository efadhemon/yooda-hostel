import { Paths } from "@shared/enums";
import { useStudent, useUpdateStudent } from "@shared/hooks";
import { Purify } from "@shared/utils";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UpdateStudentForm from "../components/UpdateStudentForm";

const StudentUpdatePage = () => {
    const navigate = useNavigate();
    const { id }: any = useParams();
    const { data, isLoading } = useStudent({ id });
    const updateUserMutation = useUpdateStudent({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.StudentList);
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
        },
    });

    return (
        <Purify loading={isLoading} empty={false}>
            <PageHeader onBack={() => navigate(-1)} title="Update User">
                <UpdateStudentForm
                    initialValues={data?.data?.payload}
                    isLoading={updateUserMutation.isLoading}
                    onFinish={(values) =>
                        updateUserMutation.mutateAsync({ ...values, id })
                    }
                />
            </PageHeader>
        </Purify>
    );
};

export default StudentUpdatePage;
