import { Button, notification, Popconfirm, Select, Space, Table } from "antd";
import { useState } from "react";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import {
    useDeleteStudent,
    useStudents,
    useUpdateStudents,
} from "@shared/hooks";
import { IStudent } from "@shared/interfaces";
import { AxiosResponse } from "axios";
import { queryClient } from "@shared/config";
import { studentService } from "@shared/services";

const StudentList = () => {
    const navigate = useNavigate();

    const deleteStudent = useDeleteStudent();

    const [dataQuantity, setDataQuantity] = useState({
        page: 1,
        take: 10,
    });
    const { data, isLoading } = useStudents({
        options: {
            page: dataQuantity.page,
            take: dataQuantity.take,
        },
    });

    const dataSource = data?.data?.payload?.map((x: IStudent) => ({
        key: x._id,
        id: x._id,
        name: x.name,
        age: x.age,
        class: x.class,
        roll: x.roll,
        hall: x.hall,
        status: x.status,
    }));

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Class",
            dataIndex: "class",
            key: "class",
        },
        {
            title: "Roll",
            dataIndex: "roll",
            key: "roll",
        },
        {
            title: "Hall",
            dataIndex: "hall",
            key: "hall",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id: any) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.StudentUpdate}/${id}`)}
                    >
                        Update
                    </Button>
                    <Popconfirm
                        okButtonProps={{
                            loading: false,
                        }}
                        title="Are you sure to delete this student?"
                        onConfirm={() => deleteStudent.mutate(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger type="primary">
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const updateStudents = useUpdateStudents({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    queryClient.invalidateQueries(studentService.NAME);
                    setSelectedStudent([]);
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

    const [selectedStudent, setSelectedStudent] = useState([]);
    const rowSelection = {
        selectedRowKeys: selectedStudent,
        onChange: (selectedRowKeys: any) => setSelectedStudent(selectedRowKeys),
    };

    const hasSelected = selectedStudent.length > 0;

    const onChangeStatus = (value: string) => {
        const data = selectedStudent.map((id) => ({ id, status: value }));
        updateStudents.mutateAsync(data);
    };

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Select
                    onChange={onChangeStatus}
                    placeholder="Change Status"
                    style={{ width: 200 }}
                    disabled={!hasSelected}
                    loading={updateStudents.isLoading}
                >
                    <Select.Option value="Active">Active</Select.Option>
                    <Select.Option value="InActive">InActive</Select.Option>
                </Select>

                <span style={{ marginLeft: 8 }}>
                    {hasSelected
                        ? `Selected ${selectedStudent.length} students`
                        : ""}
                </span>
            </div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
                loading={isLoading}
                pagination={{
                    pageSize: 10,
                    total: data?.data?.total,
                    onChange: (page: number, take: number) => {
                        setDataQuantity({ page, take });
                    },
                }}
            />
        </div>
    );
};

export default StudentList;
