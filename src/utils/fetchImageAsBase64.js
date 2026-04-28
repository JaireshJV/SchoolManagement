import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@modules/Auth/authSlice";

export const useFetchImageAsBase64 = () => {
  const token = useSelector(selectCurrentToken);

  const fetchImageAsBase64 = async (imagePath) => {
    if (!imagePath) return null;

    try {
      const response = await axios.get(imagePath, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(response.data);
      });
    } catch (error) {
      console.error("Image fetch failed:", imagePath);
      return null;
    }
  };

  return { fetchImageAsBase64 };
};