// import React, { useEffect, useMemo, useState } from "react";
// import "../VideoManager.css";

// import { CustomTag } from "@components/form";
// import { THEME } from "@theme/index";
// import { CustomCardView } from "@components/others";

// import CommonCardGrid from "@components/NewComponents/CommonCardGrid/CommonCardGrid";
// import { Modal } from "antd";
// import { getVideoRecords } from "src/api/getReq";

// const VideoManager = () => {
//   const [videos, setVideos] = useState([
//     {
//       id: 1,
//       title: "Newton's Laws of Motion",
//       subject: "Physics · Chapter 5",
//       duration: "48:30",
//       tag: "NEET & JEE",
//       batch: "Batch A",
//     },
//     {
//       id: 2,
//       title: "Organic Chemistry — Alkanes",
//       subject: "Chemistry · Chapter 9",
//       duration: "55:10",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 3,
//       title: "Cell Division — Mitosis",
//       subject: "Biology · Chapter 11",
//       duration: "42:05",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 1,
//       title: "Newton's Laws of Motion",
//       subject: "Physics · Chapter 5",
//       duration: "48:30",
//       tag: "NEET & JEE",
//       batch: "Batch A",
//     },
//     {
//       id: 2,
//       title: "Organic Chemistry — Alkanes",
//       subject: "Chemistry · Chapter 9",
//       duration: "55:10",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 3,
//       title: "Cell Division — Mitosis",
//       subject: "Biology · Chapter 11",
//       duration: "42:05",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 1,
//       title: "Newton's Laws of Motion",
//       subject: "Physics · Chapter 5",
//       duration: "48:30",
//       tag: "NEET & JEE",
//       batch: "Batch A",
//     },
//     {
//       id: 2,
//       title: "Organic Chemistry — Alkanes",
//       subject: "Chemistry · Chapter 9",
//       duration: "55:10",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 3,
//       title: "Cell Division — Mitosis",
//       subject: "Biology · Chapter 11",
//       duration: "42:05",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 1,
//       title: "Newton's Laws of Motion",
//       subject: "Physics · Chapter 5",
//       duration: "48:30",
//       tag: "NEET & JEE",
//       batch: "Batch A",
//     },
//     {
//       id: 2,
//       title: "Organic Chemistry — Alkanes",
//       subject: "Chemistry · Chapter 9",
//       duration: "55:10",
//       tag: "NEET & JEE",
//     },
//     {
//       id: 3,
//       title: "Cell Division — Mitosis",
//       subject: "Biology · Chapter 11",
//       duration: "42:05",
//       tag: "NEET & JEE",
//     },
//   ]);

// const [selectedVideo, setSelectedVideo] = useState(null);
// const [currentPage, setCurrentPage] = useState(1);
// const [pageSize, setPageSize] = useState(9);
// const [isMobile, setIsMobile] = useState(false);
// const [dataSource, setDataSource] = useState([]);
// const [totalRecords, setTotalRecords] = useState(0);
// const [totalPages, setTotalPages] = useState(1);

// useEffect(() => {
//   getData();
// }, [currentPage, pageSize]);

// const getData = async () => {
//   const data = await getVideoRecords(currentPage, pageSize);

//   setDataSource(data?.content || []);
//   setTotalRecords(data?.totalElements || 0);
//   setTotalPages(data?.totalPages || 1);
// };

//   // -----------------------------------
//   // MOBILE CHECK
//   // -----------------------------------

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();

//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // -----------------------------------
//   // AUTO PAGE FIX AFTER DELETE
//   // -----------------------------------

//   useEffect(() => {
//     if (currentPage > totalPages && totalPages > 0) {
//       setCurrentPage(totalPages);
//     }
//   }, [videos, currentPage, totalPages]);

//   // -----------------------------------
//   // FORMAT DURATION
//   // -----------------------------------

//   const formatDuration = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   // -----------------------------------
//   // VIDEO UPLOAD
//   // -----------------------------------

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const videoEl = document.createElement("video");
//     const url = URL.createObjectURL(file);
//     videoEl.src = url;
//     videoEl.onloadedmetadata = () => {
//       const duration = formatDuration(videoEl.duration);

//       const newVideo = {
//         id: Date.now(),
//         title: file.name,
//         subject: "Uploaded Video",
//         duration,
//         tag: "Uploaded",
//         batch: "New",
//         url,
//       };

//       setVideos((prev) => [newVideo, ...prev]);
//     };
//   };

//   // -----------------------------------
//   // DELETE VIDEO
//   // -----------------------------------

//   const handleDelete = (id) => {
//     setVideos((prev) => prev.filter((v) => v.id !== id));
//   };

//   return (
//     <div className="container">
//       {/* HEADER */}

//       <div className="header">
//         <h4>Recorded Videos</h4>

//         <label className="upload-btn">
//           + Upload
//           <input type="file" accept="video/*" hidden onChange={handleUpload} />
//         </label>
//       </div>

//       {/* FILTERS */}

//       <div className="filters">
//         <select>
//           <option>All Courses</option>
//         </select>

//         <select>
//           <option>All Subjects</option>
//         </select>

//         <input type="text" placeholder="Search..." />
//       </div>

//       {/* VIDEO PLAYER */}

//       {/* {selectedVideo && (
//         <div className="player">
//           <video src={selectedVideo.url} controls autoPlay />
//         </div>
//       )} */}

//       {/* VIDEO GRID */}

//       <CommonCardGrid
//         data={dataSource}
//         currentPage={currentPage}
//         pageSize={pageSize}
//         totalRecords={totalRecords}
//         totalPages={totalPages}
//         setCurrentPage={setCurrentPage}
//         isMobile={isMobile}
//         renderCard={(video) => (
//           <CustomCardView>
//             <div className="video-card">
//               {/* THUMBNAIL */}

