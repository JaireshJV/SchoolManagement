import { CustomRow } from "@components/others";
import { Col } from "antd";
import { CourseBoxes, NewCourse, StyledCourseManagement } from "./style";
import { CustomTag } from "@components/form";

export const ViewCourseManagement = () => {
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
    }
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

  return (
    <StyledCourseManagement>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={12}>
          <h4>Course Management</h4>
        </Col>

        <Col span={24} md={12}>
          <NewCourse>
            <button>+ New Course</button>
          </NewCourse>
        </Col>
      </CustomRow>
      <CustomRow>
        {course.map((element) => (
          <Col span={24} md={8}>
            <CourseBoxes>
              <div
                className="top-box"
                style={{ background: `${element.color}` }}
              >
                {element.emoji}
              </div>
              <h5>{element.label}</h5>
              <p>{element.sub}</p>
              {/* {element.description} */}
              <div className="tags">
                <CustomTag
                  title={element.duration}
                  color={element.color}
                  style={{ color: darkenColor(element.color, 50) }}
                />
                <CustomTag
                  title={element.faculty}
                  color={element.color}
                  style={{ color: darkenColor(element.color, 50) }}
                />
                <CustomTag
                  title={element.status}
                  color={element.status === "Active" ? "green" : "red"}
                  style={{ color: darkenColor(element.color, 50) }}
                />
              </div>

              <h5>{element.fees}</h5>
              <p>{element.description}</p>
              <div className="tags2">
                <CustomTag title={"✏️ Edit"} />
                <CustomTag
                  title={"🗑"}
                  color={"#fdeaea"}
                  style={{ color: "#ed1c24" }}
                />
              </div>
            </CourseBoxes>
          </Col>
        ))}
      </CustomRow>
    </StyledCourseManagement>
  );
};
