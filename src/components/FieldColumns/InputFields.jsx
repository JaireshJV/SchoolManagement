// Course Fields

export const courseFields = [
  {
    name: "courseName",
    label: "Course Name",
    type: "text",
    placeholder: "Enter Course Name",
  },
  {
    name: "courseCategory",
    label: "Course Category",
    type: "text",
    placeholder: "Enter Course Category",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter Course Description",
  },
  {
    name: "durationMonths",
    label: "Duration (Months)",
    type: "number",
    placeholder: "Enter Duration in Months",
  },
  {
    name: "feeAmount",
    label: "Fee Amount",
    type: "number",
    placeholder: "Enter Fee Amount",
  },
  {
    name: "mode",
    label: "Mode",
    type: "select",
    options: [
      { label: "Online", value: "online" },
      { label: "Offline", value: "offline" },
      { label: "Hybrid", value: "hybrid" },
    ],
    placeholder: "Select Mode",
  },
  {
    name: "centerName",
    label: "Center Name",
    type: "text",
    placeholder: "Enter Center Name",
  },
  {
    name: "maxStudents",
    label: "Max Students",
    type: "number",
    placeholder: "Enter Maximum Students",
  },
  //   {
  //   name: "status",
  //   label: "Status",
  //   type: "select",
  //   options: [
  //     { label: "Active", value: "active" },
  //     { label: "Inactive", value: "inactive" },
  //   ],
  // },
];

// Batch fields

export const batchFields = (options = []) => [
  {
    name: "courseId",
    label: "Course",
    type: "select",
    options: options,
    placeholder: "Select Course",
  },
  {
    name: "batchName",
    label: "Batch Name",
    type: "text",
    placeholder: "Enter Batch Name",
  },
  {
    name: "batchCode",
    label: "Batch Code",
    type: "text",
    placeholder: "Enter Batch Code",
  },
  {
    name: "timing",
    label: "Timing",
    type: "text",
    placeholder: "Enter Batch Timing (e.g. 10:00 AM - 12:00 PM)",
  },
  {
    name: "mode",
    label: "Mode",
    type: "select",
    options: [
      { label: "Online", value: "online" },
      { label: "Offline", value: "offline" },
      { label: "Hybrid", value: "hybrid" },
    ],
    placeholder: "Select Mode",
  },
  {
    name: "centerName",
    label: "Center Name",
    type: "text",
    placeholder: "Enter Center Name",
  },
  {
    name: "startDate",
    label: "Start Date",
    type: "date",
    placeholder: "Select Start Date",
  },
  {
    name: "endDate",
    label: "End Date",
    type: "date",
    placeholder: "Select End Date",
  },
  {
    name: "maxStudents",
    label: "Max Students",
    type: "number",
    placeholder: "Enter Maximum Students",
  },
];

// Student Fields

