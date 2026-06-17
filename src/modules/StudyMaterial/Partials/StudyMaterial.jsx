import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { Delete } from "@components/Delete/Delete";
import { studyMaterialColumns } from "@components/FieldColumns/Columns";
import { studyMaterialFields } from "@components/FieldColumns/InputFields";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CustomRow } from "@components/others";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { Button, Col, Grid, Pagination, Select } from "antd";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { DeleteStudyMaterial } from "src/api/deleteReq";
import {
  getChapters,
  getCourses,
  getStudyMaterials,
  getSubjects,
  getTopics,
} from "src/api/getReq";
import { PostStudyMaterial } from "src/api/postReq";
import { UpdateStudyMaterial } from "src/api/updateReq";

const { useBreakpoint } = Grid;
const initialFiles = [
  {
    id: 1,
    name: "Wave Optics — Full Notes.pdf",
    size: "2.4 MB",
    subject: "Physics",
    date: "Apr 11",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "Notes",
  },
  {
    id: 2,
    name: "DPP Sheet — Mechanics.pdf",
    size: "850 KB",
    subject: "Physics",
    date: "Apr 10",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "DPP",
  },
  {
    id: 3,
    name: "Organic Chemistry Notes.pdf",
    size: "3.1 MB",
    subject: "Chemistry",
    date: "Apr 9",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    type: "Notes",
  },
];

function StudyMaterials() {
  const [files, setFiles] = useState(initialFiles);
  const inputRef = useRef(null);
  const [openForm, setForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [courseData, setCourseData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [topicData, setTopicData] = useState([]);
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
    getSubject();
    getChapter();
    getTopic();
    getData();
  }, [pageSize, currentPage]);

  // Get Course Data
  const getCourse = async () => {
    const data = await getCourses();
    setCourseData(data);
  };

  const courseOptions = courseData.map((course) => ({
    label: course?.courseName,
    value: course?.courseId,
  }));

  // Get Subject Data
  const getSubject = async () => {
    const data = await getSubjects();
    setSubjectData(data);
  };

  const subjectOptions = subjectData.map((subject) => ({
    label: subject?.subjectName,
    value: subject?.subjectId,
  }));

  // Get Chapter Data
  const getChapter = async () => {
    const data = await getChapters();
    setChapterData(data);
  };

  console.log(pageSize, "pageSizepageSize");

  const chapterOptions = chapterData.map((chapter) => ({
    label: chapter?.chapterName,
    value: chapter?.chapterId,
  }));

  // Get Topic Data
  const getTopic = async () => {
    const data = await getTopics();
    setTopicData(data);
  };

  const topicOptions = topicData.map((topic) => ({
    label: topic?.topicName,
    value: topic?.topicId,
  }));

  const fields = studyMaterialFields(
    courseOptions,
    subjectOptions,
    chapterOptions,
    topicOptions,
  );

  // Get Study Materials

  console.log(currentPage, "currentPage");
  console.log(pageSize, "pageSize");

    const getData = async () => {
      const data = await getStudyMaterials(currentPage, pageSize);
      setDataSource(data?.content);
      setTotalRecords(data?.totalElements);
      setTotalPages(data?.totalPages);
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
    setSelectedRow(record);
    setForm(true);
  };

  const handleDownload = (record) => {
    console.log(record, "recordrecord");

    const link = document.createElement("a");
    link.href = record?.fileUrl;
    link.download = record?.fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (record) => {
    console.log("HanldeDelete Clicked");
    setDeleteId(record?.materialId);
    setDeleteService(() => DeleteStudyMaterial);
    setOpenDelete(true);
  };

  const columns = useMemo(
    () => studyMaterialColumns(handleDownload, handleEdit, handleDelete),
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

  function openFilePicker() {
    inputRef.current.click();
  }

  const handleStudyMaterialSubmit = async (data) => {
    const formData = new FormData();

    formData.append("courseId", data?.courseId || "");
    formData.append("userId", userId || "");
    formData.append("subjectId", data?.subjectId || "");
    formData.append("chapterId", data?.chapterId || "");
    formData.append("topicId", data?.topicId || "");
    formData.append("title", data?.title || "");
    formData.append("description", data?.description || "");

    if (data?.fileUrl && data?.fileUrl.length > 0) {
      data?.fileUrl.forEach((file) => {
        if (file.originFileObj !== undefined) {
          formData.append("file", file.originFileObj);
        }
      });
    }

    if (mode === "edit") {
      await UpdateStudyMaterial(data?.materialId, formData);
    } else {
      await PostStudyMaterial(formData);
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
        {/* Header */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h3>Study Materials</h3>
          <button
            onClick={handleAdd}
            style={{
              background: "green",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: 6,
            }}
          >
            + Upload
          </button>
        </div> */}

        {/* Upload Box */}
        {/* <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={openFilePicker}
          style={{
            border: "2px dashed #ccc",
            borderRadius: 10,
            padding: 40,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
            <p style={{fontSize:"22px",paddingBottom:"10px"}}>📄</p>
          <p>Drag & drop PDF or click to browse</p>
          <small>PDF, DOC up to 50MB</small>
        </div> */}
        {/* 
        <input
          type="file"
          multiple
          ref={inputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFiles(e.target.files)}
        /> */}

        <CustomRow>
          <Col span={24} md={24}>
            <div
              className={`top-form ${openForm ? "open" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <CommonForm
                key={mode === "edit" ? selectedRow?.key : "add"}
                name="StudyMaterial"
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

        <CustomRow style={{ paddingBottom: "20px" }}>
          <Col span={24} md={8}>
            {/* <CustomSearch
              placeholder={"Search . . ."}
              onSearch={handleSearchs}
              onChange={(e) => handleSearchs(e.target.value)}
            /> */}
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
        </CustomRow>

        {/* File List */}
        {/* <div style={{ marginTop: 20 }}>
          {files.map(function (file) {
            return (
              <div
                key={file.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "10px 0",
                }}
              >
                <div style={{ display: "flex", gap: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#eee",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    📄
                  </div>
                  <div>
                    <div>{file.name}</div>
                    <small>
                      {file.subject} • {file.size} • {file.date}
                    </small>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span
                    style={{
                      background: "#eee",
                      padding: "4px 8px",
                      borderRadius: 20,
                    }}
                  >
                    {file.type}
                  </span>
                  <a href={file.url} download={file.name}>
                    ⬇
                  </a>
                </div>
              </div>
            );
          })}
        </div> */}

        <CommonTable
          columns={columns}
          data={dataSource}
          name={"StudyMaterial"}
          onAddClick={handleAdd}
          onClose={() => {
            setForm(false);
          }}
        />

        <Col span={24} md={24}>
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
        </Col>
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

export default StudyMaterials;
