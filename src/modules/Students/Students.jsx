import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { useMemo, useState } from "react";
import { studentColumns } from "../FieldColumns/Columns";
import { studentFields } from "../FieldColumns/InputFields";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";


const data = [
  {
    key: "1",
    studentName: "John Doe",
    admissionNo: "EP2024-042",
    email: "john.doe@mail.com",
    mobile: "9876543210",
    parentMobile: "9123456780",
    course: { id: "c1", name: "NEET & JEE" },
    batch: { id: "b1", name: "Batch A" },
    profilePhoto: "https://i.pravatar.cc/40?img=1",
    status: "Active",
  },
  {
    key: "2",
    studentName: "Jane Smith",
    admissionNo: "EP2024-043",
    email: "jane.smith@mail.com",
    mobile: "9876543211",
    parentMobile: "9123456781",
    course: { id: "c2", name: "Accounting" },
    batch: { id: "b2", name: "Batch B" },
    profilePhoto: "https://i.pravatar.cc/40?img=2",
    status: "Active",
  },
  {
    key: "3",
    studentName: "Michael Brown",
    admissionNo: "EP2024-044",
    email: "michael.brown@mail.com",
    mobile: "9876543212",
    parentMobile: "9123456782",
    course: { id: "c3", name: "Air Hostess" },
    batch: { id: "b1", name: "Batch A" },
    profilePhoto: "https://i.pravatar.cc/40?img=3",
    status: "Inactive",
  },
];

export const Students = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const handleAdd = () => {
    setMode("add");
    setSelectedRow(null);
    setForm(true);
  };

  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow(record);
    setForm(true);
  };

  const handleView = (record) => {
    console.log("view", record);
  };

  const handleDelete = (record) => {
    console.log("delete", record);
  };

  const columns = useMemo(
    () => studentColumns(handleView, handleEdit, handleDelete),
    [handleEdit],
  );

  const handleStudentSubmit = (data) => {
    if (mode === "edit") {
      console.log("Updating...", data);
    } else {
      console.log("Creating...", data);
    }

    // ✅ close form after submit
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  return (
    <>
      <div className={`top-form ${openForm ? "open" : ""}`}>
        <CommonForm
          key={mode === "edit" ? selectedRow?.key : "add"}
          name="Student"
          mode={mode}
          fields={studentFields}
          initialValues={selectedRow}
          onSubmit={handleStudentSubmit}
          onClose={() => setForm(false)}
        />
      </div>

      {/* <Card>
        <div className="table-head">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to={"/parents"}>
                <AiFillHome style={{ marginRight: 4 }} />
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Students</Breadcrumb.Item>
          </Breadcrumb>
          <Button
            onClick={() => {
              setForm((prev) => !prev);
            }}
          >
            <PlusOutlined /> Add Teacher
          </Button>
        </div>
      </Card> */}

      <CommonTable
        columns={columns}
        data={data}
        name={"Student"}
        onAddClick={handleAdd}
        onClose={() => {
          setForm(false);
        }}
      />
    </>
  );
};
