import { ICreateStudent } from "@shared/interfaces";
import { Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;

interface IFProps {
    initialValues?: ICreateStudent;
    onFinish?: (values: ICreateStudent) => void;
    isLoading?: boolean;
}

const CreateStudentForm: React.FC<IFProps> = ({
    initialValues,
    onFinish,
    isLoading,
}) => {
    return (
        <Form
            size="large"
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
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

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Age"
                        name="age"
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

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Class"
                        name="class"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a class!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a class name" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Roll"
                        name="roll"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a roll!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a roll" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Hall"
                        name="hall"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a hall name!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a hall name" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: "Please select a status!",
                            },
                        ]}
                    >
                        <Select placeholder="Select a status">
                            <Option value="Active">Active</Option>
                            <Option value="InActive">InActive</Option>
                        </Select>
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

export default CreateStudentForm;
