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
<<<<<<< HEAD
=======

>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
export const batchFields = (options = []) => [
  {
    name: "courseId",
    label: "Course",
<<<<<<< HEAD
    icon: "🎓",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "select",
    options: options,
    placeholder: "Select Course",
  },
  {
    name: "batchName",
    label: "Batch Name",
<<<<<<< HEAD
    icon: "📚",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter Batch Name",
  },
  {
<<<<<<< HEAD
    name: "timing",
    label: "Timing",
    icon: "⏰",
    type: "time",
    placeholder: "Enter Batch Timing",
=======
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
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
  },
  {
    name: "mode",
    label: "Mode",
<<<<<<< HEAD
    icon: "📡",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
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
<<<<<<< HEAD
    icon: "🏢",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter Center Name",
  },
  {
    name: "startDate",
    label: "Start Date",
<<<<<<< HEAD
    icon: "📅",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "date",
    placeholder: "Select Start Date",
  },
  {
    name: "endDate",
    label: "End Date",
<<<<<<< HEAD
    icon: "📆",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "date",
    placeholder: "Select End Date",
  },
  {
    name: "maxStudents",
    label: "Max Students",
<<<<<<< HEAD
    icon: "👥",
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Enter Maximum Students",
  },
];

// Student Fields
<<<<<<< HEAD
export const studentFields = (courseoption = [], batchoption = []) => [
  {
    name: "studentName",
    label: "Student Name",
    icon: "👨‍🎓",
=======

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
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter full name",
  },
  {
    name: "gender",
<<<<<<< HEAD
    label: "Gender",
    icon: "⚧️",
=======
    label: "GENDER",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
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
<<<<<<< HEAD
    label: "Date of Birth",
    icon: "🎂",
=======
    label: "DATE OF BIRTH",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "date",
    placeholder: "Select date of birth",
  },
  {
    name: "mobile",
<<<<<<< HEAD
    label: "Mobile",
    icon: "📱",
=======
    label: "MOBILE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Enter mobile number",
  },
  {
    name: "email",
<<<<<<< HEAD
    label: "Email",
    icon: "📧",
=======
    label: "EMAIL",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "email",
    placeholder: "Enter email address",
  },

  // 👨‍👩‍👧 Parent Details
  {
    name: "fatherName",
<<<<<<< HEAD
    label: "Father Name",
    icon: "👨",
=======
    label: "FATHER NAME",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter father name",
  },
  {
    name: "motherName",
<<<<<<< HEAD
    label: "Mother Name",
    icon: "👩",
=======
    label: "MOTHER NAME",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter mother name",
  },
  {
    name: "parentMobile",
<<<<<<< HEAD
    label: "Parent Mobile",
    icon: "☎️",
=======
    label: "PARENT MOBILE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Enter parent mobile number",
  },
  {
    name: "parentEmail",
<<<<<<< HEAD
    label: "Parent Email",
    icon: "📨",
=======
    label: "PARENT EMAIL",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "email",
    placeholder: "Enter parent email",
  },
  {
    name: "parentProfession",
<<<<<<< HEAD
    label: "Parent Profession",
    icon: "💼",
=======
    label: "PARENT PROFESSION",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter parent profession",
  },

  // 🎓 Academic Details
  {
    name: "schoolName",
<<<<<<< HEAD
    label: "School Name",
    icon: "🏫",
=======
    label: "SCHOOL NAME",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter school name",
  },
  {
    name: "currentStandard",
<<<<<<< HEAD
    label: "Current Standard",
    icon: "📘",
=======
    label: "CURRENT STANDARD",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter current class/standard",
  },
  {
    name: "board",
<<<<<<< HEAD
    label: "Board",
    icon: "📚",
=======
    label: "BOARD",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter board (CBSE/ICSE/State)",
  },
  {
    name: "medium",
<<<<<<< HEAD
    label: "Medium",
    icon: "🗣️",
=======
    label: "MEDIUM",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter medium (English/Hindi/etc.)",
  },

  // 📍 Address
  {
    name: "address",
<<<<<<< HEAD
    label: "Address",
    icon: "📌",
=======
    label: "ADDRESS",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    name: "district",
<<<<<<< HEAD
    label: "District",
    icon: "🏙️",
=======
    label: "DISTRICT",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter district",
  },
  {
    name: "state",
<<<<<<< HEAD
    label: "State",
    icon: "🗺️",
=======
    label: "STATE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter state",
  },
  {
    name: "pincode",
<<<<<<< HEAD
    label: "Pincode",
    icon: "📮",
=======
    label: "PINCODE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Enter pincode",
  },

<<<<<<< HEAD
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
=======
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
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
  },

  // 📄 Documents
  {
    name: "profilePhoto",
<<<<<<< HEAD
    label: "Profile Photo",
    icon: "🖼️",
=======
    label: "PROFILE PHOTO",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "file",
    placeholder: "Upload profile photo",
  },
  {
    name: "aadhaarPhoto",
<<<<<<< HEAD
    label: "Aadhaar Photo",
    icon: "🪪",
=======
    label: "AADHAAR PHOTO",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "file",
    placeholder: "Upload Aadhaar photo",
  },
  {
    name: "signature",
<<<<<<< HEAD
    label: "Signature",
    icon: "✍️",
=======
    label: "SIGNATURE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "file",
    placeholder: "Upload signature",
  },

  // 🔄 Status
