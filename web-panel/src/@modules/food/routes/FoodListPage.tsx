import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import FoodList from "../components/FoodList";

const FoodListPage = () => {
    const navigate = useNavigate();
    return (
        <PageHeader
            // onBack={() => null}
            title="Food List"
            extra={[
                <Button
                    key="1"
                    onClick={() => navigate(Paths.FoodCreate)}
                    type="primary"
                >
                    Add Food
                </Button>,
            ]}
        >
            <FoodList />
        </PageHeader>
    );
};

export default FoodListPage;
