// (Mention API Names on page)
const GETEXAMPLE = "example/"; // ( Mention request )

// =======  Auth Start ======
const LOGIN = "login"; // ( Auth Login Post )
// =======  Auth End ======

// ======= COURSE MANAGEMENT ======
const POST_COURSE = "api/courses/save";       // (POST - Course)
const GET_COURSE = "api/courses/view";        // (GET - Courses)
const GET_COURSE_BY_ID = "api/courses";       // (GET BY ID - Course)
const PUT_COURSE = "api/courses/edit";        // (PUT - Course)
const DELETE_COURSE = "api/courses/delete";   // (DELETE - Course)

// ===== BATCHES =====
const POST_BATCH = "api/batches/save";        // (POST - Batch)
const GET_BATCHES = "api/batches/view";       // (GET - Batches)
const GET_BATCH_BY_ID = "api/batches" ;       // (GET BY ID - Batch)
const PUT_BATCH = "api/batches/edit"          // (PUT - Batch)
const DELETE_BATCH = "api/batches/delete"     // (DELETE - Batch)

// ===== STUDENTS =====
const POST_STUDENT = "api/students/save"      // (POST - Student)
const GET_STUDENTS = "api/students/view"      // (GET - Students)
const GET_STUDENT_BY_ID = "api/students/"     // (GET BY ID - Student)
const PUT_STUDENT = "api/students/update"     // (PUT - Student)
const DELETE_STUDENT = "api/students/delete"  // (DELETE - Student)

// ==== TEACHER =====
const POST_TEACHER = "api/teachers/save"      // (POST - Teacher)
const GET_TEACHERS = "api/teachers/view"      // (GET - Teachers)
const GET_TEACHER_BY_ID = "api/teachers"      // (GET BY ID - Teacher)
const PUT_TEACHER = "api/teachers/update"     // (PUT - Teacher)
const DELETE_TEACHER = "api/teachers/delete"  // (DELETE - Teacher)



export const APIURLS = {
  // Example API
  GETEXAMPLE,         //  --> Example

  // Auth
  LOGIN,              // --> Auth Login Post

  // Course
  POST_COURSE,        // --> Course Post
  GET_COURSE,         // --> Course Get
  GET_COURSE_BY_ID,   // --> Course Get By Id
  PUT_COURSE,         // --> Course Put
  DELETE_COURSE,      // --> Course Delete

  // Batch
  POST_BATCH,         // --> Batch Post
  GET_BATCHES,        // --> Batch Get
  GET_BATCH_BY_ID,    // --> Batch Get By Id
  PUT_BATCH,          // --> Batch Put
  DELETE_BATCH,       // --> Batch Delete

  // Student
  POST_STUDENT ,      // --> Student Post
  GET_STUDENTS ,      // --> Student Get
  GET_STUDENT_BY_ID , // --> Student Get By Id
  PUT_STUDENT ,       // --> Student Put
  DELETE_STUDENT ,    // --> Student Delete

  // Teacher
POST_TEACHER ,        // --> Teacher Post
GET_TEACHERS ,        // --> Teacher Get
GET_TEACHER_BY_ID ,   // --> Teacher Get By Id
PUT_TEACHER ,         // --> Teacher Put
DELETE_TEACHER ,      // --> Teacher Delete

};
