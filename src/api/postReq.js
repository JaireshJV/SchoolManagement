import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";
import { Alert } from "@components/alert/AlertService";

// Courses

export const PostCourse = async (data) => {
  try {
    const response = await baseRequest.post(APIURLS.POST_COURSE, data);
    console.log(response, "responsecourse");

    return response;
  } catch (error) {
    console.log("Error :", error);
  }
};

// Batches

export const PostBatches = async (data) => {
  try {
    const response = await baseRequest.post(APIURLS.POST_BATCH, data);
    console.log(response, "responsebatch");
    if (response.status == 200) {
      Alert.success("Batch added successfully", "New Batches Added");
    }
    return response.data ;
  } catch (error) {
    Alert.error("Batch added Failed !! ", err?.error);
  }
};
