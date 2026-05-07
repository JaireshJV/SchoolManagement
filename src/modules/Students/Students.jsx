import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { useEffect, useMemo, useState } from "react";
import { studentColumns } from "../../components/FieldColumns/Columns";
import { studentFields } from "../../components/FieldColumns/InputFields";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { getBatches, getCourses, getStudents } from "src/api/getReq";
import { PostStudent } from "src/api/postReq";

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
  const [courseData, setCourseData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [dataSource , setDataSource] = useState([]) ;

  // Get Courses
  const getCourseData = async () => {
    try {
      const data = await getCourses();
      setCourseData(data || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  const courseOptions = courseData.map((course) => ({
    label: course?.courseName,
    value: course?.courseId,
  }));

  // Get Batches
  const getBatchesData = async () => {
    const data = await getBatches();
    setBatchData(data);
  };

  useEffect(() => {
    getBatchesData();
  }, []);

  const batchOptions = batchData.map((batch) => ({
    label: batch?.batchName,
    value: batch?.batchId,
  }));

  const fields = studentFields(courseOptions, batchOptions);

  // Student

  const getData = async () => {
    const data = await getStudents();
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataSource, "datasource");

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
    console.log(data, "ddddd");

    const formatDate = (data) => new Date(data)?.toISOString().split("T")[0];
    const convertedDOB = formatDate(data?.dob);
    console.log(convertedDOB,'convertedDOB');
    
    const formData = new FormData();

    formData.append("studentName", data?.studentName || "");
    formData.append("gender", data?.gender || "");
    formData.append("dob", convertedDOB || "");
    formData.append("mobile", data?.mobile || "");
    formData.append("email", data?.email || "");
    formData.append("fatherName", data?.fatherName || "");
    formData.append("motherName", data?.motherName || "");
    formData.append("parentMobile", data?.parentMobile || "");
    formData.append("parentEmail", data?.parentEmail || "");
    formData.append("parentProfession", data?.parentProfession || "");
    formData.append("schoolName", data?.schoolName || "");
    formData.append("currentStandard", data?.currentStandard || "");
    formData.append("board", data?.board || "");
    formData.append("medium", data?.medium || "");
    formData.append("address", data?.address || "");
    formData.append("district", data?.district || "");
    formData.append("state", data?.state || "");
    formData.append("pincode", data?.pincode || "");
    formData.append("courseId", data?.courseId || "");
    formData.append("batchId", data?.batchId || "");

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

    if (data?.signature && data?.signature.length > 0) {
      data?.signature.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("signature", file.originFileObj);
        }
      });
    }

    if (mode === "edit") {
      console.log("Updating...", data);
    } else {
      PostStudent(formData);
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
          fields={fields}
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
        data={dataSource}
        name={"Student"}
        onAddClick={handleAdd}
        onClose={() => {
          setForm(false);
        }}
      />
    </>
  );
};