export const studentFields = (courseoption = [], batchoption = []) => [
  {
    name: "admissionNo",
    label: "ADMISSION NO",
    type: "text",
    placeholder: "Enter admission number",
  },
  {
    name: "studentName",
    label: "STUDENT NAME",
    type: "text",
    placeholder: "Enter full name",
  },
  {
    name: "gender",
    label: "GENDER",
    type: "select",
    placeholder: "Select gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Others", value: "others" },
    ],
  },
  {
    name: "dob",
    label: "DATE OF BIRTH",
    type: "date",
    placeholder: "Select date of birth",
  },
  {
    name: "mobile",
    label: "MOBILE",
    type: "number",
    placeholder: "Enter mobile number",
  },
  {
    name: "email",
    label: "EMAIL",
    type: "email",
    placeholder: "Enter email address",
  },

  // 👨‍👩‍👧 Parent Details
  {
    name: "fatherName",
    label: "FATHER NAME",
    type: "text",
    placeholder: "Enter father name",
  },
  {
    name: "motherName",
    label: "MOTHER NAME",
    type: "text",
    placeholder: "Enter mother name",
  },
  {
    name: "parentMobile",
    label: "PARENT MOBILE",
    type: "number",
    placeholder: "Enter parent mobile number",
  },
  {
    name: "parentEmail",
    label: "PARENT EMAIL",
    type: "email",
    placeholder: "Enter parent email",
  },
  {
    name: "parentProfession",
    label: "PARENT PROFESSION",
    type: "text",
    placeholder: "Enter parent profession",
  },

  // 🎓 Academic Details
  {
    name: "schoolName",
    label: "SCHOOL NAME",
    type: "text",
    placeholder: "Enter school name",
  },
  {
    name: "currentStandard",
    label: "CURRENT STANDARD",
    type: "text",
    placeholder: "Enter current class/standard",
  },
  {
    name: "board",
    label: "BOARD",
    type: "text",
    placeholder: "Enter board (CBSE/ICSE/State)",
  },
  {
    name: "medium",
    label: "MEDIUM",
    type: "text",
    placeholder: "Enter medium (English/Hindi/etc.)",
  },

  // 📍 Address
  {
    name: "address",
    label: "ADDRESS",
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    name: "district",
    label: "DISTRICT",
    type: "text",
    placeholder: "Enter district",
  },
  {
    name: "state",
    label: "STATE",
    type: "text",
    placeholder: "Enter state",
  },
  {
    name: "pincode",
    label: "PINCODE",
    type: "number",
    placeholder: "Enter pincode",
  },

  // 📚 Course & Batch (Objects)
  {
    name: "courseId",
    label: "COURSE",
    type: "select",
    placeholder: "Select course",
    options: courseoption, // 👈 fill dynamically from API
  },
  {
    name: "batchId",
    label: "BATCH",
    type: "select",
    placeholder: "Select batch",
    options: batchoption, // 👈 fill dynamically from API
  },

  // 📄 Documents
  {
    name: "profilePhoto",
    label: "PROFILE PHOTO",
    type: "file",
    placeholder: "Upload profile photo",
  },
  {
    name: "aadhaarPhoto",
    label: "AADHAAR PHOTO",
    type: "file",
    placeholder: "Upload Aadhaar photo",
  },
  {
    name: "signature",
    label: "SIGNATURE",
    type: "file",
    placeholder: "Upload signature",
  },

  // 🔄 Status
  {
    name: "status",
    label: "STATUS",
    type: "select",
    placeholder: "Select status",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
  },
];

// Teacher Fields

export const teacherFields = [
  {
    name: "teacherName",
    label: "TEACHER NAME",
    type: "text",
    placeholder: "Full name",
  },
  {
    name: "gender",
    label: "GENDER",
    type: "select",
    placeholder: "Select gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Others", value: "others" },
    ],
  },
  {
    name: "dob",
    label: "DATE OF BIRTH",
    type: "date",
  },
  {
    name: "mobile",
    label: "MOBILE",
    type: "number",
    placeholder: "Enter mobile number",
  },
  {
    name: "email",
    label: "EMAIL",
    type: "email",
    placeholder: "Enter email address",
  },
  {
    name: "qualification",
    label: "QUALIFICATION",
    type: "text",
    placeholder: "Enter qualification details",
  },
  {
    name: "experience",
    label: "EXPERIENCE",
    type: "text",
    placeholder: "Fill experience",
  },
  {
    name: "specialization",
    label: "SPECIALIZATION",
    type: "text",
    placeholder: "Describe specialization",
  },
  {
    name: "subjectName",
    label: "SUBJECT",
    type: "text",
    placeholder: "Enter subject",
  },
  {
    name: "salary",
    label: "SALARY",
    type: "number",
    placeholder: "Salary Info",
  },
  {
    name: "joiningDate",
    label: "JOINING DATE",
    type: "date",
  },
  {
    name: "address",
    label: "ADDRESS",
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    name: "district",
    label: "DISTRICT",
    type: "text",
    placeholder: "Enter district",
  },
  {
    name: "state",
    label: "STATE",
    type: "text",
    placeholder: "Enter state",
  },
  {
    name: "pincode",
    label: "PINCODE",
    type: "number",
    placeholder: "Enter pincode",
  },
  {
    name: "profilePhoto",
    label: "PROFILE PHOTO",
    type: "file",
    placeholder: "Upload profile photo",
  },
  {
    name: "aadhaarPhoto",
    label: "AADHAAR PHOTO",
    type: "file",
    placeholder: "Upload Aadhaar photo",
  },
  {
    name: "certificate",
    label: "CERTIFICATE",
    type: "file",
    placeholder: "Upload certificates",
  },
  {
    name: "status",
    label: "STATUS",
    type: "select",
    placeholder: "Select status",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
  },
];
