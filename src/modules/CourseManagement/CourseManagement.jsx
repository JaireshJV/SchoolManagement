import { CustomRow } from "@components/others";
import { Col } from "antd";
import { CourseBoxes, NewCourse, StyledCourseManagement } from "./style";
import { CustomTag } from "@components/form";
import { CommonForm } from "@components/NewComponents/CommonFormModal/CommonFormModal";
import { useEffect, useState } from "react";
import { courseFields } from "@modules/FieldColumns/InputFields";
import { baseRequest } from "@request/request";
import { APIURLS } from "src/api/urls";
import { getCourses } from "src/api/getReq";
import { PostCourse } from "src/api/postReq";
import { DeleteCourse } from "src/api/deleteReq";

export const CourseManagement = () => {
  const [openForm, setForm] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const handleAdd = () => {
    setMode("add");
    setTrigger(true);
    setSelectedRow(null);
    setForm(true);
  };

  const getData = async () => {
    const data = await getCourses();
    setDataSource(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataSource, "datasource");

  const handleCourseSubmit = async (data) => {
    if (mode === "edit") {
      console.log("Updating...", data);
    } else {
      await PostCourse(data);
      console.log("Creating...", data);
    }
    await getData();

    // ✅ close form after submit
    setForm(false);
    setMode("add");
    setSelectedRow(null);
  };

  const handleEdit = (record) => {
    setMode("edit");
    setSelectedRow(record);
    setForm(true);
  };

  const course = [
    {
      key: "1",
      emoji: "🔬",
      label: "NEET & JEE",
      sub: "Medical & Engineering entrance prep",
      duration: "2 Years",
      faculty: "8 Faculty",
      status: "Active",
      fees: "₹85,000 / year",
      description: "Subjects: Physics, Chemistry, Biology, Maths",
      color: "#E6F7EE",
    },
    {
      key: "2",
      emoji: "📊",
      label: "Accounting",
      sub: "CA Foundation & Professional Accounting",
      duration: "1 Year",
      faculty: "4 Faculty",
      status: "Active",
      fees: "₹45,000 / year",
      description: "Subjects: Accounts, Taxation, Tally, GST",
      color: "#fffde6",
    },
    {
      key: "3",
      emoji: "✈️",
      label: "Air Hostess Training",
      sub: "Aviation hospitality & grooming program",
      duration: "6 Months",
      faculty: "3 Faculty",
      status: "Active",
      fees: "₹35,000 / course",
      description: "Modules: Grooming, Communication, Safety",
      color: "#eef2ff",
    },
  ];

  function darkenColor(hex, percent) {
    let num = parseInt(hex.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) - amt,
      G = ((num >> 8) & 0x00ff) - amt,
      B = (num & 0x0000ff) - amt;

    return (
      "#" +
      (
        0x1000000 +
        (R < 0 ? 0 : R) * 0x10000 +
        (G < 0 ? 0 : G) * 0x100 +
        (B < 0 ? 0 : B)
      )
        .toString(16)
        .slice(1)
    );
  }

  const handleDelete = async(id) => {
    await DeleteCourse(id);
    await getData();
  };

  return (
    <StyledCourseManagement>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={12}>
          <h4>Course Management</h4>
        </Col>

        <Col span={24} md={12}>
          <NewCourse>
            <button onClick={handleAdd}>+ New Course</button>
          </NewCourse>
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
              name="Course"
              mode={mode}
              fields={courseFields}
              initialValues={selectedRow}
              onSubmit={handleCourseSubmit}
              onClose={() => setForm(false)}
            />
          </div>
        </Col>
      </CustomRow>

      <CustomRow>
        {dataSource?.map((element) => (
          <Col span={24} md={8}>
            <CourseBoxes key={element?.courseId}>
              <div
                className="top-box"
                style={{ background: `${element.color}` }}
              >
                {/* {element.emoji} */}
              </div>
              <h5>{element?.courseName}</h5>
              <p>{element?.courseCategory}</p>
              {/* {element.description} */}
              <div className="tags">
                <CustomTag
                  title={`${element?.durationMonths} Months`}
                  // color={element.color}
                  // style={{ color: darkenColor(element.color, 50) }}
                />
                {/* <CustomTag
                  title={element.faculty}
                  color={element.color}
                  style={{ color: darkenColor(element.color, 50) }}
                /> */}
                <CustomTag
                  title={element?.status}
                  color={element?.status === "ACTIVE" ? "green" : "red"}
                  // style={{ color: darkenColor(element.color, 50) }}
                />
              </div>

              <h5>{element.fees}</h5>
              <p>{element.description}</p>
              <div className="tags2">
                <CustomTag title={"✏️ Edit"} onClick={handleEdit} />
                <CustomTag
                  title={"🗑"}
                  color={"#fdeaea"}
                  style={{ color: "#ed1c24" }}
                  onClick={() => handleDelete(element.courseId)}
                />
              </div>
            </CourseBoxes>
          </Col>
        ))}
      </CustomRow>
    </StyledCourseManagement>
  );
};