<<<<<<< HEAD
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
=======
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
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Full name",
  },
  {
    name: "gender",
<<<<<<< HEAD
    label: "Gender",
    icon: "⚧️",
=======
    label: "GENDER",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
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
<<<<<<< HEAD
    label: "Date of Birth",
    icon: "🎂",
=======
    label: "DATE OF BIRTH",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "date",
  },
  {
    name: "mobile",
<<<<<<< HEAD
    label: "Mobile",
    icon: "📱",
=======
    label: "MOBILE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Enter mobile number",
  },
  {
    name: "email",
<<<<<<< HEAD
    label: "Email",
    icon: "📧",
=======
    label: "EMAIL",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "email",
    placeholder: "Enter email address",
  },
  {
    name: "qualification",
<<<<<<< HEAD
    label: "Qualification",
    icon: "🎓",
=======
    label: "QUALIFICATION",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter qualification details",
  },
  {
    name: "experience",
<<<<<<< HEAD
    label: "Experience",
    icon: "💼",
=======
    label: "EXPERIENCE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Fill experience",
  },
  {
    name: "specialization",
<<<<<<< HEAD
    label: "Specialization",
    icon: "🧠",
=======
    label: "SPECIALIZATION",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Describe specialization",
  },
  {
    name: "subjectName",
<<<<<<< HEAD
    label: "Subject",
    icon: "📚",
=======
    label: "SUBJECT",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter subject",
  },
  {
    name: "salary",
<<<<<<< HEAD
    label: "Salary",
    icon: "💰",
=======
    label: "SALARY",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Salary Info",
  },
  {
    name: "joiningDate",
<<<<<<< HEAD
    label: "Joining Date",
    icon: "📅",
=======
    label: "JOINING DATE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "date",
  },
  {
    name: "address",
<<<<<<< HEAD
    label: "Address",
    icon: "📌",
=======
    label: "ADDRESS",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "textarea",
    placeholder: "Enter full address",
  },
  {
    name: "district",
<<<<<<< HEAD
    label: "District",
    icon: "🏙️",
=======
    label: "DISTRICT",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter district",
  },
  {
    name: "state",
<<<<<<< HEAD
    label: "State",
    icon: "🗺️",
=======
    label: "STATE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "text",
    placeholder: "Enter state",
  },
  {
    name: "pincode",
<<<<<<< HEAD
    label: "Pincode",
    icon: "📮",
=======
    label: "PINCODE",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "number",
    placeholder: "Enter pincode",
  },
  {
<<<<<<< HEAD
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
=======
    name: "profilePhoto",
    label: "PROFILE PHOTO",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "file",
    placeholder: "Upload profile photo",
  },
  {
    name: "aadhaarPhoto",
<<<<<<< HEAD
    label: "Aadhaar Photo",
    icon: "🪪",
=======
    label: "AADHAAR PHOTO",
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
    type: "file",
    placeholder: "Upload Aadhaar photo",
  },
  {
    name: "certificate",
<<<<<<< HEAD
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
=======
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
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
  },
];
