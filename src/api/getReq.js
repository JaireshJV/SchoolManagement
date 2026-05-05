import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";

export const getCourses = async () => {
  try {
    const response = await baseRequest.get(APIURLS.GET_COURSE);
    const data = await response?.data?.content;
    console.log(data,'dataaaaa');
    
    return data ;
  } catch (error) {
    console.error(
      "Error",
      error.message,
      error.error || "Something went wrong",
    );
  }
};
