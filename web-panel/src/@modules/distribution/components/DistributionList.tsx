import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import { IDistribution, IFood } from "@shared/interfaces";
import { useDeleteDistribution, useDistributions } from "@shared/hooks";

const DistributionList = () => {
    const deleteDistribution = useDeleteDistribution();

    const [dataQuantity, setDataQuantity] = useState({
        page: 1,
        take: 10,
    });
    const { data, isLoading } = useDistributions({
        options: {
            page: dataQuantity.page,
            take: dataQuantity.take,
        },
    });

    const dataSource = data?.data?.payload?.map((x: IDistribution) => ({
        key: x._id,
        id: x._id,
        studentName: x.student?.name,
        roll: x.student?.roll,
        shift: x.shift,
        date: x.date,
        status: x.status,
        foodItems: x.foodItems,
    }));

    const columns = [
        {
            title: "Student Name",
            dataIndex: "studentName",
            key: "studentName",
        },
        {
            title: "Student Roll",
            dataIndex: "roll",
            key: "roll",
        },
        {
            title: "Shift",
            dataIndex: "shift",
            key: "shift",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Food Items",
            dataIndex: "foodItems",
            key: "foodItems",
            render: (foodItems: IFood[]) => (
                <p>
                    {foodItems?.map((food) => (
                        <span>{food.name + ", "}</span>
                    ))}
                </p>
            ),
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id: any) => (
                <Space>
                    <Button type="primary" disabled onClick={() => null}>
                        Update
                    </Button>
                    <Popconfirm
                        okButtonProps={{
                            loading: false,
                        }}
                        title="Are you sure to delete this?"
                        onConfirm={() => deleteDistribution.mutate(id)}
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

export default DistributionList;
