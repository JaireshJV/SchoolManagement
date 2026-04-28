import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BsPersonPlus,
  BsBuilding,
  BsCart3,
  BsCartPlus,
} from "react-icons/bs";
import {
  FaFileInvoiceDollar,
  FaShoppingCart,
  FaShoppingBag,
  FaUniversity,
  FaReceipt,
  FaExchangeAlt
} from "react-icons/fa";
import {
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import {
  MdOutlineBusinessCenter,
  MdOutlineAttachMoney,
  MdInventory2,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdOutlineShoppingCart,
  MdOutlineReceiptLong,
  MdOutlineInventory2,
  MdOutlineMoneyOffCsred,
  MdReceiptLong,
  MdMenuBook,
  MdTrackChanges,
  MdRequestQuote
} from "react-icons/md";
import {
  IoSettingsOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import {
  TbReportAnalytics,
  TbUsers,
  TbUserPlus,
  TbEye,
  TbReceipt,
  TbTruck,
  TbShoppingCartPlus,
} from "react-icons/tb";
import {
  RiBillLine,
  RiFileAddLine,
  RiFileChartLine,
  RiRefund2Line,
  RiShieldUserLine,
  RiShoppingCart2Line,
  RiTruckLine,
  RiUserReceived2Line,
} from "react-icons/ri";
import {
  LuSettings2,
  LuBuilding2,
  LuUsers,
  LuRuler,
  LuPlus,
} from "react-icons/lu";
import { PiUsersFourLight } from "react-icons/pi";
import { BiCartAdd, BiCartDownload } from 'react-icons/bi';
import { GiWallet } from 'react-icons/gi';
import { FiPackage } from "react-icons/fi";


export const managerItems = (collapsed) => {
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

    // Company
    getItem(
      collapsed ? null : (
        <span><LuBuilding2 style={{ marginRight: 8 }} /> Company Details</span>
      ),
      "group-company",
      null,
      null,
      "group"
    ),
    getItem("Company", "sub1", <LuBuilding2 />, [
      getItem("Add Company", "AddCompany", <LuPlus />),
      getItem("View Company", "ViewCompanyDetails", <TbEye />),
    ]),
    getItem("Stocks", "viewStocks", <MdOutlineInventory2 />),
    getItem("Daybook", "viewDaybook", <MdMenuBook />),

    // Product
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

    // Customer & Supplier
    getItem(
      collapsed ? null : (
        <span><HiOutlineUsers style={{ marginRight: 8 }} /> Customer & Supplier</span>
      ),
      "group-customer-supplier",
      null,
      null,
      "group"
    ),
    getItem("Customer", "sub4", <HiOutlineUsers />, [
      getItem("Add Customer", "AddCustomer", <TbUserPlus />),
      getItem("View Customer", "ViewCustomer", <TbEye />),
      getItem("Tracking Status", "trackingStatus", <MdTrackChanges />),

    ]),
    getItem("Supplier", "OutSource", <TbTruck />),

    // Financials
    getItem(
      collapsed ? null : (
        <span><MdOutlineAttachMoney style={{ marginRight: 8 }} /> Financials</span>
      ),
      "group-financials",
      null,
      null,
      "group"
    ),
    getItem("Expense", "sub5", <MdOutlineAttachMoney />, [
      getItem("Add Expense", "AddExpense", <LuPlus />),
      getItem("View Expense", "ViewExpense", <TbEye />),
    ]),

    // Return & Payments
    getItem(
      collapsed ? null : (
        <span><RiTruckLine style={{ marginRight: 8 }} /> Return & Payments</span>
      ),
      "group-returns",
      null,
      null,
      "group"
    ),
    // getItem("Bank", "sub6", <TbReportAnalytics />, [
    //   getItem("Add Bank", "addBank", <FaUniversity />),
    //   getItem("Transactions", "Transactions", <FaExchangeAlt />),
    // ]),
    getItem("Voucher", "addVoucher", <MdOutlineReceiptLong />),
    getItem("Receipt", "addReceipt", <FaReceipt />),

    getItem("Return Payment", "sub6", <RiRefund2Line />, [
      getItem("Sale", "saleReturnPay", <AiOutlineShoppingCart />),
      getItem("Purchase", "purchaseReturnPay", <FiPackage />),
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
    getItem("Report", "sub7", <TbReportAnalytics />, [
      getItem("Customer Report", "customerreport", <PiUsersFourLight />),
      getItem("Supplier Report", "supplierreport", <RiUserReceived2Line />),
      getItem("Expense Report", "Expensereport", <MdOutlineMoneyOffCsred />),
      getItem("Product Report", "Productreport", <MdOutlineInventory2 />),
      getItem("Sale Report", "Salereport", <BiCartDownload />),
      getItem("Purchase Report", "Purchasereport", <BiCartAdd />),
      getItem("Voucher Report", "Voucherreport", <GiWallet />),
      getItem("Receipt Report", "Receiptreport", <MdReceiptLong />),

      // getItem("Billing Report", "BillingReport", <RiFileChartLine />),
    ]),
    // Member
    getItem(
      collapsed ? null : (
        <span><LuUsers style={{ marginRight: 8 }} />Employee</span>
      ),
      "group-member",
      null,
      null,
      "group"
    ),
    getItem("Employee", "viewEmployee", <HiOutlineUsers />),
    getItem("Designation", "viewDesignation", <RiShieldUserLine />),
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
    getItem("Quotation", "sub8", <MdRequestQuote />, [
      getItem("Customer Quotation", "customerQuotation", <HiOutlineUsers />),
      getItem("Supplier Quotation", "supplierQuotation", <TbTruck />),
      getItem("Sale Quotation", "viewSalesQuotation", <FaShoppingCart />),
      getItem("Purchase Quotation", "viewPurchaseQuotation", <RiShoppingCart2Line />),
    ]),

    // System Settings
    // getItem(
    //   collapsed ? null : (
    //     <span><IoSettingsOutline style={{ marginRight: 8 }} /> System Settings</span>
    //   ),
    //   "group-settings",
    //   null,
    //   null,
    //   "group"
    // ),
    // getItem("Settings", "sub8", <IoSettingsOutline />, [
    //   getItem("Manager", "managerTable", <TbUsers />),

    // ]),

    //  getItem("Billing", "sub4", <RiShieldUserLine />, [
    //   getItem("Item", "itemlist", <RiShieldUserLine />),
    //   getItem("Add Billing", "billing", <RiShieldUserLine />),
    //   getItem("Viewbill", "viewbill", <RiShieldUserLine />),
    // ]),

  ];

  return items;
};


export const managerkeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9"];