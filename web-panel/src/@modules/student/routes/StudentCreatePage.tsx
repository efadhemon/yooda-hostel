import { AxiosResponse } from "axios";
import { notification, PageHeader } from "antd";
import { Paths } from "@shared/enums";
import CreateStudentForm from "../components/CreateStudentForm";
import { useNavigate } from "react-router-dom";
import { useCreateStudent } from "@shared/hooks";

const StudentCreatePage = () => {
    const navigate = useNavigate();

    const createUserMutation = useCreateStudent({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.StudentList);
                    notification.success({
                        message: res?.data?.message,
                    });
                } else {
                    notification.error({
                        message: res?.data?.message || "Something is wrong",
                    });
                }
            },
        },
    });

    return (
        <PageHeader onBack={() => navigate(-1)} title="Create User">
            <CreateStudentForm
                isLoading={createUserMutation.isLoading}
                onFinish={(values) => createUserMutation.mutateAsync(values)}
            />
        </PageHeader>
    );
};

export default StudentCreatePage;
