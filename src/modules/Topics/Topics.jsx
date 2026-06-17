import { CustomRow } from "@components/others";
import { Col } from "antd";
import { CustomTag } from "@components/form";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { useEffect, useState } from "react";
import {  PostTopic } from "src/api/postReq";
import { UpdateTopic } from "src/api/updateReq";
import { DeleteCourse } from "src/api/deleteReq";
import { Delete } from "@components/Delete/Delete";
import {
  topicFields,
} from "@components/FieldColumns/InputFields";
import { getChapters, getTopics } from "src/api/getReq";
import { NewTopic } from "./style";
import { TopicBox } from "./style";

export const Topics = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);
  const [chapterData, setChapterData] = useState([]);


  // Get Subject
  const getChapterData = async () => {
    try {
      const data = await getChapters();
      setChapterData(data || []);
    } catch (err) {
      console.error("Error fetching subject :", err);
    }
  };

  console.log(chapterData, "chapterData");

  const chapterOptions = chapterData.map((chapter) => ({
    label: chapter?.chapterName,
    value: chapter?.chapterId,
  }));

  useEffect(() => {
    getChapterData();
  }, []);

  const fields = topicFields(chapterOptions);

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
    const data = await getTopics();
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataSource, "dataSource");

  const handleTopicSubmit = async (data) => {
    if (mode === "edit") {
      await UpdateTopic(data.topicId, data);
    } else {
      await PostTopic(data);
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
          <h4>Topics </h4>
        </Col>

        <Col span={24} md={12}>
          <NewTopic>
            <button onClick={handleAdd}>+ New Topic</button>
          </NewTopic>
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
              name="Topic"
              mode={mode}
              fields={fields}
              initialValues={selectedRow}
              onSubmit={handleTopicSubmit}
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
                <TopicBox key={element?.courseId}>
                  <div className="top-box"></div>
                  <div className="tags">
                    <CustomTag title={`${element?.topicName}`} />
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
                </TopicBox>
              </Col>
            )}
          </>
        ))}
      </CustomRow>

    </div>
  );
};
