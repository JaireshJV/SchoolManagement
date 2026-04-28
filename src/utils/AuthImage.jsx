import { baseRequest } from "@request/request";
import React, { useEffect, useState } from "react";


const AuthImage = ({ imagePath, width = 50, height = 50, style = {} }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await baseRequest.get(imagePath, {
          responseType: "blob",
        });
        const url = URL.createObjectURL(response.data);
        setImageSrc(url);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    fetchImage();
  }, [imagePath]);

  if (!imageSrc) return <span>Loading...</span>;

  return (
    <img
      src={imageSrc}
      alt="Staff"
      width={width}
      height={height}
      style={{ borderRadius: "50%", objectFit: "cover", ...style }}
    />
  );
};

export default AuthImage;
