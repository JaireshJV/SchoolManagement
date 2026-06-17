// (Mention API Names on page)
const GETEXAMPLE = "example/"; // ( Mention request )

// =======  Auth Start ======
const LOGIN = "login"; // ( Auth Login Post )
// =======  Auth End ======

// ======= COURSE MANAGEMENT ======
<<<<<<< HEAD
const POST_COURSE = "api/courses/save"; // (POST - Course)
const GET_COURSE = "api/courses/view"; // (GET - Courses)
const GET_COURSE_BY_ID = "api/courses"; // (GET BY ID - Course)
const PUT_COURSE = "api/courses/edit"; // (PUT - Course)
const DELETE_COURSE = "api/courses/delete"; // (DELETE - Course)

// ===== BATCHES =====
const POST_BATCH = "api/batches/save"; // (POST - Batch)
const GET_BATCHES = "api/batches/view"; // (GET - Batches)
const GET_BATCH_BY_ID = "api/batches"; // (GET BY ID - Batch)
const PUT_BATCH = "api/batches/edit"; // (PUT - Batch)
const DELETE_BATCH = "api/batches/delete"; // (DELETE - Batch)
=======
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

>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603

// ===== STUDENTS =====
const POST_STUDENT = "api/students/save"; // (POST - Student)
const GET_STUDENTS = "api/students/view"; // (GET - Students)
const GET_STUDENT_BY_ID = "api/students/"; // (GET BY ID - Student)
const PUT_STUDENT = "api/students/update"; // (PUT - Student)
const DELETE_STUDENT = "api/students/delete"; // (DELETE - Student)

// ===== TEACHER =====
const POST_TEACHER = "api/teachers/save"; // (POST - Teacher)
const GET_TEACHERS = "api/teachers/view"; // (GET - Teachers)
const GET_TEACHER_BY_ID = "api/teachers"; // (GET BY ID - Teacher)
const PUT_TEACHER = "api/teachers/update"; // (PUT - Teacher)
const DELETE_TEACHER = "api/teachers/delete"; // (DELETE - Teacher)

// ===== SUBJECTS =====
const POST_SUBJECT = "api/question-bank/subjects/save"; // (POST - Subject)
const GET_SUBJECTS = "api/question-bank/subjects/view"; // (GET - Subjects)
const PUT_SUBJECT = "api/question-bank/subjects/edit"; // (PUT - Subject)
const DELETE_SUBJECT = "api/question-bank/subjects/delete"; // (DELETE - Subject) [Not working] ;

// ===== CHAPTERS =====
const POST_CHAPTER = "api/question-bank/chapters/save"; // (POST - Chapter)
const GET_CHAPTERS = "api/question-bank/chapters/view"; // (GET - Chapters) ;
const PUT_CHAPTER = "api/question-bank/chapters/edit"; // (PUT - Chapter)
const DELETE_CHAPTER = "api/question-bank/chapters/delete"; // (DELETE - Chapter)[Not working] ;

// ===== TOPICS =====
const POST_TOPIC = "api/question-bank/topics/save"; // (POST - Topic)
const GET_TOPICS = "api/question-bank/topics/view"; // (GET - Topics) [Not working] ;
const PUT_TOPIC = "api/question-bank/topics/edit"; // (PUT - Topic)
const DELETE_TOPIC = "api/question-bank/topics/delete"; // (DELETE - Topic) [Not working] ;

// ===== STUDY MATERIALS =====
const POST_STUDY_MATERIAL = "api/study-materials/save" // (POST - Study Material) ;
const GET_STUDY_MATERIALS = "api/study-materials"        // (GET - Study Material) ;
const PUT_STUDY_MATERIAL = "api/study-materials/edit"  // (PUT - Study Material) ;
const DELETE_STUDY_MATERIAL = "api/study-materials"    // (DELETE - Study Material) ;

// ===== RECORDED VIDEOS =====
const POST_RECORDED_VIDEO = "api/recorded-videos/save"  // (POST - Recorded Video)  ;
const GET_RECORDED_VIDEOS = "api/recorded-videos"       // (GET - Recoded Video)  ;
const PATCH_RECORDED_VIDEO = "api/recorded-videos" // (PATCH - Recorded Video) ;
const DELETE_RECORDED_VIDEO = "api/recorded-videos/delete" // (DELETE - Recorded Video) ;

