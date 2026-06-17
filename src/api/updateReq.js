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
<<<<<<< HEAD
};



// Subject

export const UpdateSubject = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_SUBJECT}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Subject Details Updated successfully", "Changes Updated in Subject");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Subject update Failed !! ", error?.message);
  }
};


// Chapter

export const UpdateChapter = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_CHAPTER}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Chapter Details Updated successfully", "Changes Updated in Chapter");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Chapter update Failed !! ", error?.message);
  }
};


// Topic

export const UpdateTopic = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_TOPIC}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Topic Details Updated successfully", "Changes Updated in Topic");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Topic update Failed !! ", error?.message);
  }
};


// Study Material

export const UpdateStudyMaterial = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_STUDY_MATERIAL}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Study Material Updated successfully", "Changes Updated in Study Material");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Study Material update Failed !! ", error?.message);
  }
};


// Video Record

export const UpdateVideoRecord = async (id, data) => {
  try {
    const response = await baseRequest.patch(`${APIURLS.PATCH_RECORDED_VIDEO}/${id}/${status}`, data);
    if (response.status == 200) {
      Alert.success("Video Record Updated successfully", "Changes Updated in Video Record");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Video Record update Failed !! ", error?.message);
  }
};

// Exam

export const UpdateExam = async (id, data) => {
  try {
    const response = await baseRequest.patch(`${APIURLS.PUT_EXAM}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Exam Updated successfully", "Changes Updated in Exam");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Exam update Failed !! ", error?.message);
  }
};

// Franchise

export const UpdateFranchise = async (id, data) => {
  try {
    const response = await baseRequest.put(`${APIURLS.PUT_FRANCHISE}/${id}`, data);
    if (response.status == 200) {
      Alert.success("Franchise Updated successfully", "Changes Updated in Franchise");
    }
    return response.data ;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Franchise update Failed !! ", error?.message);
  }
=======
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
};