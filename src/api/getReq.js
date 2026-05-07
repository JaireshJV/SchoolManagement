import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";
import { Alert } from "@components/alert/AlertService";

// Courses 

export const getCourses = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_COURSE);
    const data = await response?.data?.content;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
  }
};


// Batches

export const getBatches = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_BATCHES);
    const data = await response?.data?.content ;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
};
};

// Students

export const getStudents = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_STUDENTS);
    const data = await response?.data?.content ;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
};
} ;

// Teachers

export const getTeachers = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_TEACHERS);
    const data = await response?.data?.content ;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (err) {
    const error = err?.response?.data ;
    Alert.error("Failed Fetching Data",error?.message) ;
};
};