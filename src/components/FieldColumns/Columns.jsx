import { DeleteFilled, EditOutlined, EyeFilled } from "@ant-design/icons";
import { getStatus } from "@utils/statusBadge";
import { Button, Space, Switch, Tag, Tooltip } from "antd";

// Batch Columns 

export const batchColumns = (handleView, handleEdit, handleDelete) =>[
  {
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Tooltip title="view">
          <Button
            className="action-btn view-btn"
            icon={<EyeFilled />}
            type="link"
            onClick={() => handleView(record)}
          />
        </Tooltip>

        <Tooltip title="edit">
          <Button
            className="action-btn edit-btn"
            icon={<EditOutlined />}
            type="link"
            onClick={() => handleEdit(record)}
          />
        </Tooltip>

        <Tooltip title="delete">
          <Button
            className="action-btn delete-btn"
            danger
            icon={<DeleteFilled />}
            type="link"
            onClick={() => handleDelete(record)}
          />
        </Tooltip>
      </Space>
    ),
  },
  {
    title: "BATCHES",
    dataIndex: "batchName",
    key: "batchName",
    className: "primary-column",
  },
  {
    title: "BATCH CODE",
    dataIndex: "batchCode",
    key: "batchCode",
  },
  {
    title: "CENTER NAME",
    dataIndex: "centerName",
    key: "centerName",
  },
    {
    title: "START DATE",
    dataIndex: "startDate",
    key: "startDate",
  },
    {
    title: "END DATE",
    dataIndex: "endDate",
    key: "endDate",
  },
      {
    title: "MODE",
    dataIndex: "mode",
    key: "mode",
  },
      {
    title: "TIMING",
    dataIndex: "timing",
    key: "timing",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const { style, Icon } = getStatus("status", status);

      return (
        <Tag style={style}>
          {Icon && <Icon />}
          {status}
        </Tag>
      );
    },
  },
];

// Student Columns

export const studentColumns = (handleView, handleEdit, handleDelete) => [
  {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Tooltip title="view">
          <Button
            className="action-btn view-btn"
            icon={<EyeFilled />}
            type="link"
            onClick={() => handleView(record)}
          />
        </Tooltip>

        <Tooltip title="edit">
          <Button
            className="action-btn edit-btn"
            icon={<EditOutlined />}
            type="link"
            onClick={() => handleEdit(record)}
          />
        </Tooltip>

        <Tooltip title="delete">
          <Button
            className="action-btn delete-btn"
            danger
            icon={<DeleteFilled />}
            type="link"
            onClick={() => handleDelete(record)}
          />
        </Tooltip>
      </Space>
    ),
  },
  {
    title: "STUDENT",
    key: "studentName",
    className: "primary-column",
    render: (_, record) => (
      <div>
        <div style={{ fontWeight: 600 }}>{record.studentName}</div>
        <div style={{ fontSize: "12px", color: "#888" }}>
          {record.email}
        </div>
      </div>
    ),
  },
  {
    title: "ADMISSION NO",
    dataIndex: "admissionNo",
    key: "admissionNo",
  },
  {
    title: "COURSE",
    dataIndex: ["course", "courseName"], // 👈 object handling
    key: "course",
    render: (value) => {
      const { style } = getStatus("courseStatus", value);
      return <Tag style={style}>{value}</Tag>;
    },
  },
 {
    title: "BATCH",
    dataIndex: ["batch", "batchName"], // 👈 object handling
    key: "batch",
  },

  {
    title: "PARENT MOBILE",
    dataIndex: "parentMobile",
    key: "parentMobile",
  },
{
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const isActive = status === "ACTIVE";

      return (
        <Switch
          size="small"
          checked={isActive}
          style={{
            backgroundColor: isActive ? "#00b050" : "#ff4d4f",
          }}
        />
      );
    },
  },  
];


// Teacher Columns

export const teacherColumns = (handleView, handleEdit, handleDelete) => [
    {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Tooltip title="view">
          <Button
            className="action-btn view-btn"
            icon={<EyeFilled />}
            type="link"
            onClick={() => handleView(record)}
          />
        </Tooltip>

        <Tooltip title="edit">
          <Button
            className="action-btn edit-btn"
            icon={<EditOutlined />}
            type="link"
            onClick={() => handleEdit(record)}
          />
        </Tooltip>

        <Tooltip title="delete">
          <Button
            className="action-btn delete-btn"
            danger
            icon={<DeleteFilled />}
            type="link"
            onClick={() => handleDelete(record)}
          />
        </Tooltip>
      </Space>
    ),
  },
  
    {    
    title: "TEACHER",
    dataIndex: "teacherName",
    key: "teacherName",
    className: "primary-column",
    render: (_, record)=>(
      <div>
        <div style={{ fontWeight: 600}}>{record.teacherName}</div>
        <div style={{ fontSize: "10px", color: "#888"}}>{record.teacherId}</div>
      </div>
    )
  },
  {
    title: "SUBJECT",
    dataIndex: "subjectName",
    key: "subjectName",
    render: (value) => {
      const { style } = getStatus("subject", value);
      return <Tag style={style}>{value}</Tag>;
    },
  },
  {
    title: "MOBILE",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "EXPERIENCE",
    dataIndex: "experience",
    key: "experience",
  },
  {
    title: "QUALIFICATION",
    dataIndex: "qualification",
    key: "qualification",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const { style, Icon } = getStatus("status", status);
      return (
        <Tag style={style}>
          {Icon && <Icon />}
          {status}
        </Tag>
      );
    },
  },
];