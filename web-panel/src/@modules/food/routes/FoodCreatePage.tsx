import { AxiosResponse } from "axios";
import { notification, PageHeader } from "antd";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useCreateFood } from "@shared/hooks";
import FoodCreateForm from "../components/FoodCreateForm";

const FoodCreatePage = () => {
    const navigate = useNavigate();

    const createFood = useCreateFood({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.FoodList);
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
        <PageHeader onBack={() => navigate(-1)} title="Create Food">
            <FoodCreateForm
                isLoading={createFood.isLoading}
                onFinish={(values) => createFood.mutateAsync(values)}
            />
        </PageHeader>
    );
};

export default FoodCreatePage;
