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

// Student

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

// Teacher

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
