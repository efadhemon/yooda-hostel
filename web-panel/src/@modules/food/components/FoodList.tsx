import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { IFood } from "@shared/interfaces";
import { useDeleteFood, useFoods } from "@shared/hooks";

const FoodList = () => {
    const navigate = useNavigate();

    const deleteFood = useDeleteFood();

    const [dataQuantity, setDataQuantity] = useState({
        page: 1,
        take: 10,
    });
    const { data, isLoading } = useFoods({
        options: {
            page: dataQuantity.page,
            take: dataQuantity.take,
        },
    });

    const dataSource = data?.data?.payload?.map((x: IFood) => ({
        key: x._id,
        id: x._id,
        name: x.name,
        price: x.price,
    }));

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id: any) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.FoodUpdate}/${id}`)}
                    >
                        Update
                    </Button>
                    <Popconfirm
                        okButtonProps={{
                            loading: false,
                        }}
                        title="Are you sure to delete this task?"
                        onConfirm={() => deleteFood.mutate(id)}
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

export default FoodList;
