
import { useMemo, useState } from "react";
import { teacherFields } from "../FieldColumns/InputFields";
import { teacherColumns } from "../FieldColumns/Columns";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";


const data = [
  {
    key: "1",
    teacherId: "T001",
    teacherName: "Dr. Ramesh Kumar",
    subjectName: "Physics",
    mobile: "9876543210",
    experience: "10 Years",
    qualification: "PhD in Physics",
    status: "Active",
  },
  {
    key: "2",
    teacherId: "T002",
    teacherName: "Ms. Anjali Verma",
    subjectName: "Mathematics",
    mobile: "9123456780",
    experience: "6 Years",
    qualification: "M.Sc Mathematics",
    status: "Active",
  },
  {
    key: "3",
    teacherId: "T003",
    teacherName: "Mr. Rajesh Singh",
    subjectName: "Chemistry",
    mobile: "9988776655",
    experience: "8 Years",
    qualification: "M.Sc Chemistry",
    status: "Inactive",
  },
];

export const Teachers = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const handleAdd = () => {
    setMode("add");
    setSelectedRow(null);
    setForm(true);
    console.log("Add Teacher Called");
  };

  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow(record);
    setForm(true);
    console.log("Edit Teacher Called");
  };

  const handleView = (record) => {
    console.log("view", record);
  };

  const handleDelete = (record) => {
    console.log("delete", record);
  };

  const columns = useMemo(
    () => teacherColumns(handleView, handleEdit, handleDelete),
    [handleEdit],
  );

  const handleTeacherSubmit = (data) => {
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
          name="Teacher"
          mode={mode}
          fields={teacherFields}
          initialValues={selectedRow}
          onSubmit={handleTeacherSubmit}
          onClose={() => setForm(false)}
        />
      </div>

      <CommonTable
        columns={columns}
        data={data}
        name={"Teacher"}
        onAddClick={handleAdd}
        onClose={() => {
          setForm(false);
        }}
      />
    </>
  );
};
