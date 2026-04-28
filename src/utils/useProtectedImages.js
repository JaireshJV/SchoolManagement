import { useEffect, useState } from "react";
import { IMG_BASE_URL } from "@request/request";
import { useFetchImageAsBase64 } from "./fetchImageAsBase64";

export const useProtectedImages = (record) => {
  const { fetchImageAsBase64 } = useFetchImageAsBase64();
  const [images, setImages] = useState({});

  useEffect(() => {
    if (!record) return;

    const loadImages = async () => {
      const imageEntries = Object.entries(record).filter(
        ([key, value]) =>
          key.toLowerCase().includes("url") && value
      );

      const result = {};

      await Promise.all(
        imageEntries.map(async ([key, value]) => {
          try {
            const fullUrl = IMG_BASE_URL + value;
            const base64 = await fetchImageAsBase64(fullUrl);

            // remove "Url" from key
            const cleanKey = key.replace("Url", "");

            result[cleanKey] = base64;
          } catch {
            result[key] = null;
          }
        })
      );

      setImages(result);
    };

    loadImages();
  }, [record]);

  return images;
};