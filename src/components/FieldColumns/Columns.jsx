import {
  DeleteFilled,
  EditOutlined,
  EyeFilled,
  EyeOutlined,
} from "@ant-design/icons";
import { getStatus } from "@utils/statusBadge";
import { Button, Space, Switch, Tag, Tooltip } from "antd";
import { FaFilePdf } from "react-icons/fa";

// Batch Columns

export const batchColumns = (handleView, handleEdit, handleDelete) => [
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
        <div style={{ fontSize: "12px", color: "#888" }}>{record.email}</div>
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
    render: (_, record) => (
      <div>
        <div style={{ fontWeight: 600 }}>{record.teacherName}</div>
        <div style={{ fontSize: "10px", color: "#888" }}>
          {record.teacherId}
        </div>
      </div>
    ),
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

// Study Material

export const studyMaterialColumns = (
  handleDownload,
  handleEdit,
  handleDelete,
) => [
  {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Tooltip title="download">
          <Button
            className="action-btn download-btn"
            icon={<FaFilePdf />}
            type="link"
            onClick={() => handleDownload(record)}
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
    title: "TITLE",
    key: "title",
    className: "primary-column",
    render: (_, record) => (
      <div>
        <div style={{ fontWeight: 600 }}>{record.title}</div>
        <div style={{ fontSize: "12px", color: "#888" }}>{record.email}</div>
      </div>
    ),
  },
  {
    title: "COURSE",
    dataIndex: "courseName",
    key: "courseName",
    render: (value) => {
      console.log(value, "valuevalue");

      const { style } = getStatus("courseStatus", value);
      return <Tag style={style}>{value}</Tag>;
    },
  },
  {
    title: "Subject Name",
    dataIndex: "subjectName",
    key: "subjectName",
  },

  {
    title: "Chapter Name",
    dataIndex: "chapterName",
    key: "chapterName",
  },
  {
    title: "Topic Name",
    dataIndex: "topicName",
    key: "topicName",
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

// export const questionColumns = (
//   handleView,
//   handleEdit,
//   handleDelete
// ) => [
//   {
//     title: "ACTIONS",
//     key: "actions",

//     fixed: "left",

//     render: (_, record) => (
//       <Space>

//         <Tooltip title="View">
//           <Button
//             icon={<EyeOutlined />}
//             type="link"
//             onClick={() => handleView(record)}
//           />
//         </Tooltip>

//         <Tooltip title="Edit">
//           <Button
//             icon={<EditOutlined />}
//             type="link"
//             onClick={() => handleEdit(record)}
//           />
//         </Tooltip>

//         <Tooltip title="Delete">
//           <Button
//             danger
//             icon={<DeleteFilled />}
//             type="link"
//             onClick={() => handleDelete(record)}
//           />
//         </Tooltip>

//       </Space>
//     ),
//   },

//   {
//     title: "QUESTION",
//     dataIndex: "questionText",
//     key: "questionText",

//     width: 300,

//     render: (value) => (
//       <div
//         style={{
//           fontWeight: 500,
//         }}
//       >
//         {value}
//       </div>
//     ),
//   },

//   {
//     title: "SUBJECT",
//     dataIndex: "subjectName",
//     key: "subjectName",
//   },

//   {
//     title: "CHAPTER",
//     dataIndex: "chapterName",
//     key: "chapterName",
//   },

//   {
//     title: "TOPIC",
//     dataIndex: "topicName",
//     key: "topicName",
//   },

//   {
//     title: "DIFFICULTY",
//     dataIndex: "difficulty",
//     key: "difficulty",

//     render: (difficulty) => {
//       const colorMap = {
//         EASY: "green",
//         MEDIUM: "orange",
//         HARD: "red",
//       };

//       return (
//         <Tag color={colorMap[difficulty]}>
//           {difficulty}
//         </Tag>
//       );
//     },
//   },

//   {
//     title: "LANGUAGE",
//     dataIndex: "language",
//     key: "language",
//   },
// ];

// Exams

export const examColumns = (handleEdit, handleDelete) => [
  {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <Space>
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
    title: "Exam Name",
    dataIndex: "examName",
    key: "examName",
    className: "primary-column",
  },
  {
    title: "COURSE",
    dataIndex: "course",
    key: "course",
    render: (value) => {
      const { style } = getStatus("courseStatus", value);
      return <Tag style={style}>{value?.courseName}</Tag>;
    },
  },
  {
    title: "Batch Name",
    dataIndex: "batch",
    key: "batch",
        render: (value) => {
      return <p>{value?.batchName}</p> ;
    },
  },
  {
    title: "Subject Name",
    dataIndex: "subjectName",
    key: "subjectName",
  },
  {
    title: "Exam Type",
    dataIndex: "examType",
    key: "examType",
  },
  {
    title: "Exam Date",
    dataIndex: "examDate",
    key: "examDate",
  },
  {
    title: "Exam Date",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "Exam Date",
    dataIndex: "endTime",
    key: "endTime",
  },
  {
    title: "Total Marks",
    dataIndex: "totalMarks",
    key: "totalMarks",
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


// Franchise

export const franchiseColumns = (handleEdit, handleDelete) => [
  {
    title: "ACTIONS",
    key: "actions",
    render: (_, record) => (
      <Space>
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
    title: "Franchise Name",
    dataIndex: "franchiseName",
    key: "franchiseName",
    className: "primary-column",
  },
  {
    title: "Franchise Code",
    dataIndex: "franchiseCode",
    key: "franchiseCode",
  },
  {
    title: "Branch Name",
    dataIndex: "branchName",
    key: "branchName",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
  },
  {
    title: "Email Id",
    dataIndex: "emailId",
    key: "emailId",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
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