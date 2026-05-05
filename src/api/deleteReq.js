import { baseRequest } from "@request/request";
import { APIURLS } from "./urls";

  
  
  export const DeleteCourse = async (id) => {
    try {
      const response = await baseRequest.delete(`${APIURLS.DELETE_COURSE}/${id}`);
      const responsedata = response.data;
      console.log(responsedata, "responseeeeee");
      return responsedata ;
    } catch (error) {
      console.log("Error :", error);
    }
  };
