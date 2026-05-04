import { CustomRow } from "@components/others";
import { StyledCard, StyledFeeManagement } from "../style";
import { Breadcrumb, Button, Col, Flex, Space, Tooltip } from "antd";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CustomTag } from "@components/form";

export const FeeManagement = () => {
  const carddata = [
    {
      key: "1",
      label: "Total Collected",
      emoji: "💰",
      count: "₹48.6L",
      additional: "This year",
      color: "#00b050",
      status: true,
    },
    {
      key: "2",
      label: "Pending",
      emoji: "⏳",
      count: "₹2.4L",
      additional: "28 students",
      color: "#ed1c24",
      status: false,
    },
    {
      key: "3",
      label: "Due This Week",
      emoji: "📅",
      count: "₹85K",
      additional: "8 students",
      color: "#e6da00",
      status: true,
    },
    {
      key: "4",
      label: "Reminders Sent",
      emoji: "📤",
      count: "22",
      additional: "Today",
      color: "#1d4ed8",
      status: true,
    },
  ];

  const buildColumns = [
    {
      title: "ACTIONS",
      key: "actions",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (_, record) => (
        <Space>
          <CustomTag title={"Receipt"} style={{ color: "black" }} />
          {
            record.status === "Inactive" ? (
          <CustomTag title={"Remind"} style={{ color: "#ef383f" }} />
            ) : null
          }
        </Space>
      ),
    },
    {
      title: "STUDENT",
      dataIndex: "student",
      className: "primary-column",
      key: "student",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (text, record) => {
        return (
          <div>
            <p>{text}</p>
            <p style={{ fontSize: "8px", color: "gray" }}>{record.id}</p>
          </div>
        );
      },
    },
    {
      title: "COURSE",
      dataIndex: "course",
      key: "course",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      // render: (status) => {
      //   const { style } = getStatus("courseStatus", status);
      //   return <Tag style={style}>{status}</Tag>;
      // },
      render: (text) => {
        if (text === "NEET & JEE") {
          return <CustomTag title={text} style={{ color: "#108344" }} />;
        }
        if (text === "Accounting") {
          return <CustomTag title={text} style={{ color: "#a49448" }} />;
        } else {
          return <CustomTag title={text} style={{ color: "#3763dd" }} />;
        }
      },
    },
    {
      title: "FEE",
      dataIndex: "fee",
      key: "fee",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (text) => <h4>{text}</h4>,
    },

    {
      title: "PAID",
      dataIndex: "paid",
      key: "paid",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (text, record) => {
        if (text === record.fee) {
          return <h4 style={{ color: "#15b65e" }}>{text}</h4>;
        } else {
          return <h4 style={{ color: "#ef383f" }}>{text}</h4>;
        }
      },
    },
    {
      title: "BALANCE",
      dataIndex: "balance",
      key: "balance",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (text, record) => {
        if (text === "₹0") {
          return <h4 style={{ color: "#15b65e" }}>{text}</h4>;
        } else {
          return <h4 style={{ color: "#ef383f" }}>{text}</h4>;
        }
      },
    },
    {
      title: "DUE DATE",
      dataIndex: "duedate",
      key: "duedate",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (text) => {
        if (text === null) {
          return <h4 style={{ color: "#15b65e" }}>-</h4>;
        } else {
          return <h4 style={{ color: "#ef383f" }}>{text}</h4>;
        }
      },
    },
    {
      title: "FEE STATUS",
      dataIndex: "feestatus",
      key: "feestatus",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (text) => {
        if (text === "Paid") {
          return <CustomTag title={`${text} ✓`} style={{ color: "#15b65e" }} />;
        } else {
          return <CustomTag title={text} style={{ color: "#ef383f" }} />;
        }
      },
    },
  ];

  const data = [
    {
      key: "1",
      student: "John Doe",
      id: "EP2024-042",
      course: "NEET & JEE",
      fee: "₹85,000",
      paid: "₹85,000",
      balance: "₹0",
      duedate: null,
      feestatus: "Paid",
      status: "Active",
    },
    {
      key: "2",
      student: "Jane Smith",
      id: "EP2024-043",
      course: "Accounting",
      fee: "₹45000",
      paid: "₹35,000",
      balance: "₹10,000",
      duedate: "May 20, 2025",
      feestatus: "Pending",
      status: "Inactive",
    },
    {
      key: "3",
      student: "Michael Brown",
      id: "EP2024-044",
      course: "Air Hostess",
      fee: "₹30000",
      paid: "₹10,000",
      balance: "₹20,000",
      duedate: "May 21, 2025",
      feestatus: "Paid",
      status: "Inactive",
    },
    {
      key: "4",
      student: "Emily Davis",
      id: "EP2024-045",
      course: "NEET & JEE",
      fee: "₹7,000",
      paid: "₹7,000",
      balance: "₹0",
      duedate: "May 22, 2025",
      feestatus: "Paid",
      status: "Active",
    },
    {
      key: "5",
      student: "Chris Wilson",
      id: "EP2024-046",
      course: "JEE",
      fee: "₹5600",
      paid: "₹5,000",
      balance: "₹600",
      duedate: "May 27, 2025",
      feestatus: "Overdue",
      status: "Inactive",
    },
  ];

  return (
    <StyledFeeManagement>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to={"/"}>
            <AiFillHome style={{ marginRight: 4 }} />
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Fee Management</Breadcrumb.Item>
      </Breadcrumb>
      <CustomRow space={[12, 12]}>
        {carddata.map((data) => (
          <Col span={24} md={6}>
            <StyledCard
              style={{
                borderTop: `3px solid ${data.color}`,
              }}
            >
              <p className="emoji">{data.emoji}</p>
              <p>{data.label}</p>
              <h4>{data.count}</h4>
              <p
                className="colored-p"
                style={{
                  color: data.status === true ? "#15b65e" : "#ef383f",
                }}
              >
                {data.additional}
              </p>
            </StyledCard>
          </Col>
        ))}
      </CustomRow>

      <CustomRow space={[12, 12]}>
        <Col span={24} md={24}>
          <CommonTable
            columns={buildColumns}
            data={data}
            style={{ marginTop: "20px" }}
          />
        </Col>
      </CustomRow>
    </StyledFeeManagement>
  );
};
