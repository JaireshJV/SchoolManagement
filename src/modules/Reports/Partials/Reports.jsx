import { CustomRow } from "@components/others";
import { StyledCard, StyledReports } from "../style";
import { Col } from "antd";
import AdmissionBarChart from "./AdmissionBarChart";
import FeesCollectionProgressBar from "./FeesCollectionProgress";

export const Reports = () => {
  const reportcards = [
    {
      key: "1",
      emoji: "🎓",
      label: "Student Report",
      description: "Full profile, course, batch details",
    },
    {
      key: "2",
      emoji: "✅",
      label: "Attendance Report",
      description: "Daily, weekly, monthly breakdown",
    },
    {
      key: "3",
      emoji: "📊",
      label: "Marks Report",
      description: "Exam-wise, subject-wise results",
    },
    {
      key: "4",
      emoji: "💳",
      label: "Fee Due Report",
      description: "Pending, overdue amounts",
    },
    {
      key: "5",
      emoji: "👨‍🏫",
      label: "Teacher Report",
      description: "Attendance, classes taken",
    },
    {
      key: "6",
      emoji: "📋",
      label: "Admission Report",
      description: "New registrations by month",
    },
  ];
  return (
    <StyledReports>
      <h4>Reports & Analytics</h4>
      <CustomRow space={[12, 12]}>
        {reportcards.map((cards) => (
          <Col span={24} md={8}>
            <StyledCard>
              <p className="emoji">{cards.emoji}</p>
              <h5>{cards.label}</h5>
              <p>{cards.description}</p>
              <button>📥 Generate</button>
            </StyledCard>
          </Col>
        ))}
      </CustomRow>
      <CustomRow space={[12, 12]}>
        <Col span={24} md={12}>
          <StyledCard>
            <AdmissionBarChart />
          </StyledCard>
        </Col>
        <Col span={24} md={12}>
          <StyledCard>
            <h4>Fee Collection vs Due</h4>
            <FeesCollectionProgressBar />
          </StyledCard>
        </Col>
      </CustomRow>
    </StyledReports>
  );
};
