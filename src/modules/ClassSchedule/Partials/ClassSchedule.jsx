import { CustomRow } from "@components/others";
import { ButtomSquare, StyledClassSchedule, StyledSchedule } from "../style";
import { Col, Select } from "antd";
import { useEffect, useState } from "react";
import { CustomTag } from "@components/form";

export const ClassSchedule = () => {
  const [days, setDays] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const batchOptions = [
    {
      label: "Batch A -- NEET",
      value: "batchaneet",
    },
    {
      label: "Accounting",
      value: "accounting",
    },
  ];

  const timingOptions = [
    {
      label: "April Week 2",
      value: "aprilweek2",
    },
    {
      label: "April Week 3",
      value: "aprilweek3",
    },
  ];

  const timing = [
    {
      time: "9:00 AM",
    },
    {
      time: "11:30 AM",
    },
    {
      time: "2:00 PM",
    },
  ];

  const Schedule = [
    {
      Sunday: [
        {
          subject: "Physics",
          slot: "09.00-10.30",
          faculty: "Dr.Ramesh",
          color: "#00b050",
          mode: "live",
        },
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ramesh",
          color: "#f59e0b",
          mode: "",
        },
        {
          subject: "Biology",
          slot: "02.00-03.30",
          faculty: "Dr.Ramesh",
          color: "#ed1c24",
          mode: "",
        },
      ],
    },
    {
      Monday: [
        {
          subject: "Biology",
          slot: "09.00-10.30",
          faculty: "Dr.Suresh",
          color: "#ed1c24",
          mode: "",
        },
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ram",
          color: "#f59e0b",
          mode: "live",
        },
        {
          subject: "Maths",
          slot: "02.00-03.30",
          faculty: "Dr.Jairesh",
          color: "#1d4ed8",
          mode: "",
        },
      ],
    },
    {
      Tuesday: [
        {
          subject: "Maths",
          slot: "02.00-03.30",
          faculty: "Dr.Jairesh",
          color: "#1d4ed8",
          mode: "live",
        },
        {
          subject: "Biology",
          slot: "09.00-10.30",
          faculty: "Dr.Suresh",
          color: "#ed1c24",
          mode: "",
        },
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ram",
          color: "#f59e0b",
          mode: "",
        },
      ],
    },
    {
      Wednesday: [
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ram",
          color: "#f59e0b",
          mode: "",
        },
        {
          subject: "Biology",
          slot: "09.00-10.30",
          faculty: "Dr.Suresh",
          color: "#ed1c24",
          mode: "live",
        },
        {
          subject: "Maths",
          slot: "02.00-03.30",
          faculty: "Dr.Jairesh",
          color: "#1d4ed8",
          mode: "",
        },
      ],
    },
    {
      Thursday: [
        {
          subject: "Maths",
          slot: "02.00-03.30",
          faculty: "Dr.Jairesh",
          color: "#1d4ed8",
          mode: "live",
        },
        {
          subject: "Biology",
          slot: "09.00-10.30",
          faculty: "Dr.Suresh",
          color: "#ed1c24",
          mode: "",
        },
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ram",
          color: "#f59e0b",
          mode: "",
        },
      ],
    },
    {
      Friday: [
        {
          subject: "Biology",
          slot: "09.00-10.30",
          faculty: "Dr.Suresh",
          color: "#ed1c24",
          mode: "",
        },
        {
          subject: "Maths",
          slot: "02.00-03.30",
          faculty: "Dr.Jairesh",
          color: "#1d4ed8",
          mode: "",
        },
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ram",
          color: "#f59e0b",
          mode: "live",
        },
      ],
    },
    {
      Saturday: [
        {
          subject: "Biology",
          slot: "09.00-10.30",
          faculty: "Dr.Suresh",
          color: "#ed1c24",
          mode: "",
        },
        {
          subject: "Chemistry",
          slot: "11.30-01.00",
          faculty: "Dr.Ram",
          color: "#f59e0b",
          mode: "live",
        },
        {
          subject: "Maths",
          slot: "02.00-03.30",
          faculty: "Dr.Jairesh",
          color: "#1d4ed8",
          mode: "",
        },
      ],
    },
  ];

  useEffect(() => {
    if (Schedule?.length > 0) {
      const formatted = Schedule.reduce((acc, item) => {
        return {
          ...acc,
          ...item, // merges Sunday, Monday, etc.
        };
      }, {});

      setDays(formatted);
    }
  }, []);

  return (
    <StyledClassSchedule>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={12}>
          <h4>Weekly Class Schedule</h4>
        </Col>
        <Col span={24} md={12}>
          <div className="top-right">
            <Select
              options={batchOptions}
              defaultValue={"Batch A -- NEET"}
              className="select"
            />
            <Select
              options={timingOptions}
              defaultValue={"April Week 2"}
              className="select"
            />
            <button>+ Add Class</button>
          </div>
        </Col>
      </CustomRow>
      <CustomRow style={{ marginTop: "25px" }}>
        <Col span={24} md={3}>
          <div className="timestyle">
            {timing.map((elem) => (
              <p>{elem.time}</p>
            ))}
          </div>
        </Col>

        <Col span={24} md={3}>
          <h5>Sunday</h5>
          {days?.Sunday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>

        <Col span={24} md={3}>
          <h5>Monday</h5>
          {days?.Monday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>

        <Col span={24} md={3}>
          <h5>Tuesday</h5>
          {days?.Tuesday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>

        <Col span={24} md={3}>
          <h5>Wednesday</h5>
          {days?.Wednesday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>

        <Col span={24} md={3}>
          <h5>Thursday</h5>
          {days?.Thursday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>

        <Col span={24} md={3}>
          <h5>Friday</h5>
          {days?.Friday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>

        <Col span={24} md={3}>
          <h5>Saturday</h5>
          {days?.Saturday.map((day) => (
            <StyledSchedule style={{ borderLeft: `3px solid ${day.color}` }}>
              <h5>{day.subject}</h5>
              <p>{day.slot}</p>
              <p className="faculty">{day.faculty}</p>
              {day.mode === "live" ? (
                <CustomTag
                  color={"red"}
                  title={"LIVE"}
                  style={{ borderRadius: "20px", marginTop: "7px" }}
                />
              ) : null}
            </StyledSchedule>
          ))}
        </Col>
      </CustomRow>
      <div className="bottom-most">
        <div className="seperate">
          <ButtomSquare style={{ background: "#00b050" }} /> <p>Physics</p>
        </div>
        <div className="seperate">
          <ButtomSquare style={{ background: "#f59e0b" }} /> <p>Chemistry</p>
        </div>
        <div className="seperate">
          <ButtomSquare style={{ background: "#ed1c24" }} /> <p>Biology</p>
        </div>
        <div className="seperate">
          <ButtomSquare style={{ background: "#1d4ed8" }} /> <p>Maths</p>
        </div>
      </div>
    </StyledClassSchedule>
  );
};
