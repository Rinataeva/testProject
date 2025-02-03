import { useState } from "react";

export const useBackAndForth = (initialIndex = 0, items = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const handleBackwardClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleForwardClick = () => {
    if (currentIndex < items - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    currentIndex,
    handleBackwardClick,
    handleForwardClick,
  };
};
