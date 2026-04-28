import {
  AiOutlineDashboard,
} from "react-icons/ai";
import {
  HiOutlineUsers,
} from "react-icons/hi";
import {
  MdTrackChanges
} from "react-icons/md";
import {
  TbReportAnalytics,
  TbUserPlus,
  TbEye,
} from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";


export const onlineMarketingItems = (collapsed) => {
  function getItem(label, key, icon, children = null, type = null) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    // Dashboard
    getItem("Dashboard", "", <AiOutlineDashboard />),

  
    // Customer & Supplier
    getItem(
      collapsed ? null : (
        <span><HiOutlineUsers style={{ marginRight: 8 }} /> Customer</span>
      ),
      "group-customer-supplier",
      null,
      null,
      "group"
    ),
    getItem("Customer", "sub1", <HiOutlineUsers />, [
      getItem("Add Customer", "AddCustomer", <TbUserPlus />),
      getItem("View Customer", "ViewCustomer", <TbEye />),
      getItem("Tracking Status", "trackingStatus", <MdTrackChanges />),

    ]),

    // Reports
    getItem(
      collapsed ? null : (
        <span><TbReportAnalytics style={{ marginRight: 8 }} /> Reports</span>
      ),
      "group-reports",
      null,
      null,
      "group"
    ),
    getItem("Report", "sub2", <TbReportAnalytics />, [
      getItem("Customer Report", "customerreport", <PiUsersFourLight />), 
    ]),

  ];

  return items;
};


export const onlineMarketingkeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9"];