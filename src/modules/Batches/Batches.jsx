import { Button, Space, Tag, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getStatus } from "@utils/statusBadge";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { batchFields } from "@modules/FieldColumns/InputFields";
import { PostBatches } from "src/api/postReq";
import { getCourses } from "src/api/getReq";
import { Alert } from "@components/alert/AlertService";

const columns = [
  {
    title: "ACTIONS",
    dataIndex: "actions",
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
      </Space>
    ),
  },
  {
    title: "batches",
    dataIndex: "batches",
    key: "batches",
    className: "primary-column",
  },
  {
    title: "LINKED STUDENT",
    dataIndex: "linkedstudent",
    key: "linkedstudent",
  },
  {
    title: "PHONE",
    dataIndex: "phone",
    key: "phone",
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

const data = [
  {
    key: "1",
    batches: "John Doe",
    linkedstudent: "Will",
    phone: "+91 9876543210",
    status: "Active",
  },
  {
    key: "2",
    batches: "Jane Smith",
    linkedstudent: "Emma",
    phone: "+91 9123456780",
    status: "Inactive",
  },
  {
    key: "3",
    batches: "Michael Brown",
    linkedstudent: "Liam",
    phone: "+91 9988776655",
    status: "Active",
  },
];

export const Batches = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const [courseData, setCourseData] = useState([]);

  const getData = async () => {
    try {
      const data = await getCourses();
      setCourseData(data || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(courseData, "courseData");

  const courseOptions = courseData.map((course) => ({
    label: course?.courseName,
    value: course?.courseId,
  }));

  console.log(courseOptions, "courseOptions");

  const fields = batchFields(courseOptions);

  const handleBatchesSubmit = async (data) => {
    if (mode === "edit") {
      console.log("Updating...", data);
    } else {
      PostBatches(data);
    }
    // ✅ close form after submit
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  const handleEdit = (record) => {
    console.log("Edit:", record);
  };

  return (
    <>
      <div className={`top-form ${openForm ? "open" : ""}`}>
        <CommonForm
          name="batches"
          fields={fields}
          onSubmit={handleBatchesSubmit}
          onClose={() => setForm(false)}
        />
      </div>

      <CommonTable
        columns={columns}
        data={data}
        name={"Batches"}
        onAddClick={() => {
          setForm((prev) => !prev);
        }}
        onClose={() => {
          setForm(false);
        }}
      />
    </>
  );
};
