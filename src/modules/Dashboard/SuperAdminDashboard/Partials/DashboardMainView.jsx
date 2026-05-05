import { CustomRow } from "@components/others";
import { Card, Col, Row } from "antd";
import {
  HeaderCard,
  StyledBarChart,
  StyledCard,
  StyledProgressCard,
} from "../style";
import BarChartAttendance from "./BarChartAttendance";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

export const SuperAdminDashboard = () => {

const navigate = useNavigate() ;
    
  const carddata = [
    {
      key: "1",
      label: "Total Students",
      emoji: "🎓",
      count: "142",
      additional: "+8 this month",
      color: "green",
    },
    {
      key: "2",
      label: "Teachers",
      emoji: "👨‍🏫",
      count: "18",
      additional: "2 new",
      color: "gold",
    },
    {
      key: "3",
      label: "Today's Attendance",
      emoji: "✅",
      count: "87%",
      additional: "128/147",
      color: "blue",
    },
    {
      key: "4",
      label: "Pending Fees",
      emoji: "💳",
      count: "₹2.4L",
      additional: "28 students",
      color: "red",
    },
    {
      key: "5",
      label: "Total Courses",
      emoji: "📚",
      count: "3",
      additional: "Active",
      color: "green",
    },
    {
      key: "6",
      label: "Parents",
      emoji: "👨‍👩‍👧",
      count: "138",
      additional: "Registered",
      color: "gold",
    },
    {
      key: "7",
      label: "Upcoming Exams",
      emoji: "📝",
      count: "3",
      additional: "This week",
      color: "blue",
    },
    {
      key: "8",
      label: "Batches",
      emoji: "🗂️",
      count: "8",
      additional: "Active",
      color: "red",
    },
  ];
  return (
    <div>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={24}>
          <HeaderCard>
            <CustomRow>
              <Col span={24} md={12}>
                <p>Good Morning 👋 </p>
                <h3>Welcome back, Super Admin</h3>
                <p>Today: Monday, 14 April 2026 · 3 exams this week</p>
              </Col>
              <Col span={24} md={12}>
                <div className="header-right">
                  <button className="quick-report" onClick={()=>navigate('/reports')}>📋Quick Report</button>
                  <button className="add-student" onClick={()=>navigate('/students')}>+ Add Student</button>
                </div>
              </Col>
            </CustomRow>
          </HeaderCard>
        </Col>
      </CustomRow>
      <CustomRow space={[12, 12]}>
        {carddata.map((data) => (
          <Col span={24} md={6}>
            <StyledCard
              style={{
                borderTop: `3px solid ${data.color}`,
              }}
              key={data.key}
            >
              <p className="emoji">{data.emoji}</p>
              <p>{data.label}</p>
              <h4>{data.count}</h4>
              <p
                className="colored-p"
                style={{
                  color: data.label === "Pending Fees" ? "red" : "green",
                }}
              >
                {data.additional}
              </p>
            </StyledCard>
          </Col>
        ))}
      </CustomRow>

      <CustomRow space={[12, 12]}>
        <Col span={24} md={12}>
          <StyledBarChart>
            <BarChartAttendance />
          </StyledBarChart>
        </Col>

        <Col span={24} md={12}>
          <StyledProgressCard>
            <h4>Course Enrollment</h4>
            <ProgressBar />
            <hr />
            <h5>Recent Admissions</h5>
            <div className="recent">
              <p>Priya Sharma — NEET · Apr 12</p>
              <p>Arjun Mehta — JEE · Apr 11</p>
            </div>
            <p className="viewall">View all 8 →</p>
          </StyledProgressCard>
        </Col>
      </CustomRow>
    </div>
  );
};
