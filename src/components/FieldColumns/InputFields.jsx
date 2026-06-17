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
    icon: "🎓",
    type: "select",
    options: options,
    placeholder: "Select Course",
  },
  {
    name: "batchName",
    label: "Batch Name",
    icon: "📚",
    type: "text",
    placeholder: "Enter Batch Name",
  },
  {
    name: "timing",
    label: "Timing",
    icon: "⏰",
    type: "time",
    placeholder: "Enter Batch Timing",
  },
  {
    name: "mode",
    label: "Mode",
    icon: "📡",
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
    icon: "🏢",
    type: "text",
    placeholder: "Enter Center Name",
  },
  {
    name: "startDate",
    label: "Start Date",
    icon: "📅",
    type: "date",
    placeholder: "Select Start Date",
  },
  {
    name: "endDate",
    label: "End Date",
    icon: "📆",
    type: "date",
    placeholder: "Select End Date",
  },
  {
    name: "maxStudents",
    label: "Max Students",
    icon: "👥",
    type: "number",
    placeholder: "Enter Maximum Students",
  },
];

// Student Fields
export const studentFields = (courseoption = [], batchoption = []) => [
  {
    name: "studentName",
    label: "Student Name",
    icon: "👨‍🎓",
    type: "text",
    placeholder: "Enter full name",
  },
  {
    name: "gender",
    label: "Gender",
    icon: "⚧️",
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
    label: "Date of Birth",
    icon: "🎂",
    type: "date",
    placeholder: "Select date of birth",
  },
  {
    name: "mobile",
    label: "Mobile",
    icon: "📱",
    type: "number",
    placeholder: "Enter mobile number",
  },
  {
    name: "email",
    label: "Email",
    icon: "📧",
    type: "email",
    placeholder: "Enter email address",
  },

  // 👨‍👩‍👧 Parent Details
  {
    name: "fatherName",
    label: "Father Name",
    icon: "👨",
    type: "text",
    placeholder: "Enter father name",
  },
  {
    name: "motherName",
    label: "Mother Name",
    icon: "👩",
    type: "text",
    placeholder: "Enter mother name",
  },
  {
    name: "parentMobile",
    label: "Parent Mobile",
    icon: "☎️",
    type: "number",
    placeholder: "Enter parent mobile number",
  },
  {
    name: "parentEmail",
    label: "Parent Email",
    icon: "📨",
    type: "email",
    placeholder: "Enter parent email",
  },
  {
    name: "parentProfession",
    label: "Parent Profession",
    icon: "💼",
    type: "text",
    placeholder: "Enter parent profession",
  },

  // 🎓 Academic Details
  {
    name: "schoolName",
    label: "School Name",
    icon: "🏫",
    type: "text",
    placeholder: "Enter school name",
  },
  {
    name: "currentStandard",
    label: "Current Standard",
    icon: "📘",
    type: "text",
    placeholder: "Enter current class/standard",
  },
  {
    name: "board",
    label: "Board",
    icon: "📚",
    type: "text",
    placeholder: "Enter board (CBSE/ICSE/State)",
  },
  {
    name: "medium",
    label: "Medium",
    icon: "🗣️",
    type: "text",
    placeholder: "Enter medium (English/Hindi/etc.)",
  },

  // 📍 Address
  {
    name: "address",
    label: "Address",
    icon: "📌",
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    name: "district",
    label: "District",
    icon: "🏙️",
    type: "text",
    placeholder: "Enter district",
  },
  {
    name: "state",
    label: "State",
    icon: "🗺️",
    type: "text",
    placeholder: "Enter state",
  },
  {
    name: "pincode",
    label: "Pincode",
    icon: "📮",
    type: "number",
    placeholder: "Enter pincode",
  },

  // 📚 Course & Batch
  {
    name: "courseId",
    label: "Course",
    icon: "🎓",
    type: "select",
    placeholder: "Select course",
    options: courseoption,
  },
  {
    name: "batchId",
    label: "Batch",
    icon: "🧑‍🏫",
    type: "select",
    placeholder: "Select batch",
    options: batchoption,
  },

  // 📄 Documents
  {
    name: "profilePhoto",
    label: "Profile Photo",
    icon: "🖼️",
    type: "file",
    placeholder: "Upload profile photo",
  },
  {
    name: "aadhaarPhoto",
    label: "Aadhaar Photo",
    icon: "🪪",
    type: "file",
    placeholder: "Upload Aadhaar photo",
  },
  {
    name: "signature",
    label: "Signature",
    icon: "✍️",
    type: "file",
    placeholder: "Upload signature",
  },

  // 🔄 Status
  // {
  //   name: "status",
  //   label: "Status",
  //   icon: "✅",
  //   type: "select",
  //   placeholder: "Select status",
  //   options: [
  //     { label: "Active", value: "Active" },
  //     { label: "Inactive", value: "Inactive" },
  //   ],
  // },
];

