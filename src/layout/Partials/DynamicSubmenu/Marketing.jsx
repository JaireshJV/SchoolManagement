import {
  AiOutlineDashboard,
} from "react-icons/ai";
import {
  HiOutlineUsers,
} from "react-icons/hi";
import {
  MdOutlineCategory,
  MdOutlineProductionQuantityLimits,
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
import { PiUsersFourLight } from "react-icons/pi";
import { LuRuler } from "react-icons/lu";
import { RiBillLine, RiShoppingCart2Line } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


export const marketingItems = (collapsed) => {
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
    getItem(
      collapsed ? null : (
        <span><MdOutlineProductionQuantityLimits style={{ marginRight: 8 }} /> Product</span>
      ),
      "group-product",
      null,
      null,
      "group"
    ),
    getItem("Category", "Category", <MdOutlineCategory />),
    getItem("Unit", "Unit", <LuRuler />),
    getItem("Product", "viewProduct", <MdOutlineProductionQuantityLimits />),
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
    getItem("Purchase", "sub2", <RiShoppingCart2Line />, [
      getItem("Add Purchase", "AddPurchase", <BsCartPlus />),
      getItem("View Purchase", "ViewPurchase", <TbEye />),
    ]),
    getItem("Sale", "sub3", <FaShoppingCart />, [
      getItem("Add Sale", "AddSale", <TbShoppingCartPlus />),
      getItem("View Sale", "ViewSale", <TbEye />),
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
    ]),

  ];

  return items;
};


export const marketingkeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9"];