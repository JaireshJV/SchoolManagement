import { CustomRow } from "@components/others";
import { Col } from "antd";
import { ChapterBoxes, NewChapter } from "./style";
import { CustomTag } from "@components/form";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { useEffect, useState } from "react";
import { PostChapter } from "src/api/postReq";
import { UpdateChapter } from "src/api/updateReq";
import { DeleteCourse } from "src/api/deleteReq";
import { Delete } from "@components/Delete/Delete";
import {
  chapterFields
} from "@components/FieldColumns/InputFields";
import { getChapters, getSubjects } from "src/api/getReq";

export const Chapters = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);
  const [subjectData, setSubjectData] = useState([]);

  // Get Subject
  const getSubjectData = async () => {
    try {
      const data = await getSubjects();
      setSubjectData(data || []);
    } catch (err) {
      console.error("Error fetching subject :", err);
    }
  };

  console.log(subjectData, "subjectData");

  const subjectOptions = subjectData.map((subject) => ({
    label: subject?.subjectName,
    value: subject?.subjectId,
  }));

  useEffect(() => {
    getSubjectData();
  }, []);

  const fields = chapterFields(subjectOptions);

  // ===== OTHER FUNCTIONS =====
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

  const handleDelete = (id, service) => {
    console.log("HanldeDelete Clicked");
    setDeleteId(id);
    setDeleteService(() => service);
    setOpenDelete(true);
  };

  const getData = async () => {
    const data = await getChapters();
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataSource, "dataSource");

  const handleChapterSubmit = async (data) => {
    if (mode === "edit") {
      await UpdateChapter(data.chapterId, data);
    } else {
      await PostChapter(data);
      console.log("Creating...", data);
    }
    await getData();

    // ✅ close form after submit
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  return (
    <div>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={12}>
          <h4>Chapters </h4>
        </Col>

        <Col span={24} md={12}>
          <NewChapter>
            <button onClick={handleAdd}>+ New Chapter</button>
          </NewChapter>
        </Col>
      </CustomRow>

      <CustomRow>
        <Col span={24} md={24}>
          <div
            className={`top-form ${openForm ? "open" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <CommonForm
              key={mode === "edit" ? selectedRow?.key : "add"}
              name="Chapter"
              mode={mode}
              fields={fields}
              initialValues={selectedRow}
              onSubmit={handleChapterSubmit}
              onClose={() => setForm(false)}
              mediumdisplay={12}
            />
          </div>
        </Col>
      </CustomRow>

      <CustomRow>
        {dataSource?.map((element) => (
          <>
            {element.status !== "INACTIVE" && (
              <Col span={24} md={6}>
                <ChapterBoxes key={element?.courseId}>
                  <div className="top-box"></div>
                  <div className="tags">
                    <CustomTag title={`${element?.chapterName}`} />
                  </div>

                  <h5>{element.fees}</h5>
                  <p>{element.description}</p>
                  <div className="tags2">
                    <CustomTag
                      title={"✏️ Edit"}
                      onClick={() => handleEdit(element)}
                    />
                    <CustomTag
                      title={"🗑"}
                      color={"#fdeaea"}
                      style={{ color: "#ed1c24" }}
                      onClick={() =>
                        handleDelete(element.courseId, DeleteCourse)
                      }
                    />

                    <Delete
                      open={openDelete}
                      setOpen={setOpenDelete}
                      deleteId={deleteId}
                      deleteService={deleteService}
                      onSuccess={getData}
                    />
                  </div>
                </ChapterBoxes>
              </Col>
            )}
          </>
        ))}
      </CustomRow>
    </div>
  );
};
