import { useEffect, useMemo, useState } from "react";
import { teacherFields } from "../../components/FieldColumns/InputFields";
import { teacherColumns } from "../../components/FieldColumns/Columns";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { PostTeacher } from "src/api/postReq";
import { getTeachers } from "src/api/getReq";

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
  const [dataSource, setDataSource] = useState([]);

  // Student

  const getData = async () => {
    const data = await getTeachers();
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataSource, "datasourceteacher");

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
    const formatDate = (data) => new Date(data).toISOString().split("T")[0];
    const convertedDOB = formatDate(data.dob);
    const convertedDOJ = formatDate(data.joiningDate);

    const formData = new FormData();

    formData.append("teacherName", data?.teacherName || "");
    formData.append("gender", data?.gender || "");
    formData.append("dob", convertedDOB || "");
    formData.append("mobile", data?.mobile || "");
    formData.append("email", data?.email || "");
    formData.append("qualification", data?.qualification || "");
    formData.append("experience", data?.experience || "");
    formData.append("specialization", data?.specialization || "");
    formData.append("subjectName", data?.subjectName || "");
    formData.append("salary", data?.salary || "");
    formData.append("joiningDate", convertedDOJ || "");
    formData.append("address", data?.address || "");
    formData.append("district", data?.district || "");
    formData.append("state", data?.state || "");
    formData.append("pincode", data?.pincode || "");

    if (data?.profilePhoto && data?.profilePhoto.length > 0) {
      data?.profilePhoto.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("profilePhoto", file.originFileObj);
        }
      });
    }

    if (data?.aadhaarPhoto && data?.aadhaarPhoto.length > 0) {
      data?.aadhaarPhoto.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("aadhaarPhoto", file.originFileObj);
        }
      });
    }

    if (data?.certificate && data?.certificate.length > 0) {
      data?.certificate.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("certificate", file.originFileObj);
        }
      });
    }

    const con = Object.fromEntries(formData.entries());
    console.log(con, "consoleformdata");

    if (mode === "edit") {
      console.log("Updating...", data);
    } else {
      PostTeacher(formData);
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
        data={dataSource}
        name={"Teacher"}
        onAddClick={handleAdd}
        onClose={() => {
          setForm(false);
        }}
      />
    </>
  );
};
