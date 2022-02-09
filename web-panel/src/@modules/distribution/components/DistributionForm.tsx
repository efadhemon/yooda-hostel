import { useFoods, useStudents } from "@shared/hooks";
import { ICreateDistribution, IFood, IStudent } from "@shared/interfaces";
import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import { useState } from "react";

interface IFProps {
    onFinish: (values: ICreateDistribution) => void;
    isLoading?: boolean;
}

const DistributionForm: React.FC<IFProps> = ({ onFinish, isLoading }) => {
    const [studentSearchTerm, setStudentSearchTerm] = useState<string>("");
    const students = useStudents({
        options: {
            roll: studentSearchTerm,
        },
    }).data?.data?.payload;

    const foods = useFoods().data?.data?.payload;

    const [date, setDate] = useState<string>("");
    const onSubmitForm = (values: any) => {
        values.date = date;
        onFinish(values);
    };

    return (
        <Form size="large" layout="vertical" onFinish={onSubmitForm}>
            <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Student"
                        name="student"
                        rules={[
                            {
                                required: true,
                                message: "Please select a student!",
                            },
                        ]}
                    >
                        <Select
                            placeholder="Search Student By Roll"
                            style={{ width: "100%" }}
                            showSearch
                            optionFilterProp="children"
                            onSearch={(val) => setStudentSearchTerm(val)}
                            filterOption={(input, option: any) =>
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {students?.map((st: IStudent) => (
                                <Select.Option key={st._id} value={st._id}>
                                    {st.name + ", Roll-" + st.roll}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Shift"
                        name="shift"
                        rules={[
                            {
                                required: true,
                                message: "Please select a shift",
                            },
                        ]}
                    >
                        <Select placeholder="Select a shift">
                            <Select.Option value="Morning">
                                Morning
                            </Select.Option>
                            <Select.Option value="Day">Day</Select.Option>
                            <Select.Option value="Night">Night</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Date"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: "Please chose a date!",
                            },
                        ]}
                    >
                        <DatePicker
                            style={{ width: "100%" }}
                            onChange={(date, dateString) => setDate(dateString)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Food Items"
                        name="foodItems"
                        rules={[
                            {
                                required: true,
                                message: "Please select foods",
                            },
                        ]}
                    >
                        <Select mode="multiple" placeholder="Select foods">
                            {foods?.map((food: IFood) => (
                                <Select.Option key={food._id} value={food._id}>
                                    {food.name}
                                </Select.Option>
                            ))}
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

export default DistributionForm;
