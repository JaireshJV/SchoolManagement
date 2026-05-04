import {
  CheckCircleFilled,
  ClockCircleFilled,
  CloseCircleFilled,
  SyncOutlined,
} from "@ant-design/icons";

export const getStatus = (type, status) => {
  const baseStyle = {
    fontSize: "10px",
    fontWeight: 700,
    padding: "0px 10px",
    borderRadius: "15px",
    // color: "#e5e5e5",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  };

  const config = {
    feeStatus: {
      Paid: {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
        icon: CheckCircleFilled,
      },
      Pending: {
        backgroundColor: "#fffde6",
        color: "#947a03",
        icon: ClockCircleFilled,
      },
      Overdue: {
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
        icon: ClockCircleFilled,
      },
    },
    subject: {
      Physics: {
        backgroundColor: "#eef2ff",
        color: "#1d4ed8",
      },
      Chemistry: {
        backgroundColor: "#fffde6",
        color: "#947a03",
      },
      Biology: {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
      },
    },
    courseStatus: {
      "NEET & JEE": {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
        icon: ClockCircleFilled,
      },
      Accounting: {
        backgroundColor: "#fffde6",
        color: "#947a03",
        icon: ClockCircleFilled,
      },
      "Air Hostess": {
        backgroundColor: "#eef2ff",
        color: "#1d4ed8",
        icon: CheckCircleFilled,
      },
      JEE: {
        backgroundColor: "#f3cafb",
        color: "#8e06b8",
        icon: SyncOutlined,
      },
      NEET: {
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
        icon: CloseCircleFilled,
      },
      UNVERIFIED: {
        backgroundColor: "#547792",
        color: "#1a25c4",
        icon: CloseCircleFilled,
      },
    },
    attendanceStatus: [
      {
        min: 90,
        max: 100,
        backgroundColor: "#e6f7ee",
        color: "#007a37",
        icon: CheckCircleFilled,
      },
      {
        min: 80,
        max: 89,
        backgroundColor: "#eef2ff",
        color: "#1d4ed8",
        icon: SyncOutlined,
      },
      {
        min: 70,
        max: 79,
        backgroundColor: "#fffde6",
        color: "#947a03",
        icon: ClockCircleFilled,
      },
      {
        min: 60,
        max: 69,
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
        icon: CloseCircleFilled,
      },
    ],
    status: {
      Active: {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
      },
      Inactive: {
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
      },
    },
  };

  const statusConfig = config[type]?.[status];

  if (type === "attendance") {
    const value = parseInt(status); // "87%" → 87

    const match = config.attendanceStatus.find(
      (item) => value >= item.min && value <= item.max,
    );

    if (!match) return { style: baseStyle };

    return {
      style: {
        ...baseStyle,
        backgroundColor: match.backgroundColor,
        color: match.color,
      },
      Icon: match.icon,
    };
  }

  if (!statusConfig) {
    return { style: baseStyle };
  }

  return {
    style: {
      ...baseStyle,
      backgroundColor: statusConfig.backgroundColor,
      color: statusConfig.color,
    },
    Icon: statusConfig.icon,
  };
};
