import { Button, Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import { IMAGES } from "@shared/assets";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "ahooks";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { RiFileListLine } from "react-icons/ri";

const { Header, Sider, Content } = Layout;

interface IFProps {
    children: any;
}
const MainLayout: React.FC<IFProps> = ({ children }) => {
    const navigate = useNavigate();
    const { md } = useResponsive();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    let pathname = window.location.pathname;
    const styles = {
        sider: {
            boxShadow: "0 0 20px #0815420d",
            borderRight: "1px solid #ecf3fa",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: !md && isCollapsed ? "-100%" : 0,
            zIndex: 9,
        },

        header: {
            position: "fixed",
            width: "100%",
            background: "#fff",
            padding: "0 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 8,
            paddingLeft: !md
                ? isCollapsed
                    ? 20
                    : 220
                : isCollapsed
                ? 100
                : 220,
            right: 0,
            boxShadow: "0 0 20px #0815420d",
            borderBottom: "1px solid #ecf3fa",
        },
        layout: {
            background: "#f6f8fa",
            marginLeft: !md ? 0 : isCollapsed ? 80 : 200,
            padding: 14,
            paddingTop: 0,
        },

        content: {
            borderRadius: 5,
            padding: 14,
            minHeight: 280,
            background: "#fff",
            marginTop: 77,
            marginLeft: 0,
            marginRight: 14,
        },
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                style={styles.sider as any}
                breakpoint="md"
                onBreakpoint={(broken) => {
                    if (broken === true) {
                        setIsCollapsed(true);
                    }
                }}
                trigger={null}
                collapsible
                collapsed={isCollapsed}
            >
                <div
                    style={{
                        margin: 15,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {isCollapsed ? (
                        <img
                            className="logo"
                            src={IMAGES.LogoSmall}
                            style={{ width: 30 }}
                            alt="logo"
                        />
                    ) : (
                        <img
                            className="logo"
                            src={IMAGES.Logo}
                            style={{ width: 110 }}
                            alt="logo"
                        />
                    )}
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[String(pathname)]}
                    defaultOpenKeys={[String(pathname)]}
                >
                    <Menu.Item
                        icon={<AiOutlineUser />}
                        onClick={() =>
                            navigate(Paths.StudentList, { replace: true })
                        }
                        key={Paths.StudentList}
                    >
                        Students
                    </Menu.Item>
                    <Menu.Item
                        icon={<AiOutlineUnorderedList />}
                        onClick={() =>
                            navigate(Paths.FoodList, { replace: true })
                        }
                        key={Paths.FoodList}
                    >
                        Foods
                    </Menu.Item>
                    <Menu.Item
                        icon={<RiFileListLine />}
                        onClick={() =>
                            navigate(Paths.DistributionList, { replace: true })
                        }
                        key={Paths.DistributionList}
                    >
                        Distributions
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={styles.layout as any}>
                <Header style={styles.header as any}>
                    <div
                        style={{ fontSize: 22, cursor: "pointer" }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )}
                    </div>

                    <Button>Welcome</Button>
                </Header>
                <Content style={styles.content as any}>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
