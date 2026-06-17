import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";
import { Alert } from "@components/alert/AlertService";

// Course 

export const DeleteCourse = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_COURSE}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};


// Batch

export const DeleteBatch = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_BATCH}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};

// Student

export const DeleteStudent = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_STUDENT}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};

// Teacher

export const DeleteTeacher = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_TEACHER}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};


// Subject

export const DeleteSubject = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_SUBJECT}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};


// Chapter

export const DeleteSChapter= async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_CHAPTER}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};


// Topic

export const DeleteTopic= async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_TOPIC}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};


// Topic

export const DeleteStudyMaterial = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_STUDY_MATERIAL}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};

// Recorded Video

export const DeleteRecordVideos = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_RECORDED_VIDEO}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};

// Question Bank

export const DeleteQuestionBank = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_QUESTION_BANK}/${id}`);
    const responsedata = response.data;
    console.log(responsedata, "responseeeeee");
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};


// Exam

export const DeleteExam = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_EXAM}/${id}`);
    const responsedata = response.data;
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};

// Franchise

export const DeleteFranchise = async (id) => {
  try {
    const response = await baseRequest.delete(`${APIURLS.DELETE_FRANCHISE}/${id}`);
    const responsedata = response.data;
    return responsedata;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Deleting Detail", error?.message);
  }
};
