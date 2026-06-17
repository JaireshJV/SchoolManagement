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
      paid: {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
        icon: CheckCircleFilled,
      },
      pending: {
        backgroundColor: "#fffde6",
        color: "#947a03",
        icon: ClockCircleFilled,
      },
      overdue: {
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
        icon: ClockCircleFilled,
      },
    },
    subject: {
      physics: {
        backgroundColor: "#eef2ff",
        color: "#1d4ed8",
      },
      chemistry: {
        backgroundColor: "#fffde6",
        color: "#947a03",
      },
      biology: {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
      },
    },
    courseStatus: {
      "neet & jee": {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
        icon: ClockCircleFilled,
      },
      accounting: {
        backgroundColor: "#fffde6",
        color: "#947a03",
        icon: ClockCircleFilled,
      },
      "air hostess": {
        backgroundColor: "#eef2ff",
        color: "#1d4ed8",
        icon: CheckCircleFilled,
      },
      jee: {
        backgroundColor: "#f3cafb",
        color: "#8e06b8",
        icon: SyncOutlined,
      },
      neet: {
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
        icon: CloseCircleFilled,
      }
    },
    attendance: [
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
      active: {
        backgroundColor: "#e6f7ee",
        color: "#007a37",
      },
      inactive: {
        backgroundColor: "#fdeaea",
        color: "#ed1c4a",
      },
    },
  };
const normalizedStatus =
  typeof status === "string" ? status.trim().toLowerCase() : status;

  const statusConfig = config[type]?.[normalizedStatus];

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
