

import { CustomRow } from "@components/others";
import { StyledCard } from "../style";
import { Button, Col, Flex, Space, Tooltip } from "antd";
import { THEME } from "@theme/index";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CustomTag } from "@components/form";

export const TeacherAttendance = () => {
  const carddata = [
    {
      key: "1",
      label: "Present Today",
      count: "77",
      sub: "87% of 77",
      color: "#00b050",
      status: true,
    },
    {
      key: "2",
      label: "Absent Today",
      count: "17",
      sub: "13% absent",
      color: "#ed1c24",
      status: false,
    },
    {
      key: "3",
      label: "Monthly Avg",
      count: "88%",
      sub: "Batch A",
      color: "#e6da00",
      status: true,
    },
    {
      key: "4",
      label: "Below 75%",
      count: "13",
      sub: "Needs attention",
      color: "#1d4ed8",
      status: false,
    },
  ];

  const buildColumns = [
    {
title : "Sr No",
align : "center" ,
render : (text,record,index) => index + 1 
    },
    {
      title: "ACTIONS",
      key: "actions",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (_, record) => (
        <>
          <Tooltip title="View in detail">
            <Flex justify="center">
              <Button
                style={{
                  color: "black",
                  border: "1px solid #eef0f2",
                  fontWeight: "600",
                  fontSize: "12px",
                  padding: "6px",
                  borderRadius: "6px",
                }}
                type="link"
              >
                View
              </Button>
            </Flex>
          </Tooltip>
        </>
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
    },
    {
      title: "BATCH",
      dataIndex: "batch",
      key: "batch",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
    },
    {
      title: "APR 12",
      dataIndex: "attendance1",
      key: "attendance1",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (status) => {
        if (status === "P") {
          return <CustomTag color={"#e6f7ee"} style={{color :"#1c894d"}} title={status}/>
        } else {
          return <CustomTag color={"#fdeaea"} style={{color :"#ed1c24"}} title={status}/>
        }
      },
    },
    {
      title: "APR 13",
      dataIndex: "attendance2",
      key: "attendance2",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
        render: (status) => {
        if (status === "P") {
          return <CustomTag color={"#e6f7ee"} style={{color :"#1c894d"}} title={status}/>
        } else {
          return <CustomTag color={"#fdeaea"} style={{color :"#ed1c24"}} title={status}/>
        }
      },
    },
    {
      title: "APR 14",
      dataIndex: "attendance3",
      key: "attendance3",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      render: (status) => {
        if (status === "P") {
          return <CustomTag color={"#e6f7ee"} style={{color :"#1c894d"}} title={status}/>
        } else {
          return <CustomTag color={"#fdeaea"} style={{color :"#ed1c24"}} title={status}/>
        }
      },
    },
    {
      title: "MONTHLY %",
      dataIndex: "attendance",
      key: "attendance",
      onHeaderCell: () => ({
        className: "custom-header",
      }),
      // render: (status) => {
      //   const { style, Icon } = getStatus("feeStatus", status);

      //   return (
      //     <Tag style={style}>
      //       {Icon && <Icon />}
      //       {status}
      //     </Tag>
      //   );
      // },
    },
  ];

  const data = [
    {
      key: "1",
      student: "Biju Mol",
      id: "EP2024-042",
      course: "NEET & JEE",
      batch: "Batch A",
      attendance1: "A",
      attendance2: "A",
      attendance3: "P",
      attendance: "87%",
      feestatus: "Paid",
      status: "Active",
    },
    {
      key: "2",
      student: "Albert",
      id: "EP2024-043",
      course: "Accounting",
      batch: "Batch B",
      attendance1: "P",
      attendance2: "A",
      attendance3: "P",
      attendance: "92%",
      feestatus: "Pending",
      status: "Active",
    },
    {
      key: "3",
      student: "Malar",
      id: "EP2024-044",
      course: "Air Hostess",
      batch: "Batch A",
      attendance1: "P",
      attendance2: "A",
      attendance3: "P",
      attendance: "78%",
      feestatus: "Paid",
      status: "Inactive",
    },
    {
      key: "4",
      student: "Deva",
      id: "EP2024-045",
      course: "NEET & JEE",
      batch: "Batch C",
      attendance1: "P",
      attendance2: "P",
      attendance3: "A",
      attendance: "85%",
      feestatus: "Paid",
      status: "Active",
    },
    {
      key: "5",
      student: "Chris Wilson",
      id: "EP2024-046",
      course: "JEE",
      batch: "Batch B",
      attendance1: "A",
      attendance2: "A",
      attendance3: "P",
      attendance: "80%",
      feestatus: "Pending",
      status: "Active",
    },
  ];

  return (
    <div>
      <CustomRow space={[12, 12]}>
        {carddata.map((data) => (
          <Col span={24} md={6}>
            <StyledCard style={{ borderTop: `3px solid ${data.color}` }}>
              <p className="label">{data.label}</p>
              <h2>{data.count} </h2>
              <p
                className="sub"
                style={{
                  color:
                    data.status === true ? `${THEME.GREEN_NOW}` : "#ed1c24",
                }}
              >
                {data.sub}
              </p>
            </StyledCard>
          </Col>
        ))}
      </CustomRow>
      <CustomRow space={[12, 12]} style={{marginTop:"20px"}}>
        <Col span={24} md={24}>
          <CommonTable
            columns={buildColumns}
            name={'Teacher'}
            data={data}
            style={{ marginTop: "20px" }}
          />
        </Col>
      </CustomRow>
    </div>
  );
};
