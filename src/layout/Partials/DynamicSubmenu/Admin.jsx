import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BsCartPlus,
} from "react-icons/bs";
import {
  FaShoppingCart,
  FaReceipt,
} from "react-icons/fa";
import {
  HiOutlineUsers,
} from "react-icons/hi";
import {
  MdOutlineAttachMoney,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdOutlineReceiptLong,
  MdOutlineInventory2,
  MdOutlineMoneyOffCsred,
  MdReceiptLong,
  MdMenuBook,
  MdTrackChanges,
  MdRequestQuote,
  MdSpaceDashboard
} from "react-icons/md";
import {
  IoSettingsOutline,
} from "react-icons/io5";
import {
  TbReportAnalytics,
  TbUsers,
  TbUserPlus,
  TbEye,
  TbTruck,
  TbShoppingCartPlus,
} from "react-icons/tb";
import {
  RiBillLine,
  RiRefund2Line,
  RiShieldUserLine,
  RiShoppingCart2Line,
  RiTruckLine,
  RiUserReceived2Line,
} from "react-icons/ri";
import {
  LuBuilding2,
  LuUsers,
  LuRuler,
  LuPlus,
} from "react-icons/lu";
import { PiStudentFill, PiUsersFourLight } from "react-icons/pi";
import { BiCartAdd, BiCartDownload } from 'react-icons/bi';
import { GiWallet } from 'react-icons/gi';
import { FiPackage } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";


export const adminItems = (collapsed) => {
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
    getItem("Dashboard", "", <FcHome />),

    // Company
    getItem(
      collapsed ? null : (
        <span><PiStudentFill style={{ marginRight: 8 }} /> Student Details</span>
      ),
      "group-company",
      null,
      null,
      "group"
    ),
    getItem("Student", "sub1", <PiStudentFill />, [
      // getItem("View Students", "viewStudents", <TbEye />),
       getItem("Course Management", "courseManagement", <TbEye />),
    ]),
      // getItem("View Students", "viewStudents", <FaUserGroup />),

    // getItem("Stocks", "viewStudents", <MdOutlineInventory2 />),
    // getItem("Daybook", "viewDaybook", <MdMenuBook />),

    // Product
    // getItem(
    //   collapsed ? null : (
    //     <span><MdOutlineProductionQuantityLimits style={{ marginRight: 8 }} /> Product</span>
    //   ),
    //   "group-product",
    //   null,
    //   null,
    //   "group"
    // ),
    // getItem("Category", "Category", <MdOutlineCategory />),
    // getItem("Unit", "Unit", <LuRuler />),
    // getItem("Product", "viewProduct", <MdOutlineProductionQuantityLimits />),

    // Billing
    // getItem(
    //   collapsed ? null : (
    //     <span><RiBillLine style={{ marginRight: 8 }} /> Billing</span>
    //   ),
    //   "group-sales",
    //   null,
    //   null,
    //   "group"
    // ),
    // getItem("Purchase", "sub2", <RiShoppingCart2Line />, [
    //   getItem("Add Purchase", "AddPurchase", <BsCartPlus />),
    //   getItem("View Purchase", "ViewPurchase", <TbEye />),
    // ]),
    // getItem("Sale", "sub3", <FaShoppingCart />, [
    //   getItem("Add Sale", "AddSale", <TbShoppingCartPlus />),
    //   getItem("View Sale", "ViewSale", <TbEye />),
    // ]),

    // // Customer & Supplier
    // getItem(
    //   collapsed ? null : (
    //     <span><HiOutlineUsers style={{ marginRight: 8 }} /> Customer & Supplier</span>
    //   ),
    //   "group-customer-supplier",
    //   null,
    //   null,
    //   "group"
    // ),
    // getItem("Customer", "sub4", <HiOutlineUsers />, [
    //   getItem("Add Customer", "AddCustomer", <TbUserPlus />),
    //   getItem("View Customer", "ViewCustomer", <TbEye />),
    //   getItem("Tracking Status", "trackingStatus", <MdTrackChanges />),

    // ]),
    // getItem("Supplier", "OutSource", <TbTruck />),

  ];
  return items;
};


export const adminKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9"];