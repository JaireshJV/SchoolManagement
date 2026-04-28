import {
  AiOutlineDashboard,
} from "react-icons/ai";
import {
  BsCartPlus,
} from "react-icons/bs";
import {
  FaShoppingCart,
} from "react-icons/fa";
import {
  HiOutlineUsers,
} from "react-icons/hi";
import {
  MdRequestQuote,
  MdTrackChanges
} from "react-icons/md";
import {
  TbReportAnalytics,
  TbUserPlus,
  TbEye,
  TbShoppingCartPlus,
  TbTruck,
} from "react-icons/tb";
import {
  RiBillLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { PiUsersFourLight } from "react-icons/pi";
import { BiCartAdd, BiCartDownload } from 'react-icons/bi';



export const regionalManagerItems = (collapsed) => {
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

    // Billing
    getItem(
      collapsed ? null : (
        <span><RiBillLine style={{ marginRight: 8 }} /> Billing</span>
      ),
      "group-sales",
      null,
      null,
      "group"
    ),
    getItem("Purchase", "sub1", <RiShoppingCart2Line />, [
      getItem("Add Purchase", "AddPurchase", <BsCartPlus />),
      getItem("View Purchase", "ViewPurchase", <TbEye />),
    ]),
    getItem("Sale", "sub2", <FaShoppingCart />, [
      getItem("Add Sale", "AddSale", <TbShoppingCartPlus />),
      getItem("View Sale", "ViewSale", <TbEye />),
    ]),

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
    getItem("Customer", "sub3", <HiOutlineUsers />, [
      getItem("Add Customer", "AddCustomer", <TbUserPlus />),
      getItem("View Customer", "ViewCustomer", <TbEye />),
      getItem("Tracking Status", "trackingStatus", <MdTrackChanges />),

    ]),
    // Quotation
    getItem(
      collapsed ? null : (
        <span><MdRequestQuote style={{ marginRight: 8 }} /> Quotation</span>
      ),
      "group-quotation",
      null,
      null,
      "group"
    ),
    getItem("Quotation", "sub4", <MdRequestQuote />, [
      getItem("Customer Quotation", "customerQuotation", <HiOutlineUsers />),
      getItem("Supplier Quotation", "supplierQuotation", <TbTruck />),
      getItem("Sale Quotation", "viewSalesQuotation", <FaShoppingCart />),
      getItem("Purchase Quotation", "viewPurchaseQuotation", <RiShoppingCart2Line />),

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
    getItem("Report", "sub5", <TbReportAnalytics />, [
      getItem("Customer Report", "customerreport", <PiUsersFourLight />),
      getItem("Sale Report", "Salereport", <BiCartDownload />),
      getItem("Purchase Report", "Purchasereport", <BiCartAdd />),

    ]),

  ];

  return items;
};


export const regionalManagerkeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9"];