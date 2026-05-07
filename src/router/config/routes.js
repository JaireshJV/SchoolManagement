import { NetWorkError } from "@router/components/NetWorkError";
import ErrorPage from "@router/components/ErrorPage";
import UserSignin from "@modules/Auth/Partials/UserSignin";
import { SuperAdminDashboard } from "@modules/Dashboard/SuperAdminDashboard/Partials/DashboardMainView";
import { CourseManagement } from "@modules/CourseManagement/CourseManagement";
import { ClassSchedule } from "@modules/ClassSchedule/Partials/ClassSchedule";
import { Reports } from "@modules/Reports/Partials/Reports";
import ViewStudent from "@modules/StudentsView/Partials/ViewStudents";
import { StudentModal } from "@modules/StudentsView/Partials/StudentView";
import { Students } from "@modules/Students/Students";
import { Parents } from "@modules/Parents/Parents";
import { AttendanceTabs } from "@modules/Attendance";
import { FeeManagement } from "@modules/FeeManagement/Partials/FeeManagement";
import VideoManager from "@modules/RecordedVideos/Partials/VideoManager";
import StudyMaterials from "@modules/StudyMaterial/Partials/StudyMaterial";
import { Teachers } from "@modules/Teachers/Teacher";
import { Batches } from "@modules/Batches/Batches";
import { Marks } from "@modules/Marks/Marks";

export const anonymous = [
  {
    routePath: "*", // ----------- Page Not Fonund
    Component: ErrorPage,
  },
  {
    routePath: "networkerror", // ----------- Network Error
    Component: NetWorkError,
  },
  {
    routePath: "/signin", // ----------- Signin Page
    Component: UserSignin,
  },
];

export const adminAuthenticated = [
  {
    routePath: "*", // ----------- Page Not Fonund
    Component: ErrorPage,
  },
  {
    routePath: "networkerror", // ----------- Network Error
    Component: NetWorkError,
  },
  //   {
  //   routePath: "/",
  //   Component: DashboardMain,
  // },
  {
    routePath: "/",
    Component: SuperAdminDashboard,
  },
  {
    routePath: "/students",
    Component: Students,
  },
  {
    routePath: "/viewStudents",
    Component: ViewStudent,
  },
  {
    routePath: "/studentDetails/:id",
    Component: StudentModal,
  },
  {
    routePath: "/parents",
    Component: Parents,
  },
    {
    routePath: "/teachers",
    Component: Teachers ,
  },
     {
    routePath: "/batches",
    Component: Batches ,
  },
  {
    routePath: "/attendance",
    Component: AttendanceTabs,
  },
  {
    routePath: "/courseManagement",
    Component: CourseManagement ,
  },
  {
    routePath: "/classSchedule",
    Component: ClassSchedule,
  },
  {
    routePath: "/feeManagement",
    Component: FeeManagement,
  },
  {
    routePath: "/videoManager",
    Component: VideoManager,
  },
  {
    routePath: "/studyMaterial",
    Component: StudyMaterials,
  },
    {
    routePath: "/marks",
    Component: Marks,
  },
  {
    routePath: "/reports",
    Component: Reports,
  },
];

// ---Users Routes

export const auditingAuthenticated = [
  {
    routePath: "*", // ----------- Page Not Fonund
    Component: ErrorPage,
  },
  {
    routePath: "networkerror", // ----------- Network Error
    Component: NetWorkError,
  },
];

export const regionalManagerAuthenticated = [
  {
    routePath: "*", // ----------- Page Not Fonund
    Component: ErrorPage,
  },
  {
    routePath: "networkerror", // ----------- Network Error
    Component: NetWorkError,
  },
];

export const MarketingAuthenticated = [
  {
    routePath: "*", // ----------- Page Not Fonund
    Component: ErrorPage,
  },
  {
    routePath: "networkerror", // ----------- Network Error
    Component: NetWorkError,
  },
];
