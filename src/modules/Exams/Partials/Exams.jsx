import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { Delete } from "@components/Delete/Delete";
import { examColumns } from "@components/FieldColumns/Columns";
import { examFields } from "@components/FieldColumns/InputFields";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CustomRow } from "@components/others";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { Button, Col, Grid, Pagination, Select } from "antd";
import dayjs from "dayjs";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { DeleteExam, DeleteStudyMaterial } from "src/api/deleteReq";
import { getBatches, getCourses, getExam, getSubjects } from "src/api/getReq";
import { PostExam } from "src/api/postReq";
import { UpdateExam } from "src/api/updateReq";

const { useBreakpoint } = Grid;

function Exams() {
  const [openForm, setForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [courseData, setCourseData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [mode, setMode] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);

  // Pagination states
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const userId = useSelector(selectCurrentId);
  console.log(totalRecords, "totalRecordstotalRecords");
  console.log(totalPages, "totalPagestotalPages");

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // ===== OTHER FUNCTIONS =====

  useEffect(() => {
    getCourse();
    getBatch();
    getSubject();
    getData();
  }, []);

  // Get Course Data
  const getCourse = async () => {
    const data = await getCourses();
    setCourseData(data);
  };

  const courseOptions = courseData.map((course) => ({
    label: course?.courseName,
    value: course?.courseId,
  }));

  // Get Batch Data
  const getBatch = async () => {
    const data = await getBatches();
    setBatchData(data);
    console.log(data, "datadata");
  };

  const batchOptions = batchData?.map((batch) => ({
    label: batch?.batchName,
    value: batch?.batchId,
  }));

  // Get Subject Data
  const getSubject = async () => {
    const data = await getSubjects();
    setSubjectData(data);
    console.log(data, "datadata");
  };

  const subjectOptions = subjectData?.map((subject) => ({
    label: subject?.subjectName,
    value: subject?.subjectName,
  }));

  const fields = examFields(courseOptions, batchOptions, subjectOptions);

  // Get Exam

  console.log(currentPage, "currentPage");
  console.log(pageSize, "pageSize");

  const getData = async () => {
    const data = await getExam();
    setDataSource(data?.content);
    // setTotalRecords(data?.totalElements);
    // setTotalPages(data?.totalPages);
  };

  console.log(dataSource, "dataSourcedataSource");

  const handleAdd = () => {
    setMode("add");
    setSelectedRow(null);
    setForm(true);
  };

  // ===== Search =====
  const handleSearchs = (value) => {
    setPageSize(totalRecords);
    setSearchTexts(value);
  };

  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow({
      ...record,
      courseId: record?.course?.courseId,
      batchId: record?.batch?.batchId,
      examDate: record.examDate ? dayjs(record?.examDate) : null,
      startTime: record.startTime ? dayjs(record?.startTime, "HH:mm") : null,
      endTime: record.endTime ? dayjs(record?.endTime, "HH:mm") : null,
    });
    setForm(true);
  };

  const handleDelete = (record) => {
    console.log("HanldeDelete Clicked");
    setDeleteId(record?.examId);
    setDeleteService(() => DeleteExam);
    setOpenDelete(true);
  };

  const columns = useMemo(
    () => examColumns(handleEdit, handleDelete),
    [handleEdit],
  );

  function handleFiles(fileList) {
    const newFiles = Array.from(fileList).map(function (file, i) {
      return {
        id: Date.now() + i,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        subject: "General",
        date: new Date().toLocaleDateString(),
        url: URL.createObjectURL(file),
        type: "Notes",
      };
    });

    setFiles(function (prev) {
      return newFiles.concat(prev);
    });
  }

  function handleDrop(e) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  const handleStudyMaterialSubmit = async (data) => {
    const formatDate = (data) => new Date(data)?.toISOString().split("T")[0];
    const convertedExamDate = formatDate(data?.examDate);
    // const starttime = new Date(data?.startTime).toISOString().substring(11, 16); // another formate -5.30
    const starttime = dayjs(data?.startTime).format("HH:mm");
    const endtime = dayjs(data?.endTime).format("HH:mm");
    const newVal = {
      ...data,
      examDate: convertedExamDate,
      startTime: starttime,
      endTime: endtime,
    };
    console.log(newVal, "newVal");

    if (mode === "edit") {
      await UpdateExam(data?.examId, newVal);
    } else {
      await PostExam(newVal);
    }

    await getData();
    // ✅ close form after submit
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  return (
    <div style={{ padding: 20, background: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: 16 }}>
        <CustomRow>
          <Col span={24} md={24}>
            <div
              className={`top-form ${openForm ? "open" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <CommonForm
                key={mode === "edit" ? selectedRow?.key : "add"}
                name="Exam"
                mode={mode}
                fields={fields}
                initialValues={selectedRow}
                onSubmit={handleStudyMaterialSubmit}
                onClose={() => setForm(false)}
                mediumdisplay={12}
              />
            </div>
          </Col>
        </CustomRow>

        {/* <CustomRow style={{ paddingBottom: "20px" }}>
          <Col span={24} md={8}>
            <CustomSearch
              placeholder={"Search . . ."}
              onSearch={handleSearchs}
              onChange={(e) => handleSearchs(e.target.value)}
            />
          </Col>

          <Col span={24} md={16}>
            <div style={{ display: "flex", justifyContent: "end", gap: 8 }}>
              <span>Rows per page :</span>
              <Select
                value={pageSize}
                style={{ width: 75 }}
                onChange={(value) => {
                  console.log(value, "valuevalue");

                  setPageSize(value);
                  setcurrentPage(1);
                }}
                options={[
                  { value: 5, label: "5" },
                  { value: 10, label: "10" },
                  { value: 20, label: "20" },
                  { value: 50, label: "50" },
                  { value: 100, label: "100" },
                ]}
              />
            </div>
          </Col>
        </CustomRow> */}

        <CommonTable
          columns={columns}
          data={dataSource}
          name={"Exams"}
          onAddClick={handleAdd}
          onClose={() => {
            setForm(false);
          }}
        />

        {/* <Col span={24} md={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              boxShadow: "0px 0px 12px 1px grey",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Pagination
              responsive
              size={isMobile ? "small" : "default"}
              showLessItems
              current={currentPage}
              pageSize={pageSize}
              total={totalRecords}
              onChange={(page) => {
                // setPageSize(5)
                setcurrentPage(page);
              }}
              showQuickJumper={!isMobile}
              showTotal={
                !isMobile
                  ? (total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`
                  : undefined
              }
              itemRender={(page, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <Button
                      icon={<CaretLeftFilled />}
                      size="small"
                      disabled={currentPage === 1}
                    >
                      {!isMobile && "Prev"}
                    </Button>
                  );
                }
                if (type === "next") {
                  return (
                    <Button
                      icon={<CaretRightFilled />}
                      size="small"
                      disabled={currentPage === totalPages}
                    >
                      {!isMobile && "Next"}
                    </Button>
                  );
                }
                return originalElement;
              }}
            />
          </div>
        </Col> */}
      </div>
      <Delete
        open={openDelete}
        setOpen={setOpenDelete}
        deleteId={deleteId}
        deleteService={deleteService}
        onSuccess={getData}
      />
    </div>
  );
}

export default Exams;
