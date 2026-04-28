// (Mention API Names on page)
const GETEXAMPLE = "example/"; // ( Mention request )

// ========== Users Module API =========

const USERS_GET = "/user/user/details";
const USERS_POST = "/user/save";
const USERS_PUT = "/user/edit/";
const USERS_STATUS = "/user/user/status/"

// ========== Facility Module API =========

const FACILITY_GET = "/service/view";
const FACILITY_POST = "/service/save";
const FACILITY_PUT = "/service/edit/";

// ========== Appointment Module API =========

const APPOINTMENT_GET = "/appointment/details";
const APPOINTMENT_DEPARTMENT_GET = "/department/staff";
const APPOINTMENT_PATIENT_GET = "/patient";
const APPOINTMENT_POST = "/appointment/save";
const APPOINTMENT_PUT = "/appointment/edit";
const APPOINTMENT_SEARCH_FILTER = "/monthAndYearWiseAppointmentDetails";

//Status

const APPOINTMENT_PENDING = "/appointment/status/";
const APPOINTMENT_CONFIRMED = "/appointment/status/";

// ========== Patient Module API =========
const APICHECk = "/patient/save";

// ========== Incharge Module API =========
const DEPARTMENT_OPTION_GET = "/department";
const DEPARTMENT_ADD_POST = "/department/save";
const DEPARTMENT_EDIT_PUT = "/department/edit";

const STAFF_ADD_POST = "/staff/save";
const STAFF_OPTION_GET = "/staffDetails";
const STAFF_EDIT_PUT = "/staff/edit";
const STAFF_ACTIVE_GET = '/staff/status/'

// ========== Pharmacy Module API =========

const MANUFACTURE_ADD_POST = '/manufactured/save'
const MANUFACTURE_VIEW = '/manufactured/view'
const MANUFACTURE_EDIT_PUT = '/manufactured/edit'

// Pharmacy Billing

const PHARMACY_BILLING = '/billing/save'
const PHARMACY_BILLING_TABLE = '/billing/view'
const PHARMACY_BILLING_REPORT = '/billing/current/month'
const PHARMACY_BILLING_REPORT_POST = '/billing/report'

// =======  Auth Start ======
const LOGIN = "login"; // ( Auth Login Post)
// =======  Auth End ======

// ========== Organization Module API start =========
const ORGANIZATION_POST = "/organization/save"; //Albin
const ORGANIZATION_GET = "/organization/view"; //Albin
const ORGANIZATION_PUT = "/organization/edit/"; //Albin
// ========== Organization Module API end =========

// ========== Patient Module API start =========
const PATIENT_POST = "/patient/save"; //Albin
const PATIENT_GET = "/patient"; //Albin
const PATIENT_PUT = "/patient/edit/"; //Albin

const PATIENT_REPORT = "/count"; //Albin

const PATIENT_BILLING = "/patient/view"; // Jeffrin
// ========== Patient Module API end =========

// ========== INSURANCE provider Module API start =========
const INSURANCE_PROVIDER_POST = "/insurance/save"; //Albin
const INSURANCE_PROVIDER_GET = "/insurance/view"; //Albin
const INSURANCE_PROVIDER_PUT = "/insurance/edit/"; //Albin
// ========== INSURANCE provider Module API end =========

// ========== INSURANCE Claims Module API start =========
const INSURANCE_CLAIMS_GET = '/claims/view'

// ========== INSURANCE Claims Module API end =========


// ========== Billing Module API start =========
const BILLING_POST = "/invoice/save";
const BILLING_TABLE_VIEW_GET = "/invoice/view";
const INVOICE_SEARCH_FILTER = "/invoice/report";
const INVENTORY_REPORT_TABLE = "/inventory/current/month";
const INVENTORY_REPORT_POST = "/inventory/report";

// ========== Billing Module API end =========

const BILLING_TABLE_AUDITING_PUT = "/auditing/update/";
const BILLING_TABLE_CLAIMS_PUT = "/claims/update/";

