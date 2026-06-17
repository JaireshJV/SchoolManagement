import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";
import { Alert } from "@components/alert/AlertService";

// Courses

export const PostCourse = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_COURSE, data);
    console.log(response, "responsecourse");
    if (response.status == 200) {
      Alert.success("Course added successfully", "New Course Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Course added Failed !! ", error?.message);
  }
};

// Batches

export const PostBatches = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_BATCH, data);
    console.log(response, "responsebatch");
    if (response.status == 200) {
      Alert.success("Batch added successfully", "New Batches Added");
    }
    return response.data;
  } catch (err) {
     const error = err?.response?.data;
    Alert.error("Batch added Failed !! ", error?.message);
  }
};

// StudentS

export const PostStudent = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_STUDENT, data);
    console.log(response, "responsestudent");
    if (response.status == 200) {
      Alert.success("Student added successfully", "New Student Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Student added Failed !! ", error?.message);
  }
};

// TeacherS

export const PostTeacher = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_TEACHER, data);
    console.log(response, "responseteacher");
    if (response.status == 200) {
      Alert.success("Teacher added successfully", "New Teacher Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Teacher added Failed !! ", error?.message);
  }
};


// SubjectS

export const PostSubject = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_SUBJECT, data);
    console.log(response, "responsesubject");
    if (response.status == 200) {
      Alert.success("Subject added successfully", "New Subject Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Subject added Failed !! ", error?.message);
  }
};


// Chapters

export const PostChapter = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_CHAPTER, data);
    console.log(response, "responsechapter");
    if (response.status == 200) {
      Alert.success("Chapter added successfully", "New Chapter Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Chapter added Failed !! ", error?.message);
  }
};


// Topics

export const PostTopic = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_TOPIC, data);
    console.log(response, "responsetopic");
    if (response.status == 200) {
      Alert.success("Topic added successfully", "New Topic Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Topic added Failed !! ", error?.message);
  }
};


// Study Materials

export const PostStudyMaterial = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_STUDY_MATERIAL, data);
    console.log(response, "responsestudy");
    if (response.status == 200) {
      Alert.success("Study Material added successfully", "New Study Material Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Study Material added Failed !! ", error?.message);
  }
};


// Recorded Video

export const PostRecordedVideo = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_RECORDED_VIDEO, data);
    console.log(response, "responsestudy");
    if (response.status == 200) {
      Alert.success("Recorded video added successfully", "New Recorded Video Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Recorded Video added Failed !! ", error?.message);
  }
};

// Question Bank

export const PostQuestionBank = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_QUESTION_BANK, data);
    console.log(response, "responsestudy");
    if (response.status == 200) {
      Alert.success("Question added successfully", "New Question Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("New Question added Failed !! ", error?.message);
  }
};

// Exam

export const PostExam = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_EXAM, data);
    if (response.status == 200) {
      Alert.success("Exam added successfully", "New Exam Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("New Exam added Failed !! ", error?.message);
  }
};

// Franchise

export const PostFranchise = async (data) => {
  console.log(data, "datadata");

  try {
    const response = await baseRequest.post(APIURLS.POST_FRANCHISE, data);
    if (response.status == 200) {
      Alert.success("Franchise added successfully", "New Franchise Added");
    }
    return response.data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("New Franchise added Failed !! ", error?.message);
  }
};