// ===== QUESTION BANK =====
const POST_QUESTION_BANK = "api/question-bank/questions/save" // (POST - Question Bank) ;
const GET_QUESTION_BANK = "api/question-bank/questions/view"  // (GET - Question Bank) ;
const DELETE_QUESTION_BANK = "api/question-bank/questions/delete" // (DELETE - Question Bank) ;

// ===== EXAM =====
const POST_EXAM = "api/exams/save"      // (POST - Exam) ;
const GET_EXAM = "api/exams/view"       // (GET - Exam) ;
const PUT_EXAM = "api/exams/update"     // (PUT - Exam) ;
const DELETE_EXAM = "api/exams/delete"  // (DELETE - Exam) ;

// ===== FRANCHISE =====
const POST_FRANCHISE = "api/franchise/create" // (POST - Franchise) ;
const GET_FRANCHISE = "api/franchise/all"     // (GET - Franchise) ;
const PUT_FRANCHISE = "api/franchise/update"     // (PUT - Franchise) ;
const DELETE_FRANCHISE = "api/franchise/delete" // (DELETE - Franchise) ;

export const APIURLS = {
  // Example API
  GETEXAMPLE, //  --> Example

  // Auth
<<<<<<< HEAD
  LOGIN, // --> Auth Login Post

  // Course
  POST_COURSE, // --> Course Post
  GET_COURSE, // --> Course Get
  GET_COURSE_BY_ID, // --> Course Get By Id
  PUT_COURSE, // --> Course Put
  DELETE_COURSE, // --> Course Delete

  // Batch
  POST_BATCH, // --> Batch Post
  GET_BATCHES, // --> Batch Get
  GET_BATCH_BY_ID, // --> Batch Get By Id
  PUT_BATCH, // --> Batch Put
  DELETE_BATCH, // --> Batch Delete

  // Student
  POST_STUDENT, // --> Student Post
  GET_STUDENTS, // --> Student Get
  GET_STUDENT_BY_ID, // --> Student Get By Id
  PUT_STUDENT, // --> Student Put
  DELETE_STUDENT, // --> Student Delete

  // Teacher
  POST_TEACHER, // --> Teacher Post
  GET_TEACHERS, // --> Teacher Get
  GET_TEACHER_BY_ID, // --> Teacher Get By Id
  PUT_TEACHER, // --> Teacher Put
  DELETE_TEACHER, // --> Teacher Delete

  // Subject
  POST_SUBJECT, // --> Subject Post
  GET_SUBJECTS, // --> Subject Get
  PUT_SUBJECT,  // --> Subject Put
  DELETE_SUBJECT,  // --> Subject Delete
=======
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
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603

  // Chapter
  POST_CHAPTER, // --> Chapter Post 
  GET_CHAPTERS, // --> Chapter Get
  PUT_CHAPTER,  // --> Chapter Put
  DELETE_CHAPTER, // --> Chapter Delete

  // Topic
  POST_TOPIC,  // --> Topic Post
  GET_TOPICS,  // --> Topic Get
  PUT_TOPIC,   // --> Topic Put
  DELETE_TOPIC, // --> Topic Delete

  // Study Material
  POST_STUDY_MATERIAL,  // --> Study Material Post
  GET_STUDY_MATERIALS,   // --> Study Material Get
  PUT_STUDY_MATERIAL,   // --> Study Material Put
  DELETE_STUDY_MATERIAL, // --> Study Material Delete

  // Recorded Video 
  POST_RECORDED_VIDEO,   // --> Recorded Video Post
  GET_RECORDED_VIDEOS,   // --> Recorded Video Get
  PATCH_RECORDED_VIDEO, // --> Record Video Patch
  DELETE_RECORDED_VIDEO, // --> Record Video Delete

  // Question Bank
  POST_QUESTION_BANK,   // --> Question Bank Post
  GET_QUESTION_BANK,    // --> Question Bank Get
  DELETE_QUESTION_BANK, // --> Question Bank Delete

  // Exam
  POST_EXAM,            // --> Exam Post
  GET_EXAM,             // --> Exam Get
  PUT_EXAM,             // --> Exam Put
  DELETE_EXAM,          // --> Exam Delete

  // Franchise 
  POST_FRANCHISE,       // --> Franchise Post
  GET_FRANCHISE,        // --> Franchise Get
  PUT_FRANCHISE,        // --> Franchise Put
  DELETE_FRANCHISE,     // --> Franchise Delete
};
