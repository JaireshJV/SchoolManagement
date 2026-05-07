import { useEffect, useMemo, useState } from "react";
import { CommonTable } from "@components/NewComponents/CommonTable/CommonTable";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { PostBatches } from "src/api/postReq";
import { getBatches, getCourses } from "src/api/getReq";

import dayjs from "dayjs";
import { UpdateBatch } from "src/api/updateReq";
import { DeleteBatch } from "src/api/deleteReq";
import { batchFields } from "@components/FieldColumns/InputFields";
import { batchColumns } from "@components/FieldColumns/Columns";
import { Delete } from "@components/Delete/Delete";
import { CustomModal } from "@components/others";
import { BatchesDetails } from "./BatchesDetails";

export const Batches = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [courseData, setCourseData] = useState([]);
  const [batchData, setBatchData] = useState([]);

  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);

    // ====== Modal States ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [width, setWidth] = useState(0);

    // ===== Modal Functions =====
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  // ===== OTHER FUNCTIONS =====

  //Get Courses Details
  const getCourseData = async () => {
    try {
      const data = await getCourses();
      setCourseData(data || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // Get Batches
  const getBatchesData = async () => {
    const data = await getBatches();
    setBatchData(data);
  };

  useEffect(() => {
    getCourseData();
    getBatchesData();
  }, []);

  const courseOptions = courseData.map((course) => ({
    label: course?.courseName,
    value: course?.courseId,
  }));
  
  const fields = batchFields(courseOptions);

  const handleBatchesSubmit = async (data) => {
    if (mode === "edit") {
    await UpdateBatch(data.batchId, data,);
    } else {
    await PostBatches(data);
    }
    await getBatchesData();
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  const handleView = (record) => {
         setModalTitle("Batch Details");
         setWidth(600);
         setModalContent(<BatchesDetails record={record} />);
         showModal();
  };

  const handleDelete = (record) => {
    console.log(record, "When clic Delete")
    setDeleteId(record.batchId);
    setDeleteService(() => DeleteBatch);
    setOpenDelete(true);
  };

  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow({
      ...record,
      courseId: record.course?.courseId,
      startDate: record.startDate ? dayjs(record.startDate) : null,
      endDate: record.endDate ? dayjs(record.endDate) : null,
    });
    setForm(true);
  };

  const columns = useMemo(
    () => batchColumns(handleView, handleEdit, handleDelete),
    [handleEdit],
  );

  return (
    <>
      <div className={`top-form ${openForm ? "open" : ""}`}>
        <CommonForm
          key={mode === "edit" ? selectedRow?.key : "add"}
          name="batches"
          mode={mode}
          fields={fields}
          initialValues={selectedRow}
          onSubmit={handleBatchesSubmit}
          onClose={() => setForm(false)}
        />
      </div>

      <CommonTable
        columns={columns}
        data={batchData}
        name={"Batches"}
        onAddClick={() => {
          setForm((prev) => !prev);
        }}
        onClose={() => {
          setForm(false);
        }}
      />

      <CustomModal
        isVisible={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={width}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />

      <Delete
        open={openDelete}
        setOpen={setOpenDelete}
        deleteId={deleteId}
        deleteService={deleteService}
        onSuccess={getBatchesData}
      />
    </>
  );
};
