// Student Fields

export const studentFields = [
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
      { label: "Other", value: "other" },
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
    name: "course",
    label: "COURSE",
    type: "select",
    placeholder: "Select course",
    options: [], // 👈 fill dynamically from API
  },
  {
    name: "batch",
    label: "BATCH",
    type: "select",
    placeholder: "Select batch",
    options: [], // 👈 fill dynamically from API
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
    placeholder:"Select status",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
  },
];