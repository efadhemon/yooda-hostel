import { Paths } from "@shared/enums";
import { useFood, useUpdateFood } from "@shared/hooks";
import { Purify } from "@shared/utils";
import { notification, PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FoodUpdateForm from "../components/FoodUpdateForm";

const FoodUpdatePage = () => {
    const navigate = useNavigate();
    const { id }: any = useParams();
    const { data, isLoading } = useFood({ id });
    const updateFood = useUpdateFood({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.FoodList);
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
            <PageHeader onBack={() => navigate(-1)} title="Update Student">
                <FoodUpdateForm
                    initialValues={data?.data?.payload}
                    isLoading={updateFood.isLoading}
                    onFinish={(values) =>
                        updateFood.mutateAsync({ ...values, id })
                    }
                />
            </PageHeader>
        </Purify>
    );
};

export default FoodUpdatePage;