//               <div
//                 className="thumbnail"
//                 onClick={() => setSelectedVideo(video)}
//               >
//                 ▶<span className="duration">{video.duration}</span>
//               </div>

//               {/* INFO */}

//               <div className="video-info">
//                 <h5>{video.title}</h5>

//                 <p>{video.subject}</p>

//                 <CustomTag
//                   title={video.tag}
//                   style={{ color: THEME.GREEN_NOW }}
//                 />

//                 {video.batch && (
//                   <CustomTag
//                     title={video.batch}
//                     style={{ color: THEME.BLUE_S_37 }}
//                   />
//                 )}
//               </div>
//             </div>

//             {/* ACTIONS */}

//             <div className="actions" onClick={(e) => e.stopPropagation()}>
//               <button className="edit">✏️</button>

//               <button className="delete" onClick={() => handleDelete(video.id)}>
//                 🗑️
//               </button>
//             </div>
//           </CustomCardView>
//         )}
//       />

//       <Modal
//         open={!!selectedVideo}
//         footer={null}
//         onCancel={() => setSelectedVideo(null)}
//         width={600}
//         centered
//         destroyOnClose
//         styles={{
//           body: {
//             padding: "10px",
//           },
//         }}
//       >
//         {selectedVideo && (
//           <div className="video-modal">
//             <video
//               src={selectedVideo.url}
//               controls
//               autoPlay
//               className="modal-video-player"
//             />

//             <div className="modal-video-info">
//               <h3>{selectedVideo.title}</h3>

//               <p>{selectedVideo.subject}</p>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default VideoManager;

import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { Delete } from "@components/Delete/Delete";
import { studyMaterialColumns } from "@components/FieldColumns/Columns";
import { studyMaterialFields } from "@components/FieldColumns/InputFields";
import { CustomTag } from "@components/form";
import CustomSearch from "@components/form/CustomSearch";
import CommonCardGrid from "@components/NewComponents/CommonCardGrid/CommonCardGrid";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CustomCardView, CustomRow } from "@components/others";
import { selectCurrentId } from "@modules/Auth/authSlice";
import { THEME } from "@theme/index";
import { Button, Col, Grid, Modal, Pagination, Select } from "antd";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { DeleteRecordVideos, DeleteStudyMaterial } from "src/api/deleteReq";
import {
  getChapters,
  getCourses,
  getStudyMaterials,
  getSubjects,
  getTopics,
  getVideoRecords,
} from "src/api/getReq";
import { PostRecordedVideo } from "src/api/postReq";
import { UpdateStudyMaterial, UpdateVideoRecord } from "src/api/updateReq";
import "../VideoManager.css";

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

const VideoManager =()=>{
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


const [selectedVideo, setSelectedVideo] = useState(null);

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

  // Get Tropic Data
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
    const data = await getVideoRecords(currentPage, pageSize);
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
    console.log(record, "Video Edit Called");
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
    console.log(record, "Delete Called");
    setDeleteId(record?.videoId);
    setDeleteService(() => DeleteRecordVideos);
    setOpenDelete(true);
  };

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

  const handleRecordVideoSubmit = async (data) => {
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
      await UpdateVideoRecord(data?.videoId, formData);
    } else {
      await PostRecordedVideo(formData);
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h3>Video Records</h3>
          <button
            onClick={handleAdd}
            style={{
              background: "green",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: 6,
              border: "none"
            }}
          >
            + Upload
          </button>
        </div>

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
                name="Video Records"
                mode={mode}
                fields={fields}
                initialValues={selectedRow}
                onSubmit={handleRecordVideoSubmit}
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



        

        {/* <CommonTable
          columns={columns}
          data={dataSource}
          name={"StudyMaterial"}
          onAddClick={handleAdd}
          onClose={() => {
            setForm(false);
          }}
        /> */}





      {/* VIDEO GRID */}
      <CommonCardGrid
        data={dataSource}
        currentPage={currentPage}
         pageSize={pageSize}
         totalRecords={totalRecords}
         totalPages={totalPages}
         setCurrentPage={setcurrentPage}
         isMobile={isMobile}
         renderCard={(video) => (
           <CustomCardView>
             <div className="video-card">
               {/* THUMBNAIL */}

               <div
                 className="thumbnail"
                 onClick={() => setSelectedVideo(video)}
               >
                 ▶<span className="duration">{video.duration}</span>
               </div>

               {/* INFO */}

               <div className="video-info">
                 <h5>{video.title}</h5>

                 <p>{video.subject}</p>

                 <CustomTag
                   title={video.tag}
                   style={{ color: THEME.GREEN_NOW }}
                 />

                 {video.batch && (
                   <CustomTag
                     title={video.batch}
                     style={{ color: THEME.BLUE_S_37 }}
                   />
                 )}
               </div>
             </div>

             {/* ACTIONS */}

             <div className="actions" onClick={() => handleEdit(video)}>
               <button className="edit">✏️</button>

               <button className="delete" onClick={() => handleDelete(video)}>
                 🗑️
               </button>
             </div>
           </CustomCardView>
         )}
       />

       <Modal
         open={!!selectedVideo}
         footer={null}
         onCancel={() => setSelectedVideo(null)}
         width={600}
         centered
         destroyOnClose
         styles={{
           body: {
             padding: "10px",
           },
         }}
       >
         {selectedVideo && (
           <div className="video-modal">
             <video
               src={selectedVideo.url}
               controls
               autoPlay
               className="modal-video-player"
             />

             <div className="modal-video-info">
               <h3>{selectedVideo.title}</h3>

               <p>{selectedVideo.subject}</p>
             </div>
           </div>
         )}
       </Modal>

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

export default VideoManager;
