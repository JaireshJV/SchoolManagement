import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";
import { Alert } from "@components/alert/AlertService";

// Course 

export const UpdateCourse = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_COURSE}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Course Updated successfully", "Changes Updated in Course");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Course update Failed !! ", error?.message);
  }
};


// Batch

export const UpdateBatch = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_BATCH}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Batch Updated successfully", "Changes Updated in Batch");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Batch update Failed !! ", error?.message);
  }
};


// Student

export const UpdateStudent = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_STUDENT}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Student Details Updated successfully", "Changes Updated in Student");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Student update Failed !! ", error?.message);
  }
};


// Teacher

export const UpdateTeacher = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_TEACHER}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Teacher Details Updated successfully", "Changes Updated in Teacher");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Teacher update Failed !! ", error?.message);
  }
};