// Teacher Fields
export const teacherFields = [
  {
    name: "teacherName",
    label: "Teacher Name",
    icon: "👨‍🏫",
    type: "text",
    placeholder: "Full name",
  },
  {
    name: "gender",
    label: "Gender",
    icon: "⚧️",
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
    label: "Date of Birth",
    icon: "🎂",
    type: "date",
  },
  {
    name: "mobile",
    label: "Mobile",
    icon: "📱",
    type: "number",
    placeholder: "Enter mobile number",
  },
  {
    name: "email",
    label: "Email",
    icon: "📧",
    type: "email",
    placeholder: "Enter email address",
  },
  {
    name: "qualification",
    label: "Qualification",
    icon: "🎓",
    type: "text",
    placeholder: "Enter qualification details",
  },
  {
    name: "experience",
    label: "Experience",
    icon: "💼",
    type: "text",
    placeholder: "Fill experience",
  },
  {
    name: "specialization",
    label: "Specialization",
    icon: "🧠",
    type: "text",
    placeholder: "Describe specialization",
  },
  {
    name: "subjectName",
    label: "Subject",
    icon: "📚",
    type: "text",
    placeholder: "Enter subject",
  },
  {
    name: "salary",
    label: "Salary",
    icon: "💰",
    type: "number",
    placeholder: "Salary Info",
  },
  {
    name: "joiningDate",
    label: "Joining Date",
    icon: "📅",
    type: "date",
  },
  {
    name: "address",
    label: "Address",
    icon: "📌",
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    name: "district",
    label: "District",
    icon: "🏙️",
    type: "text",
    placeholder: "Enter district",
  },
  {
    name: "state",
    label: "State",
    icon: "🗺️",
    type: "text",
    placeholder: "Enter state",
  },
  {
    name: "pincode",
    label: "Pincode",
    icon: "📮",
    type: "number",
    placeholder: "Enter pincode",
  },
  {
    name: "password",
    label: "Password",
    icon: "📮",
    type: "password",
    placeholder: "Enter Password",
  },
  {
    name: "profilePhoto",
    label: "Profile Photo",
    icon: "🖼️",
    type: "file",
    placeholder: "Upload profile photo",
  },
  {
    name: "aadhaarPhoto",
    label: "Aadhaar Photo",
    icon: "🪪",
    type: "file",
    placeholder: "Upload Aadhaar photo",
  },
  {
    name: "certificate",
    label: "Certificate",
    icon: "📄",
    type: "file",
    placeholder: "Upload certificates",
  },
];

// Subject Field

export const subjectFields = [
  {
    name: "subjectName",
    label: "Subject Name",
    type: "text",
    placeholder: "Enter Subject Name",
  },
];

// Chapter Field

export const chapterFields = (subjectOptions = []) => [
  {
    name: "subjectId",
    label: "Subject Name",
    type: "select",
    placeholder: "Enter Subject Name",
    options: subjectOptions,
  },
  {
    name: "chapterName",
    label: "Chapter Name",
    type: "text",
    placeholder: "Enter Chapter Name",
  },
];

// Topic Field

