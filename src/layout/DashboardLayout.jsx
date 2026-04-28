import React, {useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FcHome } from "react-icons/fc";
import { Button, Layout, Menu, theme } from "antd";
import { SuperAdminDashboard } from "@modules/Dashboard/SuperAdminDashboard/Partials/DashboardMainView";
import { useNavigate } from "react-router-dom";
import ViewStudent from "@modules/Students/Partials/ViewStudents";
import { adminItems } from "./Partials/DynamicSubmenu/Admin";
const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);
    const [selectedKey, setSelectedKey] = useState("1");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate() ;
  
    const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <SuperAdminDashboard />;
      case "2":
        return <div>Nav 2</div>;
      case "3":
        return <div>Upload Section</div>;
      default:
        return <div>Select a menu</div>;
    }
  };

  useEffect(()=>{
setItems(adminItems)
  },[])

//   const items = [
//       // Dashboard
//       getItem("Dashboard", "", "🏠"),
  
//       // Company
//       getItem(
//         collapsed ? null : (
//           <span><PiStudentFill style={{ marginRight: 8 }} /> Student Details</span>
//         ),
//         "group-company",
//         null,
//         null,
//         "group"
//       ),
//     ];
    
  return (
    <Layout style={{borderRadius : "6%"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h1 style={{color:"white"}}>LOGO HERE</h1>
        <Menu
          style={{ height: "100vh" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(e) => setSelectedKey(e.key)}
          items={[
            {
              key: "1",
              icon: <FcHome />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Students",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Parents",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={{fontSize:"20px"}} /> : <MenuFoldOutlined style={{fontSize:"20px"}}/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 40,
              height: 40,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