// ========== REPORTS Module API start =========
const BILLING_REPORTS_GET = "/invoice/view"; //Albin
// ========== REPORTS Module API end =========

// ========== Auditing Module API start =========
const AUDITING_GET = "/auditing/view";//Albin
const AUDITING_SEARCH_FILTER = "/auditing/report";//Albin
const AUDITING_APPROVE = '/auditing/update/'
// ========== Auditing Module API end =========

// ========== Admin Dashboard API start =========
const GET_CARDDATA = "/main/dashboard";//Albin
const GET_MONTHLY_PATIENT = "/main/patient/month";//Albin
const GET_INSURANCE = "/main/insurance";//Albin
const GET_APPOINTMENT = "/main/appointment";//Albin
const GET_INSURANCE_CLAIM = "/main/pieChart";//Albin
const GET_FACILITIES = "/service/view";//Albin 
const GET_DOCTORS = "/main/table/staff";//Albin
const GET_APPOINTMENT_TABLE = "/main/table/currentday/appointment";//Albin
const GET_DEPARTMENTS_TABLE = "/departmentDetails";//Albin
// ========== Admin Dashboard API end =========


// ========== Claims API start =========

// ========== Auditing Dashboard API start =========
const GET_AUDITING_CARDDATA = "/auditing/count";//Albin  
const GET_AUDITING_INSCOUNT = "/auditing/insurancetype/count";//Albin   
const GET_AUDITING_INSAMOUNT = "/auditing/insurancetype/amount";
const GET_AUDITING_BILLING = "/main/table/invoice";
const GET_AUDITING_CLAIMS = "/main/table/claims";
// ========== Auditing Dashboard API end =========

// ========== healthcare Dashboard API start =========
const GET_HEALTHCARE_CARDDATA = "/claims/count";//Albin  
const GET_HEALTHCARE_CLAIMSCOUNT = "/claims/type/count";//Albin   
const GET_HEALTHCARE_TOTALCLAIMSCOUNT = "/claims/total";//Albin 
// ========== healthcare Dashboard API end =========

// ========== frontdesk Dashboard API start =========
const GET_FRONTDASH_CARDDATA = "/getPatientStaffAppointmentCount";//Albin 
const GET_FRONTDASH_APPOINTMENT = "/findCurrentMonthAppointmentDetailsByStatus"; //Albin 
const GET_FRONTDASH_PATIENT = "/getMonthWisePatientCount"; //Albin 
const GET_FRONTDASH_DEPARTMENT = "/findDepartmentWiseStaffDetails"; //Albin 
const GET_FRONTDASH_BILLCOUNT = "/findMonthWiseBillCount"; //Albin 
// ========== frontdesk Dashboard API end =========


const CLAIMS = '/claims/time/'
const CLAIMS_REPORTS_GET = '/claims/report'

// ========== Claims API end =========

// ========== Daybook API start =========

const DAYBOOK_TABLE_GET = '/daybook'


// ========== Daybook API end =========

// ========== Notification API start =========

const NOTIFICATION_GET = '/notification'
const APPOINTMENT_NOTIFICATION_GET = '/notification/appointment'
const BILLING_NOTIFICATION_GET = '/notification/biller'
const HEALTHCARE_GET = '/notification/health'

// ========== Notification API end =========



// Billing

const UNIT_POST = '/unit/save'
const UNIT_GET = '/unit/view'
const UNIT_PUT = '/unit/edit/'

// DISTRIBUTOR

const DISTRIBUTOR_GET = '/distributor/view'
const DISTRIBUTOR_POST = '/distributor/save'
const DISTRIBUTOR_PUT = '/distributor/edit/'