export const topicFields = (chapterOptions = []) => [
  {
    name: "chapterId",
    label: "Chapter Name",
    type: "select",
    placeholder: "Enter Chapter Name",
    options: chapterOptions,
  },
  {
    name: "topicName",
    label: "Topic Name",
    type: "text",
    placeholder: "Enter Topic Name",
  },
];

// Study Material Field

export const studyMaterialFields = (
  courseOptions = [],
  subjectOptions = [],
  chapterOptions = [],
  topicOptions = [],
) => [
  {
    name: "courseId",
    label: "Course Name",
    type: "select",
    placeholder: "Select Course Name",
    options: courseOptions,
  },
  {
    name: "subjectId",
    label: "Subject Name",
    type: "select",
    placeholder: "Select Subject Name",
    options: subjectOptions,
  },
  {
    name: "chapterId",
    label: "Chapter Name",
    type: "select",
    placeholder: "Select Chapter Name",
    options: chapterOptions,
  },
  {
    name: "topicId",
    label: "Topic Name",
    type: "select",
    placeholder: "Select Topic Name",
    options: topicOptions,
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter Title",
  },
  {
    name: "description",
    label: "Description",
    type: "text-area",
    placeholder: "Enter Description",
  },
  {
    name: "fileUrl",
    label: "File",
    icon: "🖼️",
    type: "file",
    placeholder: "Upload file",
    accept: ".mp4,.mov,.avi,.mkv",
  },
];

// Exam Field

export const examFields = (
  courseOptions = [],
  batchOptions = [],
  subjectOptions = [],
) => [
  {
    name: "courseId",
    label: "Course Name",
    type: "select",
    placeholder: "Select Course Name",
    options: courseOptions,
  },
  {
    name: "batchId",
    label: "Batch Name",
    type: "select",
    placeholder: "Select Batch Name",
    options: batchOptions,
  },
  {
    name: "subjectName",
    label: "Subject Name",
    type: "select",
    placeholder: "Select Subject Name",
    options: subjectOptions,
  },
  {
    name: "examName",
    label: "Exam Name",
    type: "text",
    placeholder: "Enter Exam Name",
  },
  {
    name: "examType",
    label: "Exam Type",
    type: "text",
    placeholder: "Enter Exam Type",
  },
  {
    name: "examDate",
    label: "Exam Date",
    type: "date",
    placeholder: "Enter Exam Date",
  },
  {
    name: "startTime",
    label: "Start Time",
    type: "time",
    placeholder: "Enter Start Time",
  },
  {
    name: "endTime",
    label: "End Time",
    type: "time",
    placeholder: "Enter End Time",
  },
  {
    name: "totalMarks",
    label: "Total Marks",
    type: "number",
    placeholder: "Enter Total Marks",
  },
];

// Franchise Field

export const franchiseFields = [
  {
    name: "franchiseName",
    label: "Franchise Name",
    type: "text",
    placeholder: "Enter Franchise Name",
  },
  {
    name: "branchName",
    label: "Branch Name",
    type: "text",
    placeholder: "Enter Branch Name",
  },
  {
    name: "ownerName",
    label: "Owner Name",
    type: "text",
    placeholder: "Enter Owner Name",
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    type: "number",
    placeholder: "Enter Mobile Number",
  },
  {
    name: "alternateMobileNumber",
    label: "Alternative Mobile Number",
    type: "number",
    placeholder: "Enter Alternative Mobile Number",
  },
  {
    name: "emailId",
    label: "Email Id",
    type: "number",
    placeholder: "Enter Email Id",
  },
  {
    name: "addressLine",
    label: "Address",
    type: "textarea",
    placeholder: "Enter Address",
  },
  {
    name: "area",
    label: "Area",
    type: "text",
    placeholder: "Enter Area",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "Enter City",
  },
  {
    name: "district",
    label: "District",
    type: "text",
    placeholder: "Enter District",
  },
  {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "Enter State",
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "Enter Country",
  },
  {
    name: "pincode",
    label: "Pincode",
    type: "number",
    placeholder: "Enter Pincode",
  },
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter Username",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
  },
];
