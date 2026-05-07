import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";

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




