import { CustomRow } from "@components/others";
import { Col } from "antd";
import { NewSubject,SubjectBox} from "./style";
import { CustomTag } from "@components/form";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { useEffect, useState } from "react";
import { getSubjects } from "src/api/getReq";
import { PostSubject } from "src/api/postReq";
import { UpdateSubject } from "src/api/updateReq";
import { DeleteCourse } from "src/api/deleteReq";
import { Delete } from "@components/Delete/Delete";
import { subjectFields } from "@components/FieldColumns/InputFields";

export const Subjects = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteService, setDeleteService] = useState(null);

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
    const data = await getSubjects();
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

console.log(dataSource,'dataSource');


  const handleSubjectSubmit = async (data) => {
    if (mode === "edit") {
      await UpdateSubject(data.subjectId, data);
    } else {
      await PostSubject(data);
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
          <h4>Subjects </h4>
        </Col>

        <Col span={24} md={12}>
          <NewSubject>
            <button onClick={handleAdd}>+ New Subject</button>
          </NewSubject>
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
              name="Subject"
              mode={mode}
              fields={subjectFields}
              initialValues={selectedRow}
              onSubmit={handleSubjectSubmit}
              onClose={() => setForm(false)}
            />
          </div>
        </Col>
      </CustomRow>

      <CustomRow>
        {dataSource?.map((element) => (<>
          {element.status !== "INACTIVE" && (
          <Col span={24} md={6}>
            
              <SubjectBox key={element?.courseId}>
                <div
                  className="top-box"
                >
                </div>
                <div className="tags">
                  <CustomTag
                    title={`${element?.subjectName}`}
                  />
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
                    onClick={() => handleDelete(element.courseId, DeleteCourse)}
                  />

                  <Delete
                    open={openDelete}
                    setOpen={setOpenDelete}
                    deleteId={deleteId}
                    deleteService={deleteService}
                    onSuccess={getData}
                  />
                </div>
              </SubjectBox>
         
          </Col>
             ) }
             </>
        ))}
      </CustomRow>

    </div>
  );
};
