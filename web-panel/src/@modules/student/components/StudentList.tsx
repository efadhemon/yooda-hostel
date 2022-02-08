import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useDeleteStudent, useStudents } from "@shared/hooks";
import { IStudent } from "@shared/interfaces";

const StudentList = () => {
    const navigate = useNavigate();

    const deleteUserMutation = useDeleteStudent();

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
                        title="Are you sure to delete this task?"
                        onConfirm={() => deleteUserMutation.mutate(id)}
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

    return (
        <Table
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
    );
};

export default StudentList;
