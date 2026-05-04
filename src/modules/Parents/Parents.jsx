import { Button, Space, Tag, Tooltip } from "antd";

import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { getStatus } from "@utils/statusBadge";

import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";

const handleEdit = (record) => {
  console.log("Edit:", record);
};

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
    title: "PARENT",
    dataIndex: "parent",
    key: "parent",
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
    parent: "John Doe",
    linkedstudent: "Will",
    phone: "+91 9876543210",
    status: "Active",
  },
  {
    key: "2",
    parent: "Jane Smith",
    linkedstudent: "Emma",
    phone: "+91 9123456780",
    status: "Inactive",
  },
  {
    key: "3",
    parent: "Michael Brown",
    linkedstudent: "Liam",
    phone: "+91 9988776655",
    status: "Active",
  },
];

export const Parents = () => {
  const [openForm, setForm] = useState(false);

  const handleParentSubmit = (values) => {
    console.log("Recived Values", values);
  };

  return (
    <>
      <div className={`top-form ${openForm ? "open" : ""}`}>
        <CommonForm
          name="Parent"
          //   fields={studentFields}
          onSubmit={handleParentSubmit}
          onClose={() => setForm(false)}
        />
      </div>

      <CommonTable
        columns={columns}
        data={data}
        name={"Parent"}
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
