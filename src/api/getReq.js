import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";
import { Alert } from "@components/alert/AlertService";

<<<<<<< HEAD
// Courses
=======
// Courses 
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603

export const getCourses = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_COURSE);
    const data = await response?.data?.content;
<<<<<<< HEAD
    console.log(data, "dataaaaa");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};

=======
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
  }
};


>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
// Batches

export const getBatches = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_BATCHES);
<<<<<<< HEAD
    const data = await response?.data?.content;
    console.log(data, "batchhhh");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
=======
    const data = await response?.data?.content ;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
};
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
};

// Students

export const getStudents = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_STUDENTS);
<<<<<<< HEAD
    const data = await response?.data?.content;
    console.log(data, "dataaaaa");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};
=======
    const data = await response?.data?.content ;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
};
} ;
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603

// Teachers

export const getTeachers = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_TEACHERS);
<<<<<<< HEAD
    const data = await response?.data?.content;
    console.log(data, "dataaaaa");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};

// Subjects

export const getSubjects = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_SUBJECTS);
    const data = await response?.data;
    console.log(data, "dataaaaa");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};

// Chapters

export const getChapters = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_CHAPTERS);
    const data = await response?.data;
    console.log(data, "datachapter");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};

// Topics

export const getTopics = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_TOPICS);
    const data = await response?.data;
    console.log(data, "dataaaaa");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};

// Study Materials

export const getStudyMaterials = async (pageNo, size) => {
  console.log(pageNo, size, "paramsssss");

  const params = {
    page: pageNo - 1,
    size: size,
  };
  try {
    const response = await baseRequest.get(APIURLS.GET_STUDY_MATERIALS, {
      params,
    });
    const data = await response?.data;
    console.log(data, "dataaaaa");

    return data;
  } catch (err) {
    const error = err?.response?.data;
    Alert.error("Failed Fetching Data", error?.message);
  }
};

// Recorded Videos

export const getVideoRecords = async (pageNo, size) => {
  try {
    const response = await baseRequest.get(APIURLS.GET_RECORDED_VIDEOS, {
      params: {
        page: pageNo - 1, // backend is 0-based
        size: size,
      },
    });

    console.log(response?.data, "Record Videos Retrived");

    return response?.data;
  } catch (err) {
    const error = err?.response?.data;

    Alert.error("Failed Fetching Video Records", error?.message);
  }
};

// Question Bank

export const getQuestionBank = async (pageNo, size) => {
  console.log(pageNo, size ,'page,size');
  
  try {
    const response = await baseRequest.get(APIURLS.GET_QUESTION_BANK, {
      params: {
        page: pageNo - 1, // backend is 0-based
        size: size,
      },
    });

    console.log(response?.data, "Question Bank Retrived");

    return response?.data;
  } catch (err) {
    const error = err?.response?.data;

    Alert.error("Failed Fetching Question Bank", error?.message);
  }
};

// Exam

export const getExam = async () => {
  
  try {
    const response = await baseRequest.get(APIURLS.GET_EXAM);

    console.log(response?.data, "Exam Retrived");

    return response?.data;
  } catch (err) {
    const error = err?.response?.data;

    Alert.error("Failed Fetching Exam", error?.message);
  }
};

// Franchise

export const getFranchise = async () => {
  
  try {
    const response = await baseRequest.get(APIURLS.GET_FRANCHISE);

    console.log(response?.data, "Franchise Retrived");

    return response?.data;
  } catch (err) {
    const error = err?.response?.data;

    Alert.error("Failed Fetching Franchise", error?.message);
  }
=======
    const data = await response?.data?.content ;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
};
>>>>>>> 6524e95e697f823c779cab02931aeca7323ea603
};