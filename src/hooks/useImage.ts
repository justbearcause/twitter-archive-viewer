import { useEffect, useState } from "react";

const useImage = (
  images: string[],
  index?: number
): [string | undefined, number | undefined, () => void] => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    index !== undefined ? index : images.length ? 0 : undefined
  );

  const imagesJson = JSON.stringify(images);

  useEffect(() => {
    setCurrentImageIndex(images.length ? 0 : undefined);
  }, [imagesJson, images.length]);

  const onError = () => {
    if (
      currentImageIndex !== undefined &&
      currentImageIndex < images.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return [
    currentImageIndex !== undefined ? images[currentImageIndex] : undefined,
    currentImageIndex,
    onError,
  ];
};

export default useImage;
