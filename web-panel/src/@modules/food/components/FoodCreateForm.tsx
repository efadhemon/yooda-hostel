import { ICreateStudent } from "@shared/interfaces";
import { Button, Col, Form, Input, Row } from "antd";

interface IFProps {
    onFinish?: (values: ICreateStudent) => void;
    isLoading?: boolean;
}

const FoodCreateForm: React.FC<IFProps> = ({ onFinish, isLoading }) => {
    return (
        <Form
            className="lg:w-1/2 mx-auto shadow p-5"
            size="large"
            layout="vertical"
            onFinish={onFinish}
        >
            <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a name!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a name" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a age!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a age" type="tel" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item className="text-right">
                        <Button
                            loading={isLoading}
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default FoodCreateForm;
