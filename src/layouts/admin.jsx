import {
    FileOutlined,
    UserOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<Link to='/admin/user-management'>User</Link>, '1', <UserOutlined />),
    getItem('Movies', 'sub1', <FileOutlined />, [
        getItem(<Link to='/admin/movie-management'>Management</Link>, '2', <FileOutlined />),
        getItem(<Link to='/admin/movie-add'>Add new</Link>, '3', <PlusOutlined />),
    ]),
];

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            className="admin-layout"
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>

    )
}
