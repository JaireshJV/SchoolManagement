import { NetWorkError } from "@router/components/NetWorkError";
import ErrorPage from "@router/components/ErrorPage";
import UserSignin from "@modules/Auth/Partials/UserSignin";
import ViewStudent from "@modules/Students/Partials/ViewStudents";
import { StudentModal } from "@modules/Students/Partials/StudentView";
import { SuperAdminDashboard } from "@modules/Dashboard/SuperAdminDashboard/Partials/DashboardMainView";

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
  // {
  //   routePath: "/",
  //   Component: ViewStudent,
  // },
  {
    routePath: "/viewStudents",
    Component: ViewStudent,
  },
  {
    routePath: "/studentDetails/:id",
    Component: StudentModal,
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