// MEDICATION LIST
const MANUFACTURE_POST = '/manufactured/save'
const MANUFACTURE_GET = '/manufactured/view'
const DELETE_MANUFACTURE = '/manufctured/delete'
const MEDICATION_ADD_POST = '/medication/save'
const MEDICATION_EDIT_PUT = '/medication/edit'
const MEDICATION_TABLE_GET = '/medication/view'

const INVENTORY_POST = '/inventory/save'
const INVENTORY_GET = '/inventory/view'

// PHARMACY DASHBOARD

const PHARMACY_DASHBOARD_CART = '/pharmacy/dashboard'
const PHARMACY_CURRENT_YEAR_INCOME = '/pharmacy/dashboard/income'
const PHARMACY_CURRENT_YEAR_EXPENSE = '/pharmacy/dashboard/expense'
const PHARMACY_CURRENT_YEAR_BILLCOUNT = '/pharmacy/dashboard/billCount'


// ========== Logout API start =========

const LOGOUT_GET = '/logout/'

// ========== Logout API end =========





export const APIURLS = {


  USER_ADMIN_DETAILSGET: 'user/admin/details',

  CUSTOMER_REPORT_GET: "/cus/customer/report",
  CUSTOMER_REPORT_POST: "/cus/customer/report",

  SUPPLIER_REPORT_POST: "/api/supplier/report",
  EXPENSE_REPORT_POST: "/api/expense/report",

  BILLING_REPORT_POST: "/api/supplierDetails/report",

  VOUCHER_REPORT: "api/voucher/report",
  SALE_REPORT: "api/sales/report",
  RECEIPT_REPORT:"api/receipts/report",
  PURCHASE_REPORT:"api/purchase/report",
  PRODUCT_REPORT:"api/product/report",


  // Auth
  LOGIN, // --> Auth Login Post
  GETEXAMPLE, //  --> Example

  // ============ Patient Module =========
  APICHECk,

  // ========== Incharge Module URL =========
  // -- department
  DEPARTMENT_OPTION_GET,
  DEPARTMENT_ADD_POST,
  DEPARTMENT_EDIT_PUT,

  // ========== Users Module URL =========

  USERS_GET,
  USERS_POST,
  USERS_PUT,

  // ========== facility Module URL =========

  FACILITY_GET,
  FACILITY_POST,
  FACILITY_PUT,

  // ========== Appointment Module URL =========

  APPOINTMENT_GET,
  APPOINTMENT_DEPARTMENT_GET,
  APPOINTMENT_PATIENT_GET,
  APPOINTMENT_POST,
  APPOINTMENT_PUT,
  APPOINTMENT_SEARCH_FILTER,

  //STATUS
  APPOINTMENT_PENDING,
  APPOINTMENT_CONFIRMED,

  // -- staff
  STAFF_ADD_POST,
  STAFF_OPTION_GET,
  STAFF_EDIT_PUT,

  // Auth
  LOGIN, // --> Auth Login Post
  GETEXAMPLE, //  --> Example

  // ============ Patient Module =========
  APICHECk,

  // ========== Incharge Module URL =========
  // -- department
  DEPARTMENT_OPTION_GET,
  DEPARTMENT_ADD_POST,
  DEPARTMENT_EDIT_PUT,

  // ========== Users Module URL =========

  USERS_GET,
  USERS_POST,
  USERS_PUT,
  USERS_STATUS,

  // -- staff
  STAFF_ADD_POST,
  STAFF_OPTION_GET,
  STAFF_EDIT_PUT,
  STAFF_ACTIVE_GET,

  // -- organization module
  ORGANIZATION_POST, //Albin
  ORGANIZATION_GET, //Albin
  ORGANIZATION_PUT, //Albin

  // -- patient module
  PATIENT_POST, //Albin
  PATIENT_GET, //Albin
  PATIENT_PUT, //Albin
  PATIENT_REPORT, //Albin
  PATIENT_BILLING, // Jeffrin

  // -- INSURANCE provider module
  INSURANCE_PROVIDER_POST, //Albin
  INSURANCE_PROVIDER_GET, //Albin
  INSURANCE_PROVIDER_PUT, //Albin

  // -- INSURANCE CLAIMS MODULE
  INSURANCE_CLAIMS_GET,

  // --BILLING
  BILLING_POST,
  BILLING_TABLE_VIEW_GET,

  BILLING_TABLE_AUDITING_PUT,
  BILLING_TABLE_CLAIMS_PUT,

  // -- INSURANCE provider module
  BILLING_REPORTS_GET, //Albin

  INVOICE_SEARCH_FILTER,
  INVENTORY_REPORT_TABLE,
  INVENTORY_REPORT_POST,

  // --AUDITING
  AUDITING_GET, //Albin
  AUDITING_SEARCH_FILTER, //Albin


  // --Admin Dashboard
  GET_CARDDATA, //Albin
  GET_MONTHLY_PATIENT, //Albin
  GET_INSURANCE, //Albin
  GET_APPOINTMENT, //Albin 
  GET_INSURANCE_CLAIM, //Albin
  GET_FACILITIES, //Albin
  GET_DOCTORS,  //Albin
  GET_APPOINTMENT_TABLE,  //Albin
  GET_DEPARTMENTS_TABLE,  //Albin

  // --Aditing Dashboard
  GET_AUDITING_CARDDATA, //Albin
  GET_AUDITING_INSCOUNT, //Albin
  GET_AUDITING_INSAMOUNT, //Albin
  GET_AUDITING_BILLING, //Albin
  GET_AUDITING_CLAIMS, //Albin

  // --healthcare Dashboard
  GET_HEALTHCARE_CARDDATA, //Albin
  GET_HEALTHCARE_CLAIMSCOUNT, //Albin
  GET_HEALTHCARE_TOTALCLAIMSCOUNT, //Albin

  // --frontdesk Dashboard
  GET_FRONTDASH_CARDDATA,  //Albin
  GET_FRONTDASH_APPOINTMENT, //Albin
  GET_FRONTDASH_PATIENT, //Albin
  GET_FRONTDASH_DEPARTMENT, //Albin
  GET_FRONTDASH_BILLCOUNT, //Albin


  AUDITING_APPROVE,

  // claims

  CLAIMS,
  CLAIMS_REPORTS_GET,

  //Daybook

  DAYBOOK_TABLE_GET,

  // Notification

  NOTIFICATION_GET, //Jeffrin
  APPOINTMENT_NOTIFICATION_GET, //Jeffrin
  BILLING_NOTIFICATION_GET, //Jeffrin
  HEALTHCARE_GET, //Jeffrin



  // ========== Pharmacy Module API =========

  MANUFACTURE_ADD_POST,
  MANUFACTURE_VIEW,
  MANUFACTURE_EDIT_PUT,

  // Pharmacy Billing

  PHARMACY_BILLING,
  PHARMACY_BILLING_TABLE,
  PHARMACY_BILLING_REPORT,
  PHARMACY_BILLING_REPORT_POST,


  // BILLING


  UNIT_POST,
  UNIT_GET,
  UNIT_PUT,

  // DISTRIBUTOR

  DISTRIBUTOR_GET,
  DISTRIBUTOR_POST,
  DISTRIBUTOR_PUT,

  // MEDICATION list

  MANUFACTURE_POST,
  MANUFACTURE_GET,
  DELETE_MANUFACTURE,
  MEDICATION_ADD_POST,
  MEDICATION_EDIT_PUT,
  MEDICATION_TABLE_GET,

  INVENTORY_POST,
  INVENTORY_GET,


  // PHARMACY DASHBOARD

  PHARMACY_DASHBOARD_CART,
  PHARMACY_CURRENT_YEAR_INCOME,
  PHARMACY_CURRENT_YEAR_EXPENSE,
  PHARMACY_CURRENT_YEAR_BILLCOUNT,

  // Logout

  LOGOUT_GET //Jeffrin

